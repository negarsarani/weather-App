import El from "../../../library/El"
import { Date } from "./Date"
import { MainCard } from "./MainCard"


export function CenterCard() {
    return El({
        element:"div",
        className:"flex flex-col ",
        child:[Date() , MainCard() ]
    })
}