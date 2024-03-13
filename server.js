const express = require('express');
const router = require('./routes/route');
const cors = require('cors')

const app = express();

app.use(express.json())

app.use(cors());


app.use('/', router);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server runs at ${PORT}`));