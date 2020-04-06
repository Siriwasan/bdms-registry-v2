import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { TestFormComponent } from './registry/test-form/test-form.component';
import { LoremIpsumComponent } from './registry/test-form/lorem-ipsum.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HomeComponent, TestFormComponent, LoremIpsumComponent],
  imports: [CoreModule, SharedModule],
})
export class FeatureModule {}
