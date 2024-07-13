import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading:boolean = false
  APIError:string=""
  isNotValidForm:boolean = false

  constructor(private _authService:AuthService, private _router:Router){
    this._authService.checkLogIN()
  }
  registerForm:FormGroup = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(13)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
  })



  register(form:FormGroup){
    if (form.valid) {
      this.isLoading=true
      this._authService.register(form.value).subscribe({
        next:(res:any)=>{console.log("succes" ,res)
      this.isLoading=false
        this._router.navigate(["/login"])
      },
        error:(err:any)=>{
          this.APIError=err.error.message
      this.isLoading=false
          console.log("err",err)}
      })
      
    }else{
      this.isNotValidForm =true
    }
    
  }
}
