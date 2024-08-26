const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', controller.home);
router.post('/addVolunter', controller.addVolunter);
router.get('/editVolunter/:id', controller.editVolunter);
router.post('/updateVolunter/:id', controller.updateVolunter);
router.get('/deleteVolunter/:id', controller.deleteVolunter);

module.exports = router;