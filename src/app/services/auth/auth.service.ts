import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerModel} from "../../models/customer.model";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	token: BehaviorSubject<string>;
	//id: string|null;
	customers: BehaviorSubject<Array<CustomerModel>>;

	constructor(private http: HttpClient) {
		this.token =  new BehaviorSubject<string>('');
		this.customers = new BehaviorSubject<Array<CustomerModel>>([]);
  }

	login(email:string, password:string):Promise<void | CustomerModel> {
		return new Promise<void | CustomerModel>(
			(res, rej) => {
				this.http.get('http://localhost:8080/api/customer/'+ email + '/'+password)
					.pipe(
						map((data:any) => {
								CustomerModel.fromJSON(data);
								localStorage.setItem('currentUser', data);
						}

						)
					)
					.toPromise()
				this.token.next('PicomToken')
				//
				res(console.log(this.token));

			}
		)
	}

	logout(): Promise<void> {
		return  new  Promise<void>(
			(res,rej) => {
				this.token.next('');
				res();
			}
		)
	}

	save(customer: CustomerModel): Promise<any>{

		const customers = this.customers.getValue();
		customers.push(customer);
		this.customers.next(customers);

		return this.http
			.post('http://localhost:8080/api/inscription', customer.toJSON())
			.toPromise();
	}
}
