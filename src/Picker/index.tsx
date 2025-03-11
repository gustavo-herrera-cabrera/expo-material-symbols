import PickerList from "./List";
import { PickerProvider } from "./Context";
import PickerPagination from "./Pagination";
import PickerForm from "./PickerForm";
import PickerModal from "./Modal";

/** A debug component used to show all symbols and their variations. */
const MaterialSymbolPicker = () => {
	return (
		<PickerProvider>
			<PickerForm />
			<PickerList />
			<PickerPagination />

			<PickerModal />
		</PickerProvider>
	);
};

export default MaterialSymbolPicker;
