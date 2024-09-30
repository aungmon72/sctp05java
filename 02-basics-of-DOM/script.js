let button = document.querySelector("#submit");
button.addEventListener("click", function(){

    let checkedRb = document.querySelector('.dayType:checked')

    let dayType = checkedRb.value;

    let people = Number(document.querySelector("#people").value);
   
    let cost = 0;

    if (dayType=="weekday") {
        cost = 7 * people;
    } else {
        cost = 15 * people;
    }


    let resultDiv = document.querySelector("#results");
    resultDiv.innerHTML = `<h1>Your cost is ${cost}</h1>`;

})

