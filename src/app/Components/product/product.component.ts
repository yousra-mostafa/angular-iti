import { Component, OnInit } from '@angular/core';
import { Store } from '../../DataTypes/product';
import { ProductListService } from '../../Services/product-list.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  storeP:Store;


  constructor(private _prdServ:ProductListService){
    // this.prdServ = _prdServ
    this.storeP = _prdServ.ProductsStore;

  }

  ngOnInit() {
  }
}

