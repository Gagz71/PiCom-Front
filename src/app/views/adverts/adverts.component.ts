import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AdvertModel} from "../../models/advert.model";
import {AdvertService} from "../../services/advert/advert.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {ZoneModel} from "../../models/zone.model";

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {

	advertsSub: Subscription;
	adverts: Array<AdvertModel>;
	userEMail: string ;


	constructor(private advertsService: AdvertService) {
		this.adverts = [];
		this.advertsSub = new Subscription();
		this.userEMail = '';

	}

	ngOnInit(): void {

		this.advertsSub = this.advertsService
			.adverts
			.subscribe(adverts =>{
				this.adverts = adverts;
				console.log(adverts);
			})
	}

	ngOnDestroy(): void{

		//unsubscribe la souscription
		this.advertsSub.unsubscribe();
	}




	}

