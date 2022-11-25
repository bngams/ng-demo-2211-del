import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {

  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  productsDashboard: Product[] = [];

  // only for DI (dependency injection)
  constructor() { }

  // initiaze component (after constructor)
  ngOnInit(): void {
    console.log('ngOnInit is @ViewChild loaded ', this.productListComponent);
    // this.productListComponent => undefined
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is @ViewChild loaded ', this.productListComponent);
    // this.productListComponent.products
  }

  addProduct(product: Product): void {
    console.log('new product to add', product);
    this.productsDashboard.push(product);
    this.productListComponent.products.push(product);
  }

}
