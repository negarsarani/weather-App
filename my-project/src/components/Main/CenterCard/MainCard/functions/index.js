import { MainCard, render } from '..';
import ConvertCelsius from '../../../../../library/Celsius';
import { getData, key } from '../../../../../library/Fetch/GetApi';

let url_current = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;

export async function CurrentData(valueSearch) {
  return new Promise((resolve, reject) => {
    let data = getData(url_current, `&q=${valueSearch}`);
    data
      .then((res) => {
        const [temp, status, icon, feels, humid] = [
          res.main.temp,
          res.weather[0].main,
          res.weather[0].icon,
          res.main.feels_like,
          res.main.humidity,
        ];
        const obj = {
          temp: parseInt(temp),
          status: status,
          icon: icon,
          feels: parseInt(feels),
          humid: humid,
        };
        // console.log(obj);
        resolve(obj); // resolve the promise with the `obj` variable
      })
      .catch((err) => {
        reject(err); // reject the promise if there is an error
      });
  });
  
  //   let data = getData(url_current, `&q=${valueSearch}`);
  //   let arr = [];
  //   const res = await data; // wait for the promise to resolve
  //   console.log(res);
  //   const [temp, status, icon, feels, humid] = [
  //     res.main.temp,
  //     res.weather[0].main,
  //     res.weather[0].icon,
  //     res.main.feels_like,
  //     res.main.humidity,
  //   ];
  //   const obj = {
  //     temp: ConvertCelsius(temp),
  //     status: status,
  //     icon: icon,
  //     feels: ConvertCelsius(feels),
  //     humid: humid,
  //   };
  //   arr.push(obj);
  //   return arr;
}
