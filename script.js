var endpoints = {
  league1: "https://fantasy.premierleague.com/api/league/2272990/entries/",
};

function fetchData(endpointKey) {
  // Build the full URL dynamically
  var fullUrl =
    "https://stat-app.onrender.com/proxy?url=" + endpoints[endpointKey];

  // Use XMLHttpRequest for compatibility
  var xhr = new XMLHttpRequest();
  xhr.open("GET", fullUrl, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Display the fetched data
        var content = document.getElementById("content");
        content.innerHTML = "<pre>" + xhr.responseText + "</pre>";
      } else {
        console.error("Error fetching data:", xhr.statusText);
      }
    }
  };

  xhr.send();
}

// Fetch function for league1 triggered by button click
function fetchLeague() {
  fetchData("league1");
}
