import asyncHandler from "../middlewares/asyncHandler.js";
// import User from "../models/userModel.js";

// @desc    Auth user and get token  
// @route   POST /api/v24/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    res.send("Auth user");
});


// @desc    Register user
// @route   POST /api/v24/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.send("Register user");
});


// @desc    Logout user / clear cookie
// @route   POST /api/v24/users
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send("Logout user");
});


// @desc    Get user profile
// @route   GET /api/v24/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send("Get user profile user");
});


// @desc    Update user profile
// @route   PUT /api/v24/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("Update user profile");
});


// @desc    Get user by ID
// @route   GET /api/v24/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send("Get user by ID");
});


// @desc    Get all users profile
// @route   GET /api/v24/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send("Get all users profile");
});


// @desc    Delete user
// @route   DELETE /api/v24/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send("Delete user");
});


// @desc    Update user
// @route   PUT /api/v24/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send("Update user");
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
};