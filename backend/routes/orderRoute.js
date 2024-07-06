import express from "express";
import {
    userOrders,
  placeOrder,
  verifyOrder,
  allOrders,
  updateStatus
} from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userOrders", authMiddleware, userOrders);
orderRouter.get('/allorders', allOrders)
orderRouter.post("/status", updateStatus)

export default orderRouter;
