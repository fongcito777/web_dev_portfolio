
const https = require("https");
const express =require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile); 
app.set("view engine", "html");


app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/signup.html");
});

app.post('/',(req, res) =>{
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    }
    var jsonData = JSON.stringify(data);
    const listId = "98dd124148";
    const apiKey = "c64199938496baf337fac7b028cb8331-us12";
    const url = "https://us12.api.mailchimp.com/3.0/lists/" + listId;
    const options = {
            method: "POST",
            auth: "Yahwtha_511:" + apiKey
        }

    const name = " ";
        var mailRequest = https.request(url, options, (response) => {
            if(response.statusCode === 200) {
                response.on("data", (data) => {
                    var jsonResp = JSON.parse(data);
                    if(jsonResp["error_count"] === 0) {
                        res.render(__dirname + "/success.html", {name:name});
                    } else {
                        res.render(__dirname + "/failure.html", {name:name});
                        console.log(jsonResp.errors[0]["error_code"]);
                        console.log(jsonResp.errors[0]["error"]);
                    }
                }).on("error", (e) => {
                    res.render(__dirname + "/failure.html", {name:name});
                });
            } else {
                res.render(__dirname + "/failure.html", {name:name});
            }
        });
        mailRequest.write(jsonData);
        mailRequest.end();
});

app.get("/failure", (req, res) => {
    res.redirect("/");
});

app.get("/success", (req, res) => {
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Listening on port 3000, Hello World");
});



/* 



     **/