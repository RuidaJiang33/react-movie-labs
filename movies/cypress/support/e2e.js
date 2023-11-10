export const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

export const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

export const filterByCombined = (movieList, string, genreId) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1 && m.genre_ids.includes(genreId));

export const filterPeople = (peopleList, string) => 
  peopleList.filter((p) => p.name.toLowerCase().search(string) !== -1);