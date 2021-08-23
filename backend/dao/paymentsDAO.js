import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;

let payments;

export default class PaymentsDAO {
  static async injectDB(database) {
    if (payments) {
      return;
    }
    try {
      payments = await database
        .db(process.env.BUCKET_NS)
        .collection("payment_details");
    } catch (error) {
      console.error("cannot connect", error.message);
    }
  }

  static async getPaymentsLists(userId) {
    try {
      const results = payments.find({
        user_id: { $eq: new ObjectId(userId) },
      });

      return results.toArray();
    } catch (error) {
      return new Error(error);
    }
  }

  static async addPaymentsList(info) {
    try {
      await payments.insertOne({
        ...info,
        user_id: new ObjectId(info.user_id),
      });
    } catch (error) {
      return new Error(error);
    }
  }

  static async updatePaymentById(id, info) {
    try {
      await payments.updateOne({ _id: new ObjectId(id) }, { $set: info });
    } catch (error) {
      return new Error(error);
    }
  }

  static async deletePaymentById(id) {
    try {
      await payments.deleteOne({ _id: new ObjectId(id) });
    } catch (error) {
      return new Error(error);
    }
  }
}
