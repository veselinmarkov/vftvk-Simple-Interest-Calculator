function compute()
{
    // Function for calculation of the interest bind to the Compute button
    principal = document.getElementById("principal").value;
    // validate if the Principal value is above zero, otherwise display an Alert
    if (principal <=0) {
    	alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML ="";
        return;
    }
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    // Calculate the interest
    interest =principal *years *rate /100;
    // Calculate the actual year
    real_year =(new Date()).getFullYear() +Number(years);
    document.getElementById("result").innerHTML ="If you deposit <span class=\"mark\">" 
        +principal +"</span>,<br> at an interest rate of <span class=\"mark\">" 
        +rate +"%</span>.<br> You will receive an amount of <span class=\"mark\">" 
        +interest +"</span>,<br> in the year <span class=\"mark\">" 
        +real_year +"</span>";
}
function updateSlider()
{
    // Update the rate display value on every slider movement
	rate =document.getElementById("rate").value;
    document.getElementById("rate_span").innerHTML =rate+"%";
}
