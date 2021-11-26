import { Component, OnInit } from '@angular/core';
import {AdvertModel} from "../../models/advert.model";
import {AdvertService} from "../../services/advert/advert.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-advert',
  templateUrl: './single-advert.component.html',
  styleUrls: ['./single-advert.component.css']
})
export class SingleAdvertComponent implements OnInit {

	advert: AdvertModel | undefined;


  constructor(private advertService: AdvertService, private route: ActivatedRoute) { }

  ngOnInit(): void {
	  const id = this.route.snapshot.params.id;
	  this.advertService
		  .getAdvertById(id)
		  .then((advert: AdvertModel) => this.advert = advert)
  }

}
