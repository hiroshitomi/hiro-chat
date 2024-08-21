import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
   try {
     const {fullName, username, password, confirmPassword, gender} = req.body

     if(password !== confirmPassword) {
        return res.status(400).json({error: "Passwords don't match"})
     }

     const user = await User.findOne({username})
     if(user) {
        return res.status(400).json({error: "Username already exists"})
     }

     // hash password
     const hashedPassword = bcrypt.hashSync(password, 10) 

     // https://avatar-placeholder.iran.liara.run
     const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
     const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

     const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
     })

     if(newUser){
        // ToDo - Generate JWT
         await newUser.save()
    
         res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
         })

     } else {
        res.status(400).json({error: "Invalid user data"})
     }

   } catch (error) {
     console.log("Error in signup controller", error);
     res.status(500).json({error: "Internal server error"})
   }
}

export const login = (req, res) => {
    console.log("loginUser");
}

export const logout = (req, res) => {
    console.log("logout User");
}