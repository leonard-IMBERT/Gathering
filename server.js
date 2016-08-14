const express = require('express');
const app = express();
const fs = require('fs');

app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index.html');
});

app.listen(8080, () => {
  console.log("Server started");
})
