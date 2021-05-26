import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    console.log(this.items);
  }

  confirmRemove() {
    if (confirm('Are you sure to clear cart ? ')) this.clearCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/cart']);
    });
  }

  getTotal() {
    let total: number = 0;
    for (var i = 0; i < this.items.length; i++) {
            total += parseInt(this.items[i].cost);
    }
    return total;
}
}
