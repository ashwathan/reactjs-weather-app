var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
console.log(openWeatherMap);
var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading : false
        }
    },
    handleSearch: function(location){
        var slf = this;
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location)
        .then(
            function(temp){
                slf.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                });
            },
            function(err){
                slf.setState({isLoading: false});
                alert(err);
            });
    },
    render:function(){
        var {temp, location, isLoading} =this.state;
        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            } else if(temp && location){
                return <WeatherMessage location={ location } temp={ temp }/>
            }
        }
        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()} 
            </div>
        );
    }
});

module.exports = Weather;