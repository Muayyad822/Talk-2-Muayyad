import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;

		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		if (!process.env.JWT_SECRET) {
			throw new Error("JWT_SECRET is not defined in environment variables");
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(401).json({ error: "User not found" });
		}

		req.user = user;
		next();
	} catch (error) {
		if (error.name === 'JsonWebTokenError') {
			return res.status(401).json({ error: "Invalid token signature" });
		}
		if (error.name === 'TokenExpiredError') {
			return res.status(401).json({ error: "Token has expired" });
		}
		console.error("Auth middleware error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;
