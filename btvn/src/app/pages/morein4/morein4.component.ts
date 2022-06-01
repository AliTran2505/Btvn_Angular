import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category';
@Component({
  selector: 'app-morein4',
  templateUrl: './morein4.component.html',
  styleUrls: ['./morein4.component.css']
})
export class Morein4Component implements OnInit {
  pro:any = [];
  constructor(private ActRoute: ActivatedRoute, private Pro: Product) { 
    
  }

  ngOnInit(): void {
    this.pro = [];
    let id_cat = this.ActRoute.snapshot.params["id"];
    this.Pro.pro.map((item:any)=>{
      if(item.Category_id == id_cat){
        this.pro.push(item);
      }else{

      }
    })
    
  }
  

}
