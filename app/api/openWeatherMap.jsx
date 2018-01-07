var axios = require('axios');

const URL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=d014a001d630a649c9021d880ee403d0&q=';

module.exports = {
    getTemp : function(location){
        var encodeLocation = encodeURIComponent(location);

        var requstURL = `${URL}${encodeLocation}`;
        
        return axios.get(requstURL)
            .then(function(res){
                if(res.data.cod && res.data.message){
                    throw new Error(res.data.message);
                } else{
                    return res.data.main.temp;
                }
            }, function(err){
                console.log(err);
                throw new Error(err.data.message);
            });
    }
}