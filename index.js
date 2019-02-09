const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true
}));

app.get('/', (req, res) => {
	res.sendFile('./index.html', { root: __dirname }).end();
});

app.listen(port, () => {
	console.log(`dksite running on port :${port}`);
});