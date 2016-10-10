document.getElementById("next-button").onclick = function(e) {
    // Event sendes med følgende kommando:
    // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
    // For å tracke knappetrykk på en bildekarusell på forsiden, kan man f.eks. gjøre følgende
    ga('send', 'event', "Bildekarusell", "Neste", "Forside");
}

document.getElementById("prev-button").onclick = function(e) {
    ga('send', 'event', "Bildekarusell", "Forrige", "Forside");
}

function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
