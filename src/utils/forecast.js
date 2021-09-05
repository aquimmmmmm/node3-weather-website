const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=73da484b28ab5772e283e55b853b337c&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Uneable to connect to weather service!', undefined)    
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            console.log(body.current)
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out. The humidity is ' + body.current.humidity + '%')
        }
    })
}


module.exports = forecast