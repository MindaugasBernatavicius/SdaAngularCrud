import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-productlist',
  template: `
    <br>
    <div *ngIf="error" class="alert alert-danger" role="alert">
      <div>{{ error }}</div>
    </div>
    <div class="card">
      <div class="card-header">Table of products</div>
      <div class="card-body">
        <table class="table table-hover" *ngIf="products.length">
          <thead>
          <tr>
            <th>Title</th>
            <th>Count</th>
            <th>Price</th>
            <th>Review</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor='let product of products'>
            <td><a [routerLink]="['/products', product.id]" [state]="{product: product}">{{ product.title }}</a></td>
            <td>{{ product.count }}</td>
            <td>{{ product.price | currency: 'USD':'symbol':'4.2-2' }}</td>
            <td>
              <app-star
                [rating]="product.rating"
                (ratingClicked)="onRatingClicked($event)">
              </app-star>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductlistComponent implements OnInit {
  products = [];
  error = ``;

  constructor(private productService: ProductService, private router: Router) {
    // you have to call it in the constructor, before component lifecycle starts
    this.error = this.router.getCurrentNavigation().extras.state?.error;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onRatingClicked($event: string) {
    console.log($event);
  }
}
// productlist.component.ts
