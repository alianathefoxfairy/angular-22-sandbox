import { Component, input, model, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  imports: [Child],
  selector: 'app-parent',
  styleUrl: './parent.scss',
  templateUrl: './parent.html',
})
export class Parent {
  userName = "Peter";
  selectedUser = "None Selected";

  quantity = signal(1);

  handleSave(){
    console.log('Saved event occurred from child');
  }

  handleSelection(user: string){
    console.log(user);
    this.selectedUser = user;
  }
}
