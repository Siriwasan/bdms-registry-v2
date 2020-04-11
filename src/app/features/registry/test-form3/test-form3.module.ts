import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestForm3Component } from './test-form3.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureModule } from '../../feature.module';
import { ScrollSpyModule } from 'src/app/shared/modules/scroll-spy/scroll-spy.module';

const routes: Routes = [
  {
    path: '',
    component: TestForm3Component,
  },
];

@NgModule({
  declarations: [TestForm3Component],
  imports: [SharedModule, FeatureModule, RouterModule.forChild(routes), ScrollSpyModule],
})
export class TestForm3Module {}
