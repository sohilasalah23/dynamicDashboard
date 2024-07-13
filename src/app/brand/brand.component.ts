import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/core/interfaces/brand';
import { ProductService } from 'src/core/services/product.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  allbrands : Brand[]=[]
constructor(private _productService:ProductService){}

ngOnInit(): void {
  this.getBrands()
}

getBrands(){
  this._productService.getBrands().subscribe({
    next:(res)=>{
      console.log(res.data);
      
      this.allbrands=res.data
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
