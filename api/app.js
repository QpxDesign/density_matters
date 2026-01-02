const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
const port = 3009;

app.get("/reps", (req, res) => {
  fetch(
    `https://api.5calls.org/v1/representatives?location=${req.query.zipcode}`,
    {
      headers: {
        "X-5Calls-Token": "2c319855eafa87bbc656aa24",
      },
    },
  )
    .then((r) => r.json())
    .then((r) => res.send(JSON.stringify(r)));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
