import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pro: any;
  constructor(private ActRoute: ActivatedRoute, private Pro: Product) { }
  
  ngOnInit(): void {
    let id = this.ActRoute.snapshot.params['id'];

    this.pro = this.Pro.pro.find((item:any)=>{
      return id == item.id
    })
  }

}
