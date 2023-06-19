const jwt = require("jsonwebtoken");

module.exports.authenticateMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "yourSecretKey"); // Verify and decode the token
    req.user = decoded; // Attach the decoded user object to the request
    console.log({ user: req.user });
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
};
