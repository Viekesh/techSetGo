import express from "express";
import { getAllBlogs, addBlog, updateBlog, getById, deleteById, blogGetByUserId } from "../controller/blogController.js";



const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.post("/addBlog", addBlog);

blogRouter.put("/updateBlog/:id", updateBlog);

blogRouter.get("/blogGetById/:id", getById);

blogRouter.delete("/blogDeleteById/:id", deleteById);

blogRouter.get("/userBlogs/:id", blogGetByUserId);

export default blogRouter;