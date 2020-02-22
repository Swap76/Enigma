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
			let encrypted = await encryption(result);
			return res.status(200).send(encrypted);
		}
		return res.status(200).send({'error':'There are no blogs'});
	} catch (err) {
		debug(err);
		return res.status(400).send({'error':'Some error. Try again'});
	}
};
