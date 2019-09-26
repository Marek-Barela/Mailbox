const getFullDayNumber = (date) => {
  let day = date.getDate()
  if (day <= 9) {
    return "0" + day
  }
  return day
}

const getFullMonthName = (date) => {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  const month = date.getMonth();
  return monthNames[month];
}

export const convertDate = (time) => {
  const timeToNumber = Number(time);
  const getDate = new Date(timeToNumber);
  const day = getFullDayNumber(getDate);
  const month = getFullMonthName(getDate);
  const year = getDate.getFullYear();
  return day + " " + month + " " + year;
}