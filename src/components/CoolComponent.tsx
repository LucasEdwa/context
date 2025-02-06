import { useContext } from "react"
import { MessageContext } from "../context/MessageContext"

export const CoolComponent = () => {
    const {text} = useContext(MessageContext)
    return(
        <>
            <h4>Cool</h4>
            <p>{text}</p>
        </>
    )
}