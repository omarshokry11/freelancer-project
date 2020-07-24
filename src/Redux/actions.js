import freelancer from '../API/API.js';

export const fetchCarousel = () => async dispatch => {
    const response = await freelancer.get('/carousel');
    dispatch({ type: "FETCH_CAROUSEL", payload: response.data});
};

export const fetchAsUsedBy = () => async dispatch => {
    const response = await freelancer.get('/asUsedBy');    
    dispatch({ type: "FETCH_ASUSEDBY", payload: response.data});
};

export const fetchWork = () => async dispatch => {
    const response = await freelancer.get('/work');    
    dispatch({ type: "FETCH_WORK", payload: response.data});
};

export const fetchAbout = () => async dispatch => {
    const response = await freelancer.get('/about');    
    dispatch({ type: "FETCH_ABOUT", payload: response.data});
};

export const fetchFavorites = () => async dispatch => {
    const response = await freelancer.get('/favorites');    
    dispatch({ type: "FETCH_FAVORITES", payload: response.data});
};

export const fetchSkills = () => async dispatch => {
    const response = await freelancer.get('/skills');
    dispatch({ type: "FETCH_SKILLS", payload: response.data});
    console.log(response.data);
    
};

export const fetchFooter = () => async dispatch => {
    const response = await freelancer.get('/footer');    
    dispatch({ type: "FETCH_FOOTER", payload: response.data});
};