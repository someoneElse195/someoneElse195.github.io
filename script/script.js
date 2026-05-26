function clock() {
  const timeDiv = document.getElementById("time");
  const date = new Date();
  let time = date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0')

  timeDiv.innerHTML = time;
}

setInterval(clock, 60000);

