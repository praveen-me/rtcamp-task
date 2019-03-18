import axios from 'axios';
import {GET_POSTS, GET_POST, GET_CATEGORIES, GET_SINGLE_POST} from './types';

const URI = 'https://demo.wp-api.org/wp-json/wp/v2';

const actions = {
  getPosts : (page, perPage, cb) => (dispatch) => {
    axios.get(`${URI}/posts?per_page=${perPage}&page=${page}`)
      .then(posts => {
        const pagesArr = [];
        dispatch({
          type: GET_POSTS,
          payload : {
            posts: posts.data,
            totalPages: (() => {
              for (let i = 1; i <= Number(posts.headers['x-wp-totalpages']); i++) {
                pagesArr.push(i);
              }
              return pagesArr
            })()
          },
        })
        cb(true);
      })
  },
  // getting categories
  getCategories: (cb) => (dispatch) => {
    axios.get(`${URI}/categories/`)
      .then(categories => {
        dispatch({
          type : GET_CATEGORIES,
          categories: categories.data.map(({ id, name }) => ({ id, name }))
        })

        // calling callback for setting getCategories to "false" in Home Component
        cb(true)
      })
  },
  // Getting Posts By Categories
  getPostsByCategories: (categoryId, page, cb) => (dispatch) => {
    axios.get(`${URI}/posts?categories=${categoryId}&per_page=3&page=${page}`)
      .then(posts => {
        const pagesArr = [];
        dispatch({
          type: GET_POSTS,
          payload : {
            posts: posts.data,
            totalPages: (() => {
              for (let i = 1; i <= Number(posts.headers['x-wp-totalpages']); i++) {
                pagesArr.push(i);
              }
              return pagesArr
            })()
          },
        })
        cb(true);
      })
  },
  getSinglePost: (postId) => (dispatch) => {
    axios.get(`${URI}/posts/${postId}`)
      .then(post => {
        dispatch({
          type: GET_SINGLE_POST,
          post: post.data
        })
      })
      .catch(e => console.log(e.status))
  } 
} 

export default actions;