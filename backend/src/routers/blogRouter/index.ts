import { Router } from "express";
import {
  createBlogController,
  deleteBlogController,
  getAllBlogsController,
  getAllPrivateBlogsController,
  getSingleBlogController,
  searchBlogController,
  updateBlogController,
} from "../../controllers/blogController/blogController";
import { validateData } from "../../middlewares/validationMiddleware";
import { BlogValidation } from "../../schemas";
import {
  ifUser,
  ifUserIsAdmin,
  ifUserIsModerator_OR_Admin,
} from "../../middlewares/authMiddleware";
import { apiResponse } from "../../utils/apiResponseUtil";
import { OK } from "../../CONSTANTS";

const blogRouter = Router();
blogRouter
  .route("/createBlog")
  .post(
    validateData(BlogValidation),
    ifUserIsModerator_OR_Admin,
    createBlogController
  );
blogRouter.route("/getAllPublicBlogs").get(getAllBlogsController);
blogRouter
  .route("/getAllPrivateBlogs")
  .get(ifUserIsAdmin, getAllPrivateBlogsController);
blogRouter.route("/getSingleBlog/:blogSlug").get(getSingleBlogController);
blogRouter
  .route("/updateBlog/:blogSlug")
  .put(ifUserIsAdmin, updateBlogController);
blogRouter
  .route("/deleteBlog/:blogSlug")
  .delete(ifUserIsAdmin, deleteBlogController);
blogRouter.route("/getAllBlogs/search").get(searchBlogController);
//check points
// ** check if user login
blogRouter.route("/checkIfUserLogin").get(ifUser, (req, res) => {
  return res.status(OK).json(apiResponse(OK, "user is logined"));
});
// ** check if user is admin
blogRouter.route("/checkIfuserIsAdmin").get(ifUserIsAdmin, (req, res) => {
  return res.status(OK).json(apiResponse(OK, "user is logged in as admin"));
});
// ** check if user is moderator
blogRouter
  .route("/checkUserIsSubAdminOrAdmin")
  .get(ifUserIsModerator_OR_Admin, (req, res) => {
    return res
      .status(OK)
      .json(apiResponse(OK, "user is logged in as moderator or subadmin"));
  });
export { blogRouter };
