import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CartComponent } from "./cart.component";
import { CartService } from "./cart.service";
import { Product } from "../product/product.module";
import { BehaviorSubject } from "rxjs";

describe('Cart Component', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;
    let mockCartService: CartService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CartComponent],
            providers:[{provide: CartService, useValue: jasmine.createSpyObj('CartService',['cart'])}]
        }).compileComponents();
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        mockCartService = TestBed.inject(CartService);
        mockCartService.cart = new BehaviorSubject<Product[]>([]).asObservable();
        fixture.detectChanges();
    })

    it('should create cart component', () => {
        expect(component).toBeTruthy();
    })
})