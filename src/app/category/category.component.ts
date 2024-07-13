import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/core/services/product.service';
import { Category } from '../../core/interfaces/category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  allcategories:Category[]=[]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0:{
        items:1,
        nav:true
    },
    400:{
      items:2,
      nav:true
    },
    600:{
        items:3,
        nav:true
    },
    1000:{
        items:5,
        nav:true,
        loop:true
    }

    },
    nav: true
  }
  constructor(private _productService: ProductService) {
    
  }

ngOnInit(): void {
  this.getCategory()
}

  getCategory(){
    this._productService.getCategory().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.allcategories=res.data      
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
