import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipSelectionChange } from '@angular/material/chips';

import { AppState } from 'src/app/store/root-store.state';
import { AppStoreActions, AppStoreSelectors } from 'src/app/store/app';
import { RegistryModel } from '../registry.model';
import { BehaviorSubject } from 'rxjs';

const data: RegistryModel[] = [
  {
    registryId: '1',
    hospitalId: 'BHT',
    hn: '0210006945',
    an: 'I0219026018',
    firstName: 'David',
    lastName: 'Aarons',
    age: 45,
    baseDbId: 'Acsd290',
    baseDb: 'Adult Cardiac Surgery Database v4.2',
    addendum: 'BDMS v1.0',
    procedureDateTime: '2020-03-23T18:20:00.000+07:00',
    completion: 60,
    tags: ['STEMI', 'CAG', 'PCI', 'Angio Success'],
    submitted: [],
    createdAt: null,
    modifiedAt: null,
  },
  {
    registryId: '2',
    hospitalId: 'BHT',
    hn: '0210006945',
    an: 'I0219026018',
    firstName: 'Frank',
    lastName: 'Abanelle',
    age: 60,
    baseDbId: 'Acsd290',
    baseDb: 'Adult Cardiac Surgery Database v4.2',
    addendum: 'BDMS v1.0',
    procedureDateTime: '2020-03-23T18:20:00.000+07:00',
    completion: 95,
    tags: ['NSTEMI', 'CAG', 'PCI', 'Angio Failure'],
    submitted: [],
    createdAt: null,
    modifiedAt: null,
  },
  {
    registryId: '3',
    hospitalId: 'BHT',
    hn: '0210006945',
    an: 'I0219026018',
    firstName: 'สมชาย',
    lastName: 'ดำแดง',
    age: 12,
    baseDbId: 'Acsd290',
    baseDb: 'Adult Cardiac Surgery Database v4.2',
    addendum: 'BDMS v1.0',
    procedureDateTime: '2020-03-23T18:20:00.000+07:00',
    completion: 100,
    tags: ['PCI', 'Dead'],
    submitted: [],
    createdAt: null,
    modifiedAt: null,
  },
  {
    registryId: '4',
    hospitalId: 'BPH',
    hn: '0210006945',
    an: 'I0219026018',
    firstName: 'สมหญิง',
    lastName: 'อำแดง',
    age: 56,
    baseDbId: 'Acsd290',
    baseDb: 'Adult Cardiac Surgery Database v4.2',
    addendum: 'BDMS v1.0',
    procedureDateTime: '2020-03-23T18:20:00.000+07:00',
    completion: 100,
    tags: ['PCI', 'CABG'],
    submitted: [],
    createdAt: null,
    modifiedAt: null,
  },
];

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-gtsd',
  templateUrl: './gtsd.component.html',
  styleUrls: ['./gtsd.component.scss'],
})
export class GtsdComponent implements OnInit {
  displayedColumns: string[] = ['hospital', 'hn', 'name', 'age', 'procedure', 'tags', 'completion', 'handset'];
  dataSource = new MatTableDataSource(data);

  device$ = this.store.select(AppStoreSelectors.device);
  itemsCollection$: BehaviorSubject<RegistryModel[]>;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  filters: string[] = ['CAG', 'PCI'];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      // this.filters.push(value.trim());
      this.addFilter(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(filter: string): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(AppStoreActions.setSidebarMode({ mode: null }));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  tagClicked(tag: string) {
    this.addFilter(tag);
  }

  addFilter(filter: string) {
    if (this.filters.indexOf(filter) < 0) {
      this.filters.push(filter);
    }
  }

  clearFilter() {
    this.filters = [];
  }
}
