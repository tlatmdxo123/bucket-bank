import express from "express";
import BucketsCtrl from "./buckets.controller.js";

const router = express.Router();

router
  .route("/")
  .get(BucketsCtrl.getBucketsLists)
  .post(BucketsCtrl.createBucket)
  .put(BucketsCtrl.updateCurrent)
  .delete(BucketsCtrl.deleteBucket);

export default router;
