// Compute the interest by grabbing values from inputs and returning text to a span element
function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = ((principal * years * rate) / 100);
    let year = new Date().getFullYear()+parseInt(years);

    if (principal <= 0) {
        alert("Please enter a postive number.")
        document.getElementById("principal").focus()
    } else {
        document.getElementById("result").innerHTML = "If you deposit <span class='number'>$" +principal+"</span>,\<br\> at an interest rate of <span class='number'>" +rate+"%</span>\<br\>You will receive an amount of <span class='number'>$" +interest+"</span>,\<br\> in the year <span class='number'>" +year+"</span>\<br\>"
    }
}
// Changes the value of the rate slider "dynamically" by grabbing the value as it changes then setting the current displayed value to that. 
function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
        