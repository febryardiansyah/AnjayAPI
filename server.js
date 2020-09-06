const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const mangaRoute = require('./src/routes/mangaRoute');
const searchRoute = require('./src/routes/searchRoute');

app.use(cors());
app.use('/api/v1',mangaRoute)
app.use('/api/v1',searchRoute)

app.listen(port,() => {
    console.log(`server listening on port ${3000}`);
})