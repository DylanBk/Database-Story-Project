const cors = require('cors');
const express = require('express');
const path = require('path');
require('dotenv').config();

const user_router = require('./routes/user-routes');

const app = express();


// --- SETUP ---

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.static(path.join(__dirname, '../frontend/build', 'index.html')));
const index_path = path.join(__dirname, '../frontend/build', 'index.html');


// --- ROUTES ---

function handleIndexRoutes() {
    res.sendFile(index_path);
};

app.get('/', handleIndexRoutes);
app.get('/home', handleIndexRoutes);
app.get('/index', handleIndexRoutes);

// --- API ROUTES ---

app.use('/users', user_router);