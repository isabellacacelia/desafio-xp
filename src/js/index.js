function x() {
    let nomeArtista = document.getElementById('nomeArtista').value
    let baseURL = `https://api.spotify.com/v1/artists/${nomeArtista}`

    console.log('nome do Artista', nomeArtista)
}
x()
