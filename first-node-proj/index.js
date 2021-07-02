import express from "express";
import mongoose from "mongoose";
import {Users} from "./users.js";
const app = express();

// const PORT = process.env.PORT || 5001;
const PORT =  5000 ;
// mongoose setup
  const url = "mongodb+srv://chinmay:chinmay@123@cluster0.zts7c.mongodb.net/IMDB"

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => console.log("MongoDB is connected"));


  // middle ware
app.use(express.json());

app.get('/', (req, res) => {
    res.send("welcome chinmay")
})

app.get('/users', async (req, res) => {
  const uee = await Users.find();
    res.send(uee)
})

// app.get('/users/:id', (req, res) => {
//     // const id = request.params.id; //or 
//     const {id} = req.params;
//     const user = Users.find((e) => e.id == id);
//     res.send(user)
// })

//add users post request
// app.post('/users' , (req, res) => {
//     const addUser = req.body;
//     console.log(addUser);
//     Users.push(addUser);
//     res.send(Users);
// })


app.listen(PORT , () => {
    console.log("server is running at 5000")
});
