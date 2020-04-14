import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    path: 'test-form3',
    loadChildren: () => import('./test-form3/test-form3.module').then((m) => m.TestForm3Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistryRoutingModule {}
