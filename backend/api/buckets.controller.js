import BucketsDAO from "../dao/bucketsDAO.js";

export default class BucketsController {
  static async getBucketsLists(req, res, next) {
    const userId = req.query.id;
    const completed = req.query.completed;

    const response = await BucketsDAO.getBuckets(userId, completed);

    const buckets = response.map((res) => {
      const { _id, content, target_amount, current_amount, created_at } = res;
      const month =
        created_at.getMonth() + 1 >= 10
          ? created_at.getMonth() + 1
          : "0" + (created_at.getMonth() + 1);

      const day =
        created_at.getDate() >= 10
          ? created_at.getDate()
          : "0" + created_at.getDate();
      return {
        id: _id,
        content,
        target: target_amount,
        current: current_amount,
        date: created_at.getFullYear() + "-" + month + "-" + day,
      };
    });

    res.json(buckets);
  }

  static async createBucket(req, res, next) {
    const userId = req.body.id;
    const target = req.body.target;
    const content = req.body.content;

    try {
      await BucketsDAO.createBucket(userId, target, content);
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async updateCurrent(req, res, next) {
    const bucketId = req.body.id;
    let update_content;
    if (req.body.content) {
      update_content = { content: req.body.content };
    } else if (req.body.amount === 0 || req.body.amount) {
      update_content = { current_amount: req.body.amount };
    } else {
      update_content = { completed: true };
    }

    try {
      await BucketsDAO.updateCurrentContent(bucketId, update_content);
      return res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async deleteBucket(req, res, next) {
    const bucketId = req.query.id;
    try {
      await BucketsDAO.deleteBucket(bucketId);
      return res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
