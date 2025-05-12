require("dotenv").config();
const { APP_HOST, APP_PORT } = process.env;
const appUrl = APP_PORT ? `${APP_HOST}:${APP_PORT}` : `${APP_HOST}`;

const express = require("express");
const app = express();
const posts = [
  {
    title: "post 1",
    content: "contenuto 1",
    image: `${appUrl}/img/ciambellone.jpeg`,
    tags: ["tag1", "tag1", "tag1", "tag1"],
  },
  {
    title: "post 2",
    content: "contenuto 2",
    image: `${appUrl}/img/cracker_barbabietola.jpeg`,
    tags: ["tag1", "tag1", "tag1", "tag1"],
  },
  {
    title: "post 3",
    content: "contenuto 3",
    image: `${appUrl}/img/pane_fritto_dolce.jpeg`,
    tags: ["tag1", "tag1", "tag1", "tag1"],
  },
  {
    title: "post 4",
    content: "contenuto 4",
    image: `${appUrl}/img/pasta_barbabietola.jpeg`,
    tags: ["tag1", "tag1", "tag1", "tag1"],
  },
  {
    title: "post 5",
    content: "contenuto 5",
    image: `${appUrl}/img/torta_paesana.jpeg`,
    tags: ["tag1", "tag1", "tag1", "tag1"],
  },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("richiesta ricevuta Home");
  const responseData = "Server del mio blog";
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.status(200).send(responseData);
});

app.get("/bacheca", (req, res) => {
  console.log("richiesta ricevuta Bacheca");
  if (posts.length > 0) {
    res.header({ "Access-Control-Allow-Origin": "*" });
    res.status(200).json({ posts: posts });
  } else {
    res.header({ "Access-Control-Allow-Origin": "*" });
    res.status(204).json(posts);
  }
});

app.listen(APP_PORT, () => {
  console.log(`Server in ascolto: ${appUrl}`);
});
