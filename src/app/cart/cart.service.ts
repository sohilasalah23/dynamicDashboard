import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShippingAddress } from 'src/core/interfaces/shipping-address';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  token:string| null= localStorage.getItem("userToken")
  numOfCartItems:BehaviorSubject<number>= new BehaviorSubject(0)


  constructor(private _httpClient:HttpClient) { 
    this.getnumOfCartItems()

  }
ngOnInit(): void {
  console.log(this.numOfCartItems)

}

getnumOfCartItems(){
  this.getCart().subscribe({
    next:(res:any)=>{
      this.numOfCartItems.next(res.numOfCartItems)
    }
    
  })

}
  /* A D D   T O    C A R T */
  addToCart(productId:string):Observable<any>{
  return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/cart",
  {productId:productId},
 )
}
/*  G E T     C A R T     */
getCart():Observable<any>{
  return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/cart",
)
  }
/*  U P D A T E    C A R T     */
updateCart(id:string,count:number):Observable<any>{
  return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
  {count:count},)
}
/*  R E M O V E    I T E M   C A R T     */

removeItem(id:string):Observable<any>{
  return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
)
}

/*  R E M O V E      C A R T     */
removeCart():Observable<any>{
  return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
)
}


/*   O N L I N E      P A Y M E N T      */
generateOnlinePayment(cartId:string , shippingAddress:ShippingAddress):Observable<any>{
  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
  {shippingAddress:shippingAddress},
)
}
}
