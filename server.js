const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const IndexRoute = require('./src');

app.use(cors());
app.use(IndexRoute)

app.listen(port,() => {
    console.log(`server listening on port ${3000}`);
})