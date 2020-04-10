import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { TestFormComponent } from './registry/test-form/test-form.component';
import { LoremIpsumComponent } from './registry/test-form/lorem-ipsum.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, TestFormComponent, LoremIpsumComponent, LoginComponent],
  imports: [CoreModule, SharedModule],
})
export class FeatureModule {}
