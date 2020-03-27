function voegBoekToe() {
    var div = document.getElementById('lijst');
    var boek = document.getElementById('boek').value;
    var auteur = document.getElementById('auteur').value;
    div.innerHTML += '<div class="divRow"><div class="divCell">' + boek + '</div><div class="divCell">' + auteur + '</div></div>';
}