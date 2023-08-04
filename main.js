//  < !--Javascript For Calculation-- >

const convert = document.getElementById("btnconvert");
const tempans = document.getElementById("tempans");


convert.addEventListener("click", celsiusToFahrenheit);

function celsiusToFahrenheit() {
    const numericPattern = /^-?\d+(\.\d+)?$/;
    const tempnum = document.getElementById("num").value;
    let ans;
    if (numericPattern.test(tempnum)) {

        const tempSelect = document.getElementById("selecttemp").value;


        if (tempSelect == 'cel') {
            let mytext = document.getElementById("myheading");
            mytext.innerHTML = " **  Celsius(°C) To Fahrenheit(°F)  ** ";
            ans = tempnum * (9 / 5) + 32;
            ans = ans + " Fahrenheit (°F)";
        }
        if (tempSelect == 'fah') {
            let mytext = document.getElementById("myheading");
            mytext.innerHTML = " **  Fahrenheit(°F) To  Celsius(°C) ** ";
            ans = (tempnum - 32) * (5 / 9);
            ans = ans + " Celsius (°C)";
        }
        tempans.innerHTML = ans;


    }
    else {
        tempans.innerHTML = "Please Enter Valid Input";
        tempans.style.color = "red";

    }

}

const reset = document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("num").value = "";

});
