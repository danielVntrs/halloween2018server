const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");
const GraphQLClient = require('graphql-request').GraphQLClient;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjorm3zrfqczf01392sascxl7', {
  headers: {
    Authorization: 'Bearer "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDM3NzkyNTksImlhdCI6MTU0MjkxNTI1OSwicHJvamVjdElkIjoiY2pvc3huZ3ZrMmk5NDAxNzhodmwxajVpNyIsInVzZXJJZCI6ImNqb3JtM3pyZnFjemYwMTM5MnNhc2N4bDciLCJtb2RlbE5hbWUiOiJRdWVzdGlvbiJ9.jOtHYmieZe2WxXPtjdS8KQ8dsyF-20lL_vCRj-BQjHc"',
  },
});

app.get("/api/get-nearby-location", cors(), async (req, res) => {
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
    console.log("URL used in API call: ", url);
    const result = await fetch(url)
      .then(response => response.json())
      .then(data => data.results[0]);
    res.json({ result });
    console.log("result after api call: ", result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/get-questions", async (req, res) => {
  try {
    function getItem() {
      return client.request(`
        {
          allQuestions {
            id
            question
            answer
          }
        }
      `)
    }
    const questions = await getItem();
    res.json({ questions });
  } catch (err) {
    console.log(err)
  }
})

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
