import {
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { usePicker } from "./Context";
import MaterialSymbol from "..";

const sx = StyleSheet.create({
	codeBox: {
		fontFamily: "monospace",
		color: "white",
		backgroundColor: "rgba(0,0,0,0.75)",
		borderRadius: 5,
		padding: 10,
		alignSelf: "flex-start",
		width: "100%",
	},
});

const PickerModal = () => {
	const {
		selected,
		setSelected,
		grade,
		fill,
		opticalSize,
		weight,
	} = usePicker();

	return (
		<View style={{ position: "absolute" }}>
			<Modal
				transparent
				animationType="fade"
				visible={!!selected}
				onRequestClose={() => setSelected(null)}
			>
				<View
					style={{
						height: "100%",
						width: "100%",
						backgroundColor: "rgba(0,0,0,0.5)",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<View
						style={{
							backgroundColor: "snow",
							width: "95%",
							padding: 20,
							alignItems: "center",
							borderRadius: 10,
							gap: 20,
						}}
					>
						<TouchableOpacity
							onPress={() => setSelected(null)}
							style={{
								position: "absolute",
								top: 20,
								right: 20,
							}}
						>
							<MaterialSymbol
								name="close"
								size={40}
								opticalSize={40}
							/>
						</TouchableOpacity>
						<View
							style={{
								padding: 10,
								borderColor: "lightgray",
								borderWidth: 1,
								borderRadius: 5,
							}}
						>
							{selected && (
								<MaterialSymbol
									name={selected}
									grade={grade}
									fill={fill}
									opticalSize={opticalSize}
									weight={weight}
									size={200}
								/>
							)}
						</View>

						<Text style={sx.codeBox}>
							{"<"}
							<Text style={{ color: "gold" }}>
								MaterialSymbol
							</Text>
							{"\n"}
							{selected && (
								<>
									{"\t\t"}
									<Text style={{ color: "gold" }}>
										name
									</Text>
									{'="'}
									<Text style={{ color: "lime" }}>
										{selected}
									</Text>
									{'"\n'}
								</>
							)}
							{!!grade && (
								<>
									{"\t\t"}
									<Text style={{ color: "gold" }}>
										grade
									</Text>
									{"={"}
									<Text style={{ color: "cyan" }}>
										{grade}
									</Text>
									{"}\n"}
								</>
							)}

							{opticalSize !== 24 && (
								<>
									{"\t\t"}
									<Text style={{ color: "gold" }}>
										opticalSize
									</Text>
									{"={"}
									<Text style={{ color: "cyan" }}>
										{opticalSize}
									</Text>
									{"}\n"}
								</>
							)}
							{weight !== 400 && (
								<>
									{"\t\t"}
									<Text style={{ color: "gold" }}>
										weight
									</Text>
									{"={"}
									<Text style={{ color: "cyan" }}>
										{weight}
									</Text>
									{"}\n"}
								</>
							)}

							{fill && (
								<>
									{"\t\t"}
									<Text style={{ color: "gold" }}>
										fill
									</Text>
									{"\n"}
								</>
							)}

							{"/>"}
						</Text>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default PickerModal;
