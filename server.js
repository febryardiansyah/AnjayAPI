const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const mangaRoute = require('./src/routes/mangaRoute')

app.use(cors());
app.use('/api/v1',mangaRoute)

app.listen(port,() => {
    console.log(`server listening on port ${3000}`);
})