import {
  createApplicationService,
  getAllApplicationsService
} from "../services/application.services.js";

export const createApplication = async (req, res) => {
  try {
    console.log (req.body);
    const application = await createApplicationService(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await getAllApplicationsService();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
