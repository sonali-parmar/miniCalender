const date=document.getElementById('date');
const day=document.getElementById('day');
const month=document.getElementById('month');
const year=document.getElementById('year');

let days=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
let months=['January','February','March','April','May','June','July','August','Septemeber','October','November','December'];

let dateObj=new Date();
date.innerHTML=dateObj.getDate();
day.innerHTML=days[dateObj.getDay()];
month.innerHTML=months[dateObj.getMonth()];
year.innerHTML=dateObj.getFullYear()
