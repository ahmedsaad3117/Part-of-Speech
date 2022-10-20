const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors());


const wordsRoute = require('./router/wordsRoute')
const rankRoute = require('./router/rankRoute')


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(wordsRoute)
app.use(rankRoute)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
});
