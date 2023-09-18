import { Component } from '@angular/core';
import { Product } from '../entites/entites';
import { ProductService } from '../services/products.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.allProducts();
  }

  allProducts(): void {
    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
    });
  }

}
