const router = require("express").Router();
const User = require("../models/Users");
const Todo = require("../models/Todo");


//creating todo items
router.post("/", async (req, res) => {
const newTodo = new Todo(req.body);
try{
    const saveTodo = await newTodo.save();
    res.status(200).json(saveTodo)
} catch (err){
    res.status(500).json(err)
}

})


//update todo item

router.put("/:id", async (req, res) => {
   try{
   const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
        $set: req.body,
   }, {new: true});
   res.status(200).json(updatedTodo)

 } catch (err) {
     res.status(500).json(err)
 }

})


//deleting todo item 

router.delete("/:id", async (req, res) => {
    try{
    await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json("your todo has been delete")
    } catch(err) {
        res.status(500).json(err)
    }

})

// get todo items from a user
router.get("/", async (req, res) => {
    const username = req.query.user
    try{
        const todos = await Todo.find({username: username})
        res.status(200).json(todos)
    } catch(err) {
        res.status(500).json(err)
    }
})
















module.exports = router;