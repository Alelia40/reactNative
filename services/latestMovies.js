const URL = "http://localhost:4000"

import * as base from '../util/base_service';

const latestMovies = () => base.get(URL+"/movies");
const latestMoviesSearch = (query) => base.get(URL+"/movies?title_like="+query);
const movieDetails = (id) => base.get(URL +"/movies/"+ id)

const postTransaction = (data) => {
    return fetch(URL+"/transactions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export {
    latestMovies,
    latestMoviesSearch,
    movieDetails,
    postTransaction
};
