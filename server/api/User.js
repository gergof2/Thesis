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
    .route("/login")
    .get(async (req, res) => {
        if (req.session.user && req.session.user.email){
            res.json({ loggedIn: true, email: req.session.user.email });
        }else{
            res.json({loggedIn: false});
        }
    }

    )
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

router.post('/signup', async (req, res) => {

    if(req.body.name == "" || req.body.email == "" || req.body.password == "" || req.body.dateOfBirth == "") {
        res.json({
            status: "FAILED",
            message: "Üres mezőt adtál meg!"
        });
    } else if (!/^[0-9a-zA-Z ]*$/.test(req.body.name)){
        res.json({
            status: "FAILED",
            message: "Érvénytelen felhasználónév!"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(req.body.email)){
        res.json({
            status: "FAILED",
            message: "Érvénytelen e-mail cím!"
        })
    } else if (req.body.password.length < 6){
        res.json({
            status: "FAILED",
            message: "A jelszó túl rövid!"
        })
    }else {
        
        var id = '';
        var record = req.body.email;
        function get_User(callback){
            sql.query("SELECT id FROM users WHERE email = ?", [record], function(err, results){
                if(err) throw err;
                id = results[0];
                return callback(results[0]);
            })
        }

        get_User(async function(result){
            id = result;
            
            if(id === undefined){
                const hashedPass = await bcrypt.hash(req.body.password, 10);
                var records = [req.body.name, req.body.email, hashedPass, req.body.dateOfBirth];
                const newUserQuery = await sql.query(`INSERT INTO users(name, email, password, dateOfBirth) values (?)`, [records]
                );
                    return res.json({
                        status: "SUCCESS",
                        message: "Sikeres regisztráció!"
                    });     
            }else{
                
                return res.json({
                    status: "FAILED",
                    message: "A megadott e-mail cím foglalt!"
                })
                
            }
        })
    }
});

router.post('/logout', async (req, res) =>{
    if (req.session.user && req.session.user.email){
        req.session.user = {
            email: null,
            id: null,
        };
        return res.json({loggedIn: false, email: null});
    }
    else return res.json({message: "Ismeretlen felhasználó!"});
});

router.post('/profile',async (req, res) => {
    if (req.session.user && req.session.user.email){
        let data = [];
        function get_Profile(callback){
            sql.query("SELECT id, name, email, score, dateOfBirth, createDate FROM users WHERE email = ?", [req.session.user.email], function(err, results){
                if(err) throw err;
                data = results[0];
                return callback(results[0]);
            })
        }

        get_Profile(async function(result){
            data = result;
            return res.json({id: data.id, name: data.name, email: data.email, score: data.score, dateOfBirth: data.dateOfBirth, createDate: data.createDate});
        })
    }
    else return res.json({message: "Ismeretlen felhasználó!"});
});

router.post('/score', async (req, res) => {
    if(req.session.user && req.session.user.email){       
        let data = []; 
        function post_Score(callback){
            sql.query("UPDATE users SET score = score + ? WHERE email = ?", [req.body.score, req.session.user.email], function(err, results){
                if(err) throw err;
                data = results[0]
                return callback(results[0]);
            })
        }
        
        post_Score(async function(result){
            data = result;
            return res.json({message: data})
        });
    }
    else return res.json({message: "Ismeretlen felhasználó!"});
});

router.get('/scoreboard', async (req, res) => {
    let data = [];
    function get_ScoreBoard(callback){
        sql.query("SELECT name, score, createDate FROM users ORDER BY score DESC LIMIT 7", function(err, results){
            if(err) return err;
            data = results
            return callback(results);
        })
    }

    get_ScoreBoard(async function(result){
        data = result;
        return res.json({data: data});
    });
});

