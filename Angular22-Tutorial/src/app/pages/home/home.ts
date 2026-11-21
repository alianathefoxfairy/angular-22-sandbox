import { Component, viewChild } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Profile } from '../profile/profile';
import { TextStyle } from '../../text-style';

@Component({
  imports: [Profile, TextStyle],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  title = "Home Component";
  price = 500;
  quantity = 2;

  @ViewChild('email') email!: ElementRef;
  focusInput(){
    this.email.nativeElement.focus();
  }

  getMessage(){
    return 'Example of template expressions';
  }

  showMessage(name: string){
    console.log(name);
  }

  getValue(event: Event){
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }

  keyPressed(event: KeyboardEvent){
    console.log(event.key);
  }

  search(){
    console.log("inside search");
  }

  showName(value: string){
    console.log(value);
  }
}
