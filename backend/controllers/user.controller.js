import User from "../models/user.model.js"

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}})
        .select("-password") // $ne means find all users except user logged.
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.error("Error in getUsersForSidebar", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}