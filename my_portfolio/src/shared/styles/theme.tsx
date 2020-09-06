import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette:{
        primary:{
            main:"##607D8B",
            dark:"#455A64",
            light:"#CFD8DC"
        },
        secondary:{
            main:"#9E9E9E",
        },
        text:{
            primary:"#212121",
            secondary:"#757575",
        },
    },
    typography: {
        button: {
            // buttonが大文字に変換されるのを防ぐ
            textTransform: "none"
        }
    }
});

export default theme;