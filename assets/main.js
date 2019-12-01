let input, key;

function triggerSearchOnEnter() {
    const input = document.getElementById("input");
    input.addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            document.getElementById("button").click();
        }
    });
}

function init() {
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("input"), {
        types: ['(cities)']
    });
}

function initWeatherApp() {
    $("#button").on("click", function() {
        input = $("#input").val();
        apikey = "e800e2d9672373f9a9475a67cca35b95"
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            dataType: "JSON",
            type: "GET",
            data: { q: input, appid: apikey, units: "metric" },

            success: function(data) {
                console.log(data)
                var i = "";


                $.each(data.weather, function(index, val) {
                    i += "<p><b class = main-city>" + "<h1>" + data.name + " " + data.sys.country + "</h1>" + "</b><img class = 'weather-icon' src=" + val.icon + ".png></p>" + "<p>" + "<h2>" + data.main.temp + "&deg;C" + "</h2>" + "<h4>" + val.main + ", " + val.description + "</p>" + "<p>" + "Wind Speed: " + data.wind.speed + " mph" + "</p>" + "<p>" + "Humidity: " + data.main.humidity + "%" + "</p>" + "</h4>"
                });
                $("#showWhether").html(i)
            }
        })
    })
}
$(document).ready(initWeatherApp)
$(document).ready(triggerSearchOnEnter)