const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2ZmNGE2NzU4MmQ1MTIzNTg1OWVhMTE5ZDMwYWE0MiIsIm5iZiI6MTcwMzg1MzU1My4yNzQsInN1YiI6IjY1OGViZGYxY2ZlNDhmNjQyNmQ5NWI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HuFao_QBgA2_FJwXDJUnOHJ8cY97ZyU98H78AU49vvU'
    }
  };


export async function getDetails(type, id) {
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options);
  return await res.json(); // Return the promise from res.json()
}


export async function getMovieTrailer(movieId) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
  return await res.json(); // Return the promise from res.json()
}

export async function getMovieNowPlaying(page) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options);
  return await res.json(); // Return the promise from res.json()
}

export async function getPopular() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US`, options);
  return await res.json();
}

export async function getMovieUpcoming(page=1) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, options);
  return await res.json();
}

export async function getTvUpcoming(page=1) {
  const res = await fetch(`https://api.themoviedb.org/3/tv/upcoming?language=en-US&$page={page}`, options);
  return await res.json();
}

export async function getTvAiring(page=1) {
  const res = await fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}`, options);
  return await res.json();
}

export async function getTvonAir(page=1) {
  const res = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}`, options);
  return await res.json();
}

export async function getTvPopular(page=1) {
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`, options);
  return await res.json();
}

export async function getMoviePopular() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options);
  return await res.json();
}

export async function getSearchResults(query) {
  fetch(`https://api.themoviedb.org/3/search/multi?query=${query}include_adult=false&language=en-US&page=1`, options)
    .then(function(data) {
      console.log(data.results);
      return data.results
  })
}