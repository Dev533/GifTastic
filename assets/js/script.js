var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=6ACik4yZyNxcYH8hwfHFzuECjhJourrZ&limit=10");
xhr.done(function(data) { console.log("success got data", data); });


var topic = ["altered beast", "beast from the east", "beast mode", "beast x-men", "beauty and the beast", 
            "big foot", "beastie boys", "chuck norris", "fantastic beasts", "gary busy", "honeybadger",
            "the very beast of dio", "loch ness monster", 
            "sasquatch", "wolverine x-men", "yetti"]


for (var i = 0; i < topic.length; i++) {
    $("#beastButtons").append("<button>" +topic[i]+ "</button>   ");
} 

$("#addBeast").on("click", function() {
    var beastInput = $("#beast-input").text()
    console.log(beastInput)
})
   


//var queryURL = "https://api.giphy.com/v1/gifs/search?q="++&api_key=YOUR_API_KEY