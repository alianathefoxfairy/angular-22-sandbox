import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ShoppingService } from '../../services/shopping-service';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products implements OnInit {

  protected shoppingService = inject(ShoppingService);

  addProducts(){
    this.shoppingService.addToCart();
  }

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  // passing the route parameter using navigate()
  //viewDetails(productId:number){
  //  this.router.navigate(['/pages/product-details', productId]);
    //console.log(productId);
  //}

  // reading query parameters using routerLink
  ngOnInit(): void {
    //this.activatedRoute.queryParamMap.subscribe(params => {
    //  const category = params.get('category');
    //  const sort = params.get('sort');

    //  console.log(category);
    //  console.log(sort);     
    }

  // pass query parameters using navigate()
  viewDetails(category:string){
    this.router.navigate(['/pages/products'], {queryParams:{
      category : category
    }});
    console.log(category);
  }
}
