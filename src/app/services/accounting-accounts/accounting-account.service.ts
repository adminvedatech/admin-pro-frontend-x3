import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../settings/settings';


@Injectable({
  providedIn: 'root'
})
export class AccountingAccountService {

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }


  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders();


  createSubAccount(object: any): Observable<any> {
    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // url += '?token=' + this.token;
      return this.http.post<any>(URL_SERVICIOS +
          '/api/contabilidad/addSubAccount', object, {headers: this.httpHeaders})

    }


  getAllAccounts(): Observable<any[]> {
    console.log('GET ALL ACCOUNTS TYPE');
     this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.get<any[]>(URL_SERVICIOS + '/api/contabilidad/getAllCuentas', {headers: this.httpHeaders})
      // .pipe(
      //   map( obj => obj.filter(r => (r.subaccount.id !==null)[0]  )
      //   )
      // );


    }

    getAllSubAccounts(): Observable<any[]> {
      console.log('GET ALL ACCOUNTS TYPE');
       this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<any[]>(URL_SERVICIOS + '/api/contabilidad/get-all-subaccounts', {headers: this.httpHeaders})


      }
}
