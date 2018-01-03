var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        return (
            <div>
                <h2>It's 40 in ___ </h2>
            </div>

        );
    }
});

module.exports = WeatherMessage;