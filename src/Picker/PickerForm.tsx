import {
	Button,
	StyleSheet,
	Switch,
	Text,
	TextInput,
	View,
} from "react-native";
import { usePicker } from "./Context";
import {
	MS_GRADES,
	MS_OPTICAL_SIZES,
	MS_WEIGHTS,
} from "../constants";

const sx = StyleSheet.create({
	buttonContainer: { flex: 1 },
	buttonGroup: { flexDirection: "row", gap: 10 },
	text: { marginBottom: -10 },
});

const PickerForm = () => {
	const {
		grade,
		setGrade,
		weight,
		setWeight,
		opticalSize,
		setOpticalSize,
		fill,
		setFill,
		query,
		setQuery,
		handleSearch,
		handleClear,
	} = usePicker();

	return (
		<>
			<Text style={sx.text}>Grade: {grade}</Text>
			<View style={sx.buttonGroup}>
				{MS_GRADES.map((g) => (
					<View style={sx.buttonContainer} key={`${g}`}>
						<Button
							title={`${g}`}
							onPress={() => setGrade(g)}
						/>
					</View>
				))}
			</View>

			<Text style={sx.text}>Weight: {weight}</Text>
			<View style={sx.buttonGroup}>
				{MS_WEIGHTS.map((w) => (
					<View style={sx.buttonContainer} key={`${w}`}>
						<Button
							title={`${w}`}
							onPress={() => setWeight(w)}
						/>
					</View>
				))}
			</View>

			<Text style={sx.text}>
				Optical size: {opticalSize}
			</Text>
			<View style={sx.buttonGroup}>
				{MS_OPTICAL_SIZES.map((o) => (
					<View style={sx.buttonContainer} key={`${o}`}>
						<Button
							title={`${o}`}
							onPress={() => setOpticalSize(o)}
						/>
					</View>
				))}
			</View>

			<Text style={sx.text}>
				Fill: {fill ? "Yes" : "No"}
			</Text>
			<View style={sx.buttonGroup}>
				<Switch value={fill} onValueChange={setFill} />

				<TextInput
					style={{
						flex: 1,
						borderColor: "lightgray",
						borderWidth: 1,
						paddingHorizontal: 10,
					}}
					placeholder="Search..."
					value={query}
					onChangeText={setQuery}
				/>
				<Button title="Search" onPress={handleSearch} />

				<Button title="Clear" onPress={handleClear} />
			</View>

			<View style={sx.buttonGroup}></View>
		</>
	);
};

export default PickerForm;
