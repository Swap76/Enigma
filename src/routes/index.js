const debug = require('debug')('API:routes');
const staticRoutes = require('./static');
const blogRoutes = require('./blog.js');

const initRoutes = (app) => {
	debug('Initializing routes...');

	app.use('/', staticRoutes);
	app.use('/blog', blogRoutes);

	debug('Finished initializing routes...');
};

module.exports = initRoutes;
