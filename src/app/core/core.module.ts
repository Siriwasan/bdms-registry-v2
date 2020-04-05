import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [BrowserModule, BrowserAnimationsModule, HeaderComponent, NavbarComponent],
})
export class CoreModule {}
