import express from "express";

import {
  getPosts,
  createPost,
  deletePost,
  likePost,
  updatePost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

/*
---> When need to authentication ? 
        1) create post
        2) like post 
        3) delete post
        4) update post
*/

router.get("/", getPosts);
router.post("/", auth, createPost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.patch("/:id", auth, updatePost);

export default router;
