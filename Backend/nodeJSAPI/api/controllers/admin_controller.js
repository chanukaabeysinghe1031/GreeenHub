const Admin = require('../models/admin')
const bcrypt = require("bcryptjs");

exports.signin = async (req, res) => {
    const {email, password} = req.body;

    //Validation
    if (!email || !password) {
        res.json({Status: "Unsuccessful", Message: 'Email and password must be entered.'});
    }

    //Check for existing user
    Admin.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                res.json({Status: "Unsuccessful", Message: 'Invalid user email.'})
            } else {
                //Validating password
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (!isMatch) {
                            res.json({Status: "Unsuccessful", Message: "Password is incorrect."})
                        } else {
                            res.json({
                                Status: "Successful",
                                Message: 'User has been logged successfully.',
                                User: user
                            })
                        }
                    });
            }
        })
        .catch(error=>{
            res.json({
                "Status":"Unsuccessful",
                "Error": error
            })
        })
}