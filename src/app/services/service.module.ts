import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './settings/settings.service';
import { SharedService } from './shared/shared.service';
import { SidebarService } from './shared/sidebar.service';
import { ModalUploadService } from './modal-upload/modal-upload.service';
import { SubirArchivoService } from './modal-upload/subir-archivo.service';
import { BankService } from './bankservice/bank.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ModalUploadService,
    SubirArchivoService,
    BankService,
    SettingsService,
    SharedService,
    SidebarService
  ]
})
export class ServiceModule { }
