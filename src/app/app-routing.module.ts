import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestFormComponent } from './features/registry/test-form/test-form.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'test-form', component: TestFormComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'auth', component: AuthComponent },
  // { path: 'page-not-autherized', component: PageNotAutherizedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
