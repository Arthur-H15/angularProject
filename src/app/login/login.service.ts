import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AuthLoginPost } from 'src/assets/interfaces/APIInterface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router:Router
    
    ) { }
  padraoHTTP="http://localhost:3000"
  login(email: string, senha: string) {
    return this.http.post<AuthLoginPost>(this.padraoHTTP+'/auth/login', { email, senha }).subscribe(
     response => {localStorage.setItem('token', response.token),
     this.router.navigateByUrl('/dashboard');
    },
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }
  getPayload(){
    const token=localStorage.getItem("token")
    if(!token)return undefined
    return jwt_decode(token)
  }
}
