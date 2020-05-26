import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PagenofoundComponent } from '../pagenofound/pagenofound.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const pagesRoutes: Routes = [

   {
        path: 'dashboard',
        component: DashboardComponent,
        data: {titulo: 'Dashboard'}

    },
    {
      path: 'graphics',
      component: GraphicsComponent,
      data: {titulo: 'Graficas'}
    },
    {
      path: 'account-settings',
      component: AccountSettingsComponent,
      data: {titulo: 'Settings'}
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
