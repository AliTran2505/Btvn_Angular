import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  Cat:any;
  constructor(private category: Category) { }

  ngOnInit(): void {
    this.Cat = this.category.cat;
  }

}
