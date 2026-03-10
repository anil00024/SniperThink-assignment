const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/interest", (req, res) => {

  const { name, email, step } = req.body

  console.log("User Interest:")
  console.log(name, email, step)

  res.json({
    message: "Interest submitted successfully"
  })

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})