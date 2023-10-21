import { issueTokens } from "../middleware/auth.js";
import { Admin } from "../models/admin.js";

export const login = async (email, password) => {
  const admin = await Admin.findOne({
    email: email,
    password: password,
  });
  if (!admin) {
    throw new Error("Account does not exist");
  }
  return issueTokens(admin);
};

export const signup = async (admin) => {
  const response = await Admin.create(admin);
  if (!response) throw new Error("Account could not be created");
  return response;
};

export const renewTokens = async (admin) => {
  return issueTokens(admin);
};
