// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBp6Fw89aE866qeVJl6jAH5s3neeZeq-2M",
    authDomain: "recomenda2.firebaseapp.com",
    databaseURL: "https://recomenda2.firebaseio.com",
    projectId: "recomenda2",
    storageBucket: "recomenda2.appspot.com",
    messagingSenderId: "691402937408",
    appId: "1:691402937408:web:23a63c189de97c4029bba5",
    measurementId: "G-LS7RNNK0HT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Configuracion para trackear la actividad de la app
const docRef = firestore.doc("logs/app-activity");
const likeBtn = document.querySelector('#btn-like');
const dislikeBtn = document.querySelector('#btn-dislike');
const movieTitle = document.querySelector('#titulo-card');

//Log de acciones en los botones de like o dislike
likeBtn.addEventListener("click", function() {
    const textToSave = movieTitle.innerText;
    console.log("Texto a guardar: " + textToSave);
    docRef.set({
        movieTitle: textToSave,
        like: true
    }).then(function() {
        console.log("Log guardado");
    }).catch(function() {
        console.log("Error");
    });
})

dislikeBtn.addEventListener("click", function() {
    const textToSave = movieTitle.innerText;
    console.log("Texto a guardar: " + textToSave);
    docRef.set({
        movieTitle: textToSave,
        like: false
    }).then(function() {
        console.log("Log guardado");
    }).catch(function() {
        console.log("Error");
    });
})