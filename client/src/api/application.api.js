import axiosInstance from "../config/axiosInstance";

export const getApplications = async () => {
  const response = await axiosInstance.get("/");
  return response.data;
};

export const updateApplicationStatus = async (id, status) => {
  const response = await axiosInstance.patch(`/${id}`, { status });
  return response.data;
};
