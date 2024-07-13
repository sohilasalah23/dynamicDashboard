import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userdata:BehaviorSubject<any>=new BehaviorSubject('')
  constructor(private _httpclient:HttpClient , private _router:Router) {
   this.refreshNavBar()
   }

/*       T O K E N        */
 getUserInfo(){
  let decodedToken = JSON.stringify(localStorage.getItem("userToken"))
   let encodedToken=jwtDecode(decodedToken)
   this.userdata.next(encodedToken)
   
 } 

/*    S I G N     U P         */
  register(data:Account):Observable<any>{
    return this._httpclient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data)
  }
/*         L o g     i n        */
  login(data:Account):Observable<any>{
    return this._httpclient.post("https://ecommerce.routemisr.com/api/v1/auth/Signin",data)
  }

 /*  L O  G     O U T         */ 
 logOut(){
  localStorage.removeItem("userToken")
this.userdata.next(null)
  this._router.navigate(['/login'])


 }

 /*    R E F R E S H     */
 refreshNavBar(){
  if (localStorage.getItem("userToken")) {
    this.getUserInfo()
  } 
}
/* C H E C K     L O G  IN    */
checkLogIN(){
  if (localStorage.getItem("userToken")!=null) {
    this._router.navigate(["/home"])
  } 
}

}
