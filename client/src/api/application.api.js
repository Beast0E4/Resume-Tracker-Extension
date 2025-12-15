import axiosInstance from "../config/axiosInstance";

export const getApplications = async () => {
  const response = await axiosInstance.get("/");
  return response.data;
};

export const updateApplicationStatus = async (id, status) => {
  const response = await axiosInstance.patch(`/${id}`, { status });
  return response.data;
};

export const deleteApplication = async (id) => {
  const res = await axiosInstance.delete(`/${id}`);
  return res.data;
};

