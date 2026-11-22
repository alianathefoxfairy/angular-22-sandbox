import { Component, input, model, output, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-other-child',
  styleUrl: './other-child.scss',
  templateUrl: './other-child.html',
})
export class OtherChild {

  // 1. Input()
  userName = input<string>('');
  quantityValue = input<number>(0);

  // 2. Output()
  quantityChanged = output<number>();
  increaseQuantity(){
    this.quantityChanged.emit(this.quantityValue() + 1);
  }

  // 3. Model()
  quantity = model<number>(1);

  increase(){
    this.quantity.update(value => value+1);
  }
  decrease(){
    this.quantity.update(value => value-1);
  }

  // 5. ViewChild
  message = signal('Hello from child');

  showMessage(){
    this.message.set('Message changed by parent');
  }
  resetMessage(){
    this.message.set('Message reset by parent');
  }
}
