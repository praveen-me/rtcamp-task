import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/actions';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      post: null
    }
  }
  
  componentDidMount() {
    // this.props.dispatch(actions.getUserData())
    const {id} = this.props.match.params;
    
    axios.get(`https://demo.wp-api.org/wp-json/wp/v2/posts/${id}`)
      .then((post) => {
        this.setState({
          post: post.data,
          isLoading: false
        })
      })    
    
  }
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default {
  component: connect()(Post),
};