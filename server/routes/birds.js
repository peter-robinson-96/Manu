const express = require('express')

const db = require('../db/db')

const router = express.Router()

// get route for calling getBirds (returns array of birds)
router.get('/', (req, res) => {
  return db.getBirds()
    .then(birds => {
      res.json(birds)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// get route for calling getBird (returns object of individual bird)
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  return db.getBird(id)
    .then(bird => {
      res.json(bird)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    }
    )
})

// Put route for changing bird found status to true in db
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  return db.foundBird(id)
    .then((s) => {
      res.json(s)
    })
    .catch(err => {
      res.status(500).send('NEVER HAVE I EVER DATABASE ERROR: ' + err.message)
    })
})

module.exports = router