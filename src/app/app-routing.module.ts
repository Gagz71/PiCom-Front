import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./views/customers/customers.component";
import {LoginComponent} from "./views/login/login.component";
import {AdvertsComponent} from "./views/adverts/adverts.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {RegistrationComponent} from "./views/registration/registration.component";
import {SingleAdvertComponent} from "./views/single-advert/single-advert.component";

const routes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'customers', canActivate: [AuthGuard], component: CustomersComponent},
	{path: 'adverts', canActivate: [AuthGuard], component: AdvertsComponent},
	{path: 'adverts/:id', canActivate: [AuthGuard], component: SingleAdvertComponent},
	{path: 'registration', component: RegistrationComponent},
	/*
	{path: 'offers/:id', component: SingleOfferComponent},
	{path: 'not-found', component: ErrorComponent},*/
	{path: '**', redirectTo: 'not-found'} //Joker ** = si tu trouves aucun chemin -> tu me redirige sur la vue not-found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
