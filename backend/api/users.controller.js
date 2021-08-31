import UsersDAO from "../dao/usersDAO.js";

export default class UserController {
  static async getUser(req, res, next) {
    const id = req.query.id;

    try {
      const user = await UsersDAO.getUser(id);
      res.status(200).json(user[0]);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async addUser(req, res, next) {
    
    try {
      const id = await UsersDAO.addUser(req.body);
      res.status(200).json({ status: "success",id });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async updateUserInfo(req, res, next) {
    const userId = req.body.id;
    const content = Object.keys(req.body)[1];
    const value = req.body[content];

    try {
      await UsersDAO.updateUserInfo(userId, { [content]: value });
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async deleteUser(req, res, next) {
    try {
    } catch (error) {}
  }
}
