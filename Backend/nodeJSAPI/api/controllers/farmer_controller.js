const Farmer = require('../models/farmer')
const bcrypt = require("bcryptjs");

// ************************* To register a seller account **************************
exports.addFarmer =  async  (req,res) => {
    const {fullName,address,mobileNo,email,password} = req.body

    if(fullName===""||email===""||password===""||address===""||mobileNo===""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        console.log(email)
        const farmer = new Farmer({
            fullName,
            email,
            password,
            address,
            mobileNo,
            noPosts:0,
            noComments:0
        })

        Farmer.find({email:email})
        .then(user=>{
            if(user.length>0){
                console.log("Unsuccessful")
                res.json({
                    Status: "Unsuccessful",
                    Message: "There is a user with this email address already."
                })
            }else{
                const newFarmer = new Farmer({fullName,email,password,address,mobileNo})
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newFarmer.password, salt, (err, hash) => {
                        if (err) throw err;
                        newFarmer.password = hash;
                        newFarmer.save()
                        .then(responseSavingUser => {
                            console.log(responseSavingUser)
                            res.json({
                                Status: "Successful",
                                Message: 'Farmer has been registered successfully.',
                                User: responseSavingUser
                            })
                        })
                        .catch(error => {
                            res.json({
                                Status: "Unsuccessful",
                                Message: "Happened saving the farmer in " +
                                    "DB.",
                                error: error.Message
                            })
                        })
                    })
                })
            }
        })
        .catch(error=>{
            console.log("HI"+error)
            res.json({
                Status: "Unsuccessful",
                Message: "Happened finding the user in " +
                    "DB.",
                error: error
            })
        })
    }
}
// ****************************** To login to a user account ******************************
exports.signin = async (req, res) => {
    const {email, password} = req.body;

    //Validation
    if (!email || !password) {
        res.json({Status: "Unsuccessful", Message: 'Email and password must be entered.'});
    }

    //Check for existing user
    Farmer.findOne({email: req.body.email})
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
}

exports.getUsers = async (req,res) =>{
    Farmer.find()
        .then(farmers=>{
            res.json({
                "Status":"Successful",
                "Farmers": farmers
            })
        })
        .catch(error=>{
            res.json({
                "Status":"Unsuccessful",
                "Error": error
            })
        })
}