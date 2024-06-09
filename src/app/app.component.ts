import { Component } from '@angular/core';
import { Products } from './products';
import { Product } from './product/product.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = Products;
}
