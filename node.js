exports.hexToString = function(hex,appended0x){
	if (appended0x !== false){
		hex = hex.substring(2);
	}
	return Buffer.from(hex,"hex").toString("utf8");
}

exports.hexToBuffer = function(hex,appended0x){
	if (appended0x !== false){
		hex = hex.substring(2);
	}
	return Buffer.from(hex,"hex");
}

exports.bufferToString = function(buff){
	if (!Buffer.isBuffer(buff)){ // In case we're past a Uint8Array
		buff = Buffer.from(buff);
	}
	return buff.toString("utf8");
}

exports.bufferToHex = function(buff,append0x){
	if (!Buffer.isBuffer(buff)){ // In case we're past a Uint8Array
		buff = Buffer.from(buff);
	}
	return (append0x === false ? "":"0x")+buff.toString("hex");
}

exports.stringToBuffer = function(str){
	return Buffer.from(str,"utf8");
}

exports.stringToHex = function(str,append0x){
	return (append0x === false ? "":"0x")+Buffer.from(str,"utf8").toString("hex");
}

exports.alloc = Buffer.alloc;

exports.allocUnsafe = Buffer.allocUnsafe;

exports.allocUnsafeSlow = Buffer.allocUnsafeSlow;

exports.newBuffer = exports.alloc;

exports.newBufferUnsafe = exports.allocUnsafe;

exports.concat = Buffer.concat;

exports.from = Buffer.from;

exports.allocRandom = require("crypto").randomBytes;