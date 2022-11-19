const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
  const id = req.params.id;
  const sqlText = `SELECT *FROM "league"
  WHERE "id" = $1;`;

  console.log("req.params", req.params.id)
  console.log("id", id);

  pool.query(sqlText,[id])
  .then((result) =>{
   // console.log('result is:',result.rows)
   res.send(result.rows[0]) 
   console.log(result.rows);
  })
  .catch((error) =>{
   console.log('error fetching items', error)
   res.sendStatus(500)
  })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});


/**
 * GET route template
 */
 router.delete('/:id', (req, res) => {
  // GET route code here
  const id = req.params.id;
  const sqlText = `DELETE FROM "league"
  WHERE "id" = $1;`;

  console.log("req.params", req.params.id)
  console.log("id", id);

  pool.query(sqlText,[id])
  .then((result) =>{
   // console.log('result is:',result.rows)
   res.send(result.rows[0]) 
   console.log(result.rows);
  })
  .catch((error) =>{
   console.log('error fetching items', error)
   res.sendStatus(500)
  })

});



module.exports = router;
