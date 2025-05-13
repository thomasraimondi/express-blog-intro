require("dotenv").config();
const { APP_HOST, APP_PORT } = process.env;
const appUrl = APP_PORT ? `${APP_HOST}:${APP_PORT}` : `${APP_HOST}`;

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

module.exports = posts;
