import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FeedService } from 'src/app/services/feed.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  feedList: any = [];
  query: string = ' ';
  loginUser: string = sessionStorage.getItem('loginUser');
  newOrderData: any = {};
  clickedData: any ={};
  constructor(
    private feedService: FeedService,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.feedService.getAllFeed().subscribe((res) => {
      this.feedList = res;
      console.log(this.feedList);
    }, null);
  }
  getFeedList() {
    return this.feedList;
  }

  confirmToCart(data: any) {
    this.cartService.cartItems(data);
  }

  addData(data: any){
    this.clickedData = data;
  }

  confirmToOrder(data: any) {
    this.newOrderData.name = data.name;
    this.newOrderData.restaurent_name = data.restaurent_name;
    this.newOrderData.cost = data.cost;
    this.newOrderData.email = this.loginUser;
    this.orderService.newOrder(this.newOrderData);
  }
  addToBuy(data: any){
    this.clickedData = data;
  }

}