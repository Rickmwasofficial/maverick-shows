const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2ZmNGE2NzU4MmQ1MTIzNTg1OWVhMTE5ZDMwYWE0MiIsIm5iZiI6MTcwMzg1MzU1My4yNzQsInN1YiI6IjY1OGViZGYxY2ZlNDhmNjQyNmQ5NWI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HuFao_QBgA2_FJwXDJUnOHJ8cY97ZyU98H78AU49vvU'
    }
  };


export function getDetails(type, id) {
  return fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
    .then(res => res.json()); // Return the promise from res.json()
}


export function getMovieTrailer(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
    .then(res => res.json()); // Return the promise from res.json()
}

export function getPopular() {
  return fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US`, options)
  .then(res => res.json())
}

export function getMovieUpcoming(page=1) {
  return fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&${page}`, options)
  .then(res => res.json())
}

export function getTvUpcoming(page=1) {
  return fetch(`https://api.themoviedb.org/3/tv/upcoming?language=en-US&${page}`, options)
  .then(res => res.json())
}

export function getTvAiring(page=1) {
  return fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US${page}`, options)
  .then(res => res.json)
}

export function getTvonAir(page=1) {
  return fetch(`https://api.themoviedb.org/3/tv/on_the_air?language=en-US${page}`, options)
  .then(res => res.json)
}

export function getTvPopular(page=1) {
  return fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US${page}`, options)
  .then(res => res.json)
}

export function getMoviePopular(page=1) {
  return fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US${page}`, options)
  .then(res => res.json)
}
