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
        callback(null, xhr.responseText); // Pass the response to the callback
      } else {
        callback("Error: " + xhr.statusText, null); // Pass the error
      }
    }
  };

  xhr.onerror = function () {
    callback("Network error", null);
  };

  xhr.send();
}

function fetchLeague() {
  fetchData("league1", function (error, response) {
    var content = document.getElementById("content");

    if (error) {
      console.error("Error fetching data:", error);
      content.innerHTML = "<p>Error: " + error + "</p>";
    } else {
      var result = JSON.parse(response); // Parse JSON response
      var table = "<table border='1' style='width:100%; text-align:left;'>";
      table += "<tr><th>Entry Name</th><th>Entry ID</th></tr>"; // Table header

      for (var i = 0; i < result.length; i++) {
        var entryName = result[i]["entry_name"];
        var entryId = result[i]["entry"];
        table +=
          "<tr><td>" + entryName + "</td><td>" + entryId + "</td></tr>";
      }

      table += "</table>";
      content.innerHTML = table; // Add table to the content div
    }
  });
}
