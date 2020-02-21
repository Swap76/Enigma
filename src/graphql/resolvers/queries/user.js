import User from '../../../models/User';
import {filterAndPagination} from '../../../utils/filterAndPagination';
import {encryption} from '../../../utils/encryption';

export default {
	// Lists all users
	users: async (parent, args) => {
		let { data } = filterAndPagination(args.where,args.limit,args.skip);
		return await User.find({}).where(data.where).limit(data.limit).skip(data.skip); 
	},
  
	// Provides info for settings page
	userById: async (parent, args) => {
		let {_id} = args;
		return await User.findOne({_id}); 
	},

	// Lists all users in Encrypted form
	usersEncrypted: async (parent, args) => {
		try {
			let { data } = filterAndPagination(args.where,args.limit,args.skip);
			let result = await User.find({}).where(data.where).limit(data.limit).skip(data.skip).lean();
			return encryption(result);
		} catch (error) {
			console.log(error);
		}
	},
  
};