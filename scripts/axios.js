// Define the api url to fetch
const url = 'https://catfact.ninja/fact'

// Fuction that fetchs the data and update the value in the DOM
function fetchCatsApi() {
    // Get the element from the DOM
    let element = document.getElementById('catFact')
    // Axios GET
    axios.get(url)
    .then(response => {
     const randomFact = response.data.fact
     element.innerText = randomFact
   }).catch(error => console.error(error))
}