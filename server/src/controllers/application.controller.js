import {
  createApplicationService,
  getAllApplicationsService,
  updateApplicationStatusService
} from "../services/application.services.js";

export const createApplication = async (req, res) => {
  try {
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

export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedApplication =
      await updateApplicationStatusService(id, status);

    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
