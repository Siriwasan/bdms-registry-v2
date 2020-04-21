import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureModule } from 'src/app/features/feature.module';
import { Acsd290Component } from './acsd290.component';
import { ScrollSpyModule } from 'src/app/shared/modules/scroll-spy/scroll-spy.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { RegistryFormModule } from 'src/app/shared/modules/registry-form/registry-form.module';

const routes: Routes = [
  {
    path: '',
    component: Acsd290Component,
  },
];

@NgModule({
  declarations: [Acsd290Component],
  imports: [
    SharedModule,
    FeatureModule,
    RouterModule.forChild(routes),
    ScrollSpyModule,
    RoundProgressModule,
    RegistryFormModule,
  ],
})
export class Acsd290Module {}
