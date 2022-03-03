import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutingProjectService {
  constructor(private ht:HttpClient) { }
  
  counter:number=0;

  GetProductsService(){
    return this.ht.get("http://localhost:3000/products/");
  }

  AddProductData(data:any){
    return this.ht.post("http://localhost:3000/Cart/",data);
  }

  GetProductsData(){
    return this.ht.get("http://localhost:3000/Cart/");
  }
}
