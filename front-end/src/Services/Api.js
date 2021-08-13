import axios from "axios";

const baseURL = "http://localhost:5000";

export const getDonors = async (id) => {
  id = id || "";
  const donors = await axios.get(`${baseURL}/donors/${id}`);
  console.log("Donors: ", donors);
  return donors;
};

export const postDonor = async (donor) => {
  return await axios.post(`${baseURL}/donors`, donor);
};

export const deleteDonor = async (id) => {
  return await axios.delete(`${baseURL}/donors/${id}`);
};

export const editDonor = async (id, editedDonor) => {
  return await axios.put(`${baseURL}/donors/${id}`, editedDonor);
};

export const addUser = async (user) => {
  return await axios.post(`${baseURL}/users`, user);
};

export const loginUser = async (user) => {
  console.log("in api: ", user);
  return await axios.post(`${baseURL}/users/login`, user);
};
