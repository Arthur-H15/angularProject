import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosGet, UsuariosPatchId, UsuariosPost, createUsuario, updateUsuario } from 'src/assets/interfaces/APIInterface';

@Injectable({
  providedIn: 'root'
})
export class TabelasService {

  constructor(
    private http: HttpClient
    ) { }
  padraoHTTP="http://localhost:3000"
 FindAllUser() {
    return  this.http.get<UsuariosGet[]>(this.padraoHTTP+'/usuarios')
  }
  FindOneUser(id:number){
    return  this.http.get<UsuariosGet>(this.padraoHTTP+'/usuarios/'+id)
  }
  createUser(usuario:createUsuario){
    return this.http.post<UsuariosPost>(this.padraoHTTP+'/usuarios/',(usuario))
  }
  updateUser(id:number,usuario:updateUsuario){
    return this.http.patch<UsuariosPatchId>(this.padraoHTTP+'/usuarios/'+id,(usuario))
  }
}
