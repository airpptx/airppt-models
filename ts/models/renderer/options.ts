export enum PositionType {
	Grid,
	Absolute
}

export interface RendererOptions {
	PositionType: PositionType;
	GridSize?: number;
	OutputPath?: string;
}
