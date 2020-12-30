import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersnav',
  templateUrl: './ordersnav.component.html',
  styleUrls: ['./ordersnav.component.css']
})
export class OrdersnavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToBirthday(){
    console.log("Birthday clicked");
    this.router.navigate(['/giftcards/birthday']);
  };
}
