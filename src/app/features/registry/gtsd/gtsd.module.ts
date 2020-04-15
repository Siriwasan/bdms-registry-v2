import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GtsdRoutingModule } from './gtsd-routing.module';
import { GtsdComponent } from './gtsd.component';

@NgModule({
  declarations: [GtsdComponent],
  imports: [CommonModule, GtsdRoutingModule],
})
export class GtsdModule {}
