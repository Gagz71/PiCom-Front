import { Injectable } from '@angular/core';
import {AdvertModel} from "../../models/advert.model";
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

	adverts: BehaviorSubject<Array<AdvertModel>>
	userEMail: string ;

  constructor(private http: HttpClient, private authService: AuthService, private route: ActivatedRoute)
  {
	  this.adverts = new BehaviorSubject<Array<AdvertModel>>([]);
	  this.userEMail = localStorage.getItem('currentUser')!;

	this.getAdvertsByCustomer(this.userEMail);
  }


//Création fonction qui récupère les offres


	getAdvertsByCustomer(userEMail: string): void {

		let  headers = new HttpHeaders();
		headers = headers.append('Authorization', this.authService.token.getValue());

		 this.http
				.get('http://localhost:8080/api/customer/' + userEMail + '/adverts', {headers})
				.pipe(
					map((data: any) => data.map((advertAsJson: any) => AdvertModel.fromJSON(advertAsJson)))
				)
				.toPromise()
			 .then((adverts: Array<AdvertModel>) => {
				 this.adverts.next(adverts);
			 });

	}


	getAdvertById(id: string) : Promise<AdvertModel>{

		let  headers = new HttpHeaders();
		headers = headers.append('Authorization', this.authService.token.getValue());

	  //Solution qui fait une nouvelle requête à l'API avec l'id passé en paramètre URL:
		return this.http
			.get('http://localhost:8080/api/advert/' + id, {headers})
			.pipe(
				map((data: any)=> AdvertModel.fromJSON(data))
				)
			.toPromise();



	}
}
