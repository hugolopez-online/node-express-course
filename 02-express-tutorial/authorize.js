const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === "hugo") {
        req.user = {name: "hugo", id: 5};
        next();
    } else {
        res.status(401).send("Not authorized");
    };
};

module.exports = authorize;