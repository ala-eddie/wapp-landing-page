const express = require('express');
const router = express.Router();
const app = express()
const port = 3000
const path = __dirname + '/public'

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.use(express.static(path));
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
