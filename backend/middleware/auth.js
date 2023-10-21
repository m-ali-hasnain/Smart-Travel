import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// const { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } = process.env
const ACCESS_JWT_SECRET = dotenv.config().parsed?.ACCESS_JWT_SECRET;
const REFRESH_JWT_SECRET = dotenv.config().parsed?.REFRESH_JWT_SECRET;

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, ACCESS_JWT_SECRET, (err, user) => {
    if (err) return res.send(err);
    req.body.user = user;
    next();
  });
};

export const revalidateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader)
    res.status(401).json({
      status: "failure",
      message: "Authorization Header Absent",
      data: authHeader,
    });
  jwt.verify(authHeader, REFRESH_JWT_SECRET, (err, user) => {
    if (err)
      res
        .status(409)
        .json({ status: "failure", message: "Please Login Again" });
    req.body = user;
    next();
  });
};

export const issueTokens = (userBody) => {
  const token = jwt.sign(
    {
      user: userBody,
    },
    ACCESS_JWT_SECRET,
    {
      expiresIn: "10s",
    },
  );
  const refreshToken = jwt.sign(
    {
      user: userBody,
    },
    REFRESH_JWT_SECRET,
    {
      expiresIn: "24h",
    },
  );
  return { accessToken: token, refreshToken: refreshToken, data: userBody };
};
