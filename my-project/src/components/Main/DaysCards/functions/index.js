import { Dayname } from '../../../../library/Dayname';
import { getData, key } from '../../../../library/Fetch/GetApi';


let url_days = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=metric`;
export async function FutureData(valueSearch = 'tehran') {
  try {
    const data = await getData(url_days, `&q=${valueSearch}`);
    const arr = [];
    const step = 8;
    for (let i = 8; i < data.list.length; i += step) {
      const element = data.list[i];
      let [date, temp, icon, status, description] = [
        element.dt_txt,
        element.main.temp,
        element.weather[0].icon,
        element.weather[0].main,
        element.weather[0].description,
      ];
      let obj = {
        date: Dayname(date),
        temp: parseInt(temp),
        status: status,
        icon: icon,
        description: description,
      };
      arr.push(obj);
    }
    return arr;
  } catch (error) {
    console.log(error);
  }
}
