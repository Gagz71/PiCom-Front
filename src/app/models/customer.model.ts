export class CustomerModel{
	private _id: string | null;
	private _lastname: string;
	private _firstname: string;
	private _email: string;
	private _password: string;
	private _phone: string;


	constructor( lastname: string, firstname: string, email: string, password: string, phone: string, id?:string) {
		//Id optionnel
		if(typeof id === 'string'){
			this._id = id;
		} else{
			this._id = null;
		}
		this._lastname = lastname;
		this._firstname = firstname;
		this._email = email;
		this._password = password;
		this._phone = phone;
	}


	get id(): string | null {
		return this._id;
	}

	set id(value: string | null) {
		this._id = value;
	}

	get lastname(): string {
		return this._lastname;
	}

	set lastname(value: string) {
		this._lastname = value;
	}

	get firstname(): string {
		return this._firstname;
	}

	set firstname(value: string) {
		this._firstname = value;
	}

	get email(): string {
		return this._email;
	}

	set email(value: string) {
		this._email = value;
	}

	get password(): string {
		return this._password;
	}

	set password(value: string) {
		this._password = value;
	}

	get phone(): string {
		return this._phone;
	}

	set phone(value: string) {
		this._phone = value;
	}

	static fromJSON(customerAsJson: any): CustomerModel{
		return new CustomerModel (
			customerAsJson.lastname,
			customerAsJson.firstname,
			customerAsJson.password,
			customerAsJson.email,
			customerAsJson.phone,
			customerAsJson._id
		);
	}

	toJSON(): any{
		return{
			_id: this.id,
			lastname: this.lastname,
			firstname: this.firstname,
			password: this.password,
			email: this.email,
			phone: this.phone
		};
	}
}
