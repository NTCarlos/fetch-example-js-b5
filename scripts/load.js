let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function fetchCatsApi() {
    fetch("https://catfact.ninja/fact", requestOptions)
        .then(response => response.text())
        .then(result => document.getElementById('catFact').innerText = JSON.parse(result).fact)
        .catch(error => console.log('error', error));
}