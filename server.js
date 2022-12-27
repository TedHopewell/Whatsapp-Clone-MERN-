/////Here in this page server.js I am creating an API

//imports
import express from 'express'
// App configuration
const app = express()
const port = process.env.PORT || 9000
port = port
// middlewear

// DB config

// ???

// api routes
app.get('/',(req,res)=>res.status(200).send('What the fuck bro Im on another level with this shit'))
// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));