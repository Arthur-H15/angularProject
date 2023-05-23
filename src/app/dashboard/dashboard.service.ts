import  jwt_decode  from 'jwt-decode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  constructor(
    private http: HttpClient,
    private router:Router
    
    ) { }
  padraoHTTP="http://localhost:3000"
 findAll(){
    this.http.get(this.padraoHTTP+"/usuarios").subscribe(
        f=>{
            console.log({f})
        }

    )
 }
 getPayload(){
  const token=localStorage.getItem("token")
  if(!token)return undefined
  return jwt_decode(token)
}
}
