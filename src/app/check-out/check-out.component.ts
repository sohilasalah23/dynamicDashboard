import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cartid:string=""

  shippingAddress:FormGroup= new FormGroup({
    details:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]),
    city:new FormControl('',Validators.required),
  })

  constructor(private _CartService:CartService , private _activatedRoute:ActivatedRoute){
   
  }

  ngOnInit(): void {
    this.getCartId()
  }
  getCartId(){

    this._activatedRoute.paramMap.subscribe(
      (res:any)=>{
        this.cartid=res.params.cartId

      }
    )
  }


  handleOnline(){
    this._CartService.generateOnlinePayment(this.cartid,this.shippingAddress.value).subscribe({
      next:(res)=>{
        if(res.status=="success"){
          window.location.href=res.session.url
        }
      }
    })
  }


}
