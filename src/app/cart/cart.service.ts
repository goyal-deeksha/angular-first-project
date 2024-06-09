import { Injectable } from "@angular/core";
import { Product } from "../product/product.module";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartSub = new BehaviorSubject<Product[]>([]);
    cart = this.cartSub.asObservable();

    addProductToCart(p: Product) {
        const currentCart = this.cartSub.getValue();
        currentCart.push(p);
        this.cartSub.next(currentCart);
    }

    removeProductFromCart(productId: number) {
        const currentCart = this.cartSub.getValue();
        const idx = currentCart.findIndex((p: Product) => p.id === productId);
        currentCart.splice(idx, 1);
        this.cartSub.next(currentCart);
    }

    decreaseQuantity(productId: number) {
        const currentCart = this.cartSub.getValue();
        const idx = currentCart.findIndex((p: Product) => p.id === productId);
        if (currentCart[idx].quantity > 0) {
            currentCart[idx].quantity--;
        }
        this.cartSub.next(currentCart);
    }

    increaseQuantity(productId: number) {
        const currentCart = this.cartSub.getValue();
        const idx = currentCart.findIndex((p: Product) => p.id === productId);
        currentCart[idx].quantity++;
        this.cartSub.next(currentCart);
    }
}