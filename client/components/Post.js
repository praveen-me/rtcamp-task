import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/actions';
import {Helmet} from 'react-helmet';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    }
  }
  
  componentDidMount() {
    const {id} = this.props.match.params;
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
              {/* Helmet Initialization */}
              <Helmet>
                <meta charSet="utf-8" />
                <title>{post.title.rendered}</title>
                <link rel="canonical" href={`/posts/${post.id}`}/>
              </Helmet>
            
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

function loadData(store, postId) {
  return store.dispatch(actions.getSinglePost(postId))
}

export default {
  component: connect(mapStateToProps)(Post),
  loadData
};