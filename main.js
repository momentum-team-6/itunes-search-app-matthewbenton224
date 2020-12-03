const musicSearch = document.querySelector('#music-search')
const musicInput = document.querySelector('#music-input')
const baseUrl = 'https://itunes-api-proxy.glitch.me/search?term='
const audioPlayer = document.querySelector('#audio-player')
const musicCards = document.querySelector('#card-holder')


musicSearch.addEventListener ('submit', function(event) {
    event.preventDefault()
    let searchString = musicInput.value.replace(' ', '+')
    console.log(baseUrl + searchString)
    fetch (baseUrl + searchString)
        .then (response => response.json())
       // .then (data => console.log(data))
        .then(result => {
            for (let object of result.results) {
                console.log(object)
                renderSong(object)
            }
        })
})

function renderSong(song) {
    const artistCard = document.createElement('div')
    artistCard.classList.add('card')
    musicCards.appendChild(artistCard)
    
    const artistImage = document.createElement('div')
    artistImage.classList.add('img')
    artistCard.appendChild(artistImage)
    
    const artistName = document.createElement('h1')
    artistName.classList.add('artist-name')
    artistCard.appendChild(artistName)
    
    const trackTitle = document.createElement('p')
    trackTitle.classList.add('track-title')
    artistCard.appendChild(trackTitle)
    
    const trackPreview = document.createElement('div')
    trackPreview.classList.add('track-preview')
    artistCard.appendChild(trackPreview)

    artistImage.innerHTML = `<img class='image' src=${song.artworkUrl100}></img>`
    trackTitle.innerHTML = song.trackName
    artistName.innerHTML = song.artistName
    trackPreview.innerHTML = `<audio controls src=${song.previewUrl}></audio>`
}


const pastTargets = []
cardHolder.addEventListener('click', function (event) {
   if (typeof (event.target.dataset.target) === 'string') {
       pastTargets.push(event.target)
       audioPlayer.classList.remove('hide')
        const audioValue = event.target.dataset.target
       const titleValue = event.target.dataset.titleValue
       if (pastTargets[pastTargets.length - 1] === (pastTargets[pastTargets.length - 2])) {
           if (pastTargets[pastTargets.length - 1] === (pastTargets[pastTargets.length = 3]))
            audioPlayer.innerHTML = `<audio controls src=${audioValue}></audio><div class="title-playing">Now Playing>`
        } else {
            audioPlayer.innerHTML = `<audio controls autoplay src=${audioValue}></audio><div class='title-playing>Title Playing>`
        } 
      }        
})

form.addEventListener('submit', function (event) {
    event.preventDefault()
    musicInput.value = ''
    musicCards.innerHTML = ''
})

function renderResults (data) {
    for (let object of data.results) {
        console.log(object)
        renderSong(object)
    }
}


