import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;

let buckets;

export default class BucketsDAO {
  static async injectDB(database) {
    if (buckets) {
      return;
    }
    try {
      buckets = await database
        .db(process.env.BUCKET_NS)
        .collection("bucket_lists");
    } catch (error) {
      console.error("cannot connect", error.message);
    }
  }

  static async getBuckets(id = 0) {
    let response;

    try {
      response = await buckets.find({
        user_id: { $eq: new ObjectId(id) },
      });
      const bucketLists = response.toArray();
      return bucketLists;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async createBucket(userId = 0, target = 0, content = "") {
    const bucketInfo = {
      user_id: new ObjectId(userId),
      content,
      target_amount: target,
      current_amount: 0,
      created_at: new Date(),
      completed: false,
    };
    try {
      await buckets.insertOne(bucketInfo);
    } catch (error) {
      return new Error(error);
    }
  }

  static async updateCurrentContent(bucketId = 0, update_content) {
    try {
      await buckets.updateOne(
        { _id: new ObjectId(bucketId) },
        {
          $set: {
            [Object.keys(update_content)[0]]: Object.values(update_content)[0],
          },
        }
      );
    } catch (error) {
      return new Error(error);
    }
  }

  static async deleteBucket(bucketId = 0) {
    try {
      await buckets.deleteOne({ _id: new ObjectId(bucketId) });
    } catch (error) {
      return new Error(error);
    }
  }
}
