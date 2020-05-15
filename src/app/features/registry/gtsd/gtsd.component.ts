import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/root-store.state';
import { AppStoreActions } from 'src/app/store/app';
import { RegistryModel } from '../registry.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const data: RegistryModel[] = [
  {
    registryId: '1',
    hospitalId: 'BHT',
    hn: '1111111',
    an: '1111111',
    firstName: 'Name1111111',
    lastName: 'LName1111111',
    age: 45,
    baseDbId: 'Acsd290',
    baseDb: 'Adult Cardiac Surgery Database v4.2',
    addendum: 'BDMS v1.0',
    procedureDateTime: '2020-03-23T18:20:00.000+07:00',
    completion: 60,
    tags: [],
    submitted: [],
    createdAt: null,
    modifiedAt: null,
  },
  {
    registryId: '2',
    hospitalId: 'BHT',
    hn: '2222222',
    an: '2222222',
    firstName: 'Name2222222',
    lastName: 'LName2222222',
    age: 45,
    baseDbId: 'Acsd290',
    baseDb: 'Adult Cardiac Surgery Database v4.2',
    addendum: 'BDMS v1.0',
    procedureDateTime: '2020-03-23T18:20:00.000+07:00',
    completion: 95,
    tags: [],
    submitted: [],
    createdAt: null,
    modifiedAt: null,
  },
  {
    registryId: '3',
    hospitalId: 'BHT',
    hn: '3333333',
    an: '3333333',
    firstName: 'Name3333333',
    lastName: 'LName3333333',
    age: 45,
    baseDbId: 'Acsd290',
    baseDb: 'Adult Cardiac Surgery Database v4.2',
    addendum: 'BDMS v1.0',
    procedureDateTime: '2020-03-23T18:20:00.000+07:00',
    completion: 100,
    tags: [],
    submitted: [],
    createdAt: null,
    modifiedAt: null,
  },
];

@Component({
  selector: 'app-gtsd',
  templateUrl: './gtsd.component.html',
  styleUrls: ['./gtsd.component.scss'],
})
export class GtsdComponent implements OnInit {
  displayedColumns: string[] = ['hospital', 'hn', 'name', 'age', 'procedure', 'tags', 'completion'];
  dataSource = new MatTableDataSource(data);

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(AppStoreActions.setSidebarMode({ mode: null }));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
