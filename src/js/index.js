import $ from 'jquery';

getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

getTokenAccess = () => {
    const parametros = getHashParams();
    const token = parametros.access_token;
}

topTracksLorde = () => {
    $.ajax({
        method: "GET",
        dataType: "Json",
        url: "https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}