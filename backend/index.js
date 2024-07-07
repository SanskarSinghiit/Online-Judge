
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { DBConnection } = require('./database/db');
const User = require('./models/users');
const bcrypt = require('bcryptjs');

DBConnection();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to this class");
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!(name && email && password)) {
            return res.status(400).send("Enter all the fields");
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).send("User created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            return res.status(400).send("Enter all the fields");
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("Invalid email or password");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Invalid email or password");
        }

        res.status(200).send("Login successful");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000 DONE");
});
