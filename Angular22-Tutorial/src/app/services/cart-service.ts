import { computed, effect, Service, signal } from '@angular/core';

@Service()  // For communication between unrelated components
export class CartService {

    price = signal(100);
    quantity = signal(2);

    // Store common data in a shared service and access it from different components by injecting the service
    private notificationCount = signal(3);
    readonly notifications = this.notificationCount.asReadonly();

    total = computed(()=> this.price() * this.quantity());

    readonlyQuantity = this.quantity.asReadonly();

    constructor(){
        effect(()=> {
            localStorage.setItem('cart-total', this.total().toString());
        });
    }

    increaseQuantity(){
        this.quantity.update(q => q+1);
    }

    changePrice(price: number){
        this.price.set(price);
    }
}
