document.getElementById('bouton qui fait rien').addEventListener('click', function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => alert('Votre adresse IP est : ' + data.ip))
        .catch(error => console.error('Erreur:', error));
});