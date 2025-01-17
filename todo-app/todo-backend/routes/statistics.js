const express = require('express')
const router = express.Router()

const redis = require('../redis')

const { getAsync, setAsync } = redis

router.get('/', async (req, res) => {
  const count = await getAsync('added_todos')
  const countObject = {
    added_todos: count ? count : 0
  }
  
  res.json(countObject)
})

module.exports = router