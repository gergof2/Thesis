const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const session = require('express-session');
const sql = require('../config/db');
const bcrypt = require('bcrypt');
const { json } = require('express');
const saltRounds = 10;

router
    .post(async (req, res) => {
    if(req.body.email == "", req.body.password == "") {
        res.json({
            status: "FAILED",
            message: "Üres mezőket adtál meg!"
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(req.body.email)){
        res.json({
            status: "FAILED",
            message: "Érvénytelen e-mail cím!"
        })
    } else if (req.body.password.length < 8){
        res.json({
            status: "FAILED",
            message: "A jelszó túl rövid!"
        })
    }else {
        var records = [];
        var record = [req.body.email];
        function get_User(callback){
            sql.query("SELECT id, name, email, password FROM users WHERE email = ?", [record], function(err, results){
                if(err) throw err;
                records = results;
                return callback(results);
            })
        }
        get_User(async function(result){
            results = result[0];
        
            if(results !== undefined){
                const isSamePass = await bcrypt.compare(
                    req.body.password, 
                    results.password
                    );
                    if (isSamePass) {
                        req.session.user = {
                            email: req.body.email,
                            id: results.id,
                        };
                        return res.json({loggedIn: true, email: req.body.email, message: "Sikeres bejelentkezés!"});
                    }else {
                        return res.json({loggedIn: false, message: "Rossz e-mail cím vagy jelszó!" })    
                    }
            }else {        
                return res.json({loggedIn: false, message: "Rossz e-mail cím vagy jelszó!" })
            }

        });

    }
});

