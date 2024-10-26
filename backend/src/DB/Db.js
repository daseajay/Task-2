import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connetionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `mongoDB connetion at || HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongoDB CONNETION FAILD", error);
    process.exit();
  }
};

export default connetionDB;
