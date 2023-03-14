// import express
const express = require("express");
// Create an instance of express
const app = express();

// Create json middleware that replaces the old body parser
app.use(express.json())

// Course array
const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
  { id: 4, name: "course 4" },
  { id: 5, name: "course 5" },
];

// Default route
app.get("/", (req, res) => {
  res.json("Welcome to my api");
});

// get all courses
app.get("/api/courses", (req, res) => {
  res.status(200).json(courses);
});

// Get one course based on the id
app.get("/api/course/:courseId", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.courseId));
  if(!course) res.status(404).json({message:'Course not found'})
  res.status(200).json(course)
});

// add a new course
app.post('/api/courses',(req,res)=>{
    const course = {
        id: courses.length +1,
        name: req.body.name
    }
    courses.push(course)
    res.status(200).json(course)
})

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on ${port}`));
