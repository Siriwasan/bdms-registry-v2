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

import * as jsondiffpatch from 'jsondiffpatch';

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
import * as deepDiff from 'deep-diff';

@Component({
  selector: 'app-test-form3',
  templateUrl: './test-form3.component.html',
  styleUrls: ['./test-form3.component.scss'],
  providers: [TestForm3Service],
})
export class TestForm3Component extends RegistryFormComponent
  implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  visibility: FormVisibility = {};
  controlService = this.testForm3Service;

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

  oldData: {} = null;

  constructor(
    protected store: Store<AppState>,
    protected scrollSpy: ScrollSpyService,
    protected changeDetector: ChangeDetectorRef,
    protected hostElement: ElementRef,
    private registryFormService: RegistryFormService,
    private formBuilder: FormBuilder,
    private testForm3Service: TestForm3Service,
    private afs: AngularFirestore
  ) {
    super(store, scrollSpy, changeDetector, hostElement);
  }

  ngOnInit() {
    super.ngOnInit();

    this.afs
      .doc('Test/7jmOukWx9wjoQxXrOndJ')
      .snapshotChanges()
      .subscribe((action) => {
        const newData = action.payload.data() as {};

        // if (this.oldData) {
        const diffs = deepDiff.diff(this.oldData, newData);
        console.log(diffs);

        diffs.forEach((diff) => {
          switch (diff.kind) {
            case 'E':
              const dif = diff as deepDiff.DiffEdit<{}, {}>;
              if (dif.lhs === null) {
                this.formGroupA.patchValue(dif.rhs[`sectionA`]);
              } else {
                if (dif.path[0] === 'sectionA') {
                  const obj = {};
                  obj[dif.path[1]] = dif.rhs;
                  this.formGroupA.patchValue(obj);
                }
              }
              break;

            default:
              break;
          }
        });

        this.oldData = newData;
      });

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
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  private createForm() {
    this.formGroupA = this.formBuilder.group(TestForm3Form.sectionA);
    this.formGroupB = this.formBuilder.group(TestForm3Form.sectionB);
    this.formGroupC = this.formBuilder.group(TestForm3Form.sectionC);

    this.sectionMembers = [
      ['A', this.formGroupA, this.formDirectiveA, TestForm3Conditions.sectionA],
      ['B', this.formGroupB, this.formDirectiveB, TestForm3Conditions.sectionB],
      ['C', this.formGroupC, this.formDirectiveC, TestForm3Conditions.sectionC],
    ];

    this.registryFormService.initializeForm(
      this.sectionMembers,
      TestForm3Conditions,
      TestForm3Validations,
      this.visibility
    );
    this.registryFormService.setDataDict(require('raw-loader!./test-form3.dict.md').default);
  }
}
