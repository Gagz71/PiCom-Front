import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CustomerModel} from "../../models/customer.model";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	onSubmitAddCustomer(customer: CustomerModel): void {
		console.log(customer);
		this.authService
			.save(customer)
			.then(()=> {
				this.router.navigateByUrl('/');
			});


	}
}
