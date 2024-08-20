import express from "express";  
import { getPosts, getPost, createPost, updatePost, deletePost } from "../controller/postController.js";
const router = express.Router();


// Get all posts
router.get("/", getPosts);

// Get single post 
router.get("/:id", getPost);

// Creating New Post
router.post('/', createPost);

// Update Post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);

export default router;
