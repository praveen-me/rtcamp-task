import { GET_POSTS } from "../actions/types";

const initState = {
  posts: null,
  totalPages: 0, 
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
    
    default: return state;
  }
}

export default rootReducer;