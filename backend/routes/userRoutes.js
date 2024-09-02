import express from "express";
import { protect, admin } from "../middlewares/authMiddleware.js";
import {
    authUser,
    registerUser,
    getUserById,
    getUserProfile,
    getUsers,
    updateUser,
    updateUserProfile,
    deleteUser,
    logoutUser,
} from "../controllers/userController.js";


const router = express.Router();

router.route("/")
    .get(protect, admin, getUsers)
    .post(registerUser);

router.post("/login", authUser);

router.post("/logout", logoutUser);

router.route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

router.route("/:id")
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser);

export default router;