$(document).ready(function() {


let submit = document.getElementById("submit")
let gdpButton = document.getElementById("gdp")
let currentCountry;
    
let commaNumberGDP;
let commaNumberGDPTwo;
let commaNumberGDPThree;



gdpButton.addEventListener("click", function() {
	 returnGDP("https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json")
})
    
    
        	function returnGDP (url) {
		$.ajax({
			url: url,
			success: function(gdpResponse) {
                console.log(JSON.parse(gdpResponse))
                
				let parsed = JSON.parse(gdpResponse)
                console.log(parsed[0]["Country Name"]);
                console.log(input.value)
                
                
                for(let i = 0; i < parsed.length; i++){
                    if(parsed[i]["Country Name"] === currentCountry){
                        var keys = object.keys(currentCountry)
                        var values = object.values(currentCountry)
                        console.log(values)
                        console.log(keys)
                        
                        console.log(parsed[i][2017])
                        console.log(parsed[i][2016])
                        console.log(parsed[i][2015])
                        console.log("this works")
                    let numGDP = parsed[i][2015]
                    let numGDPTwo = parsed[i][2016]
                    let numGDPThree = parsed[i][2017]
    
    commaNumberGDP = Number(numGDP.toFixed(0)).toLocaleString().split(/\s/).join(',')
    console.log(commaNumberGDP)
                
    commaNumberGDPTwo = Number(numGDPTwo.toFixed(0)).toLocaleString().split(/\s/).join(',')
    console.log(commaNumberGDPTwo)
                
    commaNumberGDPThree = Number(numGDPThree.toFixed(0)).toLocaleString().split(/\s/).join(',')
    console.log(commaNumberGDPThree)

                    }
                }


				console.log(parsed.length)
			}
		})
	}
    
    

	let TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );

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


function displayCountryData (data, commaNumberGDP) {
    currentCountry = data[0].name
    console.log(data[0].name)

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
        
    let gdpInfo = document.createElement('div')
        gdpInfo.innerHTML = "2017: " + commaNumberGDP
        countryContainer.appendChild(gdpInfo)
        console.log(data[0].population)
        gdpInfo.setAttribute("class", "info")

        
    let flag = document.createElement('div')
        flag.style.width = '250px';
        flag.style.height = '150px';
        flag.style.backgroundImage = "url(" + data[i].flag + ")"
        flag.style.backgroundSize = "100% 100%"
        countryContainer.appendChild(flag)
        flag.setAttribute("class", "image-container")
    
    let translations = document.createElement('div')
        countryContainer.appendChild(translations)
        translations.setAttribute("class", "info")
        
    let translationsButtonDE= document.createElement("BUTTON");
    let translationsButtontxtDE=document.createTextNode('DE');
        translations.appendChild(translationsButtonDE)
        translationsButtonDE.appendChild(translationsButtontxtDE)
        translationsButtonDE.setAttribute("id","DE")

        translationsButtonDE.addEventListener("click",function (){
                let translationDE = document.createElement('div')
        translationDE.innerHTML = "DE: " + data[i].translations.de
        countryContainer.appendChild(translationDE)
        translationDE.setAttribute("class", "info")
            
        }
        
        )
    let translationsButtonFR= document.createElement("BUTTON");
    let translationsButtontxtFR=document.createTextNode('FR');
        translations.appendChild(translationsButtonFR)
        translationsButtonFR.appendChild(translationsButtontxtFR)
        translationsButtonFR.setAttribute("id","FR")
        
        translationsButtonFR.addEventListener("click",function(){
                let translationFR = document.createElement('div')
        translationFR.innerHTML = "FR: " + data[i].translations.fr
        countryContainer.appendChild(translationFR)
        translationFR.setAttribute("class", "info")
            
            
        }
        
        
        )

    let translationsButtonJA= document.createElement("BUTTON");
    let translationsButtontxtJA=document.createTextNode('JA');
        translations.appendChild(translationsButtonJA)
        translationsButtonJA.appendChild(translationsButtontxtJA)
        translationsButtonJA.setAttribute("id","JA")
        
                translationsButtonJA.addEventListener("click",function(){
                let translationJA = document.createElement('div')
        translationJA.innerHTML = "JA: " + data[i].translations.ja
        countryContainer.appendChild(translationJA)
        translationJA.setAttribute("class", "info")
            
            
        }
        
        
        )


        let gdpDataSet = document.createElement('div')
        let gdpDataSetTwo = document.createElement('div')
        let gdpDataSetThree = document.createElement('div')
        gdpDataSet.innerHTML = "GDP 2015: " + commaNumberGDP
        gdpDataSetTwo.innerHTML = "GDP 2016: " + commaNumberGDPTwo
        gdpDataSetThree.innerHTML = "GDP 2017: " + commaNumberGDPThree
        countryContainer.appendChild(gdpDataSet)
        countryContainer.appendChild(gdpDataSetTwo)
        countryContainer.appendChild(gdpDataSetThree)
        gdpDataSet.setAttribute("class", "info")
        gdpDataSetTwo.setAttribute("class", "info")
        gdpDataSetThree.setAttribute("class", "info")
        console.log(commaNumberGDP)

        

}
}

})




    


//async function getGdp () {
//    const response = await fetch ('https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json');
//    const data = await response.json();
//    console.log(data)
//    console.log(data)
//}
//getGdp();



//        var settings = {
//	       "async": true,
//	       "crossDomain": true,
//	       "url": "https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json",
//	       "method": "GET",
//        }
//
////
//    $.ajax(settings).done(function (response) {
//        console.log(response)
//        console.log(response[0].name)
//
//    });



//    $.ajax({
//        url: "https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json",
//        success: function(gdpResult){
//            
//        console.log(gdpResult)
//        var gdpJson = JSON.parsed(gdpResult);
//        getGdp(gdpJson);
//        console.log(parsed[12]["Country Name"])
//        console.log(parsed.length)
//        }
//
//    });

//let gdpButton = document.getElementById("gdp");


//function getGdp(gdpJson) {
//    gdpButton.addEventListener("click", function () {
//        alert(gdpJson[0]["country Name"]);
//        
//    })
//}