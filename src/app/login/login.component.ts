import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  isLoading:boolean = false
  APIError:string=""
  isNotValidForm:boolean = false

  constructor(private _authService:AuthService, private _router:Router){
    this._authService.checkLogIN()
  }
  logInForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    })



  login(form:FormGroup){
    if (form.valid) {
      this.isLoading=true
      this._authService.login(form.value).subscribe({
        next:(res:any)=>{console.log("succes" ,res)
      this.isLoading=false
      localStorage.setItem("userToken", res.token)
      this._authService.getUserInfo()
      console.log(res.token);
      
        this._router.navigate(["/home"])
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
