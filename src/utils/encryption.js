const CryptoJS = require('crypto-js');

const key = 'swapnil';
const keyutf = CryptoJS.enc.Utf8.parse(key);
const iv = CryptoJS.enc.Base64.parse(key);

export const encryption = async (plainText) => {
	if (Array.isArray(plainText)) {
		plainText.forEach(element => {
			Object.entries(element).forEach(entry => {
				let [key, value] = entry;
				if (Array.isArray(element[key])) {
					element[key].forEach((element,index) => {
						element[key][index] = CryptoJS.AES.encrypt(JSON.stringify(element), keyutf, { iv: iv }).toString();
					});
				} else {
					element[key] = CryptoJS.AES.encrypt(JSON.stringify(value), keyutf, { iv: iv }).toString();
				}
			});
		});
		return plainText;
	}
	else {
		Object.entries(plainText).forEach(entry => {
			let [key, value] = entry;
			if (Array.isArray(plainText[key])) {
				plainText[key].forEach((element,index) => {
					plainText[key][index] = CryptoJS.AES.encrypt(JSON.stringify(element), keyutf, { iv: iv }).toString();
				});
			} else {
				plainText[key] = CryptoJS.AES.encrypt(JSON.stringify(value), keyutf, { iv: iv }).toString();
			}
		});
		return plainText;
	}
};