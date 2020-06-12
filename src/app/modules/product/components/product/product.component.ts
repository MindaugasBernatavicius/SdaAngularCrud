import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../models/IProduct';

@Component({
  selector: 'app-product',
  template: `
    <br>
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        {{ product.title }}
      </div>
      <div class="card-footer">
        <button class="btn btn-outline-secondary" (click)="onBack()">
          <i class="fa fa-chevron-circle-left"></i> Back
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = `Product`;
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.product = this.router.getCurrentNavigation().extras.state?.product;
  }

  ngOnInit(): void {
    // + - convert string to int
    const id = +this.route.snapshot.paramMap.get('id');
    this.title += `: ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}

// product.component.ts
