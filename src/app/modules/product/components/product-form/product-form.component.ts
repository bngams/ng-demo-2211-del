import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output()
  productSubmit = new EventEmitter<Product>();

  // for template driven form
  // product: Product = {} as Product;

  // for reactive form
  // TODO: type form and fields
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.min(1)]),
  });

  constructor(private productService: ProductService) {
    // <visibility> <attrname>: <type>
    // if syntax ok; typescript can create attributes for us
    // => this.productService = productService;
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.productForm.value);
    this.productSubmit.emit(this.productForm.value as Product);
    this.productService.products.push(this.productForm.value as Product);
  }

}
