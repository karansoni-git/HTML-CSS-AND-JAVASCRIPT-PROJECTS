let degree = document.querySelector(".deg");
let city = document.querySelector("#city");
let time_date = document.querySelector("#time_date");
let cond = document.querySelector("#cond");
let searcharea = document.querySelector("#search_bar");
let img = document.querySelector("#img");
let form = document.querySelector("form");

form.addEventListener('submit',update);
let location_name = "mumbai";

const result = async(lname)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=32f066aed9f34215b44113558252603&q=${lname}&aqi=no`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let cityName = data.location.name;
    let localtime = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    let image = data.current.condition.icon;
    finalChange(cityName,localtime,temp,condition,image);
}

function finalChange(cityName,localtime,temp,condition,image){
    degree.innerText=temp;
    time_date.innerText=localtime;
    city.innerText=cityName;    
    cond.innerText=condition;
    img.src=image;
    searcharea.value="";
}

function update(e){
    e.preventDefault();
    let newval = searcharea.value;
    result(newval);
}
result(location_name)