import { NgModule } from '@angular/core';
import { BredcrumbsComponent } from './bredcrumbs/bredcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  imports:[
      RouterModule,
      CommonModule
  ],
  declarations: [
     BredcrumbsComponent,
     SidebarComponent,
     HeaderComponent,
 ],
 exports:[
 BredcrumbsComponent,
 SidebarComponent,
 HeaderComponent,
],

})
export class SharedModule { }
