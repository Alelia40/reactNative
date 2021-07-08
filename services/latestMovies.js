const URL = "http://localhost:4000"

import * as base from '../util/base_service';

const latestMovies = () => base.get(URL+"/movies");
const movieDetails = (id) => base.get(URL +"/movies/"+ id)

export {
    latestMovies,
    movieDetails
};
