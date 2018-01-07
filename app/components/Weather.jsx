var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
        this.setState({isLoading: true, errorMessage: undefined});
        openWeatherMap.getTemp(location)
        .then(
            function(temp){
                slf.setState({
                    location: location,
                    temp: temp,
                    isLoading: false,
                    errorMessage: undefined
                });
            },
            function(err){
                slf.setState({isLoading: false, errorMessage: err.message});
                //alert(err);
            });
    },
    render:function(){
        var {temp, location, isLoading, errorMessage} =this.state;
        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            } else if(temp && location){
                return <WeatherMessage location={ location } temp={ temp }/>
            }
        }
        function renderError(){
            if(errorMessage){
                return <ErrorModal message={errorMessage}/>
            }
        }
        return (
            <div>
                <h1 className="text-center">Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()} 
            </div>
        );
    }
});

module.exports = Weather;