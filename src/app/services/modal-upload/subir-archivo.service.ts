import { Injectable } from '@angular/core';
import {  HttpEvent, HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  httpHeaders: HttpHeaders;



  constructor(private http: HttpClient) { }


  pushFileToStorage(file: File, tipo:any): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    this.httpHeaders = new HttpHeaders({ Accept: "application/json" });
    formdata.append("file", file);
    console.log("FORM DATA ", formdata);
    console.log('TIPO ', tipo);


    const req = new HttpRequest(
      "POST",
      "http://localhost:8080/api/" + tipo ,
      formdata,
      {
        headers: this.httpHeaders,
        reportProgress: true,
        responseType: "text"
      }
    );
    return this.http.request(req).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }


}
