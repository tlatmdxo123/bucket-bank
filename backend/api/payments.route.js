import express from "express";
import paymentsCtrl from "./payments.controller.js";

const router = express.Router();

router
  .route("/")
  .get(paymentsCtrl.getPaymentsLists)
  .post(paymentsCtrl.addPaymentsList)
  .put(paymentsCtrl.updatePaymentInfo)
  .delete(paymentsCtrl.deletePayment);

export default router;
