const path = require('path')
import express = require('express')
const app = express()
app.use('/', express.static(path.resolve('./dist')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'))
})

app.listen(3000, () => {
    console.log('app started')
});