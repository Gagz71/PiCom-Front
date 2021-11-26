export class ArretModel{
	private _id: number;
	private _name: string;
	private _type: string;


	constructor(id: number, name: string, type: string) {
		this._id = id;
		this._name = name;
		this._type = type;
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

	get type(): string {
		return this._type;
	}

	set type(value: string) {
		this._type = value;
	}

	static fromJson(arretAsJSON: any): ArretModel{
		return new ArretModel(
			arretAsJSON.id,
			arretAsJSON.name,
			arretAsJSON.type
		);
	}

	toJSON(): any{
		return{
			_id: this.id,
			name: this.name,
			type: this.type
		};
	}
}
