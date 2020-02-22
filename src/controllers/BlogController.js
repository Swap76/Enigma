import Blog from '../models/Blog';
import {encryption} from '../utils/encryption';

/**
 * Shows all blogs
 * @route /blog/all
 * @param none
 * @method GET
 */
module.exports.all = async (req, res, next) => {
	try {
		const result = await Blog.find().populate('userId');
		if(result.length > 0) {
			return res.status(200).send(result);
		}
		return res.status(200).send({'error':'There are no blogs'});
	} catch (err) {
		debug(err);
		return res.status(400).send({'error':'Some error. Try again'});
	}
};

/**
 * Shows all blogs Encrypted
 * @route /blog/all
 * @param none
 * @method GET
 */
module.exports.allEncrypted = async (req, res, next) => {
	try {
		const result = await Blog.find().populate('userId');
		if(result.length > 0) {
			let encrypted = await encryption(result);
			return res.status(200).send(encrypted);
		}
		return res.status(200).send({'error':'There are no blogs'});
	} catch (err) {
		debug(err);
		return res.status(400).send({'error':'Some error. Try again'});
	}
};

/**
 * Shows a single blog post
 * @route /blog/:id
 * @param id blog post id
 * @method GET
 */

module.exports.show = async (req, res, ) => {
	const id = req.params.id;
	try {
		const result = await Blog.findById(id).populate('userId');
		if (result) {
			return res.status(200).send(result);
		}
		return res.status(400).send({'error':'There is no such blog post'});
	} catch(err) {
		debug(err);
		res.status(400).send({'error':'Some error. Try again'});
	}
};

/**
 * Shows a single blog post Encrypted
 * @route /blog/:id
 * @param id blog post id
 * @method GET
 */

module.exports.show = async (req, res, ) => {
	const id = req.params.id;
	try {
		const result = await Blog.findById(id).populate('userId');
		if (result) {
			return res.status(200).send(result);
		}
		return res.status(400).send({'error':'There is no such blog post'});
	} catch(err) {
		debug(err);
		res.status(400).send({'error':'Some error. Try again'});
	}
};

/**
 * Shows a single blog post Encrypted
 * @route /blog/:id
 * @param id blog post id
 * @method GET
 */

module.exports.showEncrypted = async (req, res, ) => {
	const id = req.params.id;
	try {
		const result = await Blog.findById(id).populate('userId');
		if (result) {
			let encrypted = await encryption(result);
			return res.status(200).send(encrypted);
		}
		return res.status(400).send({'error':'There is no such blog post'});
	} catch(err) {
		debug(err);
		res.status(400).send({'error':'Some error. Try again'});
	}
};