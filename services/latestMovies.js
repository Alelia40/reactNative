const URL = "https://cors-anywhere.herokuapp.com/http://3.17.216.66:4000/"

import * as base from '../util/base_service';

const latestMovies = () => base.get(URL+"/latest");
const movieDetails = (id) => base.get(URL +"/latest/"+ id)

export {
    latestMovies,
    movieDetails
};
