import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvertsComponent } from './views/adverts/adverts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AdvertService} from "./services/advert/advert.service";
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "./services/customer/customer.service";
import { CustomersComponent } from './views/customers/customers.component';
import { LoginComponent } from './views/login/login.component';
import {AuthService} from "./services/auth/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './views/registration/registration.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SingleAdvertComponent } from './views/single-advert/single-advert.component';
import {LOCALE_ID, NgModule} from "@angular/core";
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdvertsComponent,
    CustomersComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationFormComponent,
    SingleAdvertComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule
	],
  providers: [
	  AdvertService,
	  CustomerService,
	  AuthService,
	  { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}

