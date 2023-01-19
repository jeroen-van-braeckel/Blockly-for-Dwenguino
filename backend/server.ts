import path from 'path';
let __dirname = path.resolve();

import express from 'express';
import cookieParser from 'cookie-parser';

//mongoose.set('debug', true);
import i18n from 'i18n-x';

// Import blockly router
import blocklyRoutes from './routes/blockly-routes.js';

// Import statistics routes
import statsRoutes from './routes/stats-routes.js'

// Import dashboard routes
import dashboardRouter from './routes/dashboard-routes.js'

// Import oauth routes
import oauthRouter from './routes/oauth-routes.js'

// Import user routes
import userRouter from "./routes/user.routes.js"

// Import test router
import testRouter from './routes/test_auth.routes.js';

// For deploying to production
import compression from 'compression';
import helmet from 'helmet';

// For keeping track of sessions
import cookieSession from "cookie-session"

// For profiling the application in development
//import profiler from 'v8-profiler-node8'

//Configure cors middleware for the run route to allow all requests
import cors from 'cors';

let corsOptions = {
    origin: process.env.CORS_ORIGIN,
};

let key, cert, ca = 0;
let options = {}

// Setup server port
var port = 12032;
console.log("Port: " + port);


let sslPort = process.env.SSLPORT || 443;;
console.log("SSL port: " + sslPort);


// Initialize the app
let app = express();

app.use(cors(corsOptions));

// Set view engine
app.set('view engine', 'ejs');
let viewDirs = JSON.parse(process.env.VIEWS_DIR as string).map((elem) => {return __dirname + "/" + elem})
app.set('views', viewDirs);   // For debug
//app.set('views', '../Blockly-for-Dwenguino');

// Optimizations for production
if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(helmet({
        frameguard: false // Allow use in iframe
      }));
}else{
    app.use(cors({
        origin: '*',
        credentials: true
      }));
}

app.use(cookieParser());
app.use(i18n({
    locales: ['en', 'nl'], 
    directory: 'msg',
    jointDir: 'msg',
    defaultLocale: 'en',
    queryParameter: 'lang',
    cookieName: 'lang',
    order: ['cookie', 'query', 'headers']
}));

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

app.use(
    cookieSession({
        name: process.env.COOKIE_NAME,
        secret: process.env.COOKIE_SECRET
    })
)

    // Setup static file serving
if (process.env.NODE_ENV === 'production') {
    app.use('/dwenguinoblockly', express.static(path.join(__dirname, 'Blockly-for-Dwenguino')));
} else if (process.env.NODE_ENV === 'standalone') {
    app.use('/dwenguinoblockly', express.static(path.join(__dirname, '..', 'Blockly-for-Dwenguino')));
} else {
    // Debug setup
    app.use('/dwenguinoblockly', express.static(path.join(__dirname, 'Blockly-for-Dwenguino')));
}

// Set favicon
app.get("/favicon.ico", (req, res) => {
    return res.sendFile(path.join(__dirname + "/Blockly-for-Dwenguino/favicon.ico"));
})

// Use blockly routes for the app
app.use('/', blocklyRoutes);

// Use statistics routes
app.use('/stats', statsRoutes);

// Use dashboard routes
app.use('/dashboard', dashboardRouter);

// Use oauth routes
app.use('/oauth', oauthRouter);

// Use user routes
app.use("/user", userRouter);

// Test router
app.use("/test", testRouter)

// Add default route
app.get("/", (req, res) => res.send('Welcome to blockly'));

export { app, port, sslPort, options }


