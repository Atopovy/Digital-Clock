import "core-js/actual";
import "regenerator-runtime";

const actualTime = function () {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const time = `${hour} : ${minutes} : ${seconds}`;

  setInterval(actualTime, 1000);
  document.querySelector(".clock").textContent = time;
};

actualTime();
