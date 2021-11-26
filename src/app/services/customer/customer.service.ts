import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {CustomerModel} from "../../models/customer.model";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

	customers: BehaviorSubject<Array<CustomerModel>>;

  constructor(private http: HttpClient)
  {
	  this.customers = new BehaviorSubject<Array<CustomerModel>>([]);
	  this.getCustomers();
  }

  getCustomers(): void {

	  let headers = new HttpHeaders();
	  headers = headers.append('Authorization', '');
	  this.http
		  .get('http://localhost:8080/api/users', {headers})

		  .pipe(
			  map((data: any) => data.map((customerAsJson: any) => CustomerModel.fromJSON(customerAsJson)))
		  )
		  .toPromise()
		  .then((customers: Array<CustomerModel>) =>{
			  this.customers.next(customers);
		  } );

  }

}
