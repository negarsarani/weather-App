import { getData, key } from '../../library/Fetch/GetApi';
import {
  LocalStorage,
  localStoragepp,
} from '../Navbar/Main-header/Search/functions';
// import {arrayLocal} from ''
let url_days = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=metric`;
export let arrayLocal = [];
localStoragepp().map((el) => arrayLocal.push(el));
LocalStorage(arrayLocal);
export async function CityCountry(valueSearch) {
  try {
    const data = await getData(url_days, `&q=${valueSearch}`);
    const [city, country] = [data.city.name, data.city.country];
    let objCity = { city: city, country: country };
    arrayLocal.push(objCity);
    LocalStorage(arrayLocal);
    return objCity;
  } catch (error) {
    console.log(error);
  }
}
