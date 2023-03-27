import El from '../../library/El';
import { CenterCard } from './CenterCard';
import { DaysCards } from './DaysCards';


export function Main() {
    return El({
        element:"div",
        className:" flex sm:flex-col flex-grow   w-full items-center justify-center gap-5 pt-2 ",
        child:[
            CenterCard() 
            , DaysCards()
        ]
    })
}
