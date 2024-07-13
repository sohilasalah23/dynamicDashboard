import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }


  /* G E T    A L L    P R O D U C T S      */
  getAllProducts(): Observable<any>{
   return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/products"); 
  }
  getProductById(id:string){
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`); 
  }
  /* G E T    A L L      C A T E G O R I E S      */

  getCategory(): Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/categories"); 
   }
     /* G E T    A L L      B R A N D S      */

  getBrands(): Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/brands"); 
   }
   getBrandById(id:string){
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`); 
  }
}
