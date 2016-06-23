'use strict';

module.exports = function fetchDot(notation, obj) {
	return notation.split(/[\.\[]/g).reduce((lastObj, currentProp) => {
		try {
			// Arrays! Tricky tricky. Though not really.
			if(currentProp.indexOf(']') !== -1) {
				currentProp = parseInt(currentProp.match(/([0-9]+)\]/)[1]);
			}

			if(lastObj.hasOwnProperty(currentProp) || (Array.isArray(lastObj) && lastObj[currentProp])) {
				return lastObj[currentProp];
			}

			if (currentProp === '') {
				return lastObj;
			}
		} catch(ex) {
			return undefined;
		}
	}, obj);
};
