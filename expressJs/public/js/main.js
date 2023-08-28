const buttonClick = document.getElementById('searchBtn');

const city_name = document.getElementById('city_name')
const city = document.getElementById('citySearch');
const tempStatus  = document.getElementById('temp-status');
const temp  = document.getElementById('temp');
const days = document.getElementById('day');
const curDate = document.getElementById('date');
const data = document.getElementById('data-hide');



const getInfo = async(event)=>{
   event.preventDefault();
   const  cityVal = city.value;

    if(cityVal === ""){
            city_name.innerText = `Please Enter City Name Before Searching`;
    }else{
        try{
           let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=31349ae4dca700927ec2f5ed4a2d0da1`;
           let respone = await fetch (url);
           let jsonData = await respone.json();
           let arrayData = [jsonData];
           temp.innerText = arrayData[0].main.temp + `℃`;
          const temp_mod = arrayData[0].weather[0].main;
          
          
           let countryName = arrayData[0].sys.country;
           city_name.innerText = `${cityVal}, ${countryName}`;

           if(temp_mod =="Clear"){
            tempStatus.innerHTML="<i class='fa-solid fa-sun' style='color: #fff957;' ></i>";
           }
           else if(temp_mod=="Rain"){
            tempStatus.innerHTML="<i class='fa-solid  fa-cloud-rain' style='color: #2e7bff;' ></i>";
           }else{
            tempStatus.innerHTML="<i class='fa-solid  fa-cloud' style='color: #f2f2f2;' ></i>";
           }
        }
        catch(error){
            city_name.innerText = `Please Enter City Name Properly`;
            data.style.display ="none"
        }

    }
}
buttonClick.addEventListener('click' , getInfo);




const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
  };

  const getCurrentTime = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth() ];
    var date = now.getDate();
  

    return `${date} ${month} `;
  };

  days.style.textTransform ="uppercase";
  curDate.style.textTransform = "uppercase"
  days.innerHTML = getCurrentDay();
  curDate.innerHTML =getCurrentTime(); 
