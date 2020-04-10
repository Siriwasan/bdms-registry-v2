import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../shared/material.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, AppLayoutComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  exports: [BrowserModule, BrowserAnimationsModule, HeaderComponent, NavbarComponent],
})
export class CoreModule {}
