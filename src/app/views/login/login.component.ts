import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;


  constructor(private authService: AuthService, private router:Router, private formBuilder: FormBuilder) {
	  this.loginForm = this.formBuilder.group({
		  email: ['', Validators.required],
		  password: ['', Validators.required]
	  });
  }

  ngOnInit(): void {


  }

	// convenience getter for easy access to form fields
	get f() { return this.loginForm.controls; }

	onClickLogin() {

		console.log(this.f.email.value + ' :' +this.f.password.value );



		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}
		this.authService
			.login(this.f.email.value, this.f.password.value)
			.then(() => {
				this.router.navigateByUrl('adverts');
			})
		localStorage.setItem('currentUser', this.f.email.value);
	}
}
