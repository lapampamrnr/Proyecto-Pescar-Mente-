
const authMiddleware = (req, res, next) => {

    console.log("Middleware ejecutado");

    next();

};

module.exports = authMiddleware;
