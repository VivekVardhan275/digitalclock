let a = () => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let hour1 = document.body.querySelector("#hour");
  hour1.innerHTML = hour;
  let min1 = document.body.querySelector("#min");
  min1.innerHTML = min;
  let sec1 = document.body.querySelector("#sec");
  sec1.innerHTML = sec;
};
setInterval(a, 1000);
