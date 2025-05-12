const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("richiesta ricevuta");
  const responseData = "Hello World";
  res.send(responseData);
  console.log(`Risposta inviata: ${responseData}`);
});

app.listen(port, () => {
  console.log("Serve in ascolto");
});
