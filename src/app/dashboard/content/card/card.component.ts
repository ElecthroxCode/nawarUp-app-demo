import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  imgUrl:string = "/assets/images/perfil-mujer.jpg";
  imgTry:string = "#dee2e6";
  priceOff:string="#00A650";

  constructor(private router:Router){}

onCompany(){
  this.router.navigate(['/company']);
}

}
