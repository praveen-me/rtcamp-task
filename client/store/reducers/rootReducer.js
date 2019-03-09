import { GET_POSTS, GET_CATEGORIES } from "../actions/types";

const initState = {
  posts: null,
  totalPages: 0, 
  categories: []
}

function rootReducer(state = initState, action) {
  switch(action.type) {
    case GET_POSTS :  {
      const {posts, totalPages} = action.payload;
      return {
        ...state,
        posts,
        totalPages
      }
    }

    case GET_CATEGORIES: {
      const { categories } = action;
      return {
        ...state,
        categories
      }
    }
    
    default: return state;
  }
}

export default rootReducer;