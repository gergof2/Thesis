const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const session = require('express-session');
const sql = require('../config/db');
const { json } = require('express');

router.post('/getwords', async (req, res) => {
    if(req.session.user && req.session.user.email){
        let english = [];
        let hungarian = [];
        let results = [];
        function get_Words(callback){
            sql.query("SELECT english, hungarian FROM words ORDER BY RAND() LIMIT 10",function(err, results){
                if(err) throw err;                
                return callback(results);
            })
        }

        get_Words(async function(result){
            return res.json(result);
        })

    }
    else return res.json({message: "Ismeretlen felhasználó!"});
});

