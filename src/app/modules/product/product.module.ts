import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductlistComponent} from './components/productlist/productlist.component';
import {StarComponent} from './components/star/star.component';
import {ProductComponent} from './components/product/product.component';
import {RouterModule} from '@angular/router';
import {ProductGuard} from './guards/product.guard';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ProductlistComponent,
    StarComponent,
    ProductComponent
  ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'products', component: ProductlistComponent},
            {path: 'products/:id', canActivate: [ProductGuard], component: ProductComponent},
        ]),
    ]
})
export class ProductModule { }