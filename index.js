import express from "express"
const app = express()
app.listen(9090, () =>{
    console.log("Server started on port 9090")
})
app.get("/home", (req,res) =>{
    res.send("Hello World")
})
