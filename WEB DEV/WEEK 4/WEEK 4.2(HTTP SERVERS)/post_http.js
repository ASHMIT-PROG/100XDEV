const express = require("express");
const app = express();

app.use(express.json());

let students = [];

app.post("/", function(req, res) {

    const name = req.body.name;
    const age = req.body.age;

    if (!name || !age) {
        return res.status(400).json({
            error: "Name and age are required"
        });
    }

    students.push({
        name: name,
        age: age
    });

    res.status(201).json({
        message: "Student registered successfully",
        students: students
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
