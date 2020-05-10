import { FormConditions } from 'src/app/shared/modules/registry-form/registry-form.model';

export const Gtsd241Conditions: FormConditions = {
  sectionA: [{ control: 'ZipCode', parentControl: 'PermAddr', conditions: ['Yes'] }],
  sectionB: [{ control: 'AdmitDt', parentControl: 'AdmissionStat', conditions: ['Inpatient'] }],
  sectionC: [
    { control: 'EF', parentControl: 'CHF', conditions: ['Yes'] },
    { control: 'VHDLocAV', parentControl: 'VHD', conditions: ['Yes'] },
    { control: 'VHDLocMV', parentControl: 'VHD', conditions: ['Yes'] },
    { control: 'VHDLocPV', parentControl: 'VHD', conditions: ['Yes'] },
    { control: 'VHDLocTV', parentControl: 'VHD', conditions: ['Yes'] },
    { control: 'PNI', parentControl: 'CerebroHx', conditions: ['CerebrovascularAccident (CVA)'] },
    { control: 'PreopChemoCurWhen', parentControl: 'PreopChemoCur', conditions: ['Yes'] },
    { control: 'PreopXRTDisWhen', parentControl: 'PreopXRT', conditions: ['Yes'] },
    {
      control: 'PreopXRTCompDt',
      parentControl: 'PreopXRTDisWhen',
      conditions: ['Samedisease, <= 6 months'],
    },
    { control: 'PriorStern', parentControl: 'PriorCTS', conditions: ['Yes'] },
    { control: 'PriorVATS', parentControl: 'PriorCTS', conditions: ['Yes'] },
    { control: 'PriorVATSLoc', parentControl: 'PriorVATS', conditions: ['Yes'] },
    { control: 'PriorPulmRes', parentControl: 'PriorCTS', conditions: ['Yes'] },
    { control: 'PriorPulmResLoc', parentControl: 'PriorPulmRes', conditions: ['Yes'] },
    { control: 'PriorThora', parentControl: 'PriorCTS', conditions: ['Yes'] },
    { control: 'PriorThoraLoc', parentControl: 'PriorThora', conditions: ['Yes'] },
    { control: 'CreatLst', parentControl: 'CreatMeasured', conditions: ['Yes'] },
    { control: 'HemoglobinLst', parentControl: 'HemoglobinMeasured', conditions: ['Yes'] },
    { control: 'PFTNotPerReas', parentControl: 'PFT', conditions: ['No'] },
    { control: 'FEV', parentControl: 'PFT', conditions: ['Yes'] },
    { control: 'FEVPred', parentControl: 'FEV', conditions: ['Yes'] },
    { control: 'DLCO', parentControl: 'PFT', conditions: ['Yes'] },
    { control: 'DLCOPred', parentControl: 'DLCO', conditions: ['Yes'] },
    {
      control: 'PackYearKnown',
      parentControl: 'CigSmoking',
      conditions: ['Past smoker', 'Current smoker'],
    },
    { control: 'PackYear', parentControl: 'PackYearKnown', conditions: ['Yes'] },
  ],
  sectionD: [{ control: 'XXX', parentControl: 'XXX', conditions: ['Yes'] }],
  sectionE: [],
  sectionF: [],
  sectionG: [],
  sectionH: [],
  sectionI: [],
  sectionJ: [],
  sectionK: [],
  sectionL: [],
  sectionM: [],
  sectionN: [],
  sectionO: [],
};
