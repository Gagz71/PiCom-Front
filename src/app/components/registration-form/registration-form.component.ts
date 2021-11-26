import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerModel} from "../../models/customer.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

	@Input() customerToCreate: CustomerModel | undefined;
	@Output() formSubmitted: EventEmitter<CustomerModel>;

	form: FormGroup;
	customer: CustomerModel;

	constructor(private authService: AuthService, private router: Router) {
		this.customer = new CustomerModel('', '', '', '', '');
		this.form = new FormGroup({});
		this.formSubmitted = new EventEmitter<CustomerModel>();
	}


	ngOnInit(): void {
		if(this.customerToCreate){
			this.customer = this.customerToCreate;
		}
		this.initForm();
	}

	onSubmitRegisterForm() {
		this.formSubmitted.emit(this.customer);
		console.log(this.customer);
	}

	private initForm() {

		this.form.addControl(
			'lastname',
			new FormControl(
				null,
				[Validators.required]
			)
		);
		this.form.addControl(
			'firstname',
			new FormControl(
				null,
				[Validators.required]
			)
		);
		this.form.addControl(
			'email',
			new FormControl(
				null,
				[Validators.required]
			)
		);
		this.form.addControl(
			'password',
			new FormControl(
				null,
				[Validators.required]
			)
		);
		this.form.addControl(
			'phone',
			new FormControl(
				null,
				[Validators.required]
			)
		);

	}


}
