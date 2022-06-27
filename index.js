const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routers/router');

// app.get('/', (req, res) => {
//     res.send('Hello world!');
// });

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
