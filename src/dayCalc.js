export function getWeekday(date) {

  console.log("getWeekday: " + date)

  let weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];


  return weekday[new Date(date).getDay()];
}
