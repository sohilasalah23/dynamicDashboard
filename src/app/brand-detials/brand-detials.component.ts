import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/core/interfaces/brand';
import { ProductService } from 'src/core/services/product.service';

@Component({
  selector: 'app-brand-detials',
  templateUrl: './brand-detials.component.html',
  styleUrls: ['./brand-detials.component.css']
})
export class BrandDetialsComponent {
  brandid:string=""
  brandDetials :Brand= {}as Brand
constructor(private _activatedRoute:ActivatedRoute, private _productService:ProductService ){
  
}
ngOnInit(): void {
  this.getId()
  this.getBrandById()

}
getId(){

  this._activatedRoute.paramMap.subscribe((res:any)=>
    this.brandid= res.params.id  
    )
}
getBrandById(){
  this._productService.getBrandById(this.brandid).subscribe({
    next:(res:any)=>{
      console.log(res.data);
      this.brandDetials=res.data

      
    },
    error:(err)=>{console.log(err);
    }
  })
}
}
