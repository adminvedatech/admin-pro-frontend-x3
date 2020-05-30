/*==============================================================================================*/
/*==============================================================================================*/

// Este Componente recibe Todas las Cuentas Contables, al principio se puede enviar un Archivo CSV
// desde Este Componente para ser enviado al Servidor, el cual contesta con un Listado que se puede
// ver en este Componente, desde aqui se da de Alta Las Subcuentas dentro de cada Cuenta, trabaja -
// con un Collapsed para mostrar y cerrar las Subcuentas mostradas, se puede Editar la Subcuenta des
// de el Boton Editar, se manda abrir el Modal-Upload para enviar el Archivo CSV, se abre el Modal -
// para mostrar el Modal-SubAccount para mostrar el Form de Subcuenta
//
// Contenido dentro del Html ==> <app-modal-subaccount></app-modal-subaccount>
//
// Se Conecta con los siguientes Servicios:
//
// * private _modalUpload:    ModalUploadService: Para enviar Archivo CSV
// * private _subirArchivo:   SubirArchivoService: Sube Archivo CSV,
// * private _accounting:     AccountingAccountService: Conexion HTTP al Servidor,
// * public _formSubaccount:  FormSubaccountService: Conexion para servico del Form SubAccount,
// * public _modalSubaccount: ModalSubaccountService: Controla el Abrir y Cerrar Modal-SubAccount.

/*==============================================================================================*/
/*==============================================================================================*/





import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from '../../services/modal-upload/modal-upload.service';
import { AccountingAccountService } from '../../services/accounting-accounts/accounting-account.service';
import { SubirArchivoService } from '../../services/modal-upload/subir-archivo.service';
import { ModalSubaccountService } from 'src/app/services/accounting-accounts/modal-subaccount.service';
import { FormSubaccountService } from 'src/app/services/accounting-accounts/form-subaccount.service';



@Component({
  selector: 'app-accounting-account',
  templateUrl: './accounting-account.component.html',
  styleUrls: ['./accounting-account.component.css']
})
export class AccountingAccountComponent implements OnInit {
  [x: string]: any;

  accountingAccounts: any[]=[];
  subAccounts:any[] = [];
  prog:any[]=[];
  tipo:string = 'contabilidad/upload-service';
  url: string ='accounting-accounts';
  collapsed: boolean = false;
  constructor(private _modalUpload: ModalUploadService,
              private _subirArchivo: SubirArchivoService,
              private _accounting: AccountingAccountService,
              public _formSubaccount: FormSubaccountService,
              public _modalSubaccount: ModalSubaccountService
              ) { }


  /* =========== Refrezca la Pagina para actualizar Datos mostrados ============== */

  ngOnInit(): void {

    this._subirArchivo.refreshNeeded$
    .subscribe(() => {
      this.getAccountingAccounts();
    });
    this.getAccountingAccounts();

    this._formSubaccount.notificacion
    .subscribe(() => {
      console.log('SE REFRESCO');
      this.getAccountingAccounts();
    });
    this.getAccountingAccounts();

  }


  /* =========== Abre Cierra los Elementos Collapsed ============== */

  isCollapsed(elem: HTMLElement){
    if(!this.collapsed){
      elem.className = 'ti-zoom-out';
      this.collapsed = true;
    } else {
      elem.className = 'ti-zoom-in';
      this.collapsed = false;
      this.getAccountingAccounts();
    }
  }


  /* =========== Abre Modal-Upload se utiliza par el envio del Archivo CSV ============ */

    mostrarModal(){
      this._modalUpload.mostrarModal(this.tipo, this.url);

  }


  /* =========== Obtiene todas las Cuentas ============================ */

  getAccountingAccounts(){
    this._accounting.getAllAccounts().subscribe(res => {
      this.accountingAccounts = res;
    })
  }


  /* =========== Abre Modal-SubAccount para dar de Alta una SubCuenta ============== */

  showSubaccountModal(acc) {
    console.log('SHOW MODAL', acc);
    this._modalSubaccount.mostrarModal(acc);

  }


  /* =========== Edita SubCuenta ============== */

  editSubAcc(acc, subId) {

    this.subAccounts = acc.subCuentas;
    let subAccount =  this.subAccounts.find(res => res.id === subId);
    this._formSubaccount.subAccountEdit = subAccount;
    this._formSubaccount.editData(subAccount, acc.id);
    this._modalSubaccount.mostrarModal(acc);
    this._formSubaccount.isReadOnly = true;             /* el Campo SubAccountNumber no se puede editar*/

  }


}
