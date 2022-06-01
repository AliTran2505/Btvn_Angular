
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Product {
    pro:any;
    constructor(){
        this.pro = [
            {id:'A1',name:"Áo sơ mi",price:10000,Category_id:1,Anh:'https://thuvienmuasam.com/uploads/default/original/2X/e/ebace14de8c553f414a830be6bb2b3c13a1194e6.jpeg'},
            {id:'A2',name:"Áo phông",price:10000,Category_id:1,Anh:'https://cf.shopee.vn/file/b4c2244a4a6eaab14dc9cb001207d85a'},
            {id:'A3',name:"Quần ống suông",price:10000,Category_id:2, Anh:'https://cf.shopee.vn/file/580cd3c03a6cc6f411abfd8c2b2a80c7'},
            {id:'A4',name:"Quần short",price:10000,Category_id:2, Anh:'https://cf.shopee.vn/file/e01be6bee8f42a4d3a904527f1c3b8fe'},
            {id:'A5',name:"Giày Air Force 1",price:10000,Category_id:3, Anh:'https://cdn.vortexs.io/api/images/8e55c7f0-6ba2-4ae6-b1f9-45aa9f9b1374/1920/w/best-seller-100-100-giay-nike-air-force-1-07-white-black-o-cj0952-100.jpeg'},
            {id:'A6',name:"Giày Converse",price:10000,Category_id:3, Anh:'https://bizweb.dktcdn.net/100/347/923/products/166800v-6.jpg?v=1594276040037'},
        ]
    }
}
