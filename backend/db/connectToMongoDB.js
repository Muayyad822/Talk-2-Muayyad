import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 5000,
			socketTimeoutMS: 45000,
		};

		await mongoose.connect(process.env.MONGO_DB_URI, options);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("MongoDB connection error:", error.message);
		// Retry logic
		if (error.message.includes('ESERVFAIL')) {
			console.log("DNS resolution issue, retrying in 5 seconds...");
			setTimeout(() => {
				connectToMongoDB();
			}, 5000);
			return;
		}
		process.exit(1);
	}
};

export default connectToMongoDB;
