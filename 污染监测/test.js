var CryptoJS = require('E:\\nodejs\\node_global\\node_modules\\crypto-js')
function decrypt(ciphertext) {
	var key = "9E@@34B19E@@34B1";
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var iv = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.AES.decrypt(ciphertext, keyHex, { iv: iv, padding: CryptoJS.pad.ZeroPadding });
   	return new Buffer(decrypted.toString(CryptoJS.enc.Utf8)).toString('base64');
}
