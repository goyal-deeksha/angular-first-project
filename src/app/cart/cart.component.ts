import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../product/product.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = []
  constructor(private cartService: CartService) {
    
   }

  ngOnInit(): void {
    this.cartService.cart.subscribe((p: Product) => {
      this.products.push(p);
    })
  }

}
