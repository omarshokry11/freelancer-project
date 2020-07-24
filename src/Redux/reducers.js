const initialState = {
    carousel: [],
    asusedby: [],
    work: [],
    about: [],
    favorites: [],
    skills: [],
    footer: [],
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case "FETCH_CAROUSEL":
            return { ...state, carousel: action.payload }
        case "FETCH_ASUSEDBY":
            return { ...state, asusedby: action.payload }

        case "FETCH_WORK":
            return { ...state, work: action.payload }
            
        case "FETCH_ABOUT":
            return { ...state, about: action.payload }
        
        case "FETCH_FAVORITES":
            return { ...state, favorites: action.payload }

        case "FETCH_SKILLS":
            return { ...state, skills: action.payload }
        
        case "FETCH_FOOTER":
            return { ...state, footer: action.payload }

        default:
            return state
    }
}