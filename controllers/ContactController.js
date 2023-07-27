const asyncHandler = require("express-async-handler");
const Contact = require("../models/ContactModel");

//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


//@desc Create New Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request bdy is :",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are compulsory");
    }

    const contact = await Contact.create({
        name, 
        email, 
        phone})
    res.status(201).json(contact);
});

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error[" Contact Not Found "]
    }
    res.status(200).json(contact);
});

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error[" Contact Not Found "]
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true},
    )
    res.status(200).json(updatedContact);
});

//@desc delete Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({mesagge: `Delete contact for id ${req.params.id}`});
});



module.exports = {
    getContacts,
    createContact, 
    getContact,
    updateContact,
    deleteContact
};