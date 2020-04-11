import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'test-form',
        loadChildren: () =>
          import('./features/registry/test-form/test-form.module').then((m) => m.TestFormModule),
      },
      {
        path: 'test-form2',
        loadChildren: () =>
          import('./features/registry/test-form2/test-form2.module').then((m) => m.TestForm2Module),
      },
      {
        path: 'test-form3',
        loadChildren: () =>
          import('./features/registry/test-form3/test-form3.module').then((m) => m.TestForm3Module),
      },
      // { path: 'about', component: AboutComponent },
      // { path: 'auth', component: AuthComponent },
      // { path: 'page-not-autherized', component: PageNotAutherizedComponent },
      { path: '', redirectTo: '/test-form', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
