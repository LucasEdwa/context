import { use, useContext } from "react"
import { MessageContext } from "../context/MessageContext"
import { CoolComponent } from "./CoolComponent";

export const AwesomeComponent = () => {
    const {change} = useContext(MessageContext);
    return(
        <>
            <h2>Awesome</h2>
            <CoolComponent/>
            <button onClick={change}>Change</button>
        </>
    )
}