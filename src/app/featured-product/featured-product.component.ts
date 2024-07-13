import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/interfaces/product';
import { ProductService } from 'src/core/services/product.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit{

  allproduct:Product[]=[]
  searchTerm:string = ""
constructor(private _ProductService:ProductService){}





ngOnInit(): void {
  this.getAllProducts()
}
  /* G E T    A L L    P R O D U C T S      */
  getAllProducts() {
    this._ProductService.getAllProducts().subscribe({
      next:(res)=>{
        this.allproduct=res.data
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
