import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddressComponent } from './main/address/address.component';
import { CartComponent } from './main/cart/cart.component';
import { HomeComponent } from './main/home/home.component';
import { PaymentComponent } from './main/payment/payment.component';
import { ProfileComponent } from './main/profile/profile.component';
import { SettingsComponent } from './main/settings/settings.component';
import { TrackOrderComponent } from './main/track-order/track-order.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'trackorder',component: TrackOrderComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'settings',component: SettingsComponent},
  {path: 'payment',component: PaymentComponent},
  {path: 'address',component: AddressComponent},
  {path: 'logout',component: LogoutComponent},
  {path: 'forgotpassword',component: ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
