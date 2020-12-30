import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { GiftsetComponent } from './gift-cards/giftset/giftset.component';
import { OrdersnavComponent } from './gift-cards/ordersnav/ordersnav.component';
import { BirthdayComponent } from './gift-cards/birthday/birthday.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GiftCardsComponent,
    GiftsetComponent,
    OrdersnavComponent,
    BirthdayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
