const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')
const auth = require('../middleware/auth')
const {body, validationResult} = require('express-validator');

/**
 * @route   get api/contacts
 * @desc    get all users contacts (spec user)
 * @access  private
 */
router.get('/', auth,
    async (req, res) => {
        try {
            let contacts = await Contact.find({user: req.user.id}).sort({date: -1})
            res.json(contacts)

        } catch (error) {
            console.error(error.message)
            res.status(500).send('server error')
        }
    })

/**
 * @route   post api/auth
 * @desc    add contact
 * @access  private
 */
router.post('/',
    [
        auth,
        [
            body('name', 'Name is required').isLength({min: 3}),
            body('phone', 'min length is 8 ').isLength({min: 7}),
            body('email', 'min length is 8 ').isEmail(),
            body('type', 'enter a valid type').isString()
        ],
    ],
    async (req, res) => {

        // if validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        // get data from body
        let {name, phone, type, email} = req.body

        try {
            // check if object already exists by phone not necessary
            // let contact = await Contacts.findOne({phone})
            // contact && res.status(400).json({"msg": "you already have this contact"})

            let newContact = new Contact({
                name, phone, type, email, user: req.user.id
            })

            await newContact.save()

            return res.status(200).json({"msg": "contact created", "contact": newContact});

        } catch (error) {
            console.error(error.message)
            res.status(500).send('server error')
        }
    })

/**
 * @route   put api/auth/:id
 * @desc    update existing contact
 * @access  private
 */
router.put('/:id', auth,
    async (req, res) => {

        let {name, phone, type, email} = req.body
        let contactFields = {}

        if (name) contactFields.name = name
        if (phone) contactFields.phone = phone
        if (type) contactFields.type = type
        if (email) contactFields.email = email

        try {
            let contact = await Contact.findById(req.params.id)
            !contact && res.status(404).json({"msg": "contact not found"})
            (contact.user.toString() !== req.user.id) && res.status(401).json({"msg": "user nut authorized"})

            contact = await Contact.findByIdAndUpdate(req.params.id, {$set: contactFields}, {new: true})
            res.json(contact)

        } catch (error) {
            console.error(error.message)
            res.status(500).send('server error')
        }

    })


/**
 * @route   delete api/auth/:id
 * @desc    delete contact
 * @access  private
 */
router.delete('/:id', auth,
    async (req, res) => {
        try {
            let contact = await Contact.findById(req.params.id)
            !contact && res.status(404).json({"msg": "contact not found"})
            (contact.user.toString() !== req.user.id) && res.status(401).json({"msg": "user nut authorized"})

            await Contact.findByIdAndRemove(req.params.id) // <- Delete is deprecated
            res.json({msg: "contact is removed"})

        } catch (error) {
            console.error(error.message)
            res.status(500).send('server error')
        }
    })

module.exports = router