const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/api/get-nearby-location", async (req, res) => {
  try {
    const data = JSON.parse(req.query.data);
    console.log("REQ data: ", data);
    const { a: lat1, b: lat2, c: long1, d: long2 } = data;
    let lat = parseFloat(`${lat1}.${lat2}8729`);
    let long = parseFloat(`${long1}.0${long2}47666`);
    let keyWord = "vntrs";
    let radius = 200;
    if (lat1 !== 59 || lat2 !== 32 || long1 !== 18 || long2 !== 4) {
      keyWord = "wrong";
      radius = 1000;
      lat = 33.0378183;
      long = -117.296097;
    }
    const locationsAPIkey = "AIzaSyCBI1Ibb4PHvyOh7EehV_oa8tTJlmLwdtk";
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&keyword=${keyWord}&key=${locationsAPIkey}`;
    const result = await fetch(url)
      .then(response => response.json())
      .then(data => data.results[0]);
    res.json({ result });
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/hello", async (req, res) => {
  try {
    res.send({ hello: "world" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`fire up the halloween2018 server at port ${PORT}`);
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
