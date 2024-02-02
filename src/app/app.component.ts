import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { Store } from './DataTypes/product';
import { ProductListService } from './Services/product-list.service';
// import {  } from "module";
@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1-angular';
  clientName ='';
  // product: ProductComponent=
  storeP:Store;

  constructor(private _prdServ:ProductListService){
    // this.prdServ = _prdServ
    this.storeP = _prdServ.ProductsStore;

  }
}
