import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // jwt token creation
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // sending jwt token as cookie in response
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 1000, // ms
    httpOnly: true, // prevent XSS attacks
    sameSite: "strict", // prevent CSRF attacks
    secure: false, // local http
  });

  return token;
};
