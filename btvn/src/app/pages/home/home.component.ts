import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product:any;

  constructor(
    private actRoute : ActivatedRoute, private datapro : Product,
  ) { }

  ngOnInit(): void {
    this.product = this.datapro.pro;
  }

}
