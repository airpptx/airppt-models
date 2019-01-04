/**
 * The model for a parsed Powerpoint Element which the parsers generate
 */
export interface PowerpointElement {
    name: string;
    shapeType: string;
    specialityType: SpecialityType;
    elementPosition: {
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
    };
    raw: any;
}
export declare enum BorderType {
    dotted = "dotted",
    dashed = "dashed",
    solid = "solid"
}
export declare enum FontAttributes {
    Bold = 0,
    Italics = 1,
    Underline = 2,
    StrikeThrough = 3
}
export declare enum TextAlignment {
    Center = "center",
    Left = "left",
    Right = "right",
    Justified = "justify"
}
export declare enum SpecialityType {
    Image = "Image",
    None = "None"
}
export declare enum LinkType {
    Asset = "Asset",
    External = "External"
}
export declare enum FillType {
    Image = "Image",
    Solid = "Solid"
}
