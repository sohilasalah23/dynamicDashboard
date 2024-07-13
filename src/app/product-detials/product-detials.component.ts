import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/core/interfaces/product';
import { ProductService } from 'src/core/services/product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.css']
})
export class ProductDetialsComponent implements OnInit {
  productid:string=""
  productdetials :Product= {}as Product
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
constructor(private _activatedRoute:ActivatedRoute,
   private _productService:ProductService,
   private _cartService:CartService ){

  
}
ngOnInit(): void {
  this.getId()
  this.getProductById()

}
getId(){

  this._activatedRoute.paramMap.subscribe((res:any)=>
    this.productid= res.params.id  
    )
}
getProductById(){
  this._productService.getProductById(this.productid).subscribe({
    next:(res:any)=>{
      console.log(res.data);
      this.productdetials=res.data

      
    },
    error:(err)=>{console.log(err);
    }
  })
}

  /* A D D   T O    C A R T */

addToCart(id:string){
  this._cartService.addToCart(id).subscribe({
    next:(res)=>{console.log(res);
      this._cartService.numOfCartItems.next(res.numOfCartItems)

    },
    error:(err)=>{
      console.log(err);
      
    }
  })

}
}



