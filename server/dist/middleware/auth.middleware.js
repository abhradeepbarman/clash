import jwt from "jsonwebtoken";
const Auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader === undefined) {
        return res.status(401).json({
            status: 401,
            message: "UnAuthorized",
        });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({
                status: 401,
                message: "UnAuthorized",
            });
        }
        req.user = user;
        next();
    });
};
export default Auth;
