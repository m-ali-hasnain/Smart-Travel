import * as tourService from "../services/tour.js";
import { handleError } from "../middleware/error.js";
import { handleResponse } from "../middleware/response.js";

export const getTours = async (req, res, next) => {
  try {
    const data = await tourService.getTours();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createTour = async (req, res, next) => {
  try {
    const data = await tourService.createTour(req.body);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateTourById = async (req, res, next) => {
  try {
    const data = await tourService.updateTourById(req.body, req.params.tourId);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getTourById = async (req, res, next) => {
  try {
    const data = await tourService.getTourById(req.params.tourId);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deleteTourById = async (req, res, next) => {
  try {
    const data = await tourService.deleteTourById(req.params.tourId);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
