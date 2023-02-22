import express from 'express';

var router = express.Router();

router.get('/', (req, res) => {
  res.send(JSON.stringify({"test": "works"}))
})

export default router;