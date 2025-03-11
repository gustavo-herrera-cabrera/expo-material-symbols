import { FC, memo } from "react";
import {
	ListRenderItemInfo,
	TouchableOpacity,
} from "react-native";
import { IconName } from "../types";
import MaterialSymbol from "..";
import { usePicker } from "./Context";

type PickerItemProps = ListRenderItemInfo<IconName>;

const PickerItem: FC<PickerItemProps> = memo(({ item }) => {
	const { opticalSize, weight, fill, grade, setSelected } =
		usePicker();

	return (
		<TouchableOpacity
			onPress={() => setSelected(item)}
			style={{
				margin: 1,
				backgroundColor: "white",
				borderRadius: 5,
			}}
		>
			<MaterialSymbol
				name={item}
				opticalSize={opticalSize}
				weight={weight}
				fill={fill}
				grade={grade}
				size={60}
			/>
		</TouchableOpacity>
	);
});

export default PickerItem;
