import { Component } from '@angular/core';

@Component({
  selector: 'app-company-services',
  templateUrl: './company-services.component.html',
  styleUrls: ['./company-services.component.scss']
})
export class CompanyServicesComponent {

  openService(){
    alert("Has abierto la galeria del servicio de Mongolin");
  }
}
