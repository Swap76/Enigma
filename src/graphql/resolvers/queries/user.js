const CryptoJS = require('crypto-js');
import User from '../../../models/User';
import {filterAndPagination} from '../../../utils/filterAndPagination';

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
		let { data } = filterAndPagination(args.where,args.limit,args.skip);
		let result = await User.find({}).where(data.where).limit(data.limit).skip(data.skip).lean();
		try {
			result.forEach(element => {
				Object.entries(element).forEach(entry => {
					let [key, value] = entry;
					element[key] = CryptoJS.AES.encrypt(JSON.stringify(value), 'swapnil').toString();
				});
			});
		} catch (error) {
			console.log(error);
		}
		return result;
	},
  
};