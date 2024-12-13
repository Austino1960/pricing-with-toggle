let checkBox = document.querySelector('#Toggle');
let monthlyPrices = document.querySelectorAll('.price.monthly');
let yearlyPrices = document.querySelectorAll('.price.annually');

checkBox.addEventListener('change', function () {
    if (checkBox.checked) {
        yearlyPrices.forEach(price => price.style.display = "none");
        monthlyPrices.forEach(price => price.style.display = "flex");
    } else {
        yearlyPrices.forEach(price => price.style.display = "flex");
        monthlyPrices.forEach(price => price.style.display = "none");
    }
});
