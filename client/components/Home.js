import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/actions';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import loadHOC from './loadHOC';
// import { compose } from 'redux';
// import createDOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';

// const window = (new JSDOM('').window);
// const DOMPurify = createDOMPurify(window)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage : 10,
      isLoading: true,
      currentPage: 1,
      getCategories : true,
      currentCategory: ''
    }
  }
  
  componentDidMount() {
    // getting all posts when component loaded
    const {perPage, currentPage, currentCategory} = this.state;
    this.getAllPostForPage(currentPage, perPage, currentCategory);
  }

  // function for handlePagination 
  handlePagination = (e) => {
    // setting current Page
    this.setState({
      currentPage: Number(e.target.innerHTML)
    }, () => {
      // then fetch the data according to the current page
      const {perPage, currentPage, currentCategory} = this.state;
      
      if(currentCategory && currentCategory !== 'default') {
        this.postsByCategories(currentPage, perPage, currentCategory);
      } else {
        this.getAllPostForPage(currentPage, perPage);
      }

    })
  }

  // function for getting posts
  getAllPostForPage = (currentPage, perPage) => {
    // get Post for categories page
    this.props.dispatch(actions.getPosts(currentPage, perPage, (postsStatus) => {
      if (postsStatus) {
        // getting categories if it's first time
        if (this.state.getCategories) {
          this.props.dispatch(actions.getCategories((categoriesStatus) => {
            // setting getCategories to False in local state
            if (categoriesStatus) {
              this.setState({
                getCategories: false,
                isLoading: false
              })
            }
          }));
        } else {
          this.setState({
            isLoading: false
          })
        }
      }
    }));
  }

  // getting posts by categories
  handlePostsByCategories = e => {
    const {value} = e.target;

    this.setState({
      currentCategory: value,
      currentPage: 1
    }, () => {
      const {currentCategory, perPage} = this.state;
      this.postsByCategories(1, perPage, currentCategory);
    })
  }

  postsByCategories = (page, perPage, category) => {
    // checking if there's any category selected
    if(!Number.isNaN(Number(category))) {
      this.props.dispatch(actions.getPostsByCategories(Number(category), page, perPage, (postsStatus) => {
        if (postsStatus) {
          this.setState({
            isLoading: false
          })
        }
      }))
    } else if(category === 'default') {
      const {perPage, currentPage} = this.state;
      this.getAllPostForPage(currentPage, perPage);
    }
  }

  render() {
    const {posts, totalPages, categories} = this.props;
    const {isLoading, currentPage} = this.state;

    return (
      <section className="Home">
        {/* Hero Banner */}
        <div className="hero"></div>
        <div className="block wrapper">
          {
            totalPages ? (
              <>
                <div className="categories-block">
                  <select name="currentCategory" onChange={this.handlePostsByCategories}>
                    <option value="default">Select Category</option>
                    {
                      categories.map(category => (
                        <option 
                        value={category.id} 
                        key={category.id}>{category.name}</option>
                      ))
                    }
                  </select>
                </div>
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
  return store.dispatch(actions.getPosts(1, 10, () => {}));
}

function mapStateToProps(state) {
  const {posts, totalPages, categories} = state;

  return  {
    posts,
    totalPages,
    categories
  }
}

export default {
  component: connect(mapStateToProps)(Home),
  loadData
};