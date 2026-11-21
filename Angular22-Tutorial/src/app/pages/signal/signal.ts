import { Component, computed, effect, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  imports: [],
  selector: 'app-signal',
  styleUrl: './signal.scss',
  templateUrl: './signal.html',
})
export class Signal {

  cartService = inject(CartService);
  count = signal(0);

  //price = signal(100);
  //quantity = signal(2);

  isDiscountApplied = signal(false);

  // ReadOnly value
  //total = computed(()=> {
  //  if(this.isDiscountApplied()) {
  //    console.log('Calculating total...');
  //    return this.price() * this.quantity() * 0.9;
  //  }
  //  return this.price() * this.quantity();
  //});

  theme = signal('light');

  constructor(){
  //  effect(()=> {
      //console.log(this.count());
  //    localStorage.setItem('theme', this.theme());
  //  });
  }

  //readonlyCount = this.count.asReadonly();

  increment(){
    this.count.update(value => value +1);
  }

  decrement(){
    this.count.update(value => value -1);
  }

  reset(){
    this.count.set(0);
    this.theme.set('dark');
    //this.price.set(200);
    //this.quantity.set(3);
  }
}
