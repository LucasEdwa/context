import { createContext } from "react";

export interface ITheme {
    background: string;
    foreground: string;
    name: string;
    toggle: () => void;
}

export interface IThemes{
    light: ITheme;
    dark: ITheme;
}

export const themes: IThemes={
    light:{
        background: "#fff",
        foreground: "#333",
        name: "light",
        toggle: () => {}
    },
    dark:{
        background: "#333",
        foreground: "#fff",
        name: "dark",
        toggle: () => {}
    }
};

export const ThemeContext = createContext<ITheme>(themes.light);