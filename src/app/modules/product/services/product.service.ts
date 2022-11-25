import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APICommonResponse } from '../models/API/Response/APICommonResponse';
import { APIProducts } from '../models/API/Response/APIProducts';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // TODO: create with behaviorsubject
  products: Product[] = [];

  // DI 
  constructor(private http: HttpClient) { }

  demoObservable(): Observable<number> {
    return new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      // if(false) {
      //   subscriber.error('msg');
      // }
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 3000);
    }).pipe(
      map( (x:number) => x * 10 )
    );
  }

  demoObservableStepByStep(): Observable<number> {
    const observable = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      // if(false) {
      //   subscriber.error('msg');
      // }
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 3000);
    });
    observable.pipe(
      map(x => x * 10)
    );
    return observable;
  }

  getProducts(): Observable<APICommonResponse> {
    return this.http.get<APICommonResponse>(`${environment.apiBaseUrl}/products`);
  }

  getProduct(id: number) {
    this.http.get(`${environment.apiBaseUrl}/products/${id}`);
  }
}
