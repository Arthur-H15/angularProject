import { user } from './../../formularios/User/UserObject';
import { Component, OnInit } from '@angular/core';
import { UsuariosGet, UsuariosPost, createUsuario, updateUsuario } from 'src/assets/interfaces/APIInterface';
import { TabelasService } from '../tabelas.service';
import{MatDialog} from '@angular/material/dialog'
import { UserDialogComponent } from '../../formularios/User/user-dialog.component';

@Component({
  selector: 'app-tabela-usuarios',
  templateUrl: './tabela-usuarios.component.html',
  styleUrls: ['./tabela-usuarios.component.scss']
})
export class TabelaUsuariosComponent implements OnInit {
  dadosTabela: UsuariosGet[] = []
  displayedColumns: string[] = [
    'nome',
    'email',
    'numero',
    'excluido',
    'ativo',
    'actions'
  ];
  mostraTabela: boolean = false

  disableButton:boolean=false
    constructor(
    private tabelaService: TabelasService,
    private dialog:MatDialog
  ) { }
  ngOnInit(): void {
    
    this.buscarDadosTabela()
  }
  verificardadostabela() {
    return this.dadosTabela.length > 0
  }
buscarDadosTabela(){
  this.tabelaService.FindAllUser().subscribe(f => {
    if (!f) return;
    this.dadosTabela=[...f]
    console.log("buscadados",this.dadosTabela)
    this.mostraTabela = this.verificardadostabela()
  })
}
  deleteUser(user: any): void {
    console.log("aqui =>", user)
    //   this.tabelaService.deleteUser(user);
    //   this.dataSource = this.dataSource.filter(u => u.id !== user.id);
  }
  updateUser(id:number,user: updateUsuario) {
    console.log("edit=>", user)
    this.tabelaService.updateUser(id,user).subscribe(f=>{
      this.buscarDadosTabela()
    
    })
  }
  createUser(usuario:createUsuario){
    this.tabelaService.createUser(usuario).subscribe(f=>{ 
      console.log({f})
      this.buscarDadosTabela()
    }
          )

  }

  openDialog(data:{user:null | createUsuario,formMode:string}): void {
    this.disableButton = true;
    const dialogRef = this.dialog.open(UserDialogComponent, {
      disableClose: true, // Impede que o dialog seja fechado ao clicar fora dele ou pressionar a tecla ESC
      autoFocus: true, // Define o foco no primeiro elemento do dialog
      panelClass: 'dialog-destacado', // Classe CSS personalizada para o dialog destacado
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        console.log(result)
        if(result?.id){
          let {id,...body}=result
       return this.updateUser(id,body);
      }
        this.createUser(result)
      }
      this.disableButton=false
    });
  }
  openCreateForm(){
    this.openDialog({user:null,formMode:'create'})
  }
  openEditForm(user:createUsuario){
    this.openDialog({user,formMode:'edit'})
  }
  
}
