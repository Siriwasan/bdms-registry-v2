import { ValidationMessage } from '../modules/registry-form/registry-form.model';
import { FormGroup } from '@angular/forms';

export interface ControlService {
  hasInfo(control: string): boolean;
  openInfo(control: string): void;
  getValidations(control: string): ValidationMessage[];
  isInvalid(formGroup: FormGroup, control: string, validationType: string): boolean;
}
