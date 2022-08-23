const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const routes = require("./src/routers/router");
const connectToDatabase = require("./src/database/mongoConnection");

// app.get('/', (req, res) => {
//     res.send('Hello world!');
// });

connectToDatabase();
app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
