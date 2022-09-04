import React from 'react'
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const mailchimp = require("@mailchimp/mailchimp_marketing"); //you need to add dependency first in terminal. run npm i @mailchimp.marketing in terminal. Make sure you are inside the folder of your project. Check your package.json file, make sure @mailchimp/marketing has bbeen added in your dependencies.
const {response} = require("express");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

mykey = config.MY_KEY

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/signup.html");
});

mailchimp.setConfig({
    apiKey: mykey, 
    server: "us17"
});

app.post("/", function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    console.log(firstName, lastName, email)
    
    const listId = "7f0aa8ef30";
    const subscribingUser = {
        firstName: firstName, 
        lastName: lastName, 
        email: email
    };

    const run = async () => {
        try {    
            const response = await mailchimp.lists.addListMember(listId, {
                    
                email_address: subscribingUser.email,
                status: "subscribed",
                merge_fields: {
                    FNAME: subscribingUser.firstName,
                    LNAME: subscribingUser.lastName
                }                    
            });
            console.log(response);
            res.sendFile(__dirname + "/success.html");
        } catch (err) {
            console.log(err.status);
            res.sendFile(__dirname + "/failure.html");
        }
    };
            
    run();
});

const MailChimp = () => {
  return (
    <div>
      
    </div>
  )
}

export default MailChimp
