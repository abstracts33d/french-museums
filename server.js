const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 9000
app.use(compression());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
