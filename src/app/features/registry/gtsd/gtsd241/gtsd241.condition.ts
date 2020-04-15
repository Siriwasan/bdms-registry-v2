import { FormConditions } from 'src/app/shared/modules/registry-form/registry-form.model';

export const Gtsd241Conditions: FormConditions = {
  sectionA: [{ control: 'ZipCode', parentControl: 'PermAddr', conditions: ['Yes'] }],
  sectionB: [
    { control: 'TransferHospType', parentControl: 'AdmType', conditions: ['Transfer'] },
    { control: 'BDMSNetwork', parentControl: 'TransferHospType', conditions: ['BDMS Network'] },
    { control: 'NonBDMS', parentControl: 'TransferHospType', conditions: ['Non BDMS'] },
  ],
  sectionC: [
    { control: 'HxMIDate', parentControl: 'HxMI', conditions: ['Yes'] },
    { control: 'HxPCIDate', parentControl: 'PriorPCI', conditions: ['Yes'] },
    { control: 'LMPCI', parentControl: 'PriorPCI', conditions: ['Yes'] },
    { control: 'HxCABGDate', parentControl: 'PriorCABG', conditions: ['Yes'] },
  ],
};
