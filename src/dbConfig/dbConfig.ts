import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!, {})
    const connection = mongoose.connection;

    connection.once("open", () => {
      console.log("MongoDB database connection established successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
      process.exit();
    })
  } catch (error) {
    console.log('Something went wrong: connect.ts')
    console.error(error)
  }
}