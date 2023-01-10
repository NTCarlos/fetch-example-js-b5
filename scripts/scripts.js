// main function that handles the logic
async function loadFact() {
  // Get the element from the DOM
  let element = document.getElementById('catFact')
  // check that the element was rendered
  if (element) {
    // Consume the API
    const fact = await fetchCatsApi()
    element.innerText = fact
  }
}
// Fuction that fetchs the data
async function fetchCatsApi() {
  // Define the api url to fetch
  const url = 'https://catfact.ninja/fact'
  // Axios GET
  const response = await axios.get(url)
  // await the response from the API
  if (await response.data) {
    return response.data.fact
  }
}