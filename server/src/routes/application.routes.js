import express from "express";
import {
  createApplication,
  getAllApplications,
  updateApplicationStatus,
  deleteApplication
} from "../controllers/application.controller.js";

const router = express.Router();

router.post("/", createApplication);
router.get("/", getAllApplications);
router.patch("/:id", updateApplicationStatus);
router.delete("/:id", deleteApplication);

export default router;
