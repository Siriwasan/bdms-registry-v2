import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GtsdComponent } from './gtsd/gtsd.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: RegistryComponent,
  //   children: [
  //     {
  //       path: 'test-form',
  //       loadChildren: () => import('./test-form/test-form.module').then((m) => m.TestFormModule),
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/home',
  //       pathMatch: 'full',
  //     },
  //   ],
  // },
  // { path: '', component: PageNotFoundComponent },

  {
    path: 'test-form',
    loadChildren: () => import('./test-form/test-form.module').then((m) => m.TestFormModule),
  },
  {
    path: 'test-form2',
    loadChildren: () => import('./test-form2/test-form2.module').then((m) => m.TestForm2Module),
  },
  {
    path: 'gtsd',
    loadChildren: () => import('./gtsd/gtsd.module').then((m) => m.GtsdModule),
    // component: GtsdComponent,
  },
  // {
  //   path: 'gtsd241',
  //   loadChildren: () => import('./gtsd/gtsd241/gtsd241.module').then((m) => m.Gtsd241Module),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistryRoutingModule {}
