import { TableOfCentent } from 'src/app/shared/modules/registry-form/registry-form.model';

export const Gtsd241Toc: TableOfCentent[] = [
  { section: 'sectionA', title: 'A. Demographics' },
  { section: 'sectionB', title: 'B. Episode of care' },
];

export function getTocTitle(section: string) {
  return Gtsd241Toc.find((t) => t.section === section).title;
}
