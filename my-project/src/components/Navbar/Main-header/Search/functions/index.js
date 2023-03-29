import { closeLoading, openLoading } from '../../../../../library/Loading';
import { renderLocation } from '../../../../../library/Location';
import { CityCountry } from '../../../../Location';
import { renderMainCard } from '../../../../Main/CenterCard/MainCard';
import { CurrentData } from '../../../../Main/CenterCard/MainCard/functions';
import { renderDaysCards } from '../../../../Main/DaysCards';
import { FutureData } from '../../../../Main/DaysCards/functions';

export function searchValue(e) {
  const location2 = document.getElementsByClassName('location');
  const card = document.getElementById('card');
  let value = e.target.value;
  const daysCard = document.getElementById('days-cards');
  value === '' ? (value = 'tehran') : value;
  openLoading();
  CityCountry(value);
  CurrentData(value).then((data) => {
    [...location2].map((item) => renderLocation(data, item));
    renderMainCard(data, card);
  });
  FutureData(value)
    .then((data) => renderDaysCards(data, daysCard))
    .then(() => closeLoading());
}
