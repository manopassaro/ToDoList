const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');


app.get('/', (req, res) => {
    res.send('i broke your hearth like someone did to mine');
});


app.use(cors());

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});