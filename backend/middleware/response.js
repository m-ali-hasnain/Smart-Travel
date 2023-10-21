// res from express
// status -> status code
// data from service
export const handleResponse = (res, status, data) => {
  res.status(status).json(data);
};
