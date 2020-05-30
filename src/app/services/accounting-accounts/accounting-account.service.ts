import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { URL_SERVICIOS } from '../../settings/settings';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccountingAccountService {

  public notificacion = new EventEmitter<any>();

  account="api/contabilidad/get-account-by-id";


  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }


  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders();


  createSubAccount(object: any): Observable<any> {
    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // url += '?token=' + this.token;
      // return this.http.post<any>(URL_SERVICIOS +
      //     '/api/contabilidad/addSubAccount', object, {headers: this.httpHeaders})
      const req = new HttpRequest('POST',URL_SERVICIOS + '/api/contabilidad/addSubAccount', object,
      {
        headers: this.httpHeaders,
        reportProgress: true,
        responseType: 'text'
      })
            return this.http.request(req)
          .pipe(
            //  tap((res) =>{
            //   this.notificacion.emit(res)}
            )

          // );

    }

    getAccountById(id: any): Observable<any> {
      console.log('GET ALL ACCOUNTS TYPE');
        this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<any>(`${URL_SERVICIOS}/${this.account}/${id}`,  {headers: this.httpHeaders})
        .pipe(
          tap(()=> {this._refreshNeeded$.next;})
        )


      }



  getAllAccounts(): Observable<any[]> {
    console.log('GET ALL ACCOUNTS TYPE');
     this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.get<any[]>(URL_SERVICIOS + '/api/contabilidad/getAllCuentas', {headers: this.httpHeaders})
       .pipe(
        tap(()=> {this._refreshNeeded$.next;})
         )

    }

    getAllSubAccounts(): Observable<any[]> {
      console.log('GET ALL ACCOUNTS TYPE');
       this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<any[]>(URL_SERVICIOS + '/api/contabilidad/get-all-subaccounts', {headers: this.httpHeaders})


      }
}
