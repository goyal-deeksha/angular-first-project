import { Injectable } from "@angular/core";
import { Product } from "../product/product.module";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartSub = new Subject<Product>();
    cart = this.cartSub.asObservable();

    addProductToCart(p: Product) {
        this.cartSub.next(p);
    }
}