const express = require('express');
const blogController = require('../controllers/BlogController');

const router = express.Router();

/**
 * Main Page
 */
router.get('/all', blogController.all);

module.exports = router;