import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-company',
  templateUrl: './perfil-company.component.html',
  styleUrls: ['./perfil-company.component.scss']
})
export class PerfilCompanyComponent {

  highlight = { 'font-weight': 'bold',
                'color' : '#071952'
   };
  
  serviceActive:boolean=false;

  onService(){
    this.serviceActive = true;
  }
  hours:string[] = ["1", "2","3","4","5","6","7","8","9","10","11", "12"];
  minutes:string[] = [];
  hr:string = "";
  min:string = "";

  constructor(){
    this.setRangeMinute(5);
  }

  setRangeMinute(factor:number){
    for(let i = 0; i < 65; i = i+factor){
      this.minutes.push(i +"");
      if(this.minutes[i] == "0"){
        this.minutes[i] = "00";
      }
      if(this.minutes[i] == "5"){
        this.minutes[i] = "05";
      }
      if(this.minutes[i] == "60"){
        this.minutes[i] = "59";
      }
      
    }
  }
  
}
