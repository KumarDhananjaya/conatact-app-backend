const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/ValidateTokenHandler');
const { getContacts, 
    createContact, 
    getContact,
    updateContact,
    deleteContact} = require("../controllers/ContactController");


router.use(validateToken);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;