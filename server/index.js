const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
const cors = require('cors');
const connectDatabase = require('./config/database.js');
const router = require('./routes/TicketRoutes.js');

const app = express();
const PORT = process.env.PORT || 3597;

app.use(cors());
app.use(express.json());

connectDatabase();

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
