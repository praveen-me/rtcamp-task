import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/actions';

let postId = null;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    }
  }
  
  componentDidMount() {
    const {id} = this.props.match.params;
    postId = id;
    this.props.dispatch(actions.getSinglePost(id))
  }
  
  render() {
    const {post} = this.props;
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

function mapStateToProps(state, ownProps) {
  const {id} = ownProps.match.params;
  
  return {
    post : state.currentPost,
    id
  }
}

function loadData(store) {
  return store.dispatch(actions.getSinglePost(1))
}

export default {
  component: connect(mapStateToProps)(Post),
  loadData
};