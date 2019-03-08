import axios from 'axios';

const actions = {
  getPosts : () => dispatch => {
    axios.get('https://api.github.com/users/praveen-me')
      .then(userData => {
        dispatch({
          type: "USER",
          user : userData.data,
        })
      })
  }
} 

export default actions;