var React = require('react');

var WeatherMessage = (props)=>{
        var {temp, location} =props;
        return (
            <div>
                <h1 className="text-center">It's { temp } in { location } </h1>
            </div>

        );
    }

module.exports = WeatherMessage;