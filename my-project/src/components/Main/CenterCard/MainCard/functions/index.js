import { MainCard } from '..';
import ConvertCelsius from '../../../../../library/Celsius';
import { getData, key } from '../../../../../library/Fetch/GetApi';

let url_current = `https://api.openweathermap.org/data/2.5/weather?appid=${key}`;

export function CurrentData(valueSearch) {
  let data = getData(url_current, `&q=${valueSearch}`);
  data.then((res) => RenderMainCard(res));
}
export function RenderMainCard(res) {
  const [temp, status, icon, feels, humid] = [
    res.main.temp,
    res.weather[0].main,
    res.weather[0].icon,
    res.main.feels_like,
    res.main.humidity,
  ];
  const obj = {
    temp: ConvertCelsius(temp),
    status: status,
    icon: icon,
    feels: ConvertCelsius(feels),
    humid: humid,
  };
  return obj;
}
