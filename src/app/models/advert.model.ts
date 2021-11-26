import {CustomerModel} from "./customer.model";
import {ZoneModel} from "./zone.model";
import {SlotModel} from "./slot.model";
import {DatePipe} from "@angular/common";
import {ArretModel} from "./arret.model";

export class AdvertModel{
	private _id: number;
	private _customer : CustomerModel;
	private _creationDate: Date ;
	private _startDate: Date;
	private _endDate: Date;
	private _zones: Array<ZoneModel>;
	private _slots: Array<SlotModel>;
	private _content: string;
	private _arrets: Array<ArretModel>;


	constructor(id: number, customer: CustomerModel, creationDate: Date, startDate: Date, endDate: Date, zones: Array<ZoneModel>, slots: Array<SlotModel>, content: string, arrets:Array<ArretModel>) {
		this._id = id;
		this._customer = customer;
		this._creationDate = creationDate;
		this._startDate = startDate;
		this._endDate = endDate;
		this._zones = zones;
		this._slots = slots;
		this._content = content;
		this._arrets = arrets;
	}

	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get slots(): Array<SlotModel> {
		return this._slots;
	}

	set slots(value: Array<SlotModel>) {
		this._slots = value;
	}

	get creationDate(): Date {
		return this._creationDate;
	}

	set creationDate(value: Date) {
		this._creationDate = value;
	}

	get startDate(): Date {
		return this._startDate;
	}

	set startDate(value: Date) {
		this._startDate = value;
	}

	get endDate(): Date {
		return this._endDate;
	}

	set endDate(value: Date) {
		this._endDate = value;
	}

	get customer(): CustomerModel {
		return this._customer;
	}

	set customer(value: CustomerModel) {
		this._customer = value;
	}


	get content(): string {
		return this._content;
	}

	set content(value: string) {
		this._content = value;
	}


	get zones(): Array<ZoneModel> {
		return this._zones;
	}

	set zones(value: Array<ZoneModel>) {
		this._zones = value;
	}


	get arrets(): Array<ArretModel> {
		return this._arrets;
	}

	set arrets(value: Array<ArretModel>) {
		this._arrets = value;
	}

	static fromJSON(advertAsJSON : any): AdvertModel{
		return new AdvertModel(
			advertAsJSON.id,
			advertAsJSON.customer,
			advertAsJSON.creationDate,
			advertAsJSON.startDate,
			advertAsJSON.endDate,
			advertAsJSON.zones,
			advertAsJSON.trancheHoraires,
			advertAsJSON.content,
			advertAsJSON.arrets
		);
	}

	toJSON():any{
		return{
			_id: this.id,
			customer: this.customer,
			creationDate: this.creationDate,
			startDate: this.startDate,
			zones: this.zones,
			slots: this.slots,
			endDate: this.endDate,
			content: this.content,
			arrets: this.arrets
		};
	}
}
