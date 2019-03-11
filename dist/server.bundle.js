/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/Footer.js":
/*!*************************************!*\
  !*** ./client/components/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Footer =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Footer, _Component);\n\n  function Footer() {\n    _classCallCheck(this, Footer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));\n  }\n\n  _createClass(Footer, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n        className: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"footer-text\"\n      }, \"WP REST API + REACTJS\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Starter Theme\"));\n    }\n  }]);\n\n  return Footer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./client/components/Footer.js?");

/***/ }),

/***/ "./client/components/Header.js":
/*!*************************************!*\
  !*** ./client/components/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Header =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n        className: \"wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"logo\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, \"Simple Blog Theme\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Just another Wordpress Theme\"));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./client/components/Header.js?");

/***/ }),

/***/ "./client/components/Home.js":
/*!***********************************!*\
  !*** ./client/components/Home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/actions */ \"./client/store/actions/actions.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // import loadHOC from './loadHOC';\n// import { compose } from 'redux';\n// import createDOMPurify from 'dompurify';\n// import { JSDOM } from 'jsdom';\n// const window = (new JSDOM('').window);\n// const DOMPurify = createDOMPurify(window)\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"handlePagination\", function (e) {\n      // setting current Page\n      _this.setState({\n        currentPage: Number(e.target.innerHTML)\n      }, function () {\n        // then fetch the data according to the current page\n        var _this$state = _this.state,\n            perPage = _this$state.perPage,\n            currentPage = _this$state.currentPage,\n            currentCategory = _this$state.currentCategory;\n\n        if (currentCategory && currentCategory !== 'default') {\n          _this.postsByCategories(currentPage, currentCategory);\n        } else {\n          _this.getAllPostForPage(currentPage, perPage);\n        }\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getAllPostForPage\", function (currentPage, perPage) {\n      // get Post for categories page\n      _this.props.dispatch(_store_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getPosts(currentPage, perPage, function (postsStatus) {\n        if (postsStatus) {\n          // getting categories if it's first time\n          if (_this.state.getCategories) {\n            _this.props.dispatch(_store_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCategories(function (categoriesStatus) {\n              // setting getCategories to False in local state\n              if (categoriesStatus) {\n                _this.setState({\n                  getCategories: false,\n                  isLoading: false\n                });\n              }\n            }));\n          } else {\n            _this.setState({\n              isLoading: false\n            });\n          }\n        }\n      }));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handlePostsByCategories\", function (e) {\n      var value = e.target.value;\n\n      _this.setState({\n        currentCategory: value,\n        currentPage: 1\n      }, function () {\n        var currentCategory = _this.state.currentCategory;\n        console.log(currentCategory);\n\n        _this.postsByCategories(1, currentCategory);\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"postsByCategories\", function (page, category) {\n      // checking if there's any category selected\n      if (!Number.isNaN(Number(category))) {\n        // console.log(curr);\n        _this.props.dispatch(_store_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getPostsByCategories(Number(category), page, function (postsStatus) {\n          if (postsStatus) {\n            _this.setState({\n              isLoading: false\n            });\n          }\n        }));\n      } else if (category === 'default') {\n        var _this$state2 = _this.state,\n            perPage = _this$state2.perPage,\n            currentPage = _this$state2.currentPage;\n\n        _this.getAllPostForPage(currentPage, perPage);\n      }\n    });\n\n    _this.state = {\n      perPage: 3,\n      isLoading: true,\n      currentPage: 1,\n      getCategories: true,\n      currentCategory: ''\n    };\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // getting all posts when component loaded\n      var _this$state3 = this.state,\n          perPage = _this$state3.perPage,\n          currentPage = _this$state3.currentPage,\n          currentCategory = _this$state3.currentCategory;\n      this.getAllPostForPage(currentPage, perPage, currentCategory);\n    } // function for handlePagination \n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          posts = _this$props.posts,\n          totalPages = _this$props.totalPages,\n          categories = _this$props.categories;\n      var _this$state4 = this.state,\n          isLoading = _this$state4.isLoading,\n          currentPage = _this$state4.currentPage;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"Home\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"hero\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"block wrapper\"\n      }, totalPages ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"categories-block\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n        name: \"currentCategory\",\n        onChange: this.handlePostsByCategories\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"default\"\n      }, \"Select Category\"), categories.map(function (category) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n          value: category.id,\n          key: category.id\n        }, category.name);\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"blogs-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Latest from the Blog\"), posts.map(function (post) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"post-block\",\n          key: post.id\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n          className: \"post-title\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          to: \"/posts/\".concat(post.id)\n        }, post.title.rendered)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"post-excerpt\",\n          dangerouslySetInnerHTML: {\n            __html: post.excerpt.rendered\n          }\n        }));\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"pagination\"\n      }, totalPages.map(function (page, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: i,\n          className: \"page-container\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          className: \"page\",\n          disabled: currentPage == i + 1 ? true : false,\n          onClick: _this2.handlePagination\n        }, page));\n      }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Loading...\")));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction loadData(store) {\n  return store.dispatch(_store_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getPosts(1, 3, function () {}));\n}\n\nfunction mapStateToProps(state) {\n  var posts = state.posts,\n      totalPages = state.totalPages,\n      categories = state.categories;\n  console.log(totalPages);\n  return {\n    posts: posts,\n    totalPages: totalPages,\n    categories: categories\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Home),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./client/components/Home.js?");

/***/ }),

/***/ "./client/components/Post.js":
/*!***********************************!*\
  !*** ./client/components/Post.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/actions */ \"./client/store/actions/actions.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Post =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Post, _Component);\n\n  function Post(props) {\n    var _this;\n\n    _classCallCheck(this, Post);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Post).call(this, props));\n    _this.state = {\n      post: null\n    };\n    return _this;\n  }\n\n  _createClass(Post, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var id = this.props.match.params.id;\n      this.props.dispatch(_store_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSinglePost(id));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var post = this.props.post;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"wrapper\"\n      }, !post ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Loading...\") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"post-block\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        charSet: \"utf-8\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, post.title.rendered), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n        rel: \"canonical\",\n        href: \"/posts/\".concat(post.id)\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"post-title center\"\n      }, post.title.rendered), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        dangerouslySetInnerHTML: {\n          __html: post.content.rendered\n        }\n      }))));\n    }\n  }]);\n\n  return Post;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction mapStateToProps(state, ownProps) {\n  var id = ownProps.match.params.id;\n  return {\n    post: state.currentPost,\n    id: id\n  };\n}\n\nfunction loadData(store, postId) {\n  return store.dispatch(_store_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSinglePost(postId));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Post),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./client/components/Post.js?");

/***/ }),

/***/ "./client/routes.js":
/*!**************************!*\
  !*** ./client/routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ \"./client/components/Home.js\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Post */ \"./client/components/Post.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread({}, _components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  path: '/',\n  exact: true\n}), _objectSpread({}, _components_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  path: '/posts/:id',\n  exact: true\n})]);\n\n//# sourceURL=webpack:///./client/routes.js?");

/***/ }),

/***/ "./client/store/actions/actions.js":
/*!*****************************************!*\
  !*** ./client/store/actions/actions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./client/store/actions/types.js\");\n\n\nvar URI = 'https://demo.wp-api.org/wp-json/wp/v2';\nvar actions = {\n  getPosts: function getPosts(page, perPage, cb) {\n    return function (dispatch) {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(URI, \"/posts?per_page=\").concat(perPage, \"&page=\").concat(page)).then(function (posts) {\n        var pagesArr = [];\n        dispatch({\n          type: _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_POSTS\"],\n          payload: {\n            posts: posts.data,\n            totalPages: function () {\n              for (var i = 1; i <= Number(posts.headers['x-wp-totalpages']); i++) {\n                pagesArr.push(i);\n              }\n\n              return pagesArr;\n            }()\n          }\n        });\n        cb(true);\n      });\n    };\n  },\n  // getting categories\n  getCategories: function getCategories(cb) {\n    return function (dispatch) {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(URI, \"/categories/\")).then(function (categories) {\n        dispatch({\n          type: _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_CATEGORIES\"],\n          categories: categories.data.map(function (_ref) {\n            var id = _ref.id,\n                name = _ref.name;\n            return {\n              id: id,\n              name: name\n            };\n          })\n        }); // calling callback for setting getCategories to \"false\" in Home Component\n\n        cb(true);\n      });\n    };\n  },\n  // Getting Posts By Categories\n  getPostsByCategories: function getPostsByCategories(categoryId, page, cb) {\n    return function (dispatch) {\n      console.log(categoryId);\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(URI, \"/posts?categories=\").concat(categoryId, \"&per_page=3&page=\").concat(page)).then(function (posts) {\n        console.log(posts.data);\n        var pagesArr = [];\n        dispatch({\n          type: _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_POSTS\"],\n          payload: {\n            posts: posts.data,\n            totalPages: function () {\n              for (var i = 1; i <= Number(posts.headers['x-wp-totalpages']); i++) {\n                pagesArr.push(i);\n              }\n\n              return pagesArr;\n            }()\n          }\n        });\n        cb(true);\n      });\n    };\n  },\n  getSinglePost: function getSinglePost(postId) {\n    return function (dispatch) {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(URI, \"/posts/\").concat(postId)).then(function (post) {\n        dispatch({\n          type: _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_SINGLE_POST\"],\n          post: post.data\n        });\n      }).catch(function (e) {\n        return console.log(e.status);\n      });\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (actions);\n\n//# sourceURL=webpack:///./client/store/actions/actions.js?");

/***/ }),

/***/ "./client/store/actions/types.js":
/*!***************************************!*\
  !*** ./client/store/actions/types.js ***!
  \***************************************/
/*! exports provided: GET_POSTS, GET_POST, GET_CATEGORIES, GET_SINGLE_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_POSTS\", function() { return GET_POSTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_POST\", function() { return GET_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_CATEGORIES\", function() { return GET_CATEGORIES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_SINGLE_POST\", function() { return GET_SINGLE_POST; });\nvar GET_POSTS = 'GET_POSTS';\nvar GET_POST = 'GET_POST';\nvar GET_CATEGORIES = 'GET_CATEGORIES';\nvar GET_SINGLE_POST = 'GET_SINGLE_POST';\n\n//# sourceURL=webpack:///./client/store/actions/types.js?");

/***/ }),

/***/ "./client/store/reducers/rootReducer.js":
/*!**********************************************!*\
  !*** ./client/store/reducers/rootReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./client/store/actions/types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initState = {\n  posts: null,\n  totalPages: 0,\n  categories: [],\n  currentPost: null\n};\n\nfunction rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_POSTS\"]:\n      {\n        var _action$payload = action.payload,\n            posts = _action$payload.posts,\n            totalPages = _action$payload.totalPages;\n        return _objectSpread({}, state, {\n          posts: posts,\n          totalPages: totalPages,\n          currentPost: null\n        });\n      }\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_CATEGORIES\"]:\n      {\n        var categories = action.categories;\n        return _objectSpread({}, state, {\n          categories: categories\n        });\n      }\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_SINGLE_POST\"]:\n      {\n        var post = action.post;\n        return _objectSpread({}, state, {\n          currentPost: post\n        });\n      }\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./client/store/reducers/rootReducer.js?");

/***/ }),

/***/ "./client/store/store.js":
/*!*******************************!*\
  !*** ./client/store/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/rootReducer */ \"./client/store/reducers/rootReducer.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\nvar composeEnhancers = (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...\n}) : redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./client/store/store.js?");

/***/ }),

/***/ "./helper/template.js":
/*!****************************!*\
  !*** ./helper/template.js ***!
  \****************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/routes */ \"./client/routes.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/components/Header */ \"./client/components/Header.js\");\n/* harmony import */ var _client_components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/components/Footer */ \"./client/components/Footer.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction template(path, store) {\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_8__[\"Helmet\"].renderStatic();\n  var jsx = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n    context: {},\n    location: path\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(_client_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)))));\n  return \"\\n    <!doctype html>\\n    <html \".concat(helmet.htmlAttributes.toString(), \">\\n      <head>\\n        <title>Simple Blog Theme - RT Camp Task</title>\\n        <link rel=\\\"stylesheet\\\" href=\\\"/bundle.css\\\" />\\n        \").concat(helmet.title.toString(), \"\\n        \").concat(helmet.meta.toString(), \"\\n        \").concat(helmet.link.toString(), \"\\n      </head>\\n      <body  \").concat(helmet.bodyAttributes.toString(), \">\\n        <div id=\\\"root\\\">\").concat(jsx, \"</div>\\n        <script src=\\\"/client.bundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \");\n}\n\n//# sourceURL=webpack:///./helper/template.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/template */ \"./helper/template.js\");\n/* harmony import */ var _client_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/store/store */ \"./client/store/store.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/routes */ \"./client/routes.js\");\n\n\n\n\n // import proxy from 'express-http-proxy';\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // Set path for static files\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('dist')); // app.use('/api', proxy('https://wplift.com'));\n\napp.get('/', function (req, res) {\n  getContent(req, res);\n});\napp.get('/posts/:id', function (req, res) {\n  getContent(req, res);\n}); // 404 Route\n\napp.get('*', function (req, res) {\n  res.send('404');\n});\n\nfunction getContent(req, res) {\n  // MATCHING ROUTES FOR FETCHING DATA\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"matchRoutes\"])(_client_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    // checking the url contains the post id or not \n    if (req.params.id) {\n      // extract the index\n      var postId = req.params.id;\n      return route.loadData(_client_store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"], postId);\n    }\n\n    return route.loadData ? route.loadData(_client_store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) : null;\n  });\n  Promise.all(promises).then(function () {\n    return res.send(Object(_helper_template__WEBPACK_IMPORTED_MODULE_1__[\"template\"])(req.path, _client_store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n  });\n}\n\napp.listen(3001, function (err) {\n  console.log(\"Server is running on http://localhost:3001\");\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });