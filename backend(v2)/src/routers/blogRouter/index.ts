import { Router } from "express";
import {
  createBlogController,
  getAllBlogsController,
  getSingleBlogController,
  updateBlogController,
} from "../../controllers/blogController/blogController";
import { validateData } from "../../middlewares/validationMiddleware";
import { BlogValidation } from "../../schemas";

const blogRouter = Router();
blogRouter
  .route("/createBlog")
  .post(validateData(BlogValidation), createBlogController);
blogRouter.route("/getAllBlogs").get(getAllBlogsController);
blogRouter.route("/getSingleBlog/:blogSlug").get(getSingleBlogController);
blogRouter.route("/updateBlog/:blogSlug").put(updateBlogController);
export { blogRouter };
