import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS_MOCK } from '../../mocks/products.mocks';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input()
  productsFromDashboard!: Product[];

  products: Product[] = [];

  // used for dependency injection 
  constructor(public productService: ProductService) { }

  // init component
  ngOnInit(): void {
    this.initProductsWithMock();
  }

  initProductsWithMock(): void {
    this.products = PRODUCTS_MOCK;
  }

}
