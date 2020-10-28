const API_TOKEN='4a6c8f778e0d01361adf1aaa2a61feb9'

export function searchMovie(text,page)
{
    const url= 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text +'&page='+page
    console.log(url)
     return fetch(url)
    .then(response=> {return response.json()})
    .catch(error=>console.log(error))
}

export function getMovieImageUrl(name)
{
  //  console.log('https://image.tmdb.org/t/p/w300'+name)
    return 'https://image.tmdb.org/t/p/w300' +name
}
export function getMovieDetails(id){
  const url= 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr'
  console.log(url)
  
  return fetch(url)
  .then(data=>{return data.json()})
  .catch(error=>console.log(error))

}