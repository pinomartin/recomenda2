const apiKEY = '674a6ef5377de277c8d3a10076bca897';
const btnLike = document.getElementById('btn-like');
const btnDisLike = document.getElementById('btn-dislike');

const fetchMovie =  async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=es-ES&sort_by=popularity.desc`);
    const data = await response.json();
    const {results} = data;

    //Obtiene una película random del array de resultados
    randomMovie = results[Math.floor(Math.random() * results.length)];
    //Extrae la imagen del poster
    poster_path = randomMovie.poster_path;
    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    //Asigna esa imagen a los elementos para visualizar
    document.getElementById("movieImg").src=imgUrl;
    document.getElementById("modalHeader").style.backgroundImage = 'url(' + imgUrl + ')';
}