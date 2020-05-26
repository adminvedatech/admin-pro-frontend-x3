import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,

    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'graphics', component: GraphicsComponent
      },
      // { path: 'balance', loadChildren: () => import(`./balance/balance.module`).then(m => m.BalanceModule) },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      // { path: '**', component: Page404leavesComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
