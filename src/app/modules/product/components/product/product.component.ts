import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../models/IProduct';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../services/product';

@Component({
  selector: 'app-product',
  template: `
    <br>
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        {{ product?.title }}
      </div>
      <div class="card-footer">
        <button class="btn btn-outline-secondary" (click)="onBack()">
          <i class="fa fa-chevron-circle-left"></i> Back
        </button>
      </div>
    </div>
    <br>
    <form #f="ngForm" (ngSubmit)="onSubmit(f)">
      <div class="form-group">
        <label for="in1">Input</label>
        <!--[(ngModel)]="product.title"-->
        <input name="name" type="text" class="form-control" id="in1"
               [ngModel]="product?.title" (ngModelChange)="product.title=$event"
               #nf="ngModel"
               required
               [class.field-error]="f.submitted && nf.invalid">
        <!--<div [hidden]="nf.valid || nf.untouched" class="alert alert-danger">-->
        <div [hidden]="!f.submitted || nf.valid" class="alert alert-danger">
          Please don't leave the value empty
        </div>
      </div>
      <div [hidden]="!postError" class="alert alert-danger">{{ postErrorMsg }}</div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <!--{{ f.value | json }}-->
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = `Product`;
  product: IProduct;

  postError = false;
  postErrorMsg = ``;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
    // this.product = this.router.getCurrentNavigation().extras.state?.product;
  }

  ngOnInit(): void {
    // + - convert string to int
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(
      result => this.product = result,
      error => this.onHttpError(error)
    );
    this.title += `: ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  onSubmit(form: NgForm): void {
    console.log(form.valid);
    this.productService.postProductForm(this.product)
      .subscribe(
        result => console.log(`Success: `, result),
        error => this.onHttpError(error)
      );
  }

  private onHttpError(error: Error): void {
    console.log(`Error: `, error);
    this.postError = true;
    this.postErrorMsg = error.message;
  }
}
// product.component.ts
