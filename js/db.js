// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBR72PdC_F2NJDy9EwHdUMz-2Ni--AHLE8",
    authDomain: "dev-r2-5c2d1.firebaseapp.com",
    databaseURL: "https://dev-r2-5c2d1.firebaseio.com",
    projectId: "dev-r2-5c2d1",
    storageBucket: "dev-r2-5c2d1.appspot.com",
    messagingSenderId: "571673184403",
    appId: "1:571673184403:web:6b824533633b4f6dbda566"
};

// // Initialize Firebase
//firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Configuracion para trackear la actividad de la app
const likesCollection = database.collection('likes');
const dislikesCollection = database.collection('dislikes');
const likeBtn = document.querySelector('#btn-like');
const dislikeBtn = document.querySelector('#btn-dislike');
const movieTitle = document.querySelector('#titulo-card');

//Log de acciones en los botones de like o dislike
likeBtn.addEventListener("click", function() {
    const user = auth.currentUser;
    const loggedInUserId = user.uid;
    likesCollection.add({
        movieId: movieTitle.innerText,
        userId: loggedInUserId
    }).catch(err => {
        console.log(err.message);
    })
})

dislikeBtn.addEventListener("click", function() {
    const user = auth.currentUser;
    const loggedInUserId = user.uid;
    dislikesCollection.add({
        movieId: movieTitle.innerText,
        userId: loggedInUserId
    }).catch(err => {
        console.log(err.message);
    })
})

