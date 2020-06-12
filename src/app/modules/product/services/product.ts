import {Injectable} from '@angular/core';
import {IProduct} from '../models/IProduct';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = `http://localhost:4567/products`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getProducts(): any {
    return this.httpClient.get(this.url);
  }

  getProductById(id: number): any {
    return this.httpClient.get(this.url + '/' + id);
  }

  // getProducts(): IProduct[] {
  //   return [
  //     {id: 1, title: `Shoe A`, count: 150, price: 2.25, rating: 5},
  //     {id: 2, title: `Shoe B`, count: 200, price: 2.78, rating: 3.5}
  //   ];
  // }

  constructor(private httpClient: HttpClient) {
  }

  postProductForm(product: IProduct): any {
    // console.log(product.id);
    return this.httpClient.put(this.url + '/' + product.id, product, this.httpOptions);
    // return of(product);
  }
}
