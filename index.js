const curDate = document.getElementById("date");
let weatherCon = document.getElementById("weathercon");

const tempStatus = "Clouds";

const getCurrentDay = () =>{

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    return `${weekday[currentTime.getDay()]} | ${currentTime.getDate()}`;
    
}

const getCurrentTime = () =>{
    let now = new Date();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    let periods = "AM";

    if(hours > 11){
        periods = "PM";
        if (hours < 12){
            hours -= 12;
        }
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    return `${hours}:${minutes} ${periods}`;
}

curDate.innerHTML = `${getCurrentDay()} | ${getCurrentTime()}`