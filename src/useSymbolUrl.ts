import { useMemo } from "react";
import {
	MS_GRADES,
	MS_OPTICAL_SIZES,
	MS_WEIGHTS,
} from "./constants";
import { MaterialSymbolProps } from "./types";

const useSymbolUrl = ({
	variant = "outlined",
	opticalSize = 24,
	weight = 400,
	grade = 0,
	fill,
	name,
}: MaterialSymbolProps) => {
	const _weight = useMemo(() => {
		if (!MS_WEIGHTS.includes(weight)) {
			console.error(
				`Invalid Material Symbol weight: ${weight}. Valid values: ${MS_WEIGHTS.join(
					", "
				)}.`
			);
			return "";
		}

		if (weight === 400) return "";
		else return `wght${weight}` as const;
	}, [weight]);

	const _fill = useMemo(() => {
		if (fill) return "fill1";
		else return "";
	}, [fill]);

	const _grad = useMemo(() => {
		if (!MS_GRADES.includes(grade)) {
			console.error(
				`Invalid Material Symbol grade: ${grade}. Valid values: ${MS_GRADES.join(
					", "
				)}.`
			);
			return "";
		}

		if (grade === -25) return "gradN25";
		else if (grade === 200) return "grad200";
		else return "";
	}, [grade]);

	const _optz = useMemo(() => {
		if (!MS_OPTICAL_SIZES.includes(opticalSize)) {
			console.error(
				`Invalid Material Symbol optical size: ${opticalSize}. Valid values: ${MS_OPTICAL_SIZES.join(
					", "
				)}.`
			);
			return 24;
		}

		return opticalSize;
	}, [opticalSize]);

	const url = useMemo(() => {
		const axes = `${_weight + _grad + _fill}` || "default";
		return `https://fonts.gstatic.com/s/i/short-term/release/materialsymbols${variant}/${name}/${axes}/${_optz}px.svg`;
	}, [variant, name, _weight, _fill, _grad, _optz]);

	return url;
};

export default useSymbolUrl;
