const express = require('express');
const blogController = require('../controllers/BlogController');

const router = express.Router();

/**
 * Main Page
 */
router.get('/all', blogController.all);
router.get('/all/encrypted', blogController.allEncrypted);
router.get('/:id', blogController.show);
router.get('/:id/encrypted', blogController.showEncrypted);

module.exports = router;