import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from '../components/tabelas/tabelas.module';
import { FormularioModule } from '../components/formularios/formulario.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    dashboardRoutingModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    FormularioModule
    
  ],
  providers:[DashboardService]
})
export class dashboardModule { }
