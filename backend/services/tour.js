import { Tour } from "../models/tour.js";

export const getTours = async () => {
  const response = await Tour.find({});
  if (!response) throw new Error("Tours could not be found");
  return response;
};

export const getTourById = async (tid) => {
  if (!tid) throw new Error("Tour Id empty:", tid);
  const response = await Tour.findById({ _id: tid });
  if (!response) throw new Error("Tour could not be found: ", tid);
  return response;
};

export const createTour = async (tourDetails) => {
  if (!tourDetails) throw new Error(`Tour Details empty: ${tourDetails}`);
  const response = await Tour.create(tourDetails);
  if (!response) throw new Error("Tour could not be created: ", tourDetails);
  return response;
};

export const updateTourById = async (tourDetails, tid) => {
  if (!tid || !tourDetails)
    throw new Error(
      `Tour Id empty: ${tid} or Tour Details empty: ${tourDetails}`,
    );
  const response = await Tour.findOneAndUpdate({ _id: tid }, tourDetails, {
    upsert: true,
    returnOriginal: false,
  });
  if (!response) throw new Error("Tour could not be updated: ", tourDetails);
  return response;
};

export const deleteTourById = async (tid) => {
  if (!tid) throw new Error("Tour Id empty:", tid);
  const response = await Tour.findByIdAndDelete({ _id: tid });
  if (!response) throw new Error("Tour could not be deleted: ", tid);
  return response;
};
