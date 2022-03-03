import { Component, OnInit } from '@angular/core';
import { RoutingProjectService } from './routing-project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public rs:RoutingProjectService) { }

  ngOnInit(): void {
    this.rs.GetProductsData().subscribe((data)=>this.rs.counter=Object.keys(data).length);
  }
  title = 'angular-router';

}
