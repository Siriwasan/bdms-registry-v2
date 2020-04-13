import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FabSpeedDialModule } from './modules/fab-speed-dial/fab-speed-dial.module';

@NgModule({
  declarations: [],
  imports: [FabSpeedDialModule],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FabSpeedDialModule,
  ],
})
export class SharedModule {}
