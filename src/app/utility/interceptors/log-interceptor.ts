import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { AppUtilityService } from '../services/app-utility.service';
/**
 * Sample Interceptor
 */
@Injectable()
export class LogInterceptor implements HttpInterceptor {
    constructor(public appUtilityService: AppUtilityService){ }
    intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        const started = Date.now();
        let ok:string;
        return next.handle(req)
            .pipe(
                tap(
                    event => ok = event instanceof HttpResponse ? 'Succeeded' : '',
                    error => ok = 'failed'
                ),
                finalize(()=>{
                   const elapsed = Date.now() - started;
                   const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms`;
                   if(this.appUtilityService.isDebugEnabled()){
                       console.debug(msg) ;
                   }
                })
            );
    }
}