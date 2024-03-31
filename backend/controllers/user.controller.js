import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggenInUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggenInUserId } }).select(
      "-password"
    );
    res.status(200).json(users);
  } catch (error) {
    console.log("Error in get users", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
