// The API URL you want to make the request to
const targetEndpoint= "https://fantasy.premierleague.com/api/league/2272990/entries/"
const apiUrl =
  `https://stat-app.onrender.com/proxy?url=${targetEndpoint}`;

// Make the fetch request
fetch(apiUrl)
  .then((response) => {
    // Check if the response is successful (status 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    // console.log("Data received:", data); // Do something with the data
    mapData(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error); // Handle errors
  });

function mapData(resp) {
  // Target a container in your HTML to display the entries
  const content = document.getElementById("content");

  // Loop through the data and append each entry_name to the container
  resp.forEach((item) => {
    const div = document.createElement("h3");
    div.textContent = item.entry_name; // Use the entry_name value
    content.appendChild(div); // Add the div to the container
  });
}
