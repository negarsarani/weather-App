import { getData, key } from '../../library/Fetch/GetApi';
import {
  getLocalstorage,
  setLocalStorage,
} from '../Navbar/Main-header/Search/List/functions';

let url_days = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=metric`;
export let arrayLocal = [];
// const history = ;
if (getLocalstorage() == null ) {
  null
} else {
  getLocalstorage().map((el) => arrayLocal.push(el));
  setLocalStorage();
}
export async function CityCountry(valueSearch) {
  try {
    const data = await getData(url_days, `&q=${valueSearch}`);
    const [city, country] = [data.city.name, data.city.country];
    let objCity = { city: city, country: country };
    arrayLocal.push(objCity);
    setLocalStorage();
    return objCity;
  } catch (error) {
    console.log(error);
  }
}
