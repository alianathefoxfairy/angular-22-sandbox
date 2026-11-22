import { Component, input, model, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.scss',
  templateUrl: './child.html',
})
export class Child {
  // Readonly value
  // username = input('');

  // Required value - no default ''
  username = input.required<string>();

  saved = output();
  selected = output<string>();

  quantity = model(1);

  onSave(){
    this.saved.emit();
  }
  selectUser(){
    this.selected.emit('John');
  }

  increase(){
    //this.quantity.set(4);
    this.quantity.update(q => q+1);
  }
  decrease(){
    this.quantity.update(q => q-1);
  }
}
