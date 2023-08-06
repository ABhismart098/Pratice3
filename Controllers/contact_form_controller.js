const contact_form = require('../Models/contact_form')


db = require('../Models')

//create main models

const contact_form_controller = db.contact_form

//main Work
//1. create a product
const addcontact = async (req,res) =>{
    let info ={
        first: req.body.First_Name,
        last: req.body.Last_Name,
        email: req.body.Email,
        phone: req.body.Phone,
        password: req.body.Password,
        confirm: req.body.Confirm_password,
        country: req.body.Country,
        state: req.body.State,
        city: req.body.City,
        zip: req.body.Zip_Code
    }
    // Check if password and confirm password match
    if (Password !== Confirm_Password) {
        return res.status(400).json({ error: 'Password and Confirm Password do not match' });
    }
    // Combine country code and phone number
    const Phone_Number = `${Country_Code}-${Phone_Number}`;

    const contact_form = await contact_form.create(info)
    res.code(200).send(contact_form)
    console.log(contact_form)
    


}
// 2. get all product 
const getallproduct = async (req, res) =>{
    let contact_form = await contact_form.findAll({
        attributes
    })
    res.status(200).send(contact_form)

}

// get one product
const getoneproduct = async(req, res) =>{
    let id = req.params.id
    const product = await product.findone(req.body,{where:{id: id}})
    res.satus(200).send(contact_form)
}
// get update data
const updatedata = async(req, res) =>{
    let id = req.params.id
    const product = await product.update(req.body,{where:{id: id}})
    res.satus(200).send(contact_form)
}

// get delete
const deletedata = async(req, res) =>{
    let id = req.params.id
   await product.destroy({where: {id: id}})
    res.satus(200).send("product is deleted")
}


module.exports={
    addcontact,
    getallproduct,
    getoneproduct,
    updatedata,
    deletedata,
    

}