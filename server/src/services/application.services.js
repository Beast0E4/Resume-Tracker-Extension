import Application from "../models/application.model.js";

export const createApplicationService = async (data) => {
  if (!data.company || !data.role || !data.jobUrl || !data.appliedAt) {
    throw new Error("Missing required fields");
  }

  const application = await Application.create(data);
  return application;
};

export const getAllApplicationsService = async () => {
  const applications = await Application.find().sort({ appliedAt: -1 });
  return applications;
};

export const updateApplicationStatusService = async (id, status) => {
  const allowedStatuses = ["Applied", "Interview", "Rejected", "Offer"];

  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid status value");
  }

  const updatedApplication = await Application.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  if (!updatedApplication) {
    throw new Error("Application not found");
  }

  return updatedApplication;
};