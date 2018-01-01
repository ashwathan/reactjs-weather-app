var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    	<Route path="/" components={ Main }>
      </Route>
  </Router>,
  document.getElementById('app')
);
