// Compute the interest by grabbing values from inputs and returning text to a span element
function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = ((principal * years * rate) / 100);
    let year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerText = "If you deposit " +principal+", \<br\> at an interest rate of " +rate+"%\<br\>You will receive an amouint of " +amount+", \<br\>in the year " +year+"\<br\>"
}
// Changes the value of the rate slider "dynamically" by grabbing the value as it changes then setting the current displayed value to that. 
function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
        