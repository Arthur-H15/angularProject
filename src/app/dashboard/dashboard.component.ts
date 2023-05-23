import { Component, OnInit, Type } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private dashboardService:DashboardService
  ){}
 component:any="TabelaUsuariosComponent"
  ngOnInit(): void {
    console.log("retorno FindAll",this.dashboardService.findAll(),this.dashboardService.getPayload())
    // throw new Error('Method not implemented.');
  }


}
