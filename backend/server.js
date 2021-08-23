import express from "express";
import cors from "cors";
import payments from "./api/payments.route.js";
import buckets from "./api/buckets.route.js";
import users from "./api/users.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/payments", payments);
app.use("/api/v1/buckets", buckets);
app.use("/api/v1/users", users);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
