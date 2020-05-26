import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

import { APP_ROUTES } from './app.routes';
import { RegisterComponent } from './login/register/register.component';
import { PagesModule } from './pages/pages.module';
import { SettingsService } from './services/settings/settings.service';
import { ServiceModule } from './services/service.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    // PagesComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    // PagesModule,
    ServiceModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
