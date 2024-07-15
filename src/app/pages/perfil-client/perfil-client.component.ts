import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-client',
  templateUrl: './perfil-client.component.html',
  styleUrls: ['./perfil-client.component.scss']
})
export class PerfilClientComponent {
  highlight = { 'font-weight': 'bold',
    'color' : '#071952'
};

imgPerfil="/assets/images/perfil-mujer.jpg";
imgBackgoundHeader:string = "https://media.sproutsocial.com/uploads/5D-LinkedIn-Personal-Design.png"; 

}
