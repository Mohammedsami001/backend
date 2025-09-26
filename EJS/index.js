import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  if (day === 0 || day === 6) {
    res.render("index.ejs", {
      dayType: "weekend",
      advice: "It's time to party!",
    });
    return;
  } else {
    res.render("index.ejs", {
      dayType: "weekend",
      advice: "Time to work!",
    });
    return;
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
