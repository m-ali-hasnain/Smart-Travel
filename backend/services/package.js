import { Package } from "../models/package.js";

export const getPackages = async () => {
  const response = await Package.find({});
  if (!response) throw new Error("Packages could not be found");
  return response;
};

export const getPackageById = async (pid) => {
  if (!pid) throw new Error("Package Id empty:", pid);
  const response = await Package.findById({ _id: pid });
  if (!response) throw new Error("Package could not be found: ", pid);
  return response;
};

export const createPackage = async (packageDetails) => {
  if (!packageDetails)
    throw new Error(`Package Details empty: ${packageDetails}`);
  const response = await Package.create(packageDetails);
  if (!response)
    throw new Error("Package could not be created: ", packageDetails);
  return response;
};

export const updatePackageById = async (packageDetails, pid) => {
  if (!pid || !packageDetails)
    throw new Error(
      `Package Id empty: ${pid} or Package Details empty: ${packageDetails}`,
    );
  const response = await Package.findOneAndUpdate(
    { _id: pid },
    packageDetails,
    {
      upsert: true,
      returnOriginal: false,
    },
  );
  if (!response)
    throw new Error("Package could not be updated: ", packageDetails);
  return response;
};

export const deletePackageById = async (pid) => {
  if (!pid) throw new Error("Package Id empty:", pid);
  const response = await Package.findByIdAndDelete({ _id: pid });
  if (!response) throw new Error("Package could not be deleted: ", pid);
  return response;
};
