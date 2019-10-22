const requireRole = (...roles) => (req, res, next) => {

    for (role of roles) {
        if(req.user.role === role || req.user.role === "admin"){
            return next()
        }
    }
    res.sendStatus(403)
}

module.exports = requireRole