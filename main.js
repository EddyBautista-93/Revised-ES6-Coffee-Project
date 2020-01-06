// working on cleaner code comments, less code,
const renderCoffee = (coffee) =>{
    let html = `<div class="row"><h1 class="coffee">${coffee.name}</h1>`;
    html += `<p>${coffee.roast}</p> </div>`;
    return html;
};

const renderCoffees = (coffees) => {
    let html = '';
    for(let i = coffees.length -1; i >= 0; i--){
        html += renderCoffee(coffees[i]);
    }
        return html;
};

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
let coffeeReveresed = coffees.reverse();


//Search function for coffee
// es5 works but when converted to a arow function it doesnt work
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = coffeeSelector.value;
    var searchCoffee = document.getElementById('searchCoffeeName').value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())){
            filteredCoffees.push(coffee);
        }
        else if ( coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    var selector = document.getElementById("coffees");
    selector.innerHTML = renderCoffees(filteredCoffees);
}






let searchCoffee = document.querySelector("#searchCoffeeName")
let coffeeSelector = document.querySelector("#roast-selection");
let selector = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

selector.innerHTML = renderCoffees(coffees);

searchCoffee.addEventListener("keyup", updateCoffees);

submitButton.addEventListener('click', updateCoffees);

coffeeSelector.addEventListener("change", updateCoffees);
