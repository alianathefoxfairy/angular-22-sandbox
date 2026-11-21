import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextStyle } from '../../text-style';

@Component({
  imports: [CommonModule, TextStyle],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  isActive = true;
  textColour = 'red';

  isLoggedIn = true;
  role = "admin";
  //users = ["John", "Dave", "Becky"];
  users = [];
  status = 'active';
}
