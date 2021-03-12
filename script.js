function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest =principal *years *rate /100;
    real_year =(new Date()).getFullYear() +Number(years);
    document.getElementById("result").innerHTML ="If you deposit <span class=\"mark\">" 
        +principal +"</span>,<br> at an interest rate of <span class=\"mark\">" 
        +rate +"%</span>.<br> You will receive an amount of <span class=\"mark\">" 
        +interest +"</span>,<br> in the year <span class=\"mark\">" 
        +real_year +"</span>";
}
function updateSlider()
{
	rate =document.getElementById("rate").value;
    document.getElementById("rate_span").innerHTML =rate+"%";
}
function validateAmount() {
		principal = document.getElementById("principal").value;
    if (principal <=0) {
    		alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}