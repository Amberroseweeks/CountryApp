
$(document).ready(function() {

    	let currentCountry;
	var gdpValueArray = []
	var gdpKeyArray = []
    

let submit = document.getElementById("submit")

submit.addEventListener ("click", countries)

function countries (){
    let gdpList =[]
    $.ajax({
        url: "https://restcountries.eu/rest/v2/name/" + input.value,
        success: function(countryData) {
            console.log(countryData)
            displayCountryData(countryData)
        }
    })
  /*  var settings = {
	       "async": true,
	       "crossDomain": true,
	       "url": "https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json",
	       "method": "GET",
        }
        $.ajax(settings).done(function (response) {
        console.log(response)
        for (var i = 0; i < response.data.length; i++){
            console.log(response["Country Name"])
        }
            displayGDPData(response)
    });*/


function displayCountryData (data) {

    for (let i=0; i<data.length; i++) {
        currentCountry =data[0].name
        console.log("currentCountry" + currentCountry)
    let countryContainer = document.createElement('div')
    document.body.appendChild(countryContainer)
        countryContainer.setAttribute("id","content")

    let countryName = document.createElement('h2')
        countryName.innerHTML = data[0].name
        countryContainer.appendChild(countryName)
        console.log(data[0].name)
        console.log(data[i].name)
        countryName.setAttribute("class", "country-name")
    
    let capitalName = document.createElement('div')
        capitalName.innerHTML = "Capital: " + data[i].capital
        countryContainer.appendChild(capitalName)
        capitalName.setAttribute("class", "info")

   // let num = data[i].population
    
    //commaNumber = Number(num.toFixed(0)).toLocaleString().split(/\s/).join(',')
    //console.log(commaNumber)

  	function commafy( num ) {
	    var str = num.toString().split('.');
	    if (str[0].length >= 5) {
	        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	    }
	    if (str[1] && str[1].length >= 5) {
	        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
	    }
	    return str.join('.');
	}
        
        
    let population = document.createElement('div')
        population.innerHTML = "Population: " + commafy(data[0].population)
        countryContainer.appendChild(population)
        console.log(data[0].population)
        population.setAttribute("class", "info")

        
    let flag = document.createElement('div')
        flag.style.width = '250px';
        flag.style.height = '150px';
        flag.style.backgroundImage = "url(" + data[0].flag + ")"
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
        })

    let translationsButtonJA= document.createElement("BUTTON");
    let translationsButtontxtJA=document.createTextNode('JA');
        translations.appendChild(translationsButtonJA)
        translationsButtonJA.appendChild(translationsButtontxtJA)
        translationsButtonJA.setAttribute("id","JA")
        
                translationsButtonJA.addEventListener("click",function(){
                let translationJA = document.createElement('div')
        translationJA.innerHTML = "JA: " + data[0].translations.ja
        countryContainer.appendChild(translationJA)
        translationJA.setAttribute("class", "info")
        })

    let gdpButton= document.createElement("BUTTON");
    let gdpButtonTxt=document.createTextNode('GDP');
        translations.appendChild(gdpButton)
        gdpButton.appendChild(gdpButtonTxt)
        gdpButton.setAttribute("id","GDP")
        
                gdpButton.addEventListener("click",function(){
                    returnGDP("https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json")
                let gdpNumber = document.createElement('div')
        gdpNumber.innerHTML = "GDP: "
        countryContainer.appendChild(gdpNumber)
        gdpNumber.setAttribute("class", "info")


                    
      function returnGDP(url){
          let TESTER = document.getElementById('gdp-graph')
                    $.ajax({
                        url: url,
                        success: function(gdpResponse){
                            let parsed = JSON.parse(gdpResponse);
                            
                      parsed.forEach(function(country){
                          if(country["Country Name"] === currentCountry){
                            var values = Object.values(country)
                            var keys = Object.keys(country)
                              $(gdpNumber).html("GDP:" + commafy(country[2017]));
                                if(values[i] !== "" && typeof values[i] == "number"){
                                    gdpValueArray.push(values[i])
                                    gdpKeyArray.push(keys[i])
                                }
                          }
                          
                          
                          
                          
                      })      
                            
                            
                            
                    
                        }
                    })
				Plotly.newPlot( TESTER, [{
				x: gdpKeyArray,
				y: gdpValueArray }], {
				margin: { t: 10 } } );
                }
        })

}
    
    
    
    
}
}

})
