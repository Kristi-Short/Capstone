var illustrations = {
						"broken clouds" : "http://openweathermap.org/img/w/04d.png",
						"scattered clouds" : "http://openweathermap.org/img/w/03d.png",
						"few clouds" : "http://openweathermap.org/img/w/02d.png",
						"light rain" : "http://openweathermap.org/img/w/10d.png",
						"moderate rain" : "http://openweathermap.org/img/w/10d.png",
						"very heavy rain" : "http://openweathermap.org/img/w/10d.png",
						"overcast clouds" : "http://openweathermap.org/img/w/04d.png",
						"clear sky" : "http://openweathermap.org/img/w/01d.png",
						"snow" : "http://openweathermap.org/img/w/13d.png",
						"light snow" : "http://openweathermap.org/img/w/13d.png",
						"thunderstorm" : "http://openweathermap.org/img/w/11d.png"
					};

function getWeather(query) {
	var api = "https://api.openweathermap.org/data/2.5/weather?q=";
	var apiKey = "&appid=10ece012aff6a6a253f7fe2988ca3c54";
	var unit = "&units=Imperial"

	var url = api + query + unit + apiKey;

	$.get(url, function (weather) {
		var status = weather.weather[0].description;
		var pic = illustrations[status];

		$('#weather-image').attr("src", pic);

		$('#weather-display').html("It is now " + weather.main.temp + "&#8457; with " + status + " in " + query.split(',')[0]);
	});
}

$(document).ready(function() {
	$('#add-location-sidebar').click(function() {
		getWeather($('#place-input').val());
	});

	$('#main-form').submit(function() {
		if ( $('#city-input').val().length > 0) {
			$('#place-input').val($('#city-input').val());
			getWeather($('#city-input').val());
		}
	});
});