import express from 'express';
import mongoose from 'mongoose';
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());

// To parse incoming requests with JSON payloads
app.use(express.json());

mongoose.connect("mongodb+srv://janhavijain0211:OerscNK4LvbdqjyV@cluster01.qbefh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01") //mongo_url
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

//NEEDS WORK
  app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    // Check for required fields
    if (!name || !email || !password) {
      return res.status(400).send({ message: 'All fields are required' });
    }
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send({ message: 'User already exists' });
      }
  
      // Create a new user
      const user = new User({ name, email, password });
      await user.save();
  
      res.status(201).send({ message: 'Registration successful!' });
    } catch (error) {
      res.status(500).send({ message: 'Error registering user', error: error.message });
    }
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at https://localhost:${port}`);
})