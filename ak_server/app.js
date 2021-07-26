const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const passport = require("passport");
// all middleware array
const middleware = [
    //body-parser connect
    express.json({ limit: '30mb', extended: true }),
    express.urlencoded({ limit: '30mb', extended: true }),
    //cors connect
    cors(),
    // passport middleware used
    passport.initialize(),
];
require("./src/middleware/passport")(passport);
// all middleware 
app.use(middleware);

//server connect
require('./connect');

//load routes
const userHandler = require("./src/routes/user.routes");
const productHandler = require("./src/routes/product.routes");
const handleError = require('./src/utils/handleError');

// application routes
app.use("/api/users", userHandler);
app.use("/api", productHandler);

//Error Handler route
app.use((req, res, next) => {
    const error = new Error("Resources not found!");
    error.status = 404;
    next(error);
});

// error handler used
app.use(handleError);
//server port connect
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`api is ready on http://localhost:${PORT}`);
})