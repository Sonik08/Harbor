import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../models/api-response';
export class JsonDateInterceptor implements HttpInterceptor {

  private _isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?Z$/;

  intercept(req: HttpRequest<ApiResponse<any>>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map( (val: HttpEvent<ApiResponse<any>>) => {
      if (val instanceof HttpResponse){
        const data = val.body.data;
        for ( const entry of data){
          this.convert(entry);
        }
      }
      return val;
    }));
  }

  isIsoDateString(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === 'string'){
      return this._isoDateFormat.test(value);
    }    
    
    return false;
  }
  
  convert(body: any){
    if (body === null || body === undefined ) {
      return body;
    }
    if (typeof body !== 'object' ){
      return body;
    }
    for (const key of Object.keys(body)) {
      const value = body[key];
      if (this.isIsoDateString(value)) {
        body[key] = new Date(value);
      } else if (typeof value === 'object') {
        this.convert(value);
      }
    }
  }
}