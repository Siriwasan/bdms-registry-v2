import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppStoreModule } from '../../store/app';
import { CounterStoreModule } from '../../store/counter';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), AppStoreModule, CounterStoreModule],
})
export class HomeModule {}
