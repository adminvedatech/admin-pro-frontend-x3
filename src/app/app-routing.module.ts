import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  { path: '',
    component: PagesComponent,
//  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  // {
  //   path:'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)
  //   // component: LoginComponent
  // },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
