import { UriProps } from "react-native-svg";
import {
	ICON_NAMES,
	MS_GRADES,
	MS_OPTICAL_SIZES,
	MS_WEIGHTS,
} from "./constants";

export type MaterialSymbolProps = {
	/**
	 * You can get all symbols names in the following link:
	 * @link https://fonts.google.com/icons
	 */
	name: IconName;
	variant?: "rounded" | "outlined" | "sharp";
	size?: number;
	/**
	 * Define si el ícono debe ser rellenado.
	 * Eje `FILL`
	 */
	fill?: boolean;
	color?: string;
	/**
	 * Define el grosor de los border del ícono.
	 * Eje `wght`
	 */
	weight?: Weight;
	/**
	 * Define el énfasis del ícono.
	 * Eje `grad`
	 */
	grade?: Grade;
	/**
	 * Define el tamaño óptico del ícono.
	 * Eje `opsz`
	 */
	opticalSize?: OpticalSize;
} & Omit<UriProps, "fill" | "uri" | "height" | "width">;

export type Weight = (typeof MS_WEIGHTS)[number];
export type Grade = (typeof MS_GRADES)[number];
export type OpticalSize = (typeof MS_OPTICAL_SIZES)[number];
export type IconName = keyof typeof ICON_NAMES;
