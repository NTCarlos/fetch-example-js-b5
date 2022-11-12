let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function fetchCatsApi() {
    fetch("https://catfact.ninja/fact", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}