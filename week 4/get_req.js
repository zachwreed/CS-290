/*********************************************
** Author: Zach Reed
** Date: 7/22/2018
** Description: Ajax Interactions: Get Request
**********************************************/

document.addEventListener("DOMContentLoaded", bindButton);

function bindButton ()
{
	document.getElementById("submit").addEventListener("click", function(event)
	{
		var req = new XMLHttpRequest();
		var apiKey = "&appid=b4f0f9b496762af730db24c9be04fcb3";
		var payload;
		var zipVal = document.getElementById("zip").value;
		var cityVal = document.getElementById("city").value;
	
		if(document.getElementById('rCity').checked) 
		{
			payload = "http://api.openweathermap.org/data/2.5/weather?q=" + cityVal + ",us" + apiKey;
		}
		else
		{
			payload = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipVal + ",us" + apiKey;
		}
		
		req.open("GET", payload, true);
		req.addEventListener("load", function()
		{ 
				var response = JSON.parse(req.responseText);
				document.getElementById("temp").textContent = response.main.temp;
				document.getElementById("humidity").textContent = response.main.humidity;
				document.getElementById("wind_speed").textContent = response.wind.speed;
		});
		req.send(null);
		event.preventDefault();
	});
}