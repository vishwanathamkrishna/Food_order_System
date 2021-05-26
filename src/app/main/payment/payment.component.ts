import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentValues: any = [];
  email: string = sessionStorage.getItem('loginUser');
  isShow = true;
  isShowNewCard = true;
  formData: any = {};
  newCardData: any = {};
  profile: any = [];
  loginUser: string = sessionStorage.getItem('loginUser');
  constructor(
    private paymentService: PaymentService,
    private profileService: AuthLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe((res) => {
      // console.log(JSON.stringify(res));
    }, null);

    this.paymentService.getPaymentsByEmail(this.email).subscribe((res) => {
      // console.log(JSON.stringify(res));
      this.paymentValues = res;
      //if(res.isEmpty())
    }, null);

    this.profileService.getAllUserDetails(this.loginUser).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.profile = res;
    }, null);
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  newCardDisplay() {
    this.isShowNewCard = !this.isShowNewCard;
  }

  newCardSubmit() {
    this.newCardData.name = this.profile[0].fullName;
    this.newCardData.email = this.profile[0].email;

    this.paymentService.addNewCard(this.newCardData);
    //console.log(this.newCardData);
    //this.router.navigate(['/payment']);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/payment']);
    });
  }

  updateCard() {
    this.formData.name = this.profile[0].fullName;
    this.formData.email = this.profile[0].email;
    this.paymentService.updateCard(this.formData, this.paymentValues[0].id);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/payment']);
    });
  }
  confirmDeleteCard() {
    if (confirm('Are you sure to delete Card ? ')) this.deleteCard();
  }
  deleteCard() {
    this.paymentService.deleteCard(this.paymentValues[0].id);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/payment']);
    });
  }

}
