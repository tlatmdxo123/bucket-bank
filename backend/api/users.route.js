import express from "express";
import usersCtrl from "./users.controller.js";

const router = express.Router();

router
  .route("/")
  .get(usersCtrl.getUser)
  .post(usersCtrl.addUser)
  .put(usersCtrl.updateUserInfo)
  .delete(usersCtrl.deleteUser);

export default router;
