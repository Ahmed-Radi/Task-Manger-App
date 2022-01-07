const express = require('express')

const app = express()

app.use(express.static(__dirname + '/dist/taskmanger-app'))

app.get('*', (req,res) => {
    res.sendFile('index.html', {root:'dist/taskmanger-app/'})
})

app.listen(process.env.PORT || 49006);
