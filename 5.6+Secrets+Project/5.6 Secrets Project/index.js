// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;  

// 3. Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); 

// 4. When the user goes to the home page it should render the index.ejs file.
app.set("view engine", "ejs");  
const API_URL = "https://secrets-api.appbrewery.com/";
const yourBearerToken = "08f3026d-9c6c-4d88-a3b2-c579dc106247";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Secrets Project" });
});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.post("/get-secret", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/secrets/random", config);
    const result = response.data;
    res.render("index.ejs", { content: JSON.stringify(result) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      content: `Error: ${error.message}`,
    });
  } 
});


// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});