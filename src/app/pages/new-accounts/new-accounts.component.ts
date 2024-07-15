import { Component } from '@angular/core';

@Component({
  selector: 'app-new-accounts',
  templateUrl: './new-accounts.component.html',
  styleUrls: ['./new-accounts.component.scss']
})
export class NewAccountsComponent {

  newAccountClient:boolean = false;

  onNewAccountCustomerTrue(){
    this.newAccountClient = true;
  }
  onNewAccountCustomerFalse(){
    this.newAccountClient = false;
  }

}
