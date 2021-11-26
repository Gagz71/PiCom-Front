import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerModel} from "../../models/customer.model";
import {CustomerService} from "../../services/customer/customer.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class  CustomersComponent implements OnInit, OnDestroy {

	customersSubs: Subscription;
	customers: Array<CustomerModel>;

  constructor(private customerService: CustomerService) {
	  this.customers = [];
	  this.customersSubs = new Subscription();
  }

  ngOnInit(): void {

	  this.customersSubs = this.customerService
		  .customers
		  .subscribe(customers => {
			  console.log('customers'  + this.customers);
			  this.customers = customers;
		  });
	  /*this.customerService
		  .getCustomers()
		  .then((data: any) => {
			  this.customers = data.customers;
		  });*/



  }

	ngOnDestroy(): void {
	  this.customersSubs.unsubscribe();
	}



}
