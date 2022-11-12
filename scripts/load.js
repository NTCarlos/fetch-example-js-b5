// Define the api url to fetch
const url = 'https://catfact.ninja/fact';

// Request Option needed by the Fetch call
let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// Fuction that fetchs the data and update the value in the DOM
function fetchCatsApi() {
    // Get the element from the DOM
    let element = document.getElementById('catFact');
    // Check that the element exist
    if (element) {
        // Fetch the API and parse the response as JSON, catch errors if something fails
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => element.innerText = JSON.parse(result).fact)
            .catch(error => console.log('error', error));
    }
}