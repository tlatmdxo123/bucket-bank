import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;

let users;

export default class UsersDAO {
  static async injectDB(database) {
    if (users) {
      return;
    }
    try {
      users = await database.db(process.env.BUCKET_NS).collection("users");
    } catch (error) {
      console.error("cannot connect", error.message);
    }
  }

  static async getUser(userId) {
    try {
      const results = users.find({
        _id: { $eq: new ObjectId(userId) },
      });

      return results.toArray();
    } catch (error) {
      return new Error(error);
    }
  }

  static async addUser(info) {
    console.log(info);
    try {
      await users.insertOne({
        ...info,
      });
    } catch (error) {
      return new Error(error);
    }
  }

  static async updateUserInfo(userId, update_content) {
    try {
      await users.updateOne(
        { _id: new ObjectId(userId) },
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
}
