/*---------------Vars */

const apiKEY = '674a6ef5377de277c8d3a10076bca897';
const btnHome = document.querySelector('.btn-login')
const btnLike = document.getElementById('btn-like');
const btnDisLike = document.getElementById('btn-dislike');

/**Objeto Modal con todas sus props  */
let modal = {
    tituloModal : document.getElementById('titulo-card'),
    nombreOriginal : document.getElementById('titulo-original'),
    descripGral : document.getElementById('desc-gral'),
    sinopsis : document.getElementById('sinopsis'),
    genero: document.getElementById('genero')
}


/*--------------Metodos y Funciones-*/ 

const fetchMovie =  async () => {
    const pageNumber = randomPage();
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=es-ES&sort_by=popularity.desc&page=${pageNumber}`);
    const data = await response.json();
    const {results} = data;
    do {        
        //Obtiene una película random del array de resultados
        randomMovie = results[Math.floor(Math.random() * results.length)];
    } while (randomMovie.poster_path == null);
    const imgUrl = `https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`;
    const {genre_ids} = randomMovie;
    //Llamada a fetchGenre,**************
    console.log(genre_ids);
    const  generoMovie = fetchGenre(genre_ids);
    generoMovie.then(response => console.log(response))
    
    console.log(generoMovie)
    console.log(randomMovie)
    modal.tituloModal.innerText = randomMovie.title;
    modal.nombreOriginal.innerText = `${randomMovie.original_title}`;
    modal.sinopsis.innerText = `${randomMovie.overview.substring(0,280)}...`
    modal.genero.innerText = `${randomMovie}`

    //Asigna esa imagen a los elementos para visualizar
    document.getElementById("modalHeader").style.backgroundImage = `url(${imgUrl})`;
}

function randomPage(){
    let page = 0;
    while(page == 0) // || page >=500);
        page = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 100); // + Math.floor(Math.random() * 1000);
    return page; 
}

/* Debe recibir un array */
const fetchGenre = async (genre1) => {
    const request = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKEY}&language=es-ES`)
    const response = await request.json();
    /*genres es el array de Generos (19 en total) */
    const {genres} = response;
    const generos = genres.filter(genre => genre.id === genre1);
    return generos;
}



/** -------------Event Listeners */

btnLike.addEventListener('click',fetchMovie);
btnDisLike.addEventListener('click',fetchMovie);