import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/actions';
import {Link} from 'react-router-dom';
// import createDOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';

// const window = (new JSDOM('').window);
// const DOMPurify = createDOMPurify(window)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage : 3,
      isLoading: true,
      currentPage: 1,
    }
  }
  
  componentDidMount() {
    // getting all posts when component loaded
    const {perPage, currentPage} = this.state;
    this.getAllPostForPage(currentPage, perPage);
  }

  // function for handlePagination 
  handlePagination = (e) => {
    // setting current Page
    this.setState({
      currentPage: Number(e.target.innerHTML)
    }, () => {
      // then setting isLoading state true for loader
      this.setState({
        isLoading: true
      }, () => {
        // then fetch the data according to the current page
        const {perPage, currentPage} = this.state;
        this.getAllPostForPage(currentPage, perPage);
      })
    })
  }

  // function for getting posts
  getAllPostForPage = (currentPage, perPage) => {
    
    this.props.dispatch(actions.getPosts(currentPage, perPage, (postsStatus) => {
      if (postsStatus) {
        this.setState({
          isLoading: false
        })
      }
    }));
  }


  render() {
    const {posts, totalPages} = this.props;
    const {isLoading, currentPage} = this.state;


    return (
      <section className="Home">
        {/* Hero Banner */}
        <div className="hero"></div>
        <div className="block wrapper">
          {
            !isLoading ? (
              <>
                <div className="blogs-container">
                  <p>Latest from the Blog</p>
                  {
                    posts.map((post) => (
                        <div className="post-block" key={post.id}>
                        <h3 className="post-title"><Link to={`/posts/${post.id}`}>{post.title.rendered}</Link></h3>
                        <div className="post-excerpt" dangerouslySetInnerHTML={{ __html : post.excerpt.rendered}}></div>
                      </div>
                    ))
                  }
                </div>
                <ul className="pagination">
                  {
                    totalPages.map((page, i) => (
                      <li key={i} className="page-container">
                      <button 
                      className="page" 
                      disabled={currentPage == i+1 ? true : false}
                      onClick={this.handlePagination}>{page}</button>
                      </li>
                    ))
                  }
                </ul>
              </>
            ): <p>Loading...</p>  
          }
        </div>
        
      </section>
    );
  }
}

function loadData(store) {
  return store.dispatch(actions.getPosts());
}

function mapStateToProps(state) {
  const {posts, totalPages} = state;
  return  {
    posts,
    totalPages,
  }
}

export default {
  component: connect(mapStateToProps)(Home),
  loadData
};