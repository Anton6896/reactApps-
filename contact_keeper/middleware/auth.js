const jwt = require('jsonwebtoken')
const config = require('config')

/**
 * on login check the token and grub the user from it
 * @param req - update request with new user (user.id)
 * @param next - go to next middlewear
 */
module.exports = (req, res, next) => {
    let token = req.header('x-auth-token')
    !token && res.status(401).json({"msg": "no token - authorization failed"})

    try {
        let decode = jwt.verify(token, config.get('jwtSecret'))
        req.user = decode.user // i encode user obj -> id in token
        next()

    } catch (error) {
        res.status(401).json({"msg": "access denied, token not valid"})
    }
}