import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './main/home/home.component';
import { SearchPipe } from './pipes/search.pipe';
import { CartComponent } from './main/cart/cart.component';
import { TrackOrderComponent } from './main/track-order/track-order.component';
import { ProfileComponent } from './main/profile/profile.component';
import { SettingsComponent } from './main/settings/settings.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PaymentComponent } from './main/payment/payment.component';
import { AddressComponent } from './main/address/address.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    RegisterComponent,
    HomeComponent,
    SearchPipe,
    CartComponent,
    TrackOrderComponent,
    ProfileComponent,
    SettingsComponent,
    LogoutComponent,
    PaymentComponent,
    AddressComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
