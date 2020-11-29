import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  styles: [
    'li.active > a { color: red !important; }',
  ],
  template: `
    <header>
      <nav class="navbar navbar-expand-md navbar-dark static-top bg-dark">
        <a class="navbar-brand">Fixed navbar</a>
        <button class="navbar-toggler" type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li [routerLinkActive]="['active']" class="nav-item">
              <a class="nav-link" [routerLink]="['/home']">Home</a>
            </li>
            <li [routerLinkActive]="['active']" class="nav-item">
              <a class="nav-link" [routerLink]="['/about']">About</a>
            </li>
            <li [routerLinkActive]="['active']" class="nav-item">
              <a class="nav-link" [routerLink]="['/products']">Products</a>
            </li>
          </ul>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
              <li [routerLinkActive]="['active']" class="nav-item">
                <a class="nav-link" [routerLink]="['/register']">Register</a>
              </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>`
})

export class HeaderComponent {
}
