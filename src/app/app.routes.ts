import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';



const appRoutes: Routes = [

  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  { path: '**', component: PagenofoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
