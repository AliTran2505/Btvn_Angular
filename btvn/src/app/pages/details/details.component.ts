import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { Category } from 'src/app/category';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pro:any;
  constructor(private Pro: Product, private Cat: Category) { 
    
  }

  ngOnInit(): void {
    this.pro = this.Pro.pro;
  }

}
