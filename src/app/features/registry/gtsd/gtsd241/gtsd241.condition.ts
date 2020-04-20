import { FormConditions } from 'src/app/shared/modules/registry-form/registry-form.model';

export const Gtsd241Conditions: FormConditions = {
  sectionA: [
    { control: 'DOB', parentControl: 'Sex', conditions: ['dog'] },
    { control: 'Animal', parentControl: 'Sex', conditions: ['dog'] },
    { control: 'Visit', parentControl: 'Animal', conditions: ['hen'] },
  ],
  sectionB: [],
  sectionC: [],
};
