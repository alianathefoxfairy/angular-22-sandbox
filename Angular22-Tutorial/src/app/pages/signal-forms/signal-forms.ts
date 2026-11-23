import { Component, signal } from '@angular/core';
import { form, FormField, required, email, minLength, FormRoot } from '@angular/forms/signals';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-signal-forms',
  styleUrl: './signal-forms.scss',
  templateUrl: './signal-forms.html',
})
export class SignalForms {
  profileModel = signal({
    name: '',
    email:'',
    password:''
  })

  profileForm = form(
    this.profileModel, 
    (schemaPath)=>{
      required(schemaPath.name, {message: "Name is required"});
      required(schemaPath.email, {message: "Email is required"});
      required(schemaPath.password, {message: "Password is required"});
      email(schemaPath.email, {message: "Please enter a valid email"});
      minLength(schemaPath.password, 6, {message: "Password must be at least 6 characters"});
    },
    {
      submission:{
        action: async(field) =>{
          console.log('Form Data: ', field().value());
          alert('Registration successful!');          
        }
      }
    }
  );
}
