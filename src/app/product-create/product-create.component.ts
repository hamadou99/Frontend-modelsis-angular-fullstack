import { Component } from '@angular/core';
import { Product, ProductType, ProductWithType } from '../entites/entites';
import { ProductService } from '../services/products.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  
  product = new Product();
  productWithType = new ProductWithType();
  productTypes: ProductType[] = [];
  
  constructor(private productService: ProductService, 
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      this.allProductTypes();
    }
  createProduct(): void {
    
      this.productService.createProduct(this.productWithType).subscribe(() => {
        this.router.navigate(['/index.html']);
      },(error=>{
        alert("Une erreur s'est produite. Assurer vous que ce produit n'exite pas !")
      }));
    
  }

  allProductTypes(): void {
    this.productService.getAllType().subscribe((data) => {
      this.productTypes = data;
    });
  } 

}
