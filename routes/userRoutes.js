import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import user from "../models/userModels.js"; // Corrected import path

const router = express.Router();

// Create User (POST)
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userData = await user.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(userData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

// Get All Users (GET)
router.get("/", async (req, res) => {
  try {
    const showAll = await user.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get Single User (GET by ID)
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await user.findById(id);
    res.status(200).json(singleUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Delete User (DELETE)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await user.findByIdAndDelete(id);
    res.status(200).json(deleteUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Update User (PATCH)
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Export the router using ES Modules
export default router;
