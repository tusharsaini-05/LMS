const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const adminRouter = require("./routes/admin")
const administratorRouter = require("./routes/administrator");
const issue = require("./db/issue")

const axios = require('axios');
const JWT_SECRET =  "kirat_servers"

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/administrator", administratorRouter)
app.use("/issue",issue)
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

