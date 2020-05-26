import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  httpHeaders: HttpHeaders;
  URL_SERVICIOS = 'http://localhost:8080';
  apidelete ="api/bank-movement/delete";


  constructor(
              public http: HttpClient
              ) { }


          pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
            const formdata: FormData = new FormData();
            this.httpHeaders = new HttpHeaders({ Accept: "application/json" });
            formdata.append("file", file);
            console.log("FORM DATA ", formdata);

            const req = new HttpRequest(
              "POST",
              "http://localhost:8080/api/bank-movement/upload-service",
              formdata,
              {
                headers: this.httpHeaders,
                reportProgress: true,
                responseType: "text"
              }
            );
            return this.http.request(req).pipe(
              tap(() => {
                // this._refreshNeeded$.next();
              })
            );
          }


          getAllBankMovementCsv(): Observable<any[]> {
            console.log('GET ALL ACCOUNTS TYPE');
             this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
              return this.http.get<any[]>(this.URL_SERVICIOS + '/api/bank-movement/get-bank-movement-csv', {headers: this.httpHeaders})
              .pipe(
                tap(() => {
                  // this._refreshNeeded$.next;
                })
              );

            }


            deleteBankMovement(id: any): Observable<any> {
              this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
              const req = new HttpRequest('DELETE', `${this.URL_SERVICIOS}/${this.apidelete}/${id}`, {
                headers: this.httpHeaders,
                reportProgress: true,
                responseType: 'text'
              })
              return this.http.request(req).pipe(
                tap(() =>  {
                  // this._refreshNeeded$.next();
                })
              );

            }



  getAllBankAccounts(): Observable<any[]> {
    console.log("GET ALL ACCOUNTS TYPE");
    this.httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .get<any[]>("http://localhost:8080/api/bank/get-all-bank-account", {
        headers: this.httpHeaders
      })
      .pipe(
        tap(() => {
          // this._refreshNeeded$.next;
        })
      );
  }

}
