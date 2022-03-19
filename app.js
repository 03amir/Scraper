const nightmare = require("nightmare")();
const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

app.post("/", (req, res) => {
  const url = req.body.url;

  async function checkprice() {
    const priceString = await nightmare
      .goto(url)
      .wait(".tWeCl")
      .evaluate(() => document.querySelector(".tWeCl").src)
      .end();

    res.send(priceString);
  }
  checkprice();
});

app.listen(3000, () => {
  console.log("serverr is listening");
});
