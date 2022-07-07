import express from "express";
import { getAllBlogs, addBlog, updateBlog, getById, deleteById } from "../controller/blogController.js";



const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.post("/addBlog", addBlog);

blogRouter.put("/updateBlog/:id", updateBlog);

blogRouter.get("/blogGetById/:id", getById);

blogRouter.delete("/blogDeleteById/:id", deleteById);

export default blogRouter;