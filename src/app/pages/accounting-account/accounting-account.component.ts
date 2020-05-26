import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from '../../services/modal-upload/modal-upload.service';
import { AccountingAccountService } from '../../services/accounting-accounts/accounting-account.service';
import { SubirArchivoService } from '../../services/modal-upload/subir-archivo.service';
// import { ModalSubaccountService } from '../../services/modal-subaccount/modal-subaccount.service';

@Component({
  selector: 'app-accounting-account',
  templateUrl: './accounting-account.component.html',
  styleUrls: ['./accounting-account.component.css']
})
export class AccountingAccountComponent implements OnInit {
  [x: string]: any;

  accountingAccounts: any[]=[];
  prog:any[]=[];
  tipo:string = 'contabilidad/upload-service';
  url: string ='accounting-accounts';
  collapsed: boolean = false;
  constructor(private _modalUpload: ModalUploadService,
              private _subirArchivo: SubirArchivoService,
              private _accounting: AccountingAccountService,
              // public _modalsubAccount: ModalSubaccountService
              ) { }

  ngOnInit(): void {

    this._subirArchivo.refreshNeeded$
    .subscribe(() => {
      this.getAccountingAccounts();
    });
    this.getAccountingAccounts();
  }

  isCollapsed(elem: HTMLElement){
    console.log(elem.className, 'before', this.collapsed);
    if(!this.collapsed){
      console.log('!iscollapsed');
      elem.className = 'ti-zoom-out';
      this.collapsed = true;
    } else {
      console.log('iscollapsed');
      elem.className = 'ti-zoom-in';
      this.collapsed = false;
    }

  }

  mostrarModal(){
    this._modalUpload.mostrarModal(this.tipo, this.url);

  }

  getAccountingAccounts(){
    this._accounting.getAllAccounts().subscribe(res => {
      this.accountingAccounts = res;
    })
  }

  mostrarModalSubAccount(){
    // this.sendData(acc.name);
    this._modalsubAccount.mostrarModal();
    // this._modalsubAccount.subAccount;
  }

  sendData(acc){
   this._modalsubAccount.getData(acc);
   this.mostrarModalSubAccount();
   this._modalsubAccount.fillPolizaId();
  }

}
