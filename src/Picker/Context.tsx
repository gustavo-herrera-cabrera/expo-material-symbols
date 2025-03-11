import {
	createContext,
	FC,
	ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { ICON_NAMES } from "../constants";
import {
	Grade,
	IconName,
	OpticalSize,
	Weight,
} from "../types";
import { ToastAndroid } from "react-native";

const symbols = Object.keys(ICON_NAMES) as IconName[];

const Context = createContext<ReturnType<typeof useInit>>(
	{} as any
);

const useInit = () => {
	const [selected, setSelected] = useState<IconName | null>(
		null
	);
	const [grade, setGrade] = useState<Grade>(0);
	const [weight, setWeight] = useState<Weight>(400);
	const [opticalSize, setOpticalSize] =
		useState<OpticalSize>(24);
	const [fill, setFill] = useState<boolean>(false);

	const [page, setPage] = useState(0);
	const [query, setQuery] = useState("");
	const [found, setFound] = useState<IconName[] | null>(
		null
	);
	const length = useMemo(
		() => found?.length ?? symbols.length,
		[found]
	);
	const itemsPerPage = 96;

	const data = useMemo(() => {
		const dataSet = found ?? symbols;

		return dataSet.slice(
			page * itemsPerPage,
			(page + 1) * itemsPerPage
		);
	}, [page, itemsPerPage, found]);

	const maxPage = Math.ceil(length / itemsPerPage - 1);
	const canGoBack = page !== 0;
	const canGoNext = page < length / itemsPerPage - 1;

	const handleClear = () => {
		setGrade(0);
		setWeight(400);
		setOpticalSize(24);
		setFill(false);
		setPage(0);
		setQuery("");
		setFound(null);
	};

	const handleSearch = () => {
		setPage(0);

		if (!query) {
			setFound(null);
			return;
		}

		const found = symbols.filter((icon) =>
			icon.includes(query.toLowerCase())
		);
		setFound(found);
	};

	const handleCopy = useCallback(async () => {
		if (!selected) return;
		const clipboard = new Clipboard();
		const _weight =
			weight !== 400 ? `\twght${weight}\n` : "";
		const _opticalSize =
			opticalSize !== 24
				? `\topticalSize={${opticalSize}}\n`
				: "";
		const _grade =
			grade !== 0 ? `\tgrade={${grade}}\n` : "";
		const _fill = fill ? "\tfill\n" : "";

		await clipboard.writeText(
			`</MaterialSymbol\n` +
				`\tname={${selected}}\n` +
				_opticalSize +
				_weight +
				_grade +
				_fill +
				`/>`
		);

		ToastAndroid.show(
			"Copied to clipboard",
			ToastAndroid.SHORT
		);
	}, [selected, grade, weight, opticalSize, fill]);

	return {
		grade,
		setGrade,
		weight,
		setWeight,
		opticalSize,
		setOpticalSize,
		fill,
		setFill,
		page,
		setPage,
		query,
		setQuery,
		found,
		setFound,
		length,
		itemsPerPage,
		data,
		maxPage,
		canGoBack,
		canGoNext,
		handleClear,
		handleSearch,
		selected,
		setSelected,
		handleCopy,
	};
};

const PickerProvider: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	const value = useInit();
	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	);
};

const usePicker = () => useContext(Context);

export { PickerProvider, usePicker };
