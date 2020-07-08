//$(document).ready(function() {
//    
//    submit.addEventListener("click", searchAlbum)
//    
//    function searchAlbum(){
//        $.ajax({
//        url: "https://restcountries.eu/rest/v2/all",
//        data: {s: input.value},
//        success: function(result) {
//            console.log(result)
//        },
//        error: function() {
//            console.log("error")
//        }
//    })
//
//    }
//                
//    })


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

    let population = document.createElement('div')
        population.innerHTML = "Population: " + data[i].population
        countryContainer.appendChild(population)
        population.setAttribute("class", "info")

        
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


        

        

}
}

})







//---JUST TO PRINT TO CONSOLE TO CHECK IF IT IS WORKING:
//$(document).ready(function() {
//    
//        $.ajax({
//        url: "https://restcountries.eu/rest/v2/currency/usd",
//        success: function(response) {
//            console.log(response)
//        },
//
//    })
//                
//    })


// Build a single page app that shows:
// a. - whatever country the user inserts printed on the page;
// b. - the capital of this country;
// c. - population of this country:
// d. - any other information that seems interesting to you
// e. - the flag of this country




//NOT YET: -----

//$(document).ready( function (){
//
//let input = document.getElementById("input")
//let submit = document.getElementById("submit")
//
//
//let container = document.getElementById("container")
//
//submit.addEventListener("click", getCountry)
//
//function getCountry() {
//	$.ajax({
//		url: "https://restcountries.eu/rest/v2/all",
//		data: {s: input.value},
//		success: function(result) {
//			listResults(result)
//			listPosters(result)
//		}
//	})	
//}
//	function listResults (movie) {
//		let firstResult = movie.Search[0]
//		$("#title").html(firstResult.Title)
//		$("#year").html(firstResult.Year)
//		$("#poster-main").css({
//			"background-image": "url(" + firstResult.currencies + ")",
//			"background-size": "100% 100%",
//			border: "3px solid red"
//		})
//	}
//
//	function listPosters(movies) {
//	console.log(movies)	
//		for(let i = 0; i < movies.Search.length; i++) {
//				let results = "<div class='poster'><img src='" + movies.Search[i].Poster + "'></div>"
//				container.innerHTML += results;
//		}
//		linking(movies)
//	}
//
//	function linking(movies) {
//		let poster = document.getElementsByClassName("poster")
//		for(let i = 0; i < poster.length; i++) {
//			poster[i].addEventListener("click", function () {
//				window.open("https://www.imdb.com/title/" + movies.Search[i].imdbID)
//			})
//		}
//					
//	}
//
//
//
//
//})