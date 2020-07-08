$(document).ready(function() {


let submit = document.getElementById("submit")

submit.addEventListener ("click", countries)

function countries (){
    $.ajax({
        url: "https://restcountries.eu/rest/v2/name/" + input.value,
        success: function(countryData) {
            console.log(countryData)
            displayCountryData(countryData)
        }
    })
}

function displayCountryData (data) {

    for (let i=0; i<data.length; i++) {
    let countryContainer = document.createElement('div')
    document.body.appendChild(countryContainer)
        countryContainer.setAttribute("id","content")

    let countryName = document.createElement('h2')
        countryName.innerHTML = data[i].name
        countryContainer.appendChild(countryName)
        console.log(data[0].name)
        console.log(data[i].name)
        countryName.setAttribute("class", "country-name")
    
    let capitalName = document.createElement('div')
        capitalName.innerHTML = "Capital: " + data[i].capital
        countryContainer.appendChild(capitalName)
        capitalName.setAttribute("class", "info")

    let num = data[i].population
    
    commaNumber = Number(num.toFixed(0)).toLocaleString().split(/\s/).join(',')
    console.log(commaNumber)
        
    let population = document.createElement('div')
        population.innerHTML = "Population: " + commaNumber
        countryContainer.appendChild(population)
        console.log(data[0].population)
        population.setAttribute("class", "info")
        
    
    let flag = document.createElement('div')
        flag.style.width = '250px';
        flag.style.height = '150px';
        flag.style.backgroundImage = "url(" + data[i].flag + ")"
        flag.style.backgroundSize = "100% 100%"
        countryContainer.appendChild(flag)
        flag.setAttribute("class", "image-container")
    
        
}
}


})