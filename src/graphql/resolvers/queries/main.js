const CryptoJS = require('crypto-js');
import Blog from '../../../models/Blog';
import {filterAndPagination} from '../../../utils/filterAndPagination';

export default {

	// Lists all blogs
	blogs: async (parent, args) => {
		let { data } = filterAndPagination({},args.limit,args.skip);
		return await Blog.find({}).populate('userId').where(data.where).limit(data.limit).skip(data.skip);
	},

	// Lists all blogs in Encrypted form
	blogsEncrypted: async (parent, args) => {
		let { data } = filterAndPagination({},args.limit,args.skip);
		let result = await Blog.find({}).where(data.where).limit(data.limit).skip(data.skip);
		result.forEach(element => {
			for (let key in element) {
				element[key] = CryptoJS.AES.encrypt(JSON.stringify(element[key]),'swapnil');
			}
		});
		return result;
	},

};