# Expo Material Symbols

Google's Material Symbols for your Expo project.

## Important

This library will require an internet connection to first render the icons. After an initial download, the icons will be cached and the app will be able to work offline.

## About

This package allows you to place Google's Material Symbols in your Expo project. These icons support all variants (`rounded`, `sharp` and `outlined`) and the four axes provided by Google (`fill`, `weight`, `grade` and `optical size`). You can read more about these axes in the [official guide for Material Symbols.](https://developers.google.com/fonts/docs/material_symbols#what_are_material_symbols).

## How does it work?

These previously mentioned axes work by modifying a specific CSS property in texts called `font-variation-settings`, which is not supported by React Native. To combat this limitation, this package downloads the icons directly from Google's servers which hosts each variation in SVG format, then we render it using [react-native-svg](https://github.com/software-mansion/react-native-svg/blob/main/USAGE.md).

## Pros

- Lightweight
- Compatible with all of the icon's axes and variants
- Compatible with SVG properties for further customization
- TS types included

## Cons

- Requires an internet connection to first render the icons
- Animation when changing axes is not supported
- Axes only support a limited number of values
- Rendering too many icons may cause performance issues

## Installation

```bash
npx yarn install expo-material-symbols
```

## How to use?

Import `MaterialSymbol` from `expo-material-symbols` and use it as a regular component.

```jsx
import MaterialSymbol from "expo-material-symbols";

const MyComponent = () => {
	return (
		<MaterialSymbol
			name="10k"
			variant="outlined"
			grade={0}
			fill
			weight={400}
			size={50}
			opticalSize={24}
		/>
	);
};
```

| Prop          | Type      | Default                 | Description                                                                                                                |
| ------------- | --------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`        | `string`  | none (this is required) | Name of the icon. You can get all of icon's names from [Google's Material Symbols Library](https://fonts.google.com/icons) |
| `variant`     | `string`  | `outlined`              | Icon variant (`rounded`, `sharp` or `outlined`)                                                                            |
| `size`        | `number`  | `24`                    | Icon size in pixels                                                                                                        |
| `fill`        | `boolean` | `false`                 | Icon fill                                                                                                                  |
| `weight`      | `number`  | `400`                   | Icon weight (`100`, `200`, `300`, `400`, `500`, `600`, `700`)                                                              |
| `grade`       | `number`  | `0`                     | Icon grade (`-25`, `0`, `200`)                                                                                             |
| `opticalSize` | `number`  | `24`                    | Icon optical size (`20`, `24`, `49`, `48`)                                                                                 |
| `color`       | `string`  | `black`                 | Icon color                                                                                                                 |

Also, `MaterialSymbol` extends [`SvgUri`](https://github.com/software-mansion/react-native-svg/blob/main/USAGE.md#use-with-content-loaded-from-uri) from `react-native-svg` so you can use all of its props.

## License and Credits

Material Symbols is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0) and is a product of Google. This package is not affiliated with Google in any way.

Special thanks to [marella](https://www.npmjs.com/~marella) who published [@material-design-icons/scripts
](https://www.npmjs.com/package/@material-design-icons/scripts) which inspired me to make this package.
