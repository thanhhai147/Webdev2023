export default class ErrorHandle {
    static useError = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

    static errResponse = (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({message: "Internal Server Error"})
    };
};
