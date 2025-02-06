import { use, useContext } from "react"
import { MessageContext } from "../context/MessageContext"
import { CoolComponent } from "./CoolComponent";
import { Button } from "./Button";

export const AwesomeComponent = () => {
    const {change} = useContext(MessageContext);
    return(
        <>
            <h2>Awesome</h2>
            <CoolComponent/>
            <Button onClick={change}>Change Message</Button>
        </>
    )
}