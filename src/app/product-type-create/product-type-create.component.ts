import { Component } from '@angular/core';
import { ProductService } from '../services/products.services';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductType } from '../entites/entites';

@Component({
  selector: 'app-product-type-create',
  templateUrl: './product-type-create.component.html',
  styleUrls: ['./product-type-create.component.css']
})
export class ProductTypeCreateComponent {
  productType = new ProductType();
  

  constructor(private productTypeService: ProductService, 
    private route: ActivatedRoute,
    private router: Router) {}

  createProductType(): void {
    this.productTypeService.createType(this.productType).subscribe(() => {
      this.router.navigate(['/index.html']);
      console.log(this.productType)
    });
  }
}
