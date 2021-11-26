import {AdvertModel} from "./advert.model";
import {ArretModel} from "./arret.model";

export class ZoneModel{
	private _id: number;
	private _name: string;
	private _adverts: AdvertModel;
	private _arrets: Array<ArretModel>;


	constructor(id: number, name: string, adverts: AdvertModel, arrets: Array<ArretModel>) {
		this._id = id;
		this._name = name;
		this._adverts = adverts;
		this._arrets = arrets;
	}


	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get adverts(): AdvertModel {
		return this._adverts;
	}

	set adverts(value: AdvertModel) {
		this._adverts = value;
	}


	get arrets(): Array<ArretModel> {
		return this._arrets;
	}

	set arrets(value: Array<ArretModel>) {
		this._arrets = value;
	}

	static fromJSON(zoneAsJSON : any): ZoneModel{
		return new ZoneModel(
			zoneAsJSON.name,
			zoneAsJSON.adverts,
			zoneAsJSON.arrets,
			zoneAsJSON._id,
		);
	}

	toJSON(): any{
		return{
			_id: this.id,
			name: this.name,
			adverts: this.adverts,
			arrets: this.arrets
		};
	}
}
