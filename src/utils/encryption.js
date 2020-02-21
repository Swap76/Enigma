const CryptoJS = require('crypto-js');

export const encryption = async (plainText) => {
	if (Array.isArray(plainText)) {
		plainText.forEach(element => {
			Object.entries(element).forEach(entry => {
				let [key, value] = entry;
				if (Array.isArray(element[key])) {
					element[key].forEach((element,index) => {
						element[key][index] = CryptoJS.AES.encrypt(JSON.stringify(element), 'swapnil').toString();
					});
				} else {
					element[key] = CryptoJS.AES.encrypt(JSON.stringify(value), 'swapnil').toString();
				}
			});
		});
		return plainText;
	}
	else {
		console.log('plainText');
		Object.entries(plainText).forEach(entry => {
			let [key, value] = entry;
			if (Array.isArray(plainText[key])) {
				plainText[key].forEach((element,index) => {
					plainText[key][index] = CryptoJS.AES.encrypt(JSON.stringify(element), 'swapnil').toString();
				});
			} else {
				plainText[key] = CryptoJS.AES.encrypt(JSON.stringify(value), 'swapnil').toString();
			}
		});
		return plainText;
	}
};