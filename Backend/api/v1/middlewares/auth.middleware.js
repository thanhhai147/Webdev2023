import jwt from "jsonwebtoken";

export default class AuthMiddleware {

    static checkExpireToken = (token) => {
        const decodedJWT = jwt.decode(token, { complete: true })
        const expire = decodedJWT.payload.exp;
        
        const d = new Date();
        const now = d.getTime();

        if(now >= expire) return true;
        return false;
    };
    
    static verifyToken = (req, res, next) => {
        const accessToken = req.cookies.accessToken;
        console.log(req.cookies)
        if(accessToken) {
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if(err) return res.status(403).json({ message: "invalid token" });
                req.user = user;
                next();
            });
        } else {
            res.status(401).json({ message: "unauthorized" });
        };
    };

    static verifyTokenAndAdmin = (req, res, next) => {
        this.verifyToken(req, res, () => {
            if(req.user.admin) {
                next();
            } else {
                res.status(403).json({ message: "permission required" });
            };
        });
    };
};