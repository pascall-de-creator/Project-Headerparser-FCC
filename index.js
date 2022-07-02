// index.js
// where your node app starts

// init project
require('dotenv').config();
const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.header('x-forwarded-for'),
    language : req.header('accept-language'),
    software : req.header('user-agent')
  });
});

var listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
