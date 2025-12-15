import express from "express";
import {
  createApplication,
  getAllApplications
} from "../controllers/application.controller.js";

const router = express.Router();

router.post("/", createApplication);
router.get("/", getAllApplications);

export default router;
