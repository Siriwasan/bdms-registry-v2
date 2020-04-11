import { NgModule } from '@angular/core';

import { LoremIpsumComponent } from './registry/lorem-ipsum.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoremIpsumComponent, LoginComponent],
  imports: [SharedModule],
  exports: [LoremIpsumComponent],
})
export class FeatureModule {}
