const express = require('express');
const router = express.Router();
var db = require('../db');



// получение вссех пользователей
router.get('/', function (req, res, next) {
  res.status(200).send('Hello, this is ASER ASPIRE ES-311-P$EW PC WORKING IN 1996 PORT')
});


// авторизация
router.post('/auth', function(req, res, next) {
    var sql = `SELECT * FROM users WHERE pass='${req.body.pass}' AND login='${req.body.login}'`;
    db.query(sql, function(err, rows, fields) {
      if (err) {
          res.status(200).send({ "sql-quore is not correct:": sql})
      } else{
          if(rows.length){
            res.status(200).send({ field_is_correct: true})
          }else{
            res.status(200).send({ field_is_correct: false})
          }
      }
    })
});




// добавление заказа
/* router.post('/add_order', function (req, res, next) {
    let ticketN = req.body.ticketN;
    let restId = req.body.restId;
    let amount = req.body.amount;
    let foodItems = req.body.foodItems;

    //if (!ticketN || !restId || !amount || !foodItems.length) res.status(200).send({ request: 'fail' })

    let sql = `INSERT INTO orders (id, ticketN, restId, amount, status)
              VALUES (NULL, ${ticketN}, ${restId}, ${amount}, 0);`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(200).send({ "sql-quore is not correct:": sql })
        } else {
            get(rows.insertId,foodItems,res);
        }
      })
});


function get(orderId,foodsId,res){
    let sql = `SELECT id,price from food`;
    db.query(sql, function (err, rows, fields) {
          if (err) {
              res.status(200).send({ "sql-quore is not correct:": sql })
          } else {
              add(orderId,foodsId,rows,res);
          }
    })
}


function add(orderId,foodsId,foodsPrice,res){
    let sql = `INSERT INTO orders (id, ticketN, restID, amount, status)
               VALUES;`;
                //(NULL, ${ticketN}, ${restId}, ${amount}, 0)
    foodsId.map(e =>{
       sql +=' '+'(NULL, ${ticketN}, ${restId}, ${amount}, 0)'
    })
    db.query(sql, function (err, rows, fields) {
        if (err) {
          res.status(200).send({ "sql-quore is not correct:": sql })
        } else {
          get(rows.insertId, foodItems, res);
        }
    })
} */




// получение вссех пользователей
router.get('/users', function(req, res, next) {
  var sql = "SELECT * FROM users";
  db.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json(rows)
  })
});

router.get('/tickets', function(req, res, next) {
  var sql = "SELECT * FROM tickets";
  db.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json(rows)
  })
});



router.get('/get_points/:id', function(req, res, next) {
  var id = req.params.id;
  var sql =`SELECT route_points.id, route_points.title
            FROM route_points JOIN tickets
            ON route_points.ticketId=tickets.id`;
  db.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(200).send({ "sql-quore is not correct:": sql})
    } else{
        if(rows.length){
            res.status(200).send({ route_points: rows})
        }else{
          res.status(200).send({ route_points: null+ ' '+sql})
        }
    }
  })
});

router.get('/get_food/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT *
  FROM food
  WHERE restaurantsId='${id}'`;
  db.query(sql, function (err, rows, fields) {
    if (err) {
      res.status(200).send({ "sql-quore is not correct:": sql })
    } else {
      if (rows.length) {
        res.status(200).send({ food: rows })
      } else {
        res.status(200).send({ food: null })
      }
    }
  })
});



router.get('/get_order_price/:id', function(req, res, next) {
  var id = req.params.id;
  var sql =`SELECT orderId, SUM(price) AS total_price FROM food_order GROUP BY ${id}`;
  db.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(200).send({ "sql-quore is not correct:": sql})
    } else{
        if(rows.length){
          res.status(200).send({ order: rows})
        }else{
          res.status(200).send({ order: null})
        }
    }
  })
});

router.get('/get_restaurants/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT *
  FROM restaurants
  WHERE routePointsId='${id}'`;
  db.query(sql, function (err, rows, fields) {
    if (err) {
      res.status(200).send({ "sql-quore is not correct:": sql })
    } else {
      if (rows.length) {
        res.status(200).send({ route_points: rows })
      } else {
        res.status(200).send({ route_points: null })
      }
    }
  })
});

module.exports = router;