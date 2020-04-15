import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gtsd241Component } from './gtsd241.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Gtsd241Component,
  },
];

@NgModule({
  declarations: [Gtsd241Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Gtsd241Module {}
