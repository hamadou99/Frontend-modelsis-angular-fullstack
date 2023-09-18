import { Component } from '@angular/core';
import { Product, ProductType, ProductWithType } from '../entites/entites';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/products.services';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product = new Product();
  productWithType = new ProductWithType();
  productTypes: ProductType[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
    this.allProductTypes();
  }
  
  updateProduct(): void {
  
    this.productWithType.idProductType = this.product.productType.id
    this.productWithType.productName = this.product.name

    this.productService.updateProduct(this.product.id, this.productWithType).subscribe(() => {
      this.router.navigate(['/index.html']);
    
      console.log(this.product.productType)
    });
  }

  allProductTypes(): void {
    this.productService.getAllType().subscribe((data) => {
      this.productTypes = data;
    },((error)=>{console.error();}
    ));
  } 
}
