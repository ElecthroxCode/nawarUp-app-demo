import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss']
})
export class CustomerAccountComponent implements OnInit{
  formCustomer!:FormGroup;
  constructor( private _fb:FormBuilder){

  }
  ngOnInit(): void {
    this.startForm();
  }

  imgLoginBackground:string="/assets/images/login_01.jpg";

  startForm():void{
this.formCustomer = this._fb.nonNullable.group({
  name:['', [Validators.required]],
  phone:['', [Validators.required]],
  email:['',[Validators.required, Validators.email]],
  password:['', [Validators.required, Validators.minLength(8)]],
  passwordRepit:['',[Validators.required]],
  checkTermins:[false, [Validators.requiredTrue]]
  
}, {validators: this.passwordMatchValidator});
  }
 
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const passwordRepit = control.get('passwordRepit')?.value;
    return password === passwordRepit ? null : { mismatch: true };
  }
  onSubmit(){
    if(this.formCustomer.valid){
      alert(this.formCustomer.value);
    }else{
      alert("Formulario invalido!")
    }
  }


}
