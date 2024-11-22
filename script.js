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
    if (error) {
      console.error("Error fetching data:", error);
      var content = document.getElementById("content");
      content.innerHTML = "<p>Error: " + error + "</p>";
    } else {
      result = JSON.parse(response);
      var content = document.getElementById("content");
      result.forEach((res) => {
        entryName = res["entry_name"];
        entryId = res["entry"];
        content.innerHTML += "<h5>" + entryName + "(" + entryId + ")" + "</h5>";
      });
    }
  });
}
