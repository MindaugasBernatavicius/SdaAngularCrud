import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ProductlistComponent} from './modules/product/components/productlist/productlist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StarComponent} from './modules/product/components/star/star.component';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './modules/product/components/product/product.component';
import {ProductGuard} from './modules/product/guards/product.guard';
import { ProductModule } from './modules/product/product.module';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    RegistrationComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'about', component: AboutComponent},
            {path: 'home', component: HomeComponent},
            {path: 'register', component: RegistrationComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
        ]),
        ProductModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
