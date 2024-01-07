const express = require('express')
const app = express()
const port = 3000
const router = require("./routes/index")

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router)

app.listen(port, () => {
  console.log(`localhost: ${port}`)
})