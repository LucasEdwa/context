import { ReactNode, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


interface IButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export const Button = ({ children, onClick }: IButtonProps) => {
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.foreground, color: theme.background }} onClick={onClick}>
            {children}
        </button>
    )
}