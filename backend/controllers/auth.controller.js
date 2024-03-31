import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, gender } = req.body;
    // Check if a user with the same username or email already exists
    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (user) {
      // Send an error response if a user with the same username or email exists
      return res
        .status(400)
        .json({ message: "User with this username or email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profilePic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      gender,
      profilePicture: profilePic,
    });
    if (newUser) {
      await generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log("Error in login", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
