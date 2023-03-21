import El from "../../../../library/El";
import { dateGenerate } from "./functions";


export function Date(){

    return El({
        element:"div",
        className:"font-Lobster text-white text-xl",
        child:dateGenerate()
    })
}