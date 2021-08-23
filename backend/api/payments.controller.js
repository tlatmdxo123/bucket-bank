import PaymentsDAO from "../dao/paymentsDAO.js";

export default class PaymentsController {
  static async getPaymentsLists(req, res, next) {
    const userId = req.query.id;
    const date = req.query.date;

    try {
      const data = await PaymentsDAO.getPaymentsLists(userId);
      const reponseData = data
        .filter((item) => {
          const year = item.payment_date.getFullYear().toString();
          const month =
            item.payment_date.getMonth() >= 10
              ? item.payment_date.getMonth().toString()
              : "0" + (item.payment_date.getMonth() + 1);
          const itemDate = year + month;
          return date === itemDate;
        })
        .map((item) => {
          const day =
            item.payment_date.getDate() >= 10
              ? item.payment_date.getDate()
              : "0" + item.payment_date.getDate();
          return {
            id: item._id,
            content: item.content,
            payment: item.payment_amount,
            date:
              item.payment_date.getFullYear() +
              "-" +
              ("0" + (parseInt(item.payment_date.getMonth()) + 1)) +
              "-" +
              day,
          };
        });
      res.status(200).json({ data: reponseData });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async addPaymentsList(req, res, next) {
    const userId = req.body.id;
    const content = req.body.content;
    const payment = req.body.payment;

    const paymentInfo = {
      user_id: userId,
      content,
      payment_amount: payment,
      payment_date: new Date(),
    };

    try {
      await PaymentsDAO.addPaymentsList(paymentInfo);
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async updatePaymentInfo(req, res, next) {
    const paymentId = req.body.id;
    const updateInfo = {
      content: req.body.content,
      payment_amount: req.body.payment,
    };
    try {
      await PaymentsDAO.updatePaymentById(paymentId, updateInfo);
      res.status(200).json({ status: "success" });
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
