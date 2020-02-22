import Blog from '../../../models/Blog';
import {filterAndPagination} from '../../../utils/filterAndPagination';
import {encryption} from '../../../utils/encryption';

export default {

	// Lists all blogs
	blogs: async (parent, args) => {
		let { data } = filterAndPagination({},args.limit,args.skip);
		return await Blog.find({}).populate('userId').where(data.where).limit(data.limit).skip(data.skip);
	},

	// Lists all blogs in Encrypted form
	blogsEncrypted: async (parent, args) => {
		try {
			let { data } = filterAndPagination({},args.limit,args.skip);
			let result = await Blog.find({}).where(data.where).limit(data.limit).skip(data.skip).lean();
			result.forEach((element,index) => {
				result[index] = encryption(element);
			});
			return result;
		} catch (error) {
			console.log(error);
		}
	},

};