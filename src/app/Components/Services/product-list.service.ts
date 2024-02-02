import { Injectable } from '@angular/core';
import { Store } from '../../DataTypes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }

  ProductsStore: Store = new Store(
    "phone Store",
    "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1706454991~exp=1706455591~hmac=3733404d3bf5c50edeaf7b5108b4c588e3edb2aeeea044750edf62531b018042",
    [
      { name: 'Product 1', price: 20, img: 'https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg?w=740&t=st=1706452944~exp=1706453544~hmac=722790b188b65d87a87e5c23a24ff799780e9a193f5676bc0fba33fda98e3471' },
      { name: 'Product 2', price: 30, img: 'https://img.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg?w=900&t=st=1706453031~exp=1706453631~hmac=4a2a98dc38e64b029545af09c6f78aeb96e4871cedee22e6ad2a0e4508fa560b' },
    ],
    [
      { name: 'Category 1' },
      { name: 'Category 2' },
    ],
    '',
    3
  );
}
