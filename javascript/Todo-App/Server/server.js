const express = require("express");
const app = express();
const cors = require("cors")
const database = require("node-persist");
const { key, value } = require("node-persist")

//initializing the Database
database.init()
app.use(express.json());
app.use(cors());

//post request 
app.post("/Addtodo", async (req, res) => {
   const { todo } = req.body;
   const id = Date.now().toString();
   await database.setItem(id, { id: id, todo: todo });
   res.json("Todo Added Successfully");

});
//storing the todolist in the database 
app.get("/GetTodo", async (req, res) => {
   todos = await database.values()
   res.json({ data: todos });
});
//clearing the todolist once the page is refreshed or rendered
app.delete("/GetTodo", async (req, res) => {
   todos = await database.clear()
   res.json({ data: todos });

})
app.listen(5000, () => {
   console.log("Server started on Port", 5000)
});