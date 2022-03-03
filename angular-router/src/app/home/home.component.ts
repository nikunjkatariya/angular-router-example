import { Component, OnInit } from '@angular/core';
import { RoutingProjectService } from './../routing-project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public rs:RoutingProjectService) {  
  }
  
  ngOnInit(): void {
    this.rs.GetProductsService().subscribe((data)=>
    this.showdata(data)+console.log(data));
  }
  
  ProductData:any;
  showdata(data:any){
    return this.ProductData=data.slice(0,3);
  }
}
