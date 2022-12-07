// Ces commandes servent à l'affichage de l'extension

chrome.runtime.onInstalled.addListener(function(){
    alert("Merci à vous d'avoir installé ou mis à jour mon extension");
});

chrome.webNavigation.onCompleted.addListener(function(){
    alert("Alors comme ça on veut regarder des vidéos ?!\n Retournez au travail maintenant !!")
}, {url: [{urlMatches: "youtube.com"}]});




