import mongoose from "mongoose";

const userDetails = new mongoose.Schema(
   {
      fname: String,
      lname: String,
      email: { type: String, unique: true },
      password: String,
   },
   {
      colletion: "UserInfo",
   }
);

mongoose.model("UserInfo", userDetails);
export default userDetails;
