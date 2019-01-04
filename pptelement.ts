/**
 * The model for a parsed Powerpoint Element which the parsers generate
 */
export interface PowerpointElement {
	name: string; //or the name combined
	shapeType: string; //the preset type of shape as defined the Offixe XML schema
	specialityType: SpecialityType; //Do something special such as "images","textboxes","media"
	elementPosition: {
		//location to place the element
		x: number;
		y: number;
	};
	elementOffsetPosition: {
		cx: number;
		cy: number;
	};
	paragraph?: {
		text: string;
		textCharacterProperties: {
			fontAttributes: FontAttributes[];
			font: string;
			size: number;
			fillColor: string;
		};
		paragraphProperties: {
			alignment: TextAlignment;
		};
	};
	shape?: {
		border?: {
			thickness: number;
			color: string;
			type: BorderType;
			radius?: number;
		};
		fill: {
			fillType: FillType;
			fillColor: string;
		};
		opacity: number;
	};
	fontStyle?: {
		font: string;
		fontSize: number;
		fontColor: string;
	};
	links?: {
		Type: LinkType;
		Uri: string;
		//wherever or whichever element this might link do
	};
	raw: any; //the entire unparsed element object
}

export enum BorderType {
	dotted = "dotted",
	dashed = "dashed",
	solid = "solid"
}

export enum FontAttributes {
	Bold,
	Italics,
	Underline,
	StrikeThrough
}

export enum TextAlignment {
	Center = "center",
	Left = "left",
	Right = "right",
	Justified = "justify"
}

export enum SpecialityType {
	Image = "Image",
	None = "None"
}

export enum LinkType {
	Asset = "Asset",
	External = "External"
}

export enum FillType {
	Image = "Image",
	Solid = "Solid"
}
