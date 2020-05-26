import { NgModule } from '@angular/core';

// IMPORTA RUTAS HIJAS DE LA PAGINA
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagenofoundComponent } from '../pagenofound/pagenofound.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    PagesComponent,
     DashboardComponent,
    GraphicsComponent,
    PagenofoundComponent,
    AccountSettingsComponent,

 ],
 exports:[
    // PagesComponent,
    DashboardComponent,
     GraphicsComponent,
     PagenofoundComponent,
     AccountSettingsComponent

 ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
