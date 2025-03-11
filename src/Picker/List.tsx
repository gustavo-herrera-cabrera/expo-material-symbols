import { FlatList } from "react-native";
import { usePicker } from "./Context";
import PickerItem from "./Item";

const PickerList = () => {
	const { found, data } = usePicker();

	return (
		<FlatList
			// columnWrapperStyle={{ gap: 20 }}
			contentContainerStyle={{
				// gap: 20,
				alignItems: "center",
			}}
			data={found ?? data}
			numColumns={6}
			renderItem={(props) => (
				<PickerItem key={props.item} {...props} />
			)}
		/>
	);
};

export default PickerList;
