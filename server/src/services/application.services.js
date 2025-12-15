import Application from "../models/application.model";

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
