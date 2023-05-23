export class UsuariosGet{
    'id':number;
    'nome':string;
    'email':string;
    'numero':string;
    'excluido':number
    'ativo':number;
}
export class UsuariosPost{
    'id':number;
    'nome':string;
    'mensagem':string;
    
}
export class UsuariosPatchId extends UsuariosPost{
    
}
export class AuthLoginPost{
    'token':string;
}
export class createUsuario{
'nome': string;
'email': string;
'senha': string;
'numero': string;
}
export class updateUsuario{
nome?: string;
email?: string
senha?: string
numero?: string
excluido?: number
ativo?: number
}