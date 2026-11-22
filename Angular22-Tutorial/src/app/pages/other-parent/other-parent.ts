import { Component, inject, input, model, signal, viewChild } from '@angular/core';
import { OtherChild } from '../other-child/other-child';
import { CartService } from '../../services/cart-service';

@Component({
  imports: [OtherChild],
  selector: 'app-other-parent',
  styleUrl: './other-parent.scss',
  templateUrl: './other-parent.html',
})
export class OtherParent {
  username = 'Vivek';
  quantity = 8;
  parentQuantity = 1;

  cartService = inject(CartService);
  child = viewChild.required(OtherChild);

  changeChildMessage(){
    this.child()?.showMessage();
  }
  resetChildMessage(){
    this.child().resetMessage();
  }

  updateQuantity(value:number){
    this.parentQuantity = value;
  }
}
