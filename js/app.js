const apiKEY = '674a6ef5377de277c8d3a10076bca897';
const btnLike = document.getElementById('btn-like');
const btnDisLike = document.getElementById('btn-dislike');

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
    //Asigna esa imagen a los elementos para visualizar
    document.getElementById("movieImg").src=imgUrl;
    document.getElementById("modalHeader").style.backgroundImage = 'url(' + imgUrl + ')';
}

function randomPage(){
    let page = 0;
    while(page == 0) // || page >=500);
        page = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 100); // + Math.floor(Math.random() * 1000);
    return page; 
}