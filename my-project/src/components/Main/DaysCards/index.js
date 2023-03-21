import DayCard from "../../../library/DayCard";
import El from "../../../library/El";

export function DaysCards(){
    return El({
        element:"div",
        className:" flex gap-4 items-center justify-center",
        child:[DayCard() , DayCard() , DayCard()]
    })
}