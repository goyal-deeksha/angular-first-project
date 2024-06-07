import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
