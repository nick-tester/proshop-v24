import express from "express";
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser
} from "../controllers/userController.js";

const router = express.Router();

router.route("/")
    .post(registerUser)
    .get(getUsers);

router.route("/login")
    .post(authUser);

router.route("/logout")
    .post(logoutUser);

router.route("/profile")
    .get(getUserProfile)
    .put(updateUserProfile);

router.route("/:id")
    .delete(deleteUser)
    .get(getUserById)
    .put(updateUser);

export default router;