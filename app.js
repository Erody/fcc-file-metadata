const express = require('express');
const multer = require('multer');

const port = process.env.PORT || 3000;

const upload = multer();
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('/index.html');
});

app.post('/get-file', upload.single('file'), (req, res) => {
	res.json({ size: req.file.size });
});

app.listen(port, () => {
	console.log(`listening on port ${port}...`)
});


