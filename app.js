const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
var staticLocation = process.argv[2] || 'public'
app.use(express.static(staticLocation))
app.listen(port,() => {console.log("server started and listening on port 3000")})
