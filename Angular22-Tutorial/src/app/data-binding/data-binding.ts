import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.scss',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  name:string = "FED Learning";

  topic:string = "4 Types of Data Binding";

  image:string = "https://img.freepik.com/premium-vector/house-vector-image_1310403-5095.jpg"

  onSubmitClick(){
    alert("Data Saved Successfully");
  }

  onCountryChange(){
    alert("Country has changed");
  }
}
