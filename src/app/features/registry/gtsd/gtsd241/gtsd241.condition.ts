import { FormConditions } from 'src/app/shared/modules/registry-form/registry-form.model';

export const Gtsd241Conditions: FormConditions = {
  sectionA: [{ control: 'Visit', parentControl: 'Sex', conditions: ['dog'] }],
  sectionB: [],
  sectionC: [],
};
