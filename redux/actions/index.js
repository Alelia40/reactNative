import {latestMovies, movieDetails, postTransaction} from "../../services/latestMovies";


const fetchMovies = () => (dispatch) => {
    dispatch({type: "GET_MOVIES_PENDING"});

    latestMovies()
    .then(response => response.json())
    .then(data => dispatch({type: "GET_MOVIES_DONE", payload:data}))
    .catch(error => dispatch({type: "GET_MOVIES_ERR", payload:error}))
}

const fetchDetails = (id) => (dispatch) => {
    dispatch({type: "GET_DETAILS_PENDING"});

    movieDetails(id)
    .then(response => response.json())
    .then(data => dispatch({type: "GET_DETAILS_DONE", payload:data}))
    .catch(error => dispatch({type: "GET_DETAILS_ERR", payload:error}))
}

const addTransaction = (body) => {
    postTransaction(body)
    .then(response => console.log(response.json()))
}


export {
    fetchMovies,
    fetchDetails,
    addTransaction
};