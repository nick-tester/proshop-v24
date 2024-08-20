import express from "express";
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
    .get(getUsers)
    .post(registerUser);

router.post("/login", authUser);

router.post("/logout", logoutUser);

router.route("/profile")
    .get(getUserProfile)
    .put(updateUserProfile);

router.route("/:id")
    .delete(deleteUser)
    .get(getUserById)
    .put(updateUser);

export default router;