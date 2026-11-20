import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.scss',
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit{
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    //Reading route parameters with routerLinks
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      //console.log(id);
    })

      // API call to fetch details for give id
  }
}
