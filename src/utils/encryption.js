const CryptoJS = require('crypto-js');

export const encryption = async (plainText) => {
	plainText.forEach(element => {
		Object.entries(element).forEach(entry => {
			let [key, value] = entry;
			element[key] = CryptoJS.AES.encrypt(JSON.stringify(value), 'swapnil').toString();
		});
	});
	return plainText;
};