import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.scss']
})
export class CompanyAccountComponent implements OnInit{
  formCompany!:FormGroup;
  imgLoginBackground:string = "/assets/images/login_02.jpg";

  constructor(private _fb:FormBuilder){}

  ngOnInit(): void {
    this.startForm();
  }

  startForm(){
    this.formCompany = this._fb.group({
      name:['', [Validators.required]],
      manager:['', [Validators.required]],
      phone:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      passwordRepit:['', [Validators.required]],
      checkTermins:[false, [Validators.requiredTrue]],
    }, {validators: this.passwordMatchValidator});
  }

//fuction compare password
passwordMatchValidator(control:AbstractControl): ValidationErrors | null{
  const pass = control.get("password")?.value;
  const passRepit = control.get("passwordRepit")?.value;

  return pass === passRepit ? null : {mismatch:true};

}


//function submit form
  onSubmit(){
    if(this.formCompany.valid){
      alert("El formulario de Company es valido!");
    }else{
      alert("Formulario de company es INVALIDO!")
    }
  }


  
}
