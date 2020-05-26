import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BankService } from '../../services/bankservice/bank.service';
import { ModalUploadService } from '../../services/modal-upload/modal-upload.service';
import { SubirArchivoService } from '../../services/modal-upload/subir-archivo.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  oculto:string = '';
  name:string='';
  text : string= '';
  select: boolean = false;
  selectedFile: File = null;
  currentFileUpload: File = null;
  progress: {percentage:number}= {percentage:0}


  constructor(private _router: Router,
              private _bank: BankService,
              public _modalUpload: ModalUploadService,
              public _subirArchivo: SubirArchivoService

              ) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.selectedFile = null;
    this.name = null;
    this.text = "";
    this.select = false;
    this._modalUpload.ocultarModal();
  }


    /*----------- Selecciona Archivo AccountType en formato CSV para ser Enviado -------------*/
    onFileSelected(event) {
      console.log('EVENT ', event.target.files[0]);

      this.progress.percentage = 0;
      this.select = true;
      this.selectedFile = <File>event.target.files[0];
      try {
        this.name = this.selectedFile.name;
        this.text = "Nombre del Archivo para ser enviado :"
        console.log(this.selectedFile.name.split('.'));
        if ( this.name.split('.')[1] !== 'csv') {
          console.log('ERROR!');
          this.cancelFile();
          Swal.fire({
            icon: 'error',
            title: 'Seleccin de Archivo',
            text: 'Seleccione un Archivo CSV!',
            // footer: '<a href>Why do I have this issue?</a>'
          });

      } else {
          console.log('go ahead');
        }
      } catch (error) {
        console.log('ERROR EN ARCHIVO',error.error);
        this.cancelFile();
         Swal.fire('Error!', 'Cancelar y seleccionar un archivo nuevo!', 'warning');
      }
  }




  /*----------- Cancela enviar Archivo -------------*/
cancelFile() {
  this.selectedFile = null;
  this.name = null;
  this.text = "";
  console.log('Cancel File', this.selectedFile);
}


subirArchivo(){

  this.progress.percentage = 0;
  this.currentFileUpload = this.selectedFile;

  this._subirArchivo.pushFileToStorage(this.selectedFile, this._modalUpload.tipo)
  .subscribe(event => {

    if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        // this.snackbarService.success(':: Proceso exitoso!');
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Archivo de Banco',
        //   text: 'El Archivo se envio con exito',
        //   // footer: '<a href>Why do I have this issue?</a>'
        // });
        this.selectedFile = null;
        this.name=null;
         //  this.getAllAccountType();
        // this.progress.percentage = 0;
          this._modalUpload.ocultarModal();
          this.progress.percentage=0;
          this.select = false;
          // this._router.navigate([this._modalUpload.url]);
      }
    });

  }

}
