import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): IProduct[]{
    return [
      {id: 1, title: `Shoe A`, count: 150, price: 2.25, rating: 5},
      {id: 2, title: `Shoe B`, count: 200, price: 2.78, rating: 3.5},
      {id: 3, title: `Shoe-C`, count: 203, price: 2.7, rating: 3.55}
    ];
  }
}
