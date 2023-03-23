import ConvertCelsius from '../../../../../library/Celsius';
import { getData, key } from '../../../../../library/Fetch/GetApi';

let url_current = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;

export async function CurrentData(valueSearch = "tehran") {
  return new Promise((resolve, reject) => {
    let data = getData(url_current, `&q=${valueSearch}`);
    data
      .then((res) => {
        console.log(res);
        const [temp, status, icon, feels, humid , name] = [
          res.main.temp,
          res.weather[0].main,
          res.weather[0].icon,
          res.main.feels_like,
          res.main.humidity,
          res.name
        ];
        const obj = {
          temp: parseInt(temp),
          status: status,
          icon: icon,
          feels: parseInt(feels),
          humid: humid,
          name:name
        };
        resolve(obj); // resolve the promise with the `obj` variable
      })
      .catch((err) => {
        reject(err); // reject the promise if there is an error
      });
  });
}
