import { Component, OnInit } from '@angular/core';
import { Product } from './product.module';
import { CartService } from '../cart/cart.service';
import { Products } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = Products;
  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
  }

  increaseQuantity(id: number) {
    let idx = this.products.findIndex((p:Product) => p.id === id);
    this.products[idx].quantity++;
  }

  decreaseQuantity(id:number) {
    let idx = this.products.findIndex((p:Product) => p.id === id);
    if (this.products[idx].quantity > 0) {
      this.products[idx].quantity--;
    }
  }

  addToCart(product: Product) {
    this.cartService.addProductToCart({...product, quantity: 1})
  }

}
