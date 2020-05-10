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
import { Store } from '@ngrx/store';
import { FormGroup, FormGroupDirective, FormBuilder } from '@angular/forms';

import { RegistryFormComponent } from 'src/app/shared/modules/registry-form/registry-form.component';
import { AppState } from 'src/app/store/root-store.state';
import { ScrollSpyService } from 'src/app/shared/modules/scroll-spy/scroll-spy.service';
import { RegistryFormService } from 'src/app/shared/modules/registry-form/registry-form.service';

import { Gtsd241Form } from './gtsd241.form';
import { Gtsd241Conditions } from './gtsd241.condition';
import {
  SectionMember,
  FormVisibility,
  RegSelectChoice,
  FormCompletion,
} from 'src/app/shared/modules/registry-form/registry-form.model';
import { Gtsd241Validations } from './gtsd241.validation';
import { Gtsd241Service } from './gtsd241.service';
import { getTocTitle } from '../../acsd/acsd290/acsd290.toc';
import * as registryData from '../../registry.data';
import { Subscription } from 'rxjs';
import { Gtsd241Toc } from './gtsd241.toc';
import { FormDetail } from '../../registry.model';

@Component({
  selector: 'app-gtsd241',
  templateUrl: './gtsd241.component.html',
  styleUrls: ['./gtsd241.component.scss'],
  providers: [Gtsd241Service],
})
export class Gtsd241Component extends RegistryFormComponent
  implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  //#region Form function

  visibility: FormVisibility = {};
  private subscriptions: Subscription[] = [];
  toc = Gtsd241Toc;
  completion = this.registryFormService.completion;

  controlService = this.gtsd241Service;

  //#endregion

  //#region Form data

  getTocTitle = getTocTitle;
  nationality = registryData.nationality;

  //#endregion

  //#region FormGroup and FormDirective
  formDetail: FormDetail;
  formGroupA: FormGroup;
  formGroupB: FormGroup;
  formGroupC: FormGroup;
  formGroupD: FormGroup;
  formGroupE: FormGroup;
  formGroupF: FormGroup;
  formGroupG: FormGroup;
  formGroupH: FormGroup;
  formGroupI: FormGroup;
  formGroupJ: FormGroup;
  formGroupK: FormGroup;
  formGroupL: FormGroup;
  formGroupM: FormGroup;
  formGroupN: FormGroup;
  formGroupO: FormGroup;

  @ViewChild('formDirectiveA', { static: true }) formDirectiveA: FormGroupDirective;
  @ViewChild('formDirectiveB', { static: true }) formDirectiveB: FormGroupDirective;
  @ViewChild('formDirectiveC', { static: true }) formDirectiveC: FormGroupDirective;
  @ViewChild('formDirectiveD', { static: true }) formDirectiveD: FormGroupDirective;
  @ViewChild('formDirectiveE', { static: true }) formDirectiveE: FormGroupDirective;
  @ViewChild('formDirectiveF', { static: true }) formDirectiveF: FormGroupDirective;
  @ViewChild('formDirectiveG', { static: true }) formDirectiveG: FormGroupDirective;
  @ViewChild('formDirectiveH', { static: true }) formDirectiveH: FormGroupDirective;
  @ViewChild('formDirectiveI', { static: true }) formDirectiveI: FormGroupDirective;
  @ViewChild('formDirectiveJ', { static: true }) formDirectiveJ: FormGroupDirective;
  @ViewChild('formDirectiveK', { static: true }) formDirectiveK: FormGroupDirective;
  @ViewChild('formDirectiveL', { static: true }) formDirectiveL: FormGroupDirective;
  @ViewChild('formDirectiveM', { static: true }) formDirectiveM: FormGroupDirective;
  @ViewChild('formDirectiveN', { static: true }) formDirectiveN: FormGroupDirective;
  @ViewChild('formDirectiveO', { static: true }) formDirectiveO: FormGroupDirective;

  private sectionMembers: SectionMember[];
  //#endregion

  //#region Progression
  get progressValid() {
    return this.completion ? this.completion.summary.valid : 0;
  }

  get progressTotal() {
    return this.completion ? this.completion.summary.total : 1;
  }

  get progressSummary() {
    return this.completion
      ? this.completion.summary.valid + '/' + this.completion.summary.total
      : '0/0';
  }

  get progressPercent() {
    if (!this.completion) {
      return `(0%)`;
    }

    const completion = Math.floor(
      (this.completion.summary.valid / this.completion.summary.total) * 100
    );
    return `(${completion}%)`;
  }
  //#endregion

  constructor(
    protected store: Store<AppState>,
    protected scrollSpy: ScrollSpyService,
    protected changeDetector: ChangeDetectorRef,
    protected hostElement: ElementRef,
    private registryFormService: RegistryFormService,
    private formBuilder: FormBuilder,
    private gtsd241Service: Gtsd241Service
  ) {
    super(store, scrollSpy, changeDetector, hostElement);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();

    this.createForm();
    this.registryFormService.subscribeFormConditions();

    this.formGroupA.get('registryId').setValue('(new)');
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();

    // this.store.dispatch(AppStoreActions.stopLoading());
  }

  ngOnDestroy() {
    super.ngOnDestroy();

    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  private createForm() {
    this.formGroupA = this.formBuilder.group(Gtsd241Form.sectionA);
    this.formGroupB = this.formBuilder.group(Gtsd241Form.sectionB);
    this.formGroupC = this.formBuilder.group(Gtsd241Form.sectionC);
    this.formGroupD = this.formBuilder.group(Gtsd241Form.sectionD);
    this.formGroupE = this.formBuilder.group(Gtsd241Form.sectionE);
    this.formGroupF = this.formBuilder.group(Gtsd241Form.sectionF);
    this.formGroupG = this.formBuilder.group(Gtsd241Form.sectionG);
    this.formGroupH = this.formBuilder.group(Gtsd241Form.sectionH);
    this.formGroupI = this.formBuilder.group(Gtsd241Form.sectionI);
    this.formGroupJ = this.formBuilder.group(Gtsd241Form.sectionJ);
    this.formGroupK = this.formBuilder.group(Gtsd241Form.sectionK);
    this.formGroupL = this.formBuilder.group(Gtsd241Form.sectionL);
    this.formGroupM = this.formBuilder.group(Gtsd241Form.sectionM);
    this.formGroupN = this.formBuilder.group(Gtsd241Form.sectionN);
    this.formGroupO = this.formBuilder.group(Gtsd241Form.sectionO);

    this.sectionMembers = [
      ['sectionA', this.formGroupA, this.formDirectiveA, Gtsd241Conditions.sectionA],
      ['sectionB', this.formGroupB, this.formDirectiveB, Gtsd241Conditions.sectionB],
      ['sectionC', this.formGroupC, this.formDirectiveC, Gtsd241Conditions.sectionC],
      ['sectionD', this.formGroupD, this.formDirectiveD, Gtsd241Conditions.sectionD],
      ['sectionE', this.formGroupE, this.formDirectiveE, Gtsd241Conditions.sectionE],
      ['sectionF', this.formGroupF, this.formDirectiveF, Gtsd241Conditions.sectionF],
      ['sectionG', this.formGroupG, this.formDirectiveG, Gtsd241Conditions.sectionG],
      ['sectionH', this.formGroupH, this.formDirectiveH, Gtsd241Conditions.sectionH],
      ['sectionI', this.formGroupI, this.formDirectiveI, Gtsd241Conditions.sectionI],
      ['sectionJ', this.formGroupJ, this.formDirectiveJ, Gtsd241Conditions.sectionJ],
      ['sectionK', this.formGroupK, this.formDirectiveK, Gtsd241Conditions.sectionK],
      ['sectionL', this.formGroupL, this.formDirectiveL, Gtsd241Conditions.sectionL],
      ['sectionM', this.formGroupM, this.formDirectiveM, Gtsd241Conditions.sectionM],
      ['sectionN', this.formGroupN, this.formDirectiveN, Gtsd241Conditions.sectionN],
      ['sectionO', this.formGroupO, this.formDirectiveO, Gtsd241Conditions.sectionO],
    ];

    this.registryFormService.initializeForm(
      this.sectionMembers,
      Gtsd241Conditions,
      Gtsd241Validations,
      this.visibility
    );
    this.registryFormService.setDataDict(require('raw-loader!./gtsd241.dict.md').default);
  }

  displaySummary(section: string) {
    return this.registryFormService.getSummary(section);
  }
}
