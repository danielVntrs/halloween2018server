const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get("/api/get-nearby-location", cors(), async (req, res, next) => {
  try {
    // const { lat1, lat2, long1, long2 } = req.params.latLong;
    // const lat = parseFloat(`${lat1}.${lat2}8729`);
    // const long = parseFloat(`${long1}${long2}47666`);
    // const keyWord = "vntrs";
    // const locationsAPIkey = "AIzaSyDdohXUiJvfctfpxhmrzGaImLxBZcUJtzo";
    // const radius = 100;
    // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&keyword=${keyWord}&key=${locationsAPIkey}`;
    // const result = await fetch(url)
    //   .then(response => response.json())
    //   .then(data => data.results[0]);
    // res.json({ result });
    const result = await fetch(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=59.328729,18.0447666&radius=100&keyword=vntrs&key=AIzaSyCBI1Ibb4PHvyOh7EehV_oa8tTJlmLwdtk"
    )
      .then(response => response.json())
      .then(data => data.results[0]);
    console.log("result: ", result);
    res.json({ result });
  } catch (err) {
    next(err);
  }
});

app.get("/api/hello", cors(), async (req, res, next) => {
  try {
    const test = () => "<div>Hej! :D</div>";
    res.json({ msg: "hej" });
  } catch (err) {
    next(err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`fire up the halloween2018 server at port ${PORT}`);
});
