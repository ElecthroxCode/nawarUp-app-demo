import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  formLogin!:FormGroup;
  constructor(private _fb:FormBuilder){}
  ngOnInit(): void {
    this.startFormLogin();
  }

  onSubmit(){
    if(this.formLogin.valid){
      alert("El login exitoso");
    }else{
      alert("Login invalido!!")
    }
  }

  startFormLogin(){
    this.formLogin = this._fb.group({
      user:['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


}
