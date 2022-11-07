const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const session = require('express-session');
const sql = require('../config/db');
const { json } = require('express');

router.get('/getwords', async (req, res) => {
    if(req.session.user && req.session.user.email){
        sql.query("SELECT english, hungarian FROM words ORDER BY RAND() LIMIT 10",function(err, results){
            if(err) throw err;                
            return res.json(results);
        })
    }
    else return res.json({message: "Ismeretlen felhasználó!"});
});

router.post('/posttest', async (req, res) => {   
    if(req.session.user && req.session.user.email){    
        let data = [];   
        let p = req.body.engwords;
        let h = req.body.hunwords;
        const result = p.toString().replace('\\r\\n', '');
        const result2 = h.toString().replace('\n', '');
        var records = [req.session.user.id, result, result2, req.body.score, req.body.mode];
        function post_Test(callback){
            sql.query("INSERT INTO tests(user_id, engwords, hunwords, score, mode) values (?)", [records], function(err, results){
                if(err) return err;
                data = results[0]
                return callback(results[0]);
            })
        }
        post_Test(async function(result){
            data = result;
            return res.json({data: data});
        })
    }
    else return res.json({message: "Ismeretlen felhasználó!"});
});



module.exports = router;