const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const CustomerModel = require("CustomerModel")

const app = express()
app.use(express.json())
app.use(cors)

mongoose.connect(""); //copy connection string and place here

app.post("login", (req ,res,) => {
    const {email, password} = req.body;
    CustomerModel.findOne({email: email})
    .then(user) => {
        if (user) {
            if (user.password== password) {
                res,json("")
            }else{
                res.json("password is incorrect")
            }
            }else{
                res.json("No records exist, go back to sign up")
            }
        }

    })
})
