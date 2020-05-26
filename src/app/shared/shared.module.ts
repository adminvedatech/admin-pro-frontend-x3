import { NgModule } from '@angular/core';
import { BredcrumbsComponent } from './bredcrumbs/bredcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';


@NgModule({
  imports:[
      RouterModule,
      CommonModule
  ],
  declarations: [
     BredcrumbsComponent,
     SidebarComponent,
     HeaderComponent,
     ModalUploadComponent
 ],
 exports:[
 BredcrumbsComponent,
 SidebarComponent,
 HeaderComponent,
 ModalUploadComponent
],

})
export class SharedModule { }
