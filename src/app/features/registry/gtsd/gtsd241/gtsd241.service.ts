import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IRegistryControlService } from 'src/app/shared/modules/registry-form/controls/registry-control-service.interface';
import { ValidationMessage } from 'src/app/shared/modules/registry-form/registry-form.model';

@Injectable()
export class Gtsd241Service implements IRegistryControlService {
  getInvalidMessages(formGroup: FormGroup, control: string): ValidationMessage[] {
    return [];
  }

  hasInfo(control: string): boolean {
    return true;
  }
  openInfo(control: string): void {
    console.log('openInfo');
  }
  getValidations(control: string): ValidationMessage[] {
    return null;
  }
  isInvalid(formGroup: FormGroup, control: string, validationType: string): boolean {
    return false;
  }
}
