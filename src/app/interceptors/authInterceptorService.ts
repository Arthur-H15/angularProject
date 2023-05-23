import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private router:Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwt_decode(token) as any;
      const expirationTime = decodedToken.exp * 1000; // transforma o tempo em milissegundos
      const now = new Date().getTime();

      if (now > expirationTime) {
        this.router.navigate(['/login']);

        // Token expirado
      } 
      else {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        // Token válido
      }
    } 
    else {
      this.router.navigate(['/login']);

      // Não há token
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Redirect to login page
        this.router.navigate(['/login']);
          
        }
        return throwError(error);
      })
    );
  }
}
