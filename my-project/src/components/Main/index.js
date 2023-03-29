import El from '../../library/El';
import { CenterCard } from './CenterCard';
import { DaysCards } from './DaysCards';


export function Main() {
    return El({
        element:"div",
        className:" flex sm:flex-col flex-grow h-screen  w-full items-center justify-center sm:gap-5  ",
        child:[
            CenterCard() 
            , DaysCards()
        ]
    })
}
