'use strict';

function grabByDotNotation(notation, obj) {
	return notation.split(/[\.\[]/g).reduce((lastObj, currentProp) => {
		// Arrays! Tricky tricky. Though not really.
		if(currentProp.indexOf(']') !== -1) {
			currentProp = parseInt(currentProp.match(/([0-9]+)\]/)[1]);
		}

		if(lastObj.hasOwnProperty(currentProp) || Array.isArray(lastObj)) {
			return lastObj[currentProp];
		}
	}, obj);
}

module.exports = grabByDotNotation;
