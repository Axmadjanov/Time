const hour = document.querySelector(".hour");

const date = new Date();

h = date.getHours();
m = date.getMinutes();
hour.innerHTML = h + ":" + m;
