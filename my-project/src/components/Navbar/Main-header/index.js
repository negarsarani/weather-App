import El from '../../../library/El';
import { Search } from './Search';
import { Status_icon } from './Status_icon';

export function Main_header() {
    return El({
        element :"div",
        className :"flex items-end justify-between lg:w-10/12 w-full mt-2 lg:mt-0",
        child:[Search() , Status_icon()]
    })
}