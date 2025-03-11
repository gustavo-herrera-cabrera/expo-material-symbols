import { Button, Text, View } from "react-native";
import { usePicker } from "./Context";

const PickerPagination = () => {
	const {
		canGoBack,
		page,
		setPage,
		maxPage,
		found,
		canGoNext,
		length,
	} = usePicker();

	return (
		<View style={{ flexDirection: "row", gap: 10 }}>
			<Button
				title="<"
				onPress={() => setPage(page - 1)}
				disabled={!canGoBack}
			/>
			<Button
				title="<<"
				onPress={() => setPage(0)}
				disabled={!canGoBack}
			/>

			<Text style={{ textAlign: "center", flex: 1 }}>
				{page + 1} / {maxPage + 1}
				{"\n"}
				{!!found && "Found"} {length} icons
			</Text>

			<Button
				title=">>"
				onPress={() => setPage(maxPage)}
				disabled={!canGoNext}
			/>
			<Button
				title=">"
				onPress={() => setPage(page + 1)}
				disabled={!canGoNext}
			/>
		</View>
	);
};

export default PickerPagination;
