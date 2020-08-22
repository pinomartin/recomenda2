/*---------------Vars */

const apiKEY = '674a6ef5377de277c8d3a10076bca897';
const btnHome = document.querySelector('.btn-login')
const btnMain = document.getElementById('btn-main');
const btnLike = document.getElementById('btn-like');
const btnDisLike = document.getElementById('btn-dislike');

/**Objeto Modal con todas sus props  */
let modal = {
    tituloModal : document.getElementById('titulo-card'),
    nombreOriginal : document.getElementById('titulo-original'),
    descripGral : document.getElementById('desc-gral'),
    sinopsis : document.getElementById('sinopsis'),
    genero: document.getElementById('genero'),
    idioma: document.getElementById('icono-idioma')
}


/*--------------Metodos y Funciones-*/ 
var movie = null;

const fetchMovie =  async () => {
    const pageNumber = randomPage();
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=es-ES&sort_by=popularity.desc&page=${pageNumber}`);
    const data = await response.json();
    const {results} = data;
    do {        
        //Obtiene una película random del array de resultados
        randomMovie = results[Math.floor(Math.random() * results.length)];
        movie = randomMovie;
    } while (randomMovie.poster_path == null);
    const imgUrl = `https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`;
    const original_lang = randomMovie.original_language;
    modal.idioma.src = `./img/flags/${original_lang}.png`;
    //Obtención de los géneros de la película
    const {genre_ids} = randomMovie;
    const generoMovie = await fetchGenre(genre_ids);

    modal.tituloModal.innerText = randomMovie.title;
    modal.nombreOriginal.innerText = `${randomMovie.original_title}`;
    modal.sinopsis.innerHTML = sinopsisReducer(randomMovie.overview);
    // modal.genero.innerText = `${generoMovie}`
    

    //Asigna esa imagen a los elementos para visualizar
    document.getElementById("modalHeader").style.backgroundImage = `url(${imgUrl})`;
}

function randomPage(){
    let page = 0;
    while(page == 0) // || page >=500);
        page = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 100); // + Math.floor(Math.random() * 1000);
    return page; 
}

const fetchGenre = async (genreIds) => {
    const request = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKEY}&language=es-ES`)
    const response = await request.json();
    /*genres es el array de Generos (19 en total) */
    const {genres} = response;
    var generos = [];
    // Por cada elemento del array recibido por parámetro filtra el nombre en la respuesta de la llamada a la API
    genreIds.forEach(element => {
        genero = genres.filter(genre => genre.id === element)
        generos.push(genero[0].name);
    });

    //Limpia los campos e inserta generos al Html
    modal.genero.innerHTML ='';

    generos.forEach(e => {
        modal.genero.innerHTML += `
        <span class="badge badge-pill">${e}</span>
        
        `
    })
    generos = generos.join(", ")
    return generos;
}

//Valida la longitud de la sinopsis (si supera valor agrega boton Ver mas)
const sinopsisReducer = (apiSinopsis) => {
    let caracteres = apiSinopsis.length;
    let html = '';
    if(caracteres > 200){
        html = `${apiSinopsis.substring(0,200)}.. <button onclick="sinopsisFullShow()" class='leer-mas'>Ver Mas</button>`
        
    }else{
        html = `${apiSinopsis}`
    }
    return html
}

//Accion del boton inyectado en funcion sinopsisReducer()
const sinopsisFullShow = () => {
    modal.sinopsis.innerHTML = `${randomMovie.overview}`;
}


/** -------------Event Listeners */

btnMain.addEventListener('click',fetchMovie);

//Configuracion para trackear la actividad de la app
const likesCollection = database.collection('likes');
const dislikesCollection = database.collection('dislikes');

function getUserId(){
    if (auth.currentUser) {
        const user = auth.currentUser;
        const loggedInUserId = user.uid;
        return loggedInUserId;
    } else {
        return null;
    }    
}

//Log de acciones en los botones de like o dislike
btnLike.addEventListener("click", function() {
    if (getUserId()) {
        likesCollection.add({
            movieId: movie.id,
            userId: getUserId()
        }).then(() => {
            fetchMovie();
        }).catch(err => {
            console.log(err.message);
        })
    } else {
        fetchMovie();
    }
})

btnDisLike.addEventListener("click", function() {
    if (getUserId()) {
        dislikesCollection.add({
            movieId: movie.id,
            userId: getUserId()
        }).then(() => {
            fetchMovie();
        }).catch(err => {
            console.log(err.message);
        })
    } else {
        fetchMovie();
    }
})