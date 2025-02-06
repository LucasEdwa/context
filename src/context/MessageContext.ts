import { createContext } from "react";


export interface IMessageContextType {
    text: string;
    change: () => void;
}

export const MessageContext = createContext<IMessageContextType>({
    text: "viva a vida",
    change: () => {},
});