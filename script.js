var endpoints = {
  league1: "https://fantasy.premierleague.com/api/league/2272990/entries/",
};

function fetchData(endpointKey, callback) {
  var fullUrl =
    "https://stat-app.onrender.com/proxy?url=" + endpoints[endpointKey];

  var xhr = new XMLHttpRequest();
  xhr.open("GET", fullUrl, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(null, xhr.responseText); // Call the callback with the data
      } else {
        callback(xhr.statusText, null); // Call the callback with the error
      }
    }
  };

  xhr.onerror = function () {
    callback("Network error", null); // Handle network errors
  };

  xhr.send();
}

// Fetch function for league1 triggered by button click
function fetchLeague() {
  fetchData("league1", function (error, response) {
    if (!error) {
      var result = JSON.parse(response); // Parse JSON response
      var content = document.getElementById("content");

      for (var i = 0; i < result.length; i++) {
        // Use a simple for-loop
        var entryName = result[i]["entry_name"];
        var entryId = result[i]["entry"];
        content.innerHTML +=
          "<h5>" + entryName + " (" + entryId + ")" + "</h5>";
      }
    } else {
      console.error("Error fetching data:", error);
      document.getElementById("content").innerHTML =
        "<p>Error: " + error + "</p>";
    }
  });
}
