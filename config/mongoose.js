	//Require the Mongoose Library
	const mongoose = require("mongoose");
	//Require the Environment File for getting the Environment Variables
	const env = require("./environment");

	let db;

	//If the Environment is Development
	const Development = async () => {
		try {
			//Connect to the Database
			mongoose.connect(env.db, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});

			//Acquire the Connection
			db = mongoose.connection;
			//If Error
			db.on("error", console.error.bind(console, "Connection Error"));
			//If Successful
			db.once("open", () => {
				console.log("Connected to MongoDB Successfully");
			});
		} catch (error) {
			//If Error
			console.log(error);
		}
	};

	//If the Environment is Production
	const Production = async () => {
		try {
			const options = { useNewUrlParser: true, useUnifiedTopology: true };
			//Connect to the Database
			await mongoose.connect(`${env.db}`, options);
			//Acquire the Connection
			db = mongoose.connection;
			//If Successful
			console.log("Connected to MongoDB Successfully");
		} catch (error) {
			//If Error
			console.log(error);
		}
	};

	//Establishes the Connection based on the Environment
	const EstablishConnection = async () => {
		try {
			if (env.name === "development" && env.deployment === "local") {
				await Development();
			} else if (env.name === "production" && env.deployment === "local") {
				await Development();
			} else if (env.name === "production" && env.deployment === "AWS") {
				await Development();
			} else if (env.name === "production" && env.deployment === "Heroku") {
				await Production();
			} else if (env.name === "production" && env.deployment === "other") {
				await Production();
			} else if (env.deployment === "docker") {
				// Handle Docker deployment
				await Development();
			} else {
				// Fallback for any other cases
				await Development();
			}
			// Give some time for the connection to establish before checking
			setTimeout(() => {
				if (!db) console.log("Connection Error");
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};

	EstablishConnection();

	//Export the Connection
	module.exports = db;
    console.log("🔗 DB URL from env:", env.db);
