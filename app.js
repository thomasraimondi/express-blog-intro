const express = require("express");
const app = express();
const port = 3000;
const posts = [
    {
        title: "post 1",
        content: contenuto 1,
        image: "/img/ciambellone.jpeg",
        tags: [tag1,tag1,tag1,tag1]
    },
    {
        title: "post 2",
        content: "contenuto 2",
        image: "/img/cracker_barbabietola.jpeg",
        tags: [tag1,tag1,tag1,tag1]
    },
    {
        title: "post 3",
        content: "contenuto 3",
        image: "/img/pane_fritto_dolce.jpeg",
        tags: [tag1,tag1,tag1,tag1]
    },
    {
        title: "post 4",
        content: "contenuto 4",
        image: "/img/pasta_barbabietola.jpeg",
        tags: [tag1,tag1,tag1,tag1]
    },
    {
        title: "post 5",
        content: "contenuto 5",
        image: "/img/torta_paesana.jpeg",
        tags: [tag1,tag1,tag1,tag1]
    },
]

app.get("/", (req, res) => {
  console.log("richiesta ricevuta");
  const responseData = "Server del mio blog";
  res.send(responseData);
  console.log(`Risposta inviata: ${responseData}`);
});

app.listen(port, () => {
  console.log("Serve in ascolto");
});
