import { GET_POSTS, GET_CATEGORIES, GET_SINGLE_POST } from "../actions/types";

const initState = {
  posts: null,
  totalPages: 0, 
  categories: [],
  currentPost: null
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

    case GET_SINGLE_POST: {
       const {post} = action;
       return {
         ...state,
         currentPost: post
       }
    }
    
    default: return state;
  }
}

export default rootReducer;