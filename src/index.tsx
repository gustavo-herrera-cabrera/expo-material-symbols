import { FC } from "react";
import { SvgUri } from "react-native-svg";
import { MaterialSymbolProps } from "./types";
import useSymbolUrl from "./useSymbolUrl";

const MaterialSymbol: FC<MaterialSymbolProps> = (props) => {
	const { size = 24, color = "black", ...svg } = props;
	const url = useSymbolUrl(props);

	return (
		<SvgUri
			{...svg}
			height={size}
			width={size}
			uri={url}
			fill={color}
		/>
	);
};

export default MaterialSymbol;
