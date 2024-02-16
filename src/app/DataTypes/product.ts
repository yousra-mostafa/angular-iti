interface IProduct {
  ID: string;
  name: string;
  price: number;
  img: string;
}

interface ICategory {
  name: string;
}


export class Store{
  ID:string;
  storeName: string;
  storeLogo: string;
  productList: IProduct[];
  categoryList: ICategory[];
  clientName: string;
  rate: number;

  constructor(
    id:string,
    storeName: string,
    storeLogo: string,
    productList: IProduct[],
    categoryList: ICategory[],
    clientName: string,
    rate: number
  ) {
    this.ID= id;
    this.storeName = storeName;
    this.storeLogo = storeLogo;
    this.productList = productList;
    this.categoryList = categoryList;
    this.clientName = clientName;
    this.rate = rate;
  }
}

export { IProduct, ICategory };
