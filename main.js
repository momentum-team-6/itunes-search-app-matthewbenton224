const musicSearch = document.querySelector('#music-search')
const musicInput = document.querySelector('#music-input')
const baseUrl = 'https://itunes-api-proxy.glitch.me/search?term='

musicSearch.addEventListener ('submit', function(event) {
    event.preventDefault()
    let searchString = musicInput.value.replace(' ', '+')
    console.log(baseUrl + searchString)
    fetch (baseUrl + searchString)
        .then (response => response.json)
        .then (data => console.log(data))
})

