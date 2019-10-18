// const requireRole = roles => {
//     return function (req, res, next) {
//         for (role of roles) {
//             if(req.user.role[role] || req.user.role.isAdmin) {
//                 next()
//             }
//         }
//         res.send(403)
//     }
// }

// module.exports = requireRole

module.exports = requireRole = role => (req, res, next) => req.user.role === role || req.user.role === "admin" ? next() : res.sendStatus(403)