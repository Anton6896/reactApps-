const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {body, validationResult} = require('express-validator');
const config = require('config')
const auth = require('../middleware/auth')


/**
 * auth middleware will assign to req.user -> User obj if exists
 * @route  get api/auth
 * @desc    retrieve user identity (get logged in user )
 * @access  private
 */
router.get('/', auth,
    async (req, res) => {

        try {
            let user = await User.findById(req.user.id).select('-password')
            res.json(user)

        } catch (error) {
            console.error(error.message)
            res.status(500).send('server error')
        }

    })

/**
 * @route  post api/auth
 * @desc    auth user and get token  (login and get token)
 * @access  public
 */
router.post('/',

    body('email', 'Email is required').isEmail(),
    body('password', 'min length is 5 ').isLength({min: 5}),

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {email, password} = req.body

        // middleware
        try {
            let user = await User.findOne({email}) // obj User inheriting mongoose behavior

            // is user exists
            !user && res.status(400).json({"msg": "invalid credentials (user email) !"})
            // is user password is valid
            let isMatch = await bcrypt.compare(password, user.password)
            !isMatch && res.status(400).json({"msg": "invalid credentials (password) !"})

            // return token to user at login
            let payload = {user: {id: user.id}}

            jwt.sign(payload, config.get('jwtSecret'),
                {expiresIn: 36000000}, // for testing expireIn is bigger than a hour
                (err, token) => {
                    if (err) throw err
                    res.json({token})
                })


        } catch (error) {
            console.error(error.message)
            res.status(500).send('server error')
        }
    })

module.exports = router