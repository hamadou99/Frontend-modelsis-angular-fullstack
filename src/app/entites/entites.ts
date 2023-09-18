export class ProductType {
  id: number = 0;
  name: string = '';
 
}

export class Product {
  id: number = 0;
  name: string = '';
  createdDate: string = '';
  productType = new ProductType(); 
}

export class ProductWithType{
  idProductType: number = 0;
  productName: string = '';

}
