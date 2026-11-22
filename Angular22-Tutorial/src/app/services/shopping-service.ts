import { Service, signal } from '@angular/core';

@Service()
export class ShoppingService {
    cartCount = signal(0);

    addToCart(){
        this.cartCount.update(count => count+1);
    }
}
