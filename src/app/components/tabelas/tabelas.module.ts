import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaUsuariosComponent } from './tabela-usuarios/tabela-usuarios.component';
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import { TabelasService } from './tabelas.service';
import { PhonePipe } from 'src/app/components/transforms/pipePhone';
import { UserDialogComponent } from '../formularios/User/user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [TabelaUsuariosComponent,PhonePipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule, 
    MatButtonModule,
    MatDialogModule,
  ],
  providers:[TabelasService]
  ,
  exports:[TabelaUsuariosComponent]
})
export class TableModule { }
