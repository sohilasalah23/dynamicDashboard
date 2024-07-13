import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from 'src/core/interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetials:Cart ={ }as Cart
  cartisempty:boolean= false
  isloading:boolean=true
  constructor(private _cartService:CartService){
 
  }

  ngOnInit(): void {
    this.checkCart()
    this.getCart( )
  }

checkCart(){
  if (!this.cartDetials) {
 this.cartisempty= true
  this.isloading=false
  console.log(this.cartDetials);
  
    
  }
}
  /*  G E T     C A R T     */
getCart(){
  this._cartService.getCart().subscribe({
    next:(res) => { this.cartDetials = res
      this.cartisempty= false
      this.isloading= false
    }
   ,error:(err)=>{console.log(err)
    this.cartisempty= true
    this.isloading=false}
  })
}
/*  U P D A T E    C A R T     */
updateCart(id:string,count:number){
  this._cartService.updateCart(id,count).subscribe({
    next:(res =>{ this.cartDetials = res
      this.cartisempty= false
      this.isloading= false

    }
    ),error:(err)=>{
      console.log(err);
      
    }
  })
}


/*  R E M O V E    I T E M   C A R T     */

removeItem(id:string){
  this._cartService.removeItem(id).subscribe({
    next:(res) =>{ this.cartDetials = res
      this.cartisempty= false
      this.isloading= false
      this._cartService.numOfCartItems.next(res.numOfCartItems)


    }
  ,error:(err)=>console.log(err)

  })
}

/*  R E M O V E      C A R T     */
removeCart(){
  this._cartService.removeCart().subscribe({
    next:(res) => {this.cartDetials = res
      this.cartisempty= true
      this.isloading= false
      this._cartService.numOfCartItems.next(0)


    }
  ,error:(err)=>console.log(err)

  })
}
}
