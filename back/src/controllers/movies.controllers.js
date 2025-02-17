




export const getMovies = (req, res) => {
  res.send("Obteniendo todas las peliculas");
};
export const getMovie = (req, res) => {
  res.send("Obteniendo la pelicula con id " + req.params.id);
};

export const createMovie = (req, res) => {
  const {hola}= req.body
  console.log(hola)
  res.send("Creando una nueva pelicula");
};

export const updateMovie = (req, res) => {
  res.send("Actualizando la pelicula con id " + req.params.id);
};

export const deleteMovie = (req, res) => {
  res.send("Eliminando la pelicula con id " + req.params.id);
};
