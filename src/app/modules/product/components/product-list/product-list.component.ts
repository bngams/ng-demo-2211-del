import { Component, OnInit } from '@angular/core';
import { PRODUCTS_MOCK } from '../../mocks/products.mocks';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  // used for dependency injection 
  constructor() { }

  // init component
  ngOnInit(): void {
    this.initProductsWithMock();
  }

  initProductsWithMock(): void {
    this.products = PRODUCTS_MOCK;
  }

}
