import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Ordertracking } from './Ordertracking';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  orderList: Ordertracking[] = [];
  loginUser: string = sessionStorage.getItem('loginUser');
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.orderService
      .getOrderDetailsByEmail(this.loginUser)
      .subscribe((res) => {
        this.orderList = res;
        console.log(this.orderList);
      });
  }

  cancelOrder(id: any) {
    if (confirm('Are you sure to delete Card ? ')) this.deleteCard(id);
  }
  deleteCard(id) {
    this.orderService.deleteOrder(id);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/trackorder']);
    });
  }
}
