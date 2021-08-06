function checkZero(data) {
  if (data.length == 1) {
    data = "0" + data;
  }
  return data;
}

function dateFormat(dateObj) {
  let day = dateObj.getDate() + "";
  let month = dateObj.getMonth() + "";
  let year = dateObj.getFullYear() + "";

  day = checkZero(day);
  month = checkZero(month);

  return day + "-" + month + "-" + year;
}

export default dateFormat;
