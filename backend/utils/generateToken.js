import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	try {
		if (!process.env.JWT_SECRET) {
			throw new Error("JWT_SECRET is not defined in environment variables");
		}

		const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
			expiresIn: "15d",
		});

		res.cookie("jwt", token, {
			maxAge: 15 * 24 * 60 * 60 * 1000, // MS
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production", // Make sure this is true in production
			path: "/" // Ensure cookie is available for all paths
		});
	} catch (error) {
		console.error("Token generation error:", error);
		throw error;
	}
};

export default generateTokenAndSetCookie;
