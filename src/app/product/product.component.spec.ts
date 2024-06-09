import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductComponent } from "./product.component";
import { CartService } from "../cart/cart.service";

describe('Product Component', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>
    let mockCartService: CartService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductComponent],
            providers: [
                {
                    provide: CartService,
                    useValue: jasmine.createSpyObj('CartService', ['addProductToCart'])
                }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        component.products = [{id: 1, name: 'Test', quantity: 1, price: 10}];
        mockCartService = TestBed.inject(CartService);
        fixture.detectChanges();
    })

    it('should create Product Component', () => {
        expect(component).toBeTruthy();
    })
})