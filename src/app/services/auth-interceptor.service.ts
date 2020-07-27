import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: any =  JSON.parse( this.tokenService.get());

    let request = req;

    if (token){

      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token.value}`,
        }
      })
    }

    return next.handle(request);
  } 
}
