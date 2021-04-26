fetch('https://covid-api.mmediagroup.fr/v1/cases')
    .then((res) => res.json())
    .then((Data) => {
        dropdownData(Data);
    })

function dropdownData(Data) {
    for (let i in Data) {
        var dropdown_item = document.createElement("option");
          dropdown_item.innerText = i;
          dropdown.append(dropdown_item);
      }
}

let dropdown = document.querySelector("#country");
function getValue() {
    fetch('https://covid-api.mmediagroup.fr/v1/cases')
    .then((res) => res.json())
    .then((myData) =>{
        var getValue = document.getElementById('country').selectedOptions[0].value;
            console.log(getValue);
            heading.innerHTML = `<span>Country:</span> ${myData[getValue].All.country}`;
            date.innerHTML = `<span>Last Updated:</span> ${myData[getValue].All.updated}`
            population.innerHTML = `<span>Population:</span> ${myData[getValue].All.population}`
            confirmed.innerHTML = `<span>Confirmed:</span> ${myData[getValue].All.confirmed}`
            recoverd.innerHTML = `<span>Recoverd:</span> ${myData[getValue].All.recovered}`
            let activeCase =  myData[getValue].All.confirmed - myData[getValue].All.recovered
            active.innerHTML = `<span>Active:</span> ${activeCase}`
            death.innerHTML = `<span>Death:</span> ${myData[getValue].All.deaths}`
        }
        )
}

let heading = document.querySelector('h5');
let date = document.querySelector('#date');
let population = document.querySelector("#population");
let confirmed = document.querySelector("#confirmed");
let recoverd = document.querySelector('#recoverd');
let active = document.querySelector('#active');
let death = document.querySelector('#death');
