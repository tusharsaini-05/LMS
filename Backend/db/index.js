const mongoose = require('mongoose');

// Connect to MongoDB

// Define a function to establish MongoDB connection
async function connectToMongoDB() {
    try {
        // Connect to MongoDB Atlas
        await mongoose.connect('mongodb+srv://sanketyelave11:sanket@cluster0.vauajse.mongodb.net/prone', {

        });

        // Connection successful, log a message
        console.log("Connected to MongoDB");

        // Optionally, you can return the Mongoose connection object for further use
        return mongoose.connection;
    } catch (error) {
        // Connection failed, log the error
        console.error("Error connecting to MongoDB:", error);
        throw error; // Optionally, rethrow the error for handling elsewhere
    }
}
connectToMongoDB()
// Define schemas

const AdministratorSchema = new mongoose.Schema({
    // Schema definition here
    email: String,
    password: String,
    phonenumber: String
});

const AdminSchema = new mongoose.Schema({
    // Schema definition here
    email: String,
    password: String,
    phonenumber: String
});


const issueSchema = new mongoose.Schema({
    // Schema definition here
    department: String,
    issue: String,
    labNo: String,
    status: String
});



const Administrator = mongoose.model('Administrator', AdministratorSchema);
const Admin = mongoose.model('Admin', AdminSchema);
const Issue = mongoose.model('Issue', issueSchema);

module.exports = {
    Administrator,
    Admin,
    Issue,
}