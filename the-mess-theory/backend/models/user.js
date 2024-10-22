import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Define the schema for a User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
    const user = this;
    console.log("actual data ", this);
  
    if (!user.isModified) {
      return next();
    }
  
    try {
      const saltRound = await bcrypt.genSalt(10); //like difficulty in blockchain
      const hashedPassword = await bcrypt.hash(user.password, saltRound);
      user.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });


  userSchema.methods.generateToken = async function () {
    console.log("I am token");
    const secretKey = process.env.JWT_SECRET_KEY || "yourDefaultSecretKey";
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        secretKey,
        {
          expiresIn: "15m",
        }
      );
    } catch (error) {
      console.error("Token Error: ", error);
    }
  };

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
