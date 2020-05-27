import { NgModule } from '@angular/core';
import { BredcrumbsComponent } from './bredcrumbs/bredcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { ModalSubaccountComponent } from '../components/modal-subaccount/modal-subaccount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BredcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ModalUploadComponent,
  ],
  exports:[
    BredcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ModalUploadComponent,

  ],

  imports:[
      RouterModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule
  ],


})
export class SharedModule { }
