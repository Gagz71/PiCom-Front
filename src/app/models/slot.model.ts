export class SlotModel{
	private _id: number;
	private _start: number;
	private _end: number;


	constructor(id: number, start: number, end: number) {
		this._id = id;
		this._start = start;
		this._end = end;
	}


	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get start(): number {
		return this._start;
	}

	set start(value: number) {
		this._start = value;
	}

	get end(): number {
		return this._end;
	}

	set end(value: number) {
		this._end = value;
	}
}
