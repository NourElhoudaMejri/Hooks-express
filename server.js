const express = require ('express')
const path = require('path')
require('dotenv').config; // pour mettre les variables d'environnemet

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use(express.static('client/build'))

app.get('/api/youtube', (_,res) => {
    res.send({
        msg: 'hello world !'
    })
})
app.get('/*',(_,res)=>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'))
})

app.listen(PORT,() => {
    console.log(`le serveur est lance sur le port : ${PORT}`)
})