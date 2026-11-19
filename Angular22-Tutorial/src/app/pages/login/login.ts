import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  private router = inject(Router);

  onLogin(){
    // API validation logic goes here
    
    // Navigation logic after validation
    this.router.navigate(['/pages/home']);
  }

  onRegister(){
    this.router.navigateByUrl('/pages/register');
  }
}
