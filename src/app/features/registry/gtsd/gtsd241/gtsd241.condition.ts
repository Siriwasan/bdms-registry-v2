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
    { control: 'DiabCtrl', parentControl: 'Diabetes', conditions: ['Yes'] },
    { control: 'PreopChemoCurWhen', parentControl: 'PreopChemoCur', conditions: ['Yes'] },
    { control: 'PreopXRTDisWhen', parentControl: 'PreopXRT', conditions: ['Yes'] },
    {
      control: 'PreopXRTCompDt',
      parentControl: 'PreopXRTDisWhen',
      conditions: ['Same disease, <= 6 months'],
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
  sectionD: [],
  sectionE: [
    {
      control: 'UnanticConvTy',
      parentControl: 'UnanticConv',
      conditions: ['!', 'No'],
    },
    {
      control: 'UnanticConvRsn',
      parentControl: 'UnanticConv',
      conditions: ['!', 'No'],
    },
    { control: 'IntraopPRBCNum', parentControl: 'IntraopPRBC', conditions: ['Yes'] },
  ],
  sectionF: [
    { control: 'sectionFBody', parentControl: 'sectionE:LungCancer', conditions: ['Yes'] },
    { control: 'PreopPosTisOb', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagLungPET', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagLungCT', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagLungBrainCT', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagLungBMRI', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagInvasive', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagInvasiveSize', parentControl: 'ClinStagInvasive', conditions: ['Yes, reason documented'] },
    { control: 'ClinStagInvasiveLymphCT', parentControl: 'ClinStagInvasive', conditions: ['Yes, reason documented'] },
    { control: 'ClinStagInvasiveHilar', parentControl: 'ClinStagInvasive', conditions: ['Yes, reason documented'] },
    { control: 'ClinStagInvasiveTumor', parentControl: 'ClinStagInvasive', conditions: ['Yes, reason documented'] },
    { control: 'ClinStagInvasiveOther', parentControl: 'ClinStagInvasive', conditions: ['Yes, reason documented'] },
    { control: 'ClinStagLungEBUS', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagLungEUS', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagLungMedia', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagLungVATS', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStagLungOth', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'LungCaTumSzKnown', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'LungCaTumSz', parentControl: 'LungCaTumSzKnown', conditions: ['Yes'] },
    { control: 'LCInvAdjStr', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStageLungTumor', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStageLungN', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'ClinStageLungM', parentControl: 'ClinStagDoneLung', conditions: ['Yes'] },
    { control: 'PathStageLungT', parentControl: 'ClinStageLungResult', conditions: ['Lung Cancer Tumor present'] },
    { control: 'VisPleuraInv', parentControl: 'PathStageLungT', conditions: ['T2a', 'T2b'] },
    { control: 'PathStageLungN', parentControl: 'ClinStageLungResult', conditions: ['Lung Cancer Tumor present'] },
    { control: 'PathStageLungMultiN2', parentControl: 'PathStageLungN', conditions: ['N2'] },
    { control: 'PathStageLungM', parentControl: 'ClinStageLungResult', conditions: ['Lung Cancer Tumor present'] },
    { control: 'LungCAHist', parentControl: 'ClinStageLungResult', conditions: ['Lung Cancer Tumor present'] },
    { control: 'LungCAHistGrade', parentControl: 'ClinStageLungResult', conditions: ['Lung Cancer Tumor present'] },
    { control: 'LungCANodes', parentControl: 'ClinStageLungResult', conditions: ['Lung Cancer Tumor present'] },
    { control: 'LungCANodStat', parentControl: 'ClinStageLungResult', conditions: ['Lung Cancer Tumor present'] },
    { control: 'LungCAPathMarg', parentControl: 'ClinStageLungResult', conditions: ['Lung Cancer Tumor present'] },
    { control: 'LungCAPathMargPosR', parentControl: 'LungCAPathMarg', conditions: ['Yes'] },
  ],
  sectionG: [
    { control: 'sectionGBody', parentControl: 'sectionE:EsophCancer', conditions: ['Yes'] },
    { control: 'ClinStagEsophPET', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStagEsophCT', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStagEsophBronc', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStagEsophEUS', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStagEsophVATS', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStagEsophLap', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStagEsophEMR', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStagEsophOth', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStageEsophT', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStageEsophNode', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'ClinStageEsophM', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'TumorEsopCervical', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'TumorEsopUpThorac', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'TumorEsopMidThorac', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'TumorEsopLowThorac', parentControl: 'ClinStagDoneEsoph', conditions: ['Yes'] },
    { control: 'PathStageEsophT', parentControl: 'ClinStageEsophResult', conditions: ['Esophageal cancer present'] },
    { control: 'PathStageEsophN', parentControl: 'ClinStageEsophResult', conditions: ['Esophageal cancer present'] },
    { control: 'PathStageEsophM', parentControl: 'ClinStageEsophResult', conditions: ['Esophageal cancer present'] },
    { control: 'PathStageEsophH', parentControl: 'ClinStageEsophResult', conditions: ['Esophageal cancer present'] },
    { control: 'PathStageEsophG', parentControl: 'ClinStageEsophResult', conditions: ['Esophageal cancer present'] },
    { control: 'EsophCANodes', parentControl: 'ClinStageEsophResult', conditions: ['Esophageal cancer present'] },
    { control: 'EsophCAPathMarg', parentControl: 'ClinStageEsophResult', conditions: ['Esophageal cancer present'] },
  ],
  sectionH: [
    { control: 'sectionHBody', parentControl: 'sectionE:ThymusMediastinalData', conditions: ['Yes'] },
    { control: 'TxMestinon', parentControl: 'MyastheniaSympt', conditions: ['Yes'] },
    { control: 'TxSteroids', parentControl: 'MyastheniaSympt', conditions: ['Yes'] },
    { control: 'TxImmunoSuppress', parentControl: 'MyastheniaSympt', conditions: ['Yes'] },
    { control: 'MassSize', parentControl: 'MassSizeKnown', conditions: ['Yes'] },
    { control: 'ThyRobVATSLoc', parentControl: 'ThyInitSurgAp', conditions: ['Robotic', 'VATS'] },
    { control: 'ThyConvToOpen', parentControl: 'ThyInitSurgAp', conditions: ['Transcervical', 'Partial Sternotomy', 'Robotic', 'VATS'] },
    { control: 'ThyConvAp', parentControl: 'ThyConvToOpen', conditions: ['Yes, planned', 'Yes, unplanned'] },
    { control: 'MYAL', parentControl: 'PtAlive30Day', conditions: ['Yes'] },
    { control: 'PhrenicNervePalsy', parentControl: 'PtAlive30Day', conditions: ['Yes'] },
    { control: 'ThoracicRadiation', parentControl: 'PtAlive90Day', conditions: ['Yes'] },
    { control: 'PhrenNrvPalsyPersis', parentControl: 'PtAlive90Day', conditions: ['Yes'] },
  ],
  sectionI: [
    { control: 'sectionIBody', parentControl: 'sectionE:TrachealData', conditions: ['Yes'] },
    { control: 'RecurrNervNotIntact', parentControl: 'RecurrNervesIntact', conditions: ['Yes'] },
    { control: 'ReleaseManeuverType', parentControl: 'ReleaseManeuver', conditions: ['Yes'] },
  ],
  sectionJ: [
    { control: 'sectionJBody', parentControl: 'sectionE:HiatalHerniaData', conditions: ['Yes'] },
    { control: 'PPIRelief', parentControl: 'PPIUse', conditions: ['Yes'] },
    { control: 'LAGrade', parentControl: 'Esophagitis', conditions: ['Yes'] },
    { control: 'DeMeesterScore', parentControl: 'pHTest', conditions: ['Yes'] },
    { control: 'Motility', parentControl: 'Manometry', conditions: ['Yes'] },
    { control: 'ImageType', parentControl: 'ImagePerform', conditions: ['Yes'] },
    { control: 'HerniaReopApp', parentControl: 'HerniaRepStat', conditions: ['Re-operation'] },
    { control: 'FundoplicateType', parentControl: 'ProcFundoplicate', conditions: ['Yes'] },
    { control: 'RadiographRecurr1Mon', parentControl: 'GERDPtAliveMth', conditions: ['Yes'] },
    { control: 'SymptomRecurr1Mon', parentControl: 'GERDPtAliveMth', conditions: ['Yes'] },
    { control: 'EndoInt1Mon', parentControl: 'GERDPtAliveMth', conditions: ['Yes'] },
    { control: 'RedoOperate1Mon', parentControl: 'GERDPtAliveMth', conditions: ['Yes'] },
    { control: 'RadiographRecurr1Year', parentControl: 'GERDPtAliveYr', conditions: ['Yes'] },
    { control: 'SymptomRecurr1Year', parentControl: 'GERDPtAliveYr', conditions: ['Yes'] },
    { control: 'EndoInt1Year', parentControl: 'GERDPtAliveYr', conditions: ['Yes'] },
    { control: 'RedoOperate1Year', parentControl: 'GERDPtAliveYr', conditions: ['Yes'] },
  ],
  sectionK: [],
  sectionL: [],
  sectionM: [],
  sectionN: [],
  sectionO: [],
};
