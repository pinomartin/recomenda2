const apiKEY = '674a6ef5377de277c8d3a10076bca897';
const btnLike = document.getElementById('btn-like');
const btnDisLike = document.getElementById('btn-dislike');

const fetchMovie =  async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=es-ES&sort_by=popularity.desc`);
    const data = await response.json();
    const {results} = data;
    console.log(results)
    const {poster_path} = results.find(el => el.id === 157336);
    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
    console.log(imgUrl)

}

fetchMovie();

