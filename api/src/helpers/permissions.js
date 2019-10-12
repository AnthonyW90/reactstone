// const requireRole = (role) => {
//     return function (req, res, next) {
//         if(req.user.profile[role] || req.user.profile.isAdmin) {
//             next()
//         } else {
//             res.send(403)
//         }
//     }
// }

module.exports = requireRole = role => (req, res, next) => req.user.profile[role] || req.user.profile.isAdmin ? next() : res.sendStatus(403)