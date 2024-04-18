import { LikeController } from "../controllers/like.controller.js";

import express from "express";

const initLikeRoutes = (app) => {
  const router = express.Router();
  router.post("/createLikePost", LikeController.createLikePost );
  router.post("/createLikeComment", LikeController.createLikeComment );
  router.get("/readLikeByUser", LikeController.readLikeByUser );

  app.use("/api/like", router);
};

export default initLikeRoutes;