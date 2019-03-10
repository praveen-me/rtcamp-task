import React, { Component } from 'react';
import store from '../store/store';

const loadHOC = wrappedComponent => {
  const component = wrappedComponent;
  class withComponent extends Component {
    render() {
      // const compo

      return <component />
    }
  }
  return withComponent;
}

export default loadHOC;