import User from "../models/user.js";
import bcrypt from 'bcryptjs';

export const home = async (req, res) => {
    try {
      res.status(200).json({ msg: "Welcome to our home page" });
    } catch (error) {
      console.log(error);
    }
  };

export const register = async (req ,res) => {
  try {
    // const data = req.body;
    console.log(req.body);
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({name, email, password });

    // res.status(201).json({ message: "User registered successfully" });
    res.status(201).json({ msg: "Registration Successful",
       token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
     });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
  };

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (!userExist) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // const user = await bcrypt.compare(password, userExist.password);
      const isPasswordValid = await userExist.comparePassword(password);
  
      if (isPasswordValid) {
        res.status(200).json({
          message: "Login Successful",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(401).json({ message: "Invalid email or passord " });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };