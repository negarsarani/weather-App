export function dateGenerate() {
  let monthName_dayName = new Date().toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
  });
  let yearName = new Date().toLocaleDateString('en-us', {
    year: 'numeric',
  });
  const costumizeDate = `${yearName} ${monthName_dayName}`;
  return costumizeDate;
}

