export function Dayname(date) {
  const datename = new Date(`${date}`);
  const day = datename.toLocaleDateString('en-US', { weekday: 'long' });
  return day
}
