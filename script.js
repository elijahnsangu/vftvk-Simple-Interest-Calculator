

function compute() {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rangeInput").value);
    const timePeriod = parseFloat(document.getElementById("years").value);
    let year = 2021 + timePeriod;

 
    
    
    

    let simpleInt = amount * rate * timePeriod;
    let total = ( amount + simpleInt).toFixed(2);

    document.getElementById("result").innerHTML =
    `If you deposit <mark>${amount}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${total}</mark>,
    in the year <mark>${year}</mark>.`;
}

