import PaymentsDAO from "../dao/paymentsDAO.js";
import { getCurrentDate } from "../utils/date.js";

export default class PaymentsController {
  static async getPaymentsLists(req, res, next) {
    const userId = req.query.id;
    try {
      const data = await PaymentsDAO.getPaymentsLists(userId);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async addPaymentsList(req, res, next) {
    const userId = req.body.user_id;
    const content = req.body.content;
    const payment = req.body.payment_amount;

    const paymentInfo = {
      user_id: userId,
      content,
      payment_amount: payment,
      payment_date: getCurrentDate(),
    };

    try {
      const addInfo = await PaymentsDAO.addPaymentsList(paymentInfo);
      res.status(200).json(addInfo);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async updatePaymentInfo(req, res, next) {
    const paymentId = req.body.id;
    const updateInfo = {
      content: req.body.content,
      payment_amount: req.body.payment_amount,
    };
    try {
      await PaymentsDAO.updatePaymentById(paymentId, updateInfo);
      res.status(200).json({status:'success'})
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async deletePayment(req, res, next) {
    const paymentId = req.query.id;
    if (!paymentId) {
      res.status(500).json({ error: new Error("there is no id") });
    }
    try {
      await PaymentsDAO.deletePaymentById(paymentId);
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
