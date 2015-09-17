var express = require('express');
var router = express.Router();
var i2c_htu21d = require('htu21d-i2c');
var async = require('async')
// If using a Raspberry Pi, do not specify the i2c device name.
// The correct name will be used based on the board revision.
// Older boards use /dev/i2c-0, newer ones use /dev/i2c-1.
// If using any other board, specify the device name.
// For example: i2c_htu21d({device: '/dev/i2c-1/'});

var htu21df = new i2c_htu21d();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	console.log("getting")
  	var locals = {};
  	htu21df.readTemperature(function (temp) {
		console.log('Temperature, C:', temp);
            locals.env = {
                temperature: temp
            };
            htu21df.readHumidity(function (humidity){
    			console.log('humidity', humidity);
                locals.env = {
                    humidity: humidity
                };
                console.dir(locals)
	            res.render('index', { title: 'Hey', message: 'Hello there!', temp: locals.env.temperature, humid: locals.env.humidity});
			});
    });
   
});

module.exports = router;
