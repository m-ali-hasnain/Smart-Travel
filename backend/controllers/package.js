import * as packageService from "../services/package.js";
import { handleError } from "../middleware/error.js";
import { handleResponse } from "../middleware/response.js";

export const getPackages = async (req, res, next) => {
  try {
    const data = await packageService.getPackages();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createPackage = async (req, res, next) => {
  try {
    const data = await packageService.createPackage(req.body);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updatePackageById = async (req, res, next) => {
  try {
    const data = await packageService.updatePackageById(
      req.body,
      req.params.pid,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getPackageById = async (req, res, next) => {
  try {
    const data = await packageService.getPackageById(req.params.pid);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deletePackageById = async (req, res, next) => {
  try {
    const data = await packageService.deletePackageById(req.params.pid);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
