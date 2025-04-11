import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
		// Verify connection by trying to get users count
		const usersCount = await mongoose.connection.collection('users').countDocuments();
		console.log(`Number of users in database: ${usersCount}`);
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
