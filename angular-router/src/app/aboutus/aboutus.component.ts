import { Component, OnInit } from '@angular/core';
import { RoutingProjectService } from './../routing-project.service'; 

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public rs:RoutingProjectService) { }

  ngOnInit(): void {
    this.rs.GetProductsService().subscribe((data)=>
    this.showdata(data)+console.log(data));
  }

  ProductData:any;
  showdata(data:any){
    return this.ProductData=data;
  }

  data:any;
  AddtoCart(PurchasedItemData:any){
    this.data={
      "ProductID": PurchasedItemData.ProductID,
      "SKU": PurchasedItemData.SKU,
      "Price": PurchasedItemData.Price,
      "ImageURL": PurchasedItemData.ImageURL,
      "Description": PurchasedItemData.Description,
      "Brand": PurchasedItemData.Brand,
      "Quantity": PurchasedItemData.Quantity
    }
    this.rs.AddProductData(this.data).subscribe((data)=>{
      console.log(data);
      this.rs.GetProductsData().subscribe((data)=>this.rs.counter=Object.keys(data).length);
    });
  }



}
