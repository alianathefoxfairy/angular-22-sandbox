import { Component, inject } from '@angular/core';
import { ShoppingService } from '../../services/shopping-service';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected shoppingService = inject(ShoppingService);

}
