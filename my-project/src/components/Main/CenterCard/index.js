import El from "../../../library/El"
import location from "../../../library/Location"
import { Date } from "./Date"
import { MainCard } from "./MainCard"
// import { MainCard } from "./MainCard"
import { CurrentData } from "./MainCard/functions"
// import { MainCard } from "./MainCard"
// import { CurrentData } from "./MainCard/functions"


export function CenterCard() {
    return El({
        element:"div",
        className:"flex items-center justify-center flex-col gap-3 ",
        child:[location("px-14 rounded-2xl") , Date() , MainCard()]
    })
}
