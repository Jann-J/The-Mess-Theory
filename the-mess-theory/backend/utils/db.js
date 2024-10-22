import mongoose from "mongoose";

const URI = "mongodb+srv://janhavijain0211:OerscNK4LvbdqjyV@cluster01.qbefh.mongodb.net/adminpanel?retryWrites=true&w=majority&appName=Cluster01";

if (!URI) {
  console.error("MONGODB_URI is not defined in .env file");
  process.exit(1); // Exit with failure if URI is undefined
}

const connectDb = async () => {
    try {
      await mongoose.connect(URI);
      console.log("connection successful to DB");
    } catch (error) {
      console.error("database connection fail");
      console.error(error);
      process.exit(0);
    }
}

export default connectDb;