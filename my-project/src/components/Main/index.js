import El from '../../library/El';
import { CenterCard } from './CenterCard';
import { DaysCards } from './DaysCards';


export function Main() {
    return El({
        element:"div",
        className:" flex flex-col gap-10 h-full justify-center ",
        child:[CenterCard() , DaysCards()]
    })
}
