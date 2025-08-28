import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Home route (render form)
app.get("/", (req, res) => {
  res.render("index.ejs", { joke: null, error: null });
});

// Handle form submission
app.post("/getJoke", async (req, res) => {
  const { name } = req.body;
  try {
    // Fetch joke from JokeAPI
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
    let joke = response.data.joke;

    // Personalize the joke with user's name
    if (name && name.trim() !== "") {
      joke = joke.replace(/Chuck Norris|Chuck|Norris/gi, name);
    }

    res.render("index.ejs", { joke, error: null });
  } catch (error) {
    console.error(error.message);
    res.render("index.ejs", { joke: null, error: "Failed to fetch a joke!" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`😂 Server is running on http://localhost:${PORT}`);
});
