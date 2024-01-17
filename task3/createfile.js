const { error } = require('console')
const fs = require('fs')
fs.writeFile('welcom.txt','hello',(error)=>{
    if (error)throw error
    console.log('the file has been created')
})
fs.readFile('hello.txt',(error)=>{
    if (error)throw error
    console.log('the file has been read',data.toString)
    
})