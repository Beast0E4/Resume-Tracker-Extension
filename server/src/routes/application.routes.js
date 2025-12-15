import express from "express";
import {
  createApplication,
  getAllApplications,
  updateApplicationStatus
} from "../controllers/application.controller.js";

const router = express.Router();

router.post("/", createApplication);
router.get("/", getAllApplications);
router.patch("/:id", updateApplicationStatus);

export default router;
