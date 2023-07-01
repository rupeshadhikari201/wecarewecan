import { createTheme } from "@mui/material/styles";

const mytheme = createTheme({
	overrides: {
		MuiContainer: {
			root: {
				"@media (min-width: 600px)": {
					paddingLeft: 0,
					paddingRight: 0,
				},
			},
		},
	},
});

export default mytheme;
