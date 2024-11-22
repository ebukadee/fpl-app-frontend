// The API URL you want to make the request to

const endpoints = {
  league1: "https://fantasy.premierleague.com/api/league/2272990/entries/",
};

function fetchData(endpointKey) {
  // Build the full URL dynamically
  const fullUrl = `https://stat-app.onrender.com/proxy?url=${endpoints[endpointKey]}`;

  // Fetch the data
  fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      // Display the fetched data
      const content = document.getElementById("content");
      content.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
document.getElementById("results").addEventListener("click", () => fetchData("league1"));
