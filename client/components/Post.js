import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    }
  }
  
  componentDidMount() {
    // this.props.dispatch(actions.getUserData())
    const {id} = this.props.match.params;
    
    axios.get(`https://demo.wp-api.org/wp-json/wp/v2/posts/${id}`)
      .then((post) => {
        this.setState({
          post: post.data
        })
      })    
    
  }
  
  render() {
    const {post} = this.state;
    return (
      <section >
        <div className="wrapper">
        {
          !post ? <p>Loading...</p> : (
            <div className="post-block">
              <h2 className="post-title center">{post.title.rendered}</h2>
              <p dangerouslySetInnerHTML={{__html : post.content.rendered}}></p>
            </div>
          )
        }
        </div>
      </section>
    );
  }
}

export default {
  component: connect()(Post),
};