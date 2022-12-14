export type TRegionalType = 'regional.address' | 'regional.street' | 'regional.municipality_part' | 'regional.municipality' | 'regional.region' | 'regional.country';

export interface IRegionalStructure {
	name: string;
	type: TRegionalType;
}

export interface IResponseItem {
	label: string;
	location: string;
	name: string;
	position: {
		lon: number;
		lat: number;
	};
	regionalStructure: Array<IRegionalStructure>;
	type: TRegionalType;
	zip: string;
}

export interface IFormData {
	street: string;
	houseNumber: string;
	city: string;
	zip: string;
	country: string;
}
