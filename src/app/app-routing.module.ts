import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayComponent } from './gift-cards/birthday/birthday.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { GiftsetComponent } from './gift-cards/giftset/giftset.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"}, //if it's a empty path then it should redirect to home
  {path : "home", component : HomeComponent},
  {path : "giftcards", component: GiftCardsComponent, children: [
    {path: "giftset", component: GiftsetComponent},
    {path:"birthday", component: BirthdayComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
