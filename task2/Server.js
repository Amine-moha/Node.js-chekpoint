const express = require('express')
const app = express()
const port = 3000
app.get('/', (req,res)=>{
    res.writeHead(200,{'Content-Type':'text:html'})
    res.write('<h1>HELLO NODE!!!</h1>\n')
    res.end()
})
app.listen(port,console.log('server is running http://localhost:3000'))