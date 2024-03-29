const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/prone');

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



const Administrator = mongoose.model('Administrator',AdministratorSchema);
const Admin = mongoose.model('Admin', AdminSchema);
const Issue = mongoose.model('Issue',issueSchema);

module.exports = {
    Administrator,
    Admin,
    Issue,
}