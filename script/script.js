function clock() {
  const timeDiv = document.getElementById("time");
  const date = new Date();
  let time = date.getHours() + ":" + date.getMinutes()

  timeDiv.innerHTML = time;
}

setInterval(clock, 60000);

