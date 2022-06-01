import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Category {
    cat:any;
    constructor(){
        this.cat = [
            {id:1,name:"Áo"},
            {id:2,name:"Quần"},
            {id:3,name:"Giày"},
        ];
    }
}
