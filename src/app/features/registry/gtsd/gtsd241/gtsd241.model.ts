import { FormDetail } from '../../registry.model';
import {
  FormCompletion,
  RegistryCompletion,
} from 'src/app/shared/modules/registry-form/registry-form.model';

export interface Gtsd241Model {
  detail: FormDetail;
  completion: Gtsd241Completion;
  sectionA: object;
  sectionB: object;
  sectionC: object;
  sectionD: object;
  sectionE: object;
  sectionF: object;
  sectionG: object;
  sectionH: object;
  sectionI: object;
  sectionJ: object;
  sectionK: object;
  sectionL: object;
  sectionM: object;
  sectionN: object;
  sectionO: object;
}

export interface Gtsd241Completion extends RegistryCompletion {
  summary: FormCompletion;
  sectionA: FormCompletion;
  sectionB: FormCompletion;
  sectionC: FormCompletion;
  sectionD: FormCompletion;
  sectionE: FormCompletion;
  sectionF: FormCompletion;
  sectionG: FormCompletion;
  sectionH: FormCompletion;
  sectionI: FormCompletion;
  sectionJ: FormCompletion;
  sectionK: FormCompletion;
  sectionL: FormCompletion;
  sectionM: FormCompletion;
  sectionN: FormCompletion;
  sectionO: FormCompletion;
}
