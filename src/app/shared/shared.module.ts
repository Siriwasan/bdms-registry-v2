import { NgModule } from '@angular/core';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';

import { ScrollSpyModule } from './modules/scroll-spy/scroll-spy.module';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class SharedModule {}
