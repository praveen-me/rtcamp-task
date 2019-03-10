import axios from 'axios';
import {GET_POSTS, GET_POST, GET_CATEGORIES} from './types';

const URI = 'http://demo.wp-api.org/wp-json/wp/v2'

const actions = {
  getPosts : (page, perPage, cb) => (dispatch) => {
    axios.get(`${URI}/posts?per_page=${perPage}&page=${page}`, {
      headers: {
        'Access-Control-Allow-Origin' : 'http://localhost:3001'
      }
    })
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
    console.log(categoryId);
    axios.get(`${URI}/posts?categories=${categoryId}&per_page=3&page=${page}`)
      .then(posts => {
        console.log(posts.data);
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
  }
} 

export default actions;