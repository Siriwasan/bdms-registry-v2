import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFormComponent } from './test-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureModule } from '../../feature.module';
import { ScrollSpyModule } from 'src/app/shared/modules/scroll-spy/scroll-spy.module';

const routes: Routes = [
  {
    path: '',
    component: TestFormComponent,
  },
];

@NgModule({
  declarations: [TestFormComponent],
  imports: [SharedModule, FeatureModule, RouterModule.forChild(routes), ScrollSpyModule],
})
export class TestFormModule {}
