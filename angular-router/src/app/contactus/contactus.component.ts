import { Component, OnInit } from '@angular/core';
import { RoutingProjectService } from '../routing-project.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public rs:RoutingProjectService) { }
  ProductData:any;
  ngOnInit(): void {
    this.rs.GetProductsData().subscribe((data)=>this.ProductData=data);
  }
  
}
