import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormGroupDirective, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';

import { ScrollSpyService } from '../../../shared/modules/scroll-spy/scroll-spy.service';
import { RegistryFormComponent } from 'src/app/shared/modules/registry-form/registry-form.component';
import { AppState } from 'src/app/store/root-store.state';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, pairwise, startWith } from 'rxjs/operators';

import * as jsondiffpatch from 'jsondiffpatch';
import * as deepDiff from 'deep-diff';
import * as moment from 'moment';

const AFK_TIMEOUT = 330000;
const VALUECHANGED_DELAY = 3000;

import {
  FormVisibility,
  SectionMember,
  RegSelectChoice,
} from 'src/app/shared/modules/registry-form/registry-form.model';
import { RegistryFormService } from 'src/app/shared/modules/registry-form/registry-form.service';
import { TestForm3Conditions } from './test-form3.condition';
import { TestForm3Validations } from './test-form3.validation';
import { TestForm3Form } from './test-form3.form';
import { TestForm3Service } from './test-form3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-form3',
  templateUrl: './test-form3.component.html',
  styleUrls: ['./test-form3.component.scss'],
  providers: [TestForm3Service],
})
export class TestForm3Component extends RegistryFormComponent
  implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  visibility: FormVisibility = {};
  private subscriptions: Subscription[] = [];
  controlService = this.registryFormService;
  private dataChanged = false;
  private initialize = true;
  private afkTimeoutHandle: NodeJS.Timeout;
  private lastUpdateData: any;

  animals: RegSelectChoice[] = [];

  //#region FormGroup and FormDirective
  formGroupA: FormGroup;
  formGroupB: FormGroup;
  formGroupC: FormGroup;

  @ViewChild('formDirectiveA', { static: true })
  formDirectiveA: FormGroupDirective;
  @ViewChild('formDirectiveB', { static: true })
  formDirectiveB: FormGroupDirective;
  @ViewChild('formDirectiveC', { static: true })
  formDirectiveC: FormGroupDirective;

  private sectionMembers: SectionMember[];
  //#endregion

  constructor(
    protected store: Store<AppState>,
    protected scrollSpy: ScrollSpyService,
    protected changeDetector: ChangeDetectorRef,
    protected hostElement: ElementRef,
    private registryFormService: RegistryFormService,
    private formBuilder: FormBuilder,
    private testForm3Service: TestForm3Service,
    private afs: AngularFirestore,
    private route: Router
  ) {
    super(store, scrollSpy, changeDetector, hostElement);
  }

  ngOnInit() {
    super.ngOnInit();

    // this.afs.doc('Test/7jmOukWx9wjoQxXrOndJ').update({ 'sectionA.FirstName': 'Ae' });

    this.subscribeDataNotification();

    this.animals = [
      { value: 'duck', label: 'Duck', altLabel: 'เป็ด', group: 'Wings', disable: false },
      { value: 'dog', label: 'Dog', altLabel: 'หมา', group: 'Four legs', disable: false },
      { value: 'hen', label: 'Hen', altLabel: 'แม่ไก่', group: 'Wings', disable: false },
      { value: 'goose', label: 'Goose', altLabel: 'ห่าน', group: 'Wings', disable: false },
      { value: 'cat', label: 'Cat', altLabel: 'แมว', group: 'Four legs', disable: false },
    ];
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();

    this.createForm();
    this.registryFormService.subscribeFormConditions();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();

    this.resetAfkTimeout();
    this.subscribeUpdateFirebaseData();
  }

  ngOnDestroy() {
    super.ngOnDestroy();

    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  private createForm() {
    this.formGroupA = this.formBuilder.group(TestForm3Form.sectionA);
    // this.formGroupB = this.formBuilder.group(TestForm3Form.sectionB);
    // this.formGroupC = this.formBuilder.group(TestForm3Form.sectionC);

    this.sectionMembers = [
      ['A', this.formGroupA, this.formDirectiveA, TestForm3Conditions.sectionA],
      // ['B', this.formGroupB, this.formDirectiveB, TestForm3Conditions.sectionB],
      // ['C', this.formGroupC, this.formDirectiveC, TestForm3Conditions.sectionC],
    ];

    this.registryFormService.initializeForm(
      this.sectionMembers,
      TestForm3Conditions,
      TestForm3Validations,
      this.visibility
    );
    this.registryFormService.setDataDict(require('raw-loader!./test-form3.dict.md').default);
  }

  private subscribeDataNotification() {
    console.log(document.getElementById('DOB'));

    // this.afs.doc('/Test/7jmOukWx9wjoQxXrOndJ').update({ 'sectionA.FirstName': 'Auh' });
    // this.afs.doc('/Test/7jmOukWx9wjoQxXrOndJ').update({ 'sectionA.Sex': 'Male' });

    this.subscriptions.push(
      this.afs
        .doc('/Test/7jmOukWx9wjoQxXrOndJ')
        .snapshotChanges()
        .subscribe((action) => {
          const firebaseData = action.payload.data() as {};

          const registryData = this.getRegistryData();
          console.log('notify', this.lastUpdateData, firebaseData);

          const diffs = deepDiff.diff(this.lastUpdateData, firebaseData);
          console.log(diffs);

          if (!diffs) {
            console.log('Not different');
            return;
          }

          diffs.forEach((diff) => {
            switch (diff.kind) {
              case 'E':
                const diffEdit = diff as deepDiff.DiffEdit<any, any>;
                if (diffEdit.path[0] === 'sectionA') {
                  const obj = {};
                  obj[diffEdit.path[1]] = diffEdit.rhs;
                  this.formGroupA.patchValue(obj);

                  if (!this.initialize) {
                    setTimeout(() => {
                      document.getElementById(diffEdit.path[1])?.classList.add('value-changed');
                      setTimeout(() => {
                        document
                          .getElementById(diffEdit.path[1])
                          ?.classList.remove('value-changed');
                      }, 1300);
                    }, 0);
                  }
                }
                break;
              case 'N':
                const diffNew = diff as deepDiff.DiffNew<any>;
                this.formGroupA.patchValue(diffNew.rhs[`sectionA`]);
                break;

              default:
                console.log('Diff other than Edit');
                break;
            }
          });

          this.initialize = false;
          this.dataChanged = true;
          this.lastUpdateData = firebaseData;
        })
    );
  }

  private subscribeUpdateFirebaseData() {
    this.sectionMembers.forEach((sm) => {
      this.subscriptions.push(
        sm[1].valueChanges
          .pipe(debounceTime(VALUECHANGED_DELAY), distinctUntilChanged())
          .subscribe((value) => {
            console.log(this.dataChanged);
            // if (this.dataChanged) {
            //   this.dataChanged = false;
            //   return;
            // }

            value['DOB'] = this.serializeDate(value['DOB']);
            // newValue['DOB'] = this.serializeDate(newValue['DOB']);

            // console.log('value change:', value);
            const newData = { sectionA: value };
            console.log('old value:', this.lastUpdateData);
            console.log('new value:', newData);

            const diffs = deepDiff.diff(this.lastUpdateData, newData);
            console.log(diffs);

            diffs?.forEach((diff) => {
              switch (diff.kind) {
                case 'E':
                  const dif = diff as deepDiff.DiffEdit<{}, {}>;
                  const path = {};
                  path['sectionA.' + dif.path[1]] = dif.rhs;
                  console.log(path);
                  this.afs.doc('Test/7jmOukWx9wjoQxXrOndJ').update(path);
                  break;

                default:
                  console.log('Diff other than Edit');
                  break;
              }
            });

            this.lastUpdateData = newData;

            // const v = value;
            // v['DOB'] = this.serializeDate(v['DOB']);

            // this.resetAfkTimeout();

            // this.afs.doc('Test/7jmOukWx9wjoQxXrOndJ').update({ sectionA: v });
          })
      );
    });
  }

  private serializeDate(dateTime: any): any {
    const dt = moment.isMoment(dateTime) ? dateTime : moment(dateTime);

    return dt.startOf('day').toISOString(true);
  }

  private getRegistryData() {
    const formGroupAvalue = this.formGroupA.getRawValue();
    return {
      sectionA: { ...formGroupAvalue, DOB: this.serializeDate(formGroupAvalue.DOB) },
    };
  }

  private resetAfkTimeout() {
    clearTimeout(this.afkTimeoutHandle);

    this.afkTimeoutHandle = setTimeout(() => {
      this.route.navigateByUrl('/login');
    }, AFK_TIMEOUT);
  }
}
