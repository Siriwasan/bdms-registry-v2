import {
  Component,
  Input,
  OnInit,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  Injectable,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

import { MAT_DATE_FORMATS, DateAdapter, MomentDateAdapter } from '@coachcare/datepicker';
import * as moment from 'moment';

import { RegistryControlComponent } from './registry-control.component';
import { RegistryFormService } from '../registry-form.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-store.state';
import { AppStoreSelectors } from 'src/app/store/app';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
const MY_DATE_FORMATS = {
  parse: {
    datetime: ['DD/MM/YYYY H:mm', 'DD/M/YYYY H:mm', 'D/M/YYYY H:mm', 'D/MM/YYYY H:mm'],
    date: ['DD/MM/YYYY', 'DD/M/YYYY', 'D/M/YYYY', 'D/MM/YYYY'],
    time: ['H:mm'],
  },
  display: {
    datetime: 'D/M/YYYY H:mm',
    date: 'D/M/YYYY',
    time: 'H:mm',
    monthDayLabel: 'D MMM',
    monthDayA11yLabel: 'D MMMM',
    monthYearLabel: 'MMMM YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
    dateA11yLabel: 'LLLL',
    timeLabel: 'HH:mm',
  },
};

@Injectable()
export class CustomDateAdapter extends MomentDateAdapter {
  getFirstDayOfWeek(): number {
    return 1;
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'reg-datepicker',
  template: `
    <mat-form-field [formGroup]="formGroup" style="width: 100%">
      <input
        matInput
        [matDatepicker]="picker"
        [placeholder]="placeholder"
        [formControlName]="controlName"
        [required]="require"
        #dateInput
      />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker
        #picker
        [touchUi]="(device$ | async).includes('Handset')"
        [type]="type"
        [twelveHour]="false"
      ></mat-datepicker>
      <mat-hint>
        <a><ng-content></ng-content></a>
        <mat-icon style="cursor: help;" (click)="openInfo(controlName)" *ngIf="bInfo"
          >info_outline</mat-icon
        >
      </mat-hint>
      <mat-error *ngIf="self.invalid && (self.dirty || self.touched)">
        <div *ngFor="let validation of getValidations(controlName)">
          <div *ngIf="isInvalid(formGroup, controlName, validation.type)">
            <a>{{ validation.message }}</a>
          </div>
        </div>
        <mat-icon style="cursor: help;" (click)="openInfo(controlName)" *ngIf="bInfo"
          >info_outline</mat-icon
        >
      </mat-error>
    </mat-form-field>
  `,
  styleUrls: ['./registry-control.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
})
export class RegistryDatePickerComponent extends RegistryControlComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input() controlName: string;
  @Input() formGroup: FormGroup;
  @Input() placeholder: string;
  @Input() require = true;
  @Input() type = 'date';
  @ViewChild('dateInput', { static: true }) dateInput: ElementRef;

  bInfo: boolean;
  self: AbstractControl;

  device$ = this.store.select(AppStoreSelectors.device);

  constructor(
    protected registryFormService: RegistryFormService,
    private elementRef: ElementRef,
    private dateAdapter: DateAdapter<Date>,
    private store: Store<AppState>
  ) {
    super(registryFormService);

    this.dateAdapter.setLocale('th');
    // (dateAdapter as CustomDateAdapter).setType('date');
  }

  ngOnInit() {
    this.elementRef.nativeElement.setAttribute('id', this.controlName);
    this.bInfo = this.hasInfo(this.controlName);
    this.self = this.formGroup.get(this.controlName);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type) {
      if (this.self) {
        let dateControl = moment(this.self.value);
        if (dateControl.isValid()) {
          console.log('reg-date-picker type changed ', changes.type.currentValue);

          // let dateControl = moment(this.self.value);
          let format: string;
          switch (changes.type.currentValue) {
            case 'datetime':
              format = MY_DATE_FORMATS.display.datetime;
              break;

            case 'time':
              format = MY_DATE_FORMATS.display.time;
              break;

            case 'date':
            default:
              dateControl = dateControl.startOf('day');
              format = MY_DATE_FORMATS.display.date;
              break;
          }
          this.self.setValue(dateControl);
          this.dateInput.nativeElement.value = dateControl.format(format);
        } else {
          let parses: string[];
          const input = (this.dateInput.nativeElement.value as string).trim();

          switch (changes.type.currentValue) {
            case 'datetime':
              parses = MY_DATE_FORMATS.parse.datetime;
              break;

            case 'time':
              parses = MY_DATE_FORMATS.parse.time;
              break;

            case 'date':
            default:
              parses = MY_DATE_FORMATS.parse.date;
              break;
          }
          for (const parse of parses) {
            const newDateControl = moment(input, parse, true);
            if (newDateControl.isValid()) {
              this.self.setValue(newDateControl);
              this.dateInput.nativeElement.value = newDateControl.format(parse);
              break;
            }
          }
        }
      }
    }
  }

  ngAfterViewInit() {
    // bug of @coachcare/datepicker and Angular 9
    this.dateInput.nativeElement.disabled = false;
  }
}
