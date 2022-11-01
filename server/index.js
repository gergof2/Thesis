const express = require('express');
const conn = require('./config/db');
const cors = require('cors');
const session = require('express-session');
const {Server} = require('socket.io');
const helmet = require('helmet');

const UserRouterUser = require('./api/User');
const UserRouterWords = require('./api/Words');

const app = express();

const server = require('http').createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: "true",
    },
});

app.use(helmet());
app.use(
    cors({
    origin: "http://localhost:3000",
    credentials: true,
    })
);

app.use(session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "session_id",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: "auto",
        httpOnly: true,
        expires: 1000 * 60 * 60 * 54 * 7,
        sameSite: "lax",        
    },   
})
);

app.use('/user', UserRouterUser);
app.use('/words', UserRouterWords);

app.listen(5000, () => {
    console.log("Server is up and running on 5000 ...");
}) 