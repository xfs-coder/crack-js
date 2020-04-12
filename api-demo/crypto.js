const CryptoJS  = require('crypto-js')

function hex_md5(text) {
    return CryptoJS.MD5(text).toString()
}

function base64_encode(text){
    var wordArray = CryptoJS.enc.Utf8.parse(text)
    return  CryptoJS.enc.Base64.stringify(wordArray)
}

module.exports = {
    md5: hex_md5,
    encode: base64_encode
}


