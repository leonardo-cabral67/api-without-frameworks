interface UserData {
  user: string;
  name: string;
  email: string;
  favorite_moveis: Array<string>
}

type Database = {
  Users: UserData[],
  Movies: Array<string>
}

type getMoviesOutput = {
  movies: Array<string>
}

const database: Database = {
  Users: [] as UserData[],
  Movies: ["Avatar", "Hit man", "Godzilla Minus One"]
}

function getMovies(): getMoviesOutput {
  return { movies: database.Movies }
}

export { getMovies }
