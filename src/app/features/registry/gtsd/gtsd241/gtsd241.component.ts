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
} from 'src/app/shared/modules/registry-form/registry-form.model';
import { Gtsd241Validations } from './gtsd241.validation';

@Component({
  selector: 'app-gtsd241',
  templateUrl: './gtsd241.component.html',
  styleUrls: ['./gtsd241.component.scss'],
})
export class Gtsd241Component extends RegistryFormComponent
  implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  visibility: FormVisibility = {};

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
    private formBuilder: FormBuilder
  ) {
    super(store, scrollSpy, changeDetector, hostElement);
  }

  ngOnInit() {
    super.ngOnInit();
    this.registryFormService.test();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();

    this.createForm();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  private createForm() {
    this.formGroupA = this.formBuilder.group(Gtsd241Form.sectionA);
    this.formGroupB = this.formBuilder.group(Gtsd241Form.sectionB);
    this.formGroupC = this.formBuilder.group(Gtsd241Form.sectionC);

    this.sectionMembers = [
      ['A', this.formGroupA, this.formDirectiveA, Gtsd241Conditions.sectionA],
      ['B', this.formGroupB, this.formDirectiveB, Gtsd241Conditions.sectionB],
      ['C', this.formGroupC, this.formDirectiveC, Gtsd241Conditions.sectionC],
    ];

    this.registryFormService.initializeForm(
      this.sectionMembers,
      Gtsd241Conditions,
      Gtsd241Validations,
      this.visibility
    );
    this.registryFormService.setDataDict(require('raw-loader!./gtsd241.dict.md').default);
  }
}
