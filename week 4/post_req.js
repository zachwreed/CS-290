/*********************************************
** Author: Zach Reed
** Date: 7/22/2018
** Description: Ajax Interactions: Post Request
**********************************************/

document.addEventListener("DOMContentLoaded", button_bound); // code is parsed and ready to submit

function button_bound()
{
	document.getElementById("submit_button").addEventListener("click", function(event)
	{
	var payload = 
	{
		"cardNum": null,
		"expNum" : null,
		"secNum" : null
	};
	
	payload.cardNum = document.getElementById("card_num").value;
	payload.expNum = document.getElementById("exp_num").value;
	payload.secNum = document.getElementById("sec_num").value;
	
	var post_site = "http://httpbin.org/post";
	var http_req = new XMLHttpRequest();
	http_req.open("POST", post_site, true);
	http_req.setRequestHeader("Content-Type", "application/json"); // sets value of http request header, must be called after open() and before send()
	http_req.addEventListener("load", function()
	{

			var post_ret = JSON.parse(JSON.parse(http_req.responseText).data);
			document.getElementById("card_num_ret").textContent = post_ret.cardNum;
			document.getElementById("exp_num_ret").textContent = post_ret.expNum;
			document.getElementById("sec_num_ret").textContent = post_ret.secNum;
	
	});
	
	http_req.send(JSON.stringify(payload));
	event.preventDefault();
	});
}