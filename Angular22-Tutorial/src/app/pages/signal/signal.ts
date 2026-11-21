import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signal',
  styleUrl: './signal.scss',
  templateUrl: './signal.html',
})
export class Signal {
  count = signal(0);

  increment(){
    this.count.update(value => value +1);
  }

  decrement(){
    this.count.update(value => value -1);
  }

  reset(){
    this.count.set(0);
  }
}
