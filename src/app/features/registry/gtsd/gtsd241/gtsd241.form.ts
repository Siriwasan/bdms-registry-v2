import { Validators } from '@angular/forms';

export const Gtsd241Form = {
  sectionA: {
    registryId: [null, Validators.required],
    HN: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    AN: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(12)]],
    LastName: [null, Validators.required],
    FirstName: [null, Validators.required],
    MidName: [null],
    SSN: [null, Validators.required],
    DOB: [null, [Validators.required]],
    Age: [null, [Validators.required, Validators.min(18), Validators.max(120)]],
    Sex: [null, Validators.required],
    ZipCode: [null, Validators.required],
    Race: [null, Validators.required],
    PatNation: [null, Validators.required],
    PermAddr: [null, Validators.required],
  },
  sectionB: {
    HospName: [null, Validators.required],
    AdmissionStat: [null, Validators.required],
    AdmitDt: [null, Validators.required],
    PayorPrim: [null, Validators.required],
    PayorSecond: [null, Validators.required],
    EnrolledStudy: [null, Validators.required],
  },
  sectionC: {
    HeightCm: [null, [Validators.required, Validators.min(10), Validators.max(250)]],
    WeightKg: [null, [Validators.required, Validators.min(1), Validators.max(300)]],
    WtLoss3Kg: [null, [Validators.required, Validators.min(0), Validators.max(250)]],
    Hypertn: [null, Validators.required],
    CHF: [null, Validators.required],
    EF: [null, [Validators.required, Validators.min(1), Validators.max(99)]],
    CAD: [null, Validators.required],
    PreMI: [null, Validators.required],
    AFIB: [null, Validators.required],
    VHD: [null, Validators.required],
    VHDLocAV: [null, Validators.required],
    VHDLocMV: [null, Validators.required],
    VHDLocPV: [null, Validators.required],
    VHDLocTV: [null, Validators.required],
    PulmHypertn: [null, Validators.required],
    InterstitialFib: [null, Validators.required],
    MVD: [null, Validators.required],
    DVTPE: [null, Validators.required],
    CerebroHx: [null, Validators.required],
    PNI: [null, Validators.required],
    NeuroSymptPres: [null, Validators.required],
    MyasGravis: [null, Validators.required],
    Diabetes: [null, Validators.required],
    DiabCtrl: [null, Validators.required],
    LiverDys: [null, Validators.required],
    Dialysis: [null, Validators.required],
    CoexisCancer: [null, Validators.required],
    PreopChemoCur: [null, Validators.required],
    PreopChemoCurWhen: [null, Validators.required],
    PreopXRT: [null, Validators.required],
    PreopXRTDisWhen: [null, Validators.required],
    PreopXRTCompDt: [null, Validators.required],
    PriorCTS: [null, Validators.required],
    PriorStern: [null, Validators.required],
    PriorVATS: [null, Validators.required],
    PriorVATSLoc: [null, Validators.required],
    PriorPulmRes: [null, Validators.required],
    PriorPulmResLoc: [null, Validators.required],
    PriorThora: [null, Validators.required],
    PriorThoraLoc: [null, Validators.required],
    PreOpImmunoThx: [null, Validators.required],
    PreOpAnticoagThx: [null, Validators.required],
    PreOpHomeO2: [null, Validators.required],
    CreatMeasured: [null, Validators.required],
    CreatLst: [null, [Validators.required, Validators.min(0.1), Validators.max(30)]],
    HemoglobinMeasured: [null, Validators.required],
    HemoglobinLst: [null, [Validators.required, Validators.min(3), Validators.max(50)]],
    PFT: [null, Validators.required],
    PFTNotPerReas: [null, Validators.required],
    FEV: [null, Validators.required],
    FEVPred: [null, [Validators.required, Validators.min(10), Validators.max(200)]],
    DLCO: [null, Validators.required],
    DLCOPred: [null, [Validators.required, Validators.min(10), Validators.max(200)]],
    CigSmoking: [null, Validators.required],
    PackYearKnown: [null, Validators.required],
    PackYear: [null, [Validators.required, Validators.min(1), Validators.max(210)]],
    NarcoticDepend: [null, Validators.required],
    AlcoholAbuse: [null, Validators.required],
    DemNeroDys: [null, Validators.required],
    PsychDisorder: [null, Validators.required],
    LiveStat: [null, Validators.required],
    FuncStat: [null, Validators.required],
    ECOGScore: [null, Validators.required],
  },
  sectionD: {
    CategoryPrim: [null, Validators.required],
    CategoryPrimOth: [null],
    CategorySecond: [null],
    CategorySecondOth: [null],
  },
  sectionE: {
    SurgDt: [null, Validators.required],
    OREntryT: [null, Validators.required],
    AnesthStartT: [null, Validators.required],
    ProcStartT: [null, Validators.required],
    ORExitT: [null, Validators.required],
    AnesthEndT: [null, Validators.required],
    ProcEndT: [null, Validators.required],
    MultiDay: [null, Validators.required],
    PlanStageProc: [null, Validators.required],
    Status: [null, Validators.required],
    Reop: [null, Validators.required],
    Robotic: [null, Validators.required],
    UnanticConv: [null, Validators.required],
    UnanticConvTy: [null, Validators.required],
    UnanticConvRsn: [null, Validators.required],
    IntraopPRBC: [null, Validators.required],
    IntraopPRBCNum: [null, Validators.required],
    ASA: [null, Validators.required],
    Primary: [null, Validators.required],
    Secondary: [null],
    Tertiary: [null],
    LungCancer: [null, Validators.required],
    EsophCancer: [null, Validators.required],
    ThymusMediastinalData: [null, Validators.required],
    TrachealData: [null, Validators.required],
    HiatalHerniaData: [null, Validators.required],
  },
  sectionF: {
    LungCancerSus: [null, Validators.required],
    ClinStagLungBronc: [null, Validators.required],
    ClinStagLungNeedle: [null, Validators.required],
    ClinStagDoneLung: [null, Validators.required],
    PreopPosTisOb: [null, Validators.required],
    ClinStagLungPET: [null, Validators.required],
    ClinStagLungCT: [null, Validators.required],
    ClinStagLungBrainCT: [null, Validators.required],
    ClinStagLungBMRI: [null, Validators.required],
    ClinStagInvasive: [null, Validators.required],
    ClinStagInvasiveSize: [null, Validators.required],
    ClinStagInvasiveLymphCT: [null, Validators.required],
    ClinStagInvasiveHilar: [null, Validators.required],
    ClinStagInvasiveTumor: [null, Validators.required],
    ClinStagInvasiveOther: [null, Validators.required],
    ClinStagLungEBUS: [null, Validators.required],
    ClinStagLungEUS: [null, Validators.required],
    ClinStagLungMedia: [null, Validators.required],
    ClinStagLungVATS: [null, Validators.required],
    ClinStagLungOth: [null, Validators.required],
    LungCaTumSzKnown: [null, Validators.required],
    LungCaTumSz: [null, Validators.required],
    LCInvAdjStr: [null, Validators.required],
    ClinStageLungTumor: [null, Validators.required],
    ClinStageLungN: [null, Validators.required],
    ClinStageLungM: [null, Validators.required],
    ClinStageLungResult: [null, Validators.required],
    PathStageLungT: [null, Validators.required],
    VisPleuraInv: [null, Validators.required],
    PathStageLungN: [null, Validators.required],
    PathStageLungMultiN2: [null, Validators.required],
    PathStageLungM: [null, Validators.required],
    LungCAHist: [null, Validators.required],
    LungCAHistGrade: [null, Validators.required],
    LungCANodes: [null, Validators.required],
    LungCANodStat: [null, Validators.required],
    LungCAPathMarg: [null, Validators.required],
    LungCAPathMargPosR: [null, Validators.required],
  },
  sectionG: {
    ClinStagDoneEsoph: [null, Validators.required],
    ClinStagEsophPET: [null, Validators.required],
    ClinStagEsophCT: [null, Validators.required],
    ClinStagEsophBronc: [null, Validators.required],
    ClinStagEsophEUS: [null, Validators.required],
    ClinStagEsophVATS: [null, Validators.required],
    ClinStagEsophLap: [null, Validators.required],
    ClinStagEsophEMR: [null, Validators.required],
    ClinStagEsophOth: [null, Validators.required],
    ClinStageEsophT: [null, Validators.required],
    ClinStageEsophNode: [null, Validators.required],
    ClinStageEsophM: [null, Validators.required],
    TumorEsopCervical: [null, Validators.required],
    TumorEsopUpThorac: [null, Validators.required],
    TumorEsopMidThorac: [null, Validators.required],
    TumorEsopLowThorac: [null, Validators.required],
    ClinStageEsophResult: [null, Validators.required],
    PathStageEsophT: [null, Validators.required],
    PathStageEsophN: [null, Validators.required],
    PathStageEsophM: [null, Validators.required],
    PathStageEsophH: [null, Validators.required],
    PathStageEsophG: [null, Validators.required],
    EsophCANodes: [null, Validators.required],
    EsophCAPathMarg: [null, Validators.required],
  },
  sectionH: {},
  sectionI: {},
  sectionJ: {},
  sectionK: {},
  sectionL: {},
  sectionM: {},
  sectionN: {},
  sectionO: {},
};
