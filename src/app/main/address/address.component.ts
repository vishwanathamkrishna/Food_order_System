import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressValues: any = [];
  email: string = sessionStorage.getItem('loginUser');
  isShow = true;
  isShowNewAddress = true;
  newAddressData: any = {};
  formData: any = {};
  profile: any = [];
  loginUser: string = sessionStorage.getItem('loginUser');

  constructor(
    private addressService: AddressService,
    private profileService: AuthLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addressService.getAllAddress().subscribe((res) => {
    }, null);

    this.addressService.getAddressByEmail(this.email).subscribe((res) => {
      this.addressValues = res;
    }, null);

    this.profileService.getAllUserDetails(this.loginUser).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.profile = res;
    }, null);
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  newAddressDisplay() {
    this.isShowNewAddress = !this.isShowNewAddress;
  }

  newAddressSubmit() {
    this.newAddressData.name = this.profile[0].fullName;
    this.newAddressData.email = this.profile[0].email;

    this.addressService.addNewAddress(this.newAddressData);
    console.log(this.newAddressData);
    //this.router.navigate(['/payment']);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/address']);
    });
  }

  updateAddress() {
    console.log(this.formData);
    this.formData.name = this.profile[0].fullName;
    this.formData.email = this.profile[0].email;
    this.addressService.updateAdress(this.formData, this.addressValues[0].id);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/address']);
    });
  }

  confirmDelete() {
    if (confirm('Are you sure to delete ? ')) this.deleteAddress();
  }

  deleteAddress() {
    this.addressService.deleteAddress(this.addressValues[0].id);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/address']);
    });
  }

}
