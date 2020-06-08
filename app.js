loadText();


function loadText() {
    api = 'https://api.covid19api.com/summary';

    fetch(api)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var countries = data.Countries;
        for (x in countries) {
        const country = data.Countries[x].Country;
        const TotalConfirmed = data.Countries[x].TotalConfirmed;
        const TotalDeaths = data.Countries[x].TotalDeaths;
        const TotalRecovered = data.Countries[x].TotalRecovered;
        putDataInHTML(country, TotalConfirmed, TotalDeaths, TotalRecovered);
        }
    })

    
}

function putDataInHTML(country, TotalConfirmed, TotalDeaths, TotalRecovered) {

        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let countryName = document.createTextNode(country);
        th.appendChild(countryName);
        tr.appendChild(th);
        

        // Confirmed Cases
        let confirmedCases = document.createElement('td');
        let confirmed = document.createTextNode(TotalConfirmed);
        confirmedCases.appendChild(confirmed);
        tr.appendChild(confirmedCases);

        //Total Deaths

        let deaths = document.createElement('td');
        let death_value = document.createTextNode(TotalDeaths);
        deaths.appendChild(death_value);
        tr.appendChild(deaths);

        // Total Recovered
        let recovered = document.createElement('td');
        let recovered_cases = document.createTextNode(TotalRecovered);
        recovered.appendChild(recovered_cases);
        tr.appendChild(recovered);

        document.getElementById('body').appendChild(tr);
        x += x;
        
};

