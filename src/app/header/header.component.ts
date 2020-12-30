import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navigateToHome(){
    console.log("Home Clicked");
    this.router.navigate(['home']); 
  };

  navigateToGiftCards(){
    console.log("Giftcards Clicked");
    this.router.navigate(['giftcards']); //this line is adding the giftcards in the url in browser & whenever 
    //ang app see's the /giftcards  in the url it goes to routing.module.ts file & checks the path and loads prime component
  };

  navigateToDelivery(){
    console.log("Delivery Clicked");
  };

  navigateToSearch(){
    console.log("Submit Clicked");
  };

  navigateToCart(){
    console.log("Cart Clicked");
  };

  navigateToAccount(){
    console.log("Account Clicked");
  };

}
