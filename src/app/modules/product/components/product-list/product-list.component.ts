import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PRODUCTS_MOCK } from '../../mocks/products.mocks';
import { APICommonResponse } from '../../models/API/Response/APICommonResponse';
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

  productsFromAPI: Product[] = [];

  $productsFromAPI: Observable<Product[]> = this.productService.getProducts().pipe(
    map( (res: APICommonResponse) => res.products || [])
  );

  products: Product[] = [];

  // used for dependency injection 
  constructor(public productService: ProductService) { }

  // init component
  ngOnInit(): void {
    // this.initProductsWithMock();
    this.initProductsWithAPI();
  }

  initProductsWithMock(): void {
    this.products = PRODUCTS_MOCK;
  }

  initProductsWithAPI(): void {
    console.log('initProductsWithAPI');
    const observableHttp = this.productService.getProducts();
    observableHttp.subscribe(res => {
      console.log('result from api', res);
      this.productsFromAPI = res.products || [];
    });
    console.log('after initProductsWithAPI');
  }

  demoObservable(): void {
    const observer = {
      next: (res: number) => console.log(res),
      error: (error: string) => console.log(error),
      complete: () => console.log('complete')
    };
    const observable = this.productService.demoObservable();
    observable.subscribe(observer);
  }

}
