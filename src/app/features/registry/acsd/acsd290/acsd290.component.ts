import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  OnDestroy,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/root-store.state';
import { RegistryFormComponent } from 'src/app/shared/modules/registry-form/registry-form.component';
import { ScrollSpyService } from 'src/app/shared/modules/scroll-spy/scroll-spy.service';
import { RegistryFormService } from 'src/app/shared/modules/registry-form/registry-form.service';
import { Acsd290Service } from './acsd290.service';
import {
  FormVisibility,
  SectionMember,
  RegSelectChoice,
} from 'src/app/shared/modules/registry-form/registry-form.model';
import { FormDetail } from '../../registry.model';

import * as registryData from '../../registry.data';
import {
  Acsd290Toc,
  getTocTitle,
  Acsd290Form,
  Acsd290Data,
  Acsd290Conditions,
  Acsd290Validations,
} from '.';

@Component({
  selector: 'app-acsd290',
  templateUrl: './acsd290.component.html',
  styleUrls: ['./acsd290.component.scss'],
})
export class Acsd290Component extends RegistryFormComponent
  implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  visibility: FormVisibility = {};
  controlService = this.acsd290Service;
  getTocTitle = getTocTitle;

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
  formGroupL2: FormGroup;
  formGroupM: FormGroup;
  formGroupM1: FormGroup;
  formGroupM2: FormGroup;
  formGroupM3: FormGroup;
  formGroupN: FormGroup;
  formGroupO: FormGroup;
  formGroupP: FormGroup;
  formGroupQ: FormGroup;
  formGroupR: FormGroup;
  formGroupS: FormGroup;

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
  @ViewChild('formDirectiveL2', { static: true }) formDirectiveL2: FormGroupDirective;
  @ViewChild('formDirectiveM', { static: true }) formDirectiveM: FormGroupDirective;
  @ViewChild('formDirectiveM1', { static: true }) formDirectiveM1: FormGroupDirective;
  @ViewChild('formDirectiveM2', { static: true }) formDirectiveM2: FormGroupDirective;
  @ViewChild('formDirectiveM3', { static: true }) formDirectiveM3: FormGroupDirective;
  @ViewChild('formDirectiveN', { static: true }) formDirectiveN: FormGroupDirective;
  @ViewChild('formDirectiveO', { static: true }) formDirectiveO: FormGroupDirective;
  @ViewChild('formDirectiveP', { static: true }) formDirectiveP: FormGroupDirective;
  @ViewChild('formDirectiveQ', { static: true }) formDirectiveQ: FormGroupDirective;
  @ViewChild('formDirectiveR', { static: true }) formDirectiveR: FormGroupDirective;
  @ViewChild('formDirectiveS', { static: true }) formDirectiveS: FormGroupDirective;

  private sectionMembers: SectionMember[];
  //#endregion

  //#region form data

  // tslint:disable: variable-name
  nationality = registryData.nationality;
  H_cathResults = Acsd290Data.H_cathResults;
  J_cabg = Acsd290Data.J_cabg;
  H_vad = Acsd290Data.H_vad;
  M2_priorAoInt = Acsd290Data.M2_priorAoInt;
  M2_device = Acsd290Data.M2_device;
  // tslint:enable: variable-name

  // staffs: Staff[];
  staffs = [];
  cvt: RegSelectChoice[];
  anesth: RegSelectChoice[];
  sn: RegSelectChoice[];
  ctt: RegSelectChoice[];

  toc = Acsd290Toc;
  public visibles: { [id: string]: boolean } = {};

  //#endregion

  avHospitals: string[];
  avHospitalsNullOption = true;

  constructor(
    protected store: Store<AppState>,
    protected scrollSpy: ScrollSpyService,
    protected changeDetector: ChangeDetectorRef,
    protected hostElement: ElementRef,
    private registryFormService: RegistryFormService,
    private formBuilder: FormBuilder,
    private acsd290Service: Acsd290Service
  ) {
    super(store, scrollSpy, changeDetector, hostElement);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();

    this.createForm();
    this.registryFormService.subscribeFormConditions();
    this.formGroupI.controls['OpCAB'].setValue('Yes');
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  private createForm() {
    this.formGroupA = this.formBuilder.group(Acsd290Form.sectionA);
    this.formGroupB = this.formBuilder.group(Acsd290Form.sectionB);
    this.formGroupC = this.formBuilder.group(Acsd290Form.sectionC);
    this.formGroupD = this.formBuilder.group(Acsd290Form.sectionD);
    this.formGroupE = this.formBuilder.group(Acsd290Form.sectionE);
    this.formGroupF = this.formBuilder.group(Acsd290Form.sectionF);
    this.formGroupG = this.formBuilder.group(Acsd290Form.sectionG);
    this.formGroupH = this.formBuilder.group(Acsd290Form.sectionH);
    this.formGroupI = this.formBuilder.group(Acsd290Form.sectionI);
    this.formGroupJ = this.formBuilder.group(Acsd290Form.sectionJ);
    this.formGroupK = this.formBuilder.group(Acsd290Form.sectionK);
    this.formGroupL = this.formBuilder.group(Acsd290Form.sectionL);
    this.formGroupL2 = this.formBuilder.group(Acsd290Form.sectionL2);
    this.formGroupM = this.formBuilder.group(Acsd290Form.sectionM);
    this.formGroupM1 = this.formBuilder.group(Acsd290Form.sectionM1);
    this.formGroupM2 = this.formBuilder.group(Acsd290Form.sectionM2);
    this.formGroupM3 = this.formBuilder.group(Acsd290Form.sectionM3);
    this.formGroupN = this.formBuilder.group(Acsd290Form.sectionN);
    this.formGroupO = this.formBuilder.group(Acsd290Form.sectionO);
    this.formGroupP = this.formBuilder.group(Acsd290Form.sectionP);
    this.formGroupQ = this.formBuilder.group(Acsd290Form.sectionQ);
    this.formGroupR = this.formBuilder.group(Acsd290Form.sectionR);
    this.formGroupS = this.formBuilder.group(Acsd290Form.sectionS);

    this.sectionMembers = [
      ['A', this.formGroupA, this.formDirectiveA, Acsd290Conditions.sectionA],
      ['B', this.formGroupB, this.formDirectiveB, Acsd290Conditions.sectionB],
      ['C', this.formGroupC, this.formDirectiveC, Acsd290Conditions.sectionC],
      ['D', this.formGroupD, this.formDirectiveD, Acsd290Conditions.sectionD],
      ['E', this.formGroupE, this.formDirectiveE, Acsd290Conditions.sectionE],
      ['F', this.formGroupF, this.formDirectiveF, Acsd290Conditions.sectionF],
      ['G', this.formGroupG, this.formDirectiveG, Acsd290Conditions.sectionG],
      ['H', this.formGroupH, this.formDirectiveH, Acsd290Conditions.sectionH],
      ['I', this.formGroupI, this.formDirectiveI, Acsd290Conditions.sectionI],
      ['J', this.formGroupJ, this.formDirectiveJ, Acsd290Conditions.sectionJ],
      ['K', this.formGroupK, this.formDirectiveK, Acsd290Conditions.sectionK],
      ['L', this.formGroupL, this.formDirectiveL, Acsd290Conditions.sectionL],
      ['L2', this.formGroupL2, this.formDirectiveL2, Acsd290Conditions.sectionL2],
      ['M', this.formGroupM, this.formDirectiveM, Acsd290Conditions.sectionM],
      ['M1', this.formGroupM1, this.formDirectiveM1, Acsd290Conditions.sectionM1],
      ['M2', this.formGroupM2, this.formDirectiveM2, Acsd290Conditions.sectionM2],
      ['M3', this.formGroupM3, this.formDirectiveM3, Acsd290Conditions.sectionM3],
      ['N', this.formGroupN, this.formDirectiveN, Acsd290Conditions.sectionN],
      ['O', this.formGroupO, this.formDirectiveO, Acsd290Conditions.sectionO],
      ['P', this.formGroupP, this.formDirectiveP, Acsd290Conditions.sectionP],
      ['Q', this.formGroupQ, this.formDirectiveQ, Acsd290Conditions.sectionQ],
      ['R', this.formGroupR, this.formDirectiveR, Acsd290Conditions.sectionR],
      ['S', this.formGroupS, this.formDirectiveS, Acsd290Conditions.sectionS],
    ];

    this.registryFormService.initializeForm(
      this.sectionMembers,
      Acsd290Conditions,
      Acsd290Validations,
      this.visibles
    );
    this.registryFormService.setDataDict(require('raw-loader!./acsd290.dict.md').default);
  }
}
