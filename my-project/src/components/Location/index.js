import { getData, key } from '../../library/Fetch/GetApi';
// import {arrayLocal} from ''
let url_days = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=metric`;
let arrayLocal = [];
export async function CityCountry(valueSearch) {
  try {
    const data = await getData(url_days, `&q=${valueSearch}`);
    const [city, country] = [data.city.name, data.city.country];
    let objCity = { city: city, country: country };
    arrayLocal.push(objCity);
    console.log(arrayLocal);
    return objCity;
  } catch (error) {
    console.log(error);
  }
}
