const contact_form_controller = require('../Controllers/contact_form_controller.js')
const router = require('express').Router()

router.post('/addcontact', contact_form_controller.addcontact)
router.get('/allproduct', contact_form_controller.getallproduct)
router.get('/id', contact_form_controller.getoneproduct)
router.put('/id', contact_form_controller.updatedata)
router.delete('/deleted', contact_form_controller.deletedata)

module.exports = router