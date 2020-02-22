const CryptoJS = require('crypto-js');

// const key = 'swapnil';
// const keyutf = CryptoJS.enc.Utf8.parse(key);
// const iv = CryptoJS.enc.Base64.parse(key);

// // Encrypt
// var ciphertext = CryptoJS.AES.encrypt('dsc@siesgst.ac.in', keyutf, { iv: iv }).toString();
// console.log('ciphertext', ciphertext);

// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, keyutf, { iv: iv });
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
// console.log('originalText', originalText);

const key = '55a51621a6648525';
const keyutf = CryptoJS.enc.Utf8.parse(key);
const iv = CryptoJS.enc.Base64.parse(key);
const enc = CryptoJS.AES.encrypt('dsc@siesgst.ac.in', keyutf, { iv: iv });
const encStr = enc.toString();

console.log('encStr', encStr);

const dec = CryptoJS.AES.decrypt(
	{ ciphertext: CryptoJS.enc.Base64.parse(encStr) },
	keyutf,
	{
		iv: iv
	});
const decStr = CryptoJS.enc.Utf8.stringify(dec);
console.log('decStr', decStr);