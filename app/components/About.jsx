var React = require('react');
var Nav = require('Nav');

var About = (props)=>{
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is weather application built using react js.</p>
            <p>You can find the <a href="https://github.com/ashwathan/reactjs-weather-app">repo</a> of this project on github.</p>
        </div>

    );
};

module.exports = About;