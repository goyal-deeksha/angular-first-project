import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.module';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
  }

  increaseQuantity() {
    this.product.quantity++;
  }

  decreaseQuantity() {
    this.product.quantity--;
  }

  addToCart() {
    this.cartService.addProductToCart(this.product)
  }

}
