import * as authService from "../services/auth.js";
import { handleError } from "../middleware/error.js";
import { handleResponse } from "../middleware/response.js";

export const login = async (req, res, next) => {
  try {
    const { accessToken, refreshToken, data } = await authService.login(
      req.body.email,
      req.body.password,
    );
    res.status(200).json({
      status: "success",
      accessToken: accessToken,
      refreshToken: refreshToken,
      data,
    });
  } catch (error) {
    if (error.message == "Account does not exist")
      res
        .status(404)
        .json({ status: "fail", message: "Account does not exist" });
    else handleError(error, res, next);
  }
};
export const signup = async (req, res, next) => {
  try {
    const data = await authService.signup(req.body);
    handleResponse(res, 201, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
export const renewToken = async (req, res, next) => {
  try {
    const { accessToken, refreshToken, data } = await authService.renewTokens(
      req.body.user,
    );
    res.status(200).json({
      status: "success",
      accessToken: accessToken,
      refreshToken: refreshToken,
      data,
    });
  } catch (error) {
    handleError(error, res, next);
  }
};
