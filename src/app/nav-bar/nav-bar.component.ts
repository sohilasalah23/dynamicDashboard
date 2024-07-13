import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
isLoggedIN:boolean=false
numOfCartItems:number=0

constructor(private _authService:AuthService,private _cartService:CartService){}


ngOnInit(): void {
  this.checkLogIn()
  this.getnumOfCartIt()
}
getnumOfCartIt(){
  this._cartService.numOfCartItems.subscribe((res)=>
  this.numOfCartItems=res
  
)
}


checkLogIn(){
this._authService.userdata.subscribe((res)=>{
  if (this._authService.userdata.getValue()) {
    this.isLoggedIN=true
  } else {
    this.isLoggedIN=false
    
  }
})
}
 /*  L O  G     O U T         */ 
 logOut(){
  this._authService.logOut()
 }

}
