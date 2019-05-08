const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('hello from container')
})

app.listen(process.env.PORT||8080,()=>{
    console.log("started in 80")
})