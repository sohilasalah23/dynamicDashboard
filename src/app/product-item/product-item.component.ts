import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/core/interfaces/product';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product :Product ={} as Product

  constructor(private _cartService:CartService){}
  /* A D D   T O    C A R T */

  addToCart(id:string){
    this._cartService.addToCart(id).subscribe({
      next:(res)=>{
        console.log( "res" ,res);   
       this._cartService.numOfCartItems.next(res.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }
}
