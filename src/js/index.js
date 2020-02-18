import $ from 'jquery';

const getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

const topTracksLorde = () => {
    const parametros = getHashParams();
    const token = parametros.access_token;
    const url = `https://api.spotify.com/v1/`

    $.ajax({
        method: 'GET',
        dataType: 'Json',
        url: `https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(json => { console.log(json) })

}
topTracksLorde()
