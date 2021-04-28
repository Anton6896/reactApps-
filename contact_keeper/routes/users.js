const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// https://express-validator.github.io/docs/
const {body, validationResult} = require('express-validator');
const config = require('config')


/**
 * https://express-validator.github.io/docs/
 * @route  post api/users
 * @desc    register user
 * @access  public
 */
router.post('/',

    [
        body('email', 'Email is required').isEmail().isLength({min: 3}),
        body('name', 'Name is required').isLength({min: 3}),
        body('password', 'min length is 5 ').isLength({min: 5})
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        //create user
        let {name, email, password} = req.body
        // res.send(name)

        try {
            // if user is exists
            let user = await User.findOne({email})
            user && res.status(400).json({"msg": "user already in "})


            user = new User({
                name, email, password
            })

            // hash password
            let salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)

            //save instance user in db
            await user.save()

            // get token on user register
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