import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.css']
})
export class GiftCardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToGiftSet(){
    console.log("Giftset clicked");
    this.router.navigate(['/giftcards/giftset']);
  };


}
