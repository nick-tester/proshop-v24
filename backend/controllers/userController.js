import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/v24/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.status(200);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error("Invalid token, access denied!");
    }

});

// @desc    Register user
// @route   POST /api/v24/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.send("register user");
});

// @desc    Logout user & clear cookie
// @route   POST /api/v24/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send("logout user");
});

// @desc    Get user profile
// @route   GET /api/v24/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send("get user profile");
});

// @desc    Update user profile
// @route   PUT /api/v24/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("update user profile");
});

// @desc    Get users
// @route   GET /api/v24/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send("get all users");
});

// @desc    Get user by ID
// @route   GET /api/v24/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send("get user by ID");
});

// @desc    Delete user
// @route   DELETE /api/v24/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send("delete user");
});

// @desc    Update user
// @route   PUT /api/v24/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send("update user");
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser };