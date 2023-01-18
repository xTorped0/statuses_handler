//// IMPORT
// import {defineProperty} from "../utils.js";


//// Element.PROTOTYPE

Element.prototype.elems = function(singles, collections) {
	let $temp = {elem: this};
	// [ singles ]
	if(singles) for(let key in singles) {
			let query = singles[key];
			$temp[key] = this.querySelector(query);
	}
	// [ collections ]
	if(collections) for(let key in collections) {
			let query = collections[key];
			$temp[key] = Array.from( this.querySelectorAll(query) );
	}
	//
	return $temp;
};

Element.prototype.setBooleanAttribute = function(name, val) {
	// if(Boolean(val) === false) this.removeAttribute(name);
	if(val === false) this.removeAttribute(name);
	else this.setAttribute(name, '');
	//
	// return ???
};

// Element.prototype.putAttribute = function(name, val) {
//     if(arguments.length === 1 || val === true) this.setAttribute(name, '');
//     else if(val === false) this.removeAttribute(name);
//     else this.setAttribute(name, val);
//     //
//     // return ???
// };

Element.prototype.consoleLogSize = function() {
	const {height, offsetHeight, outerHeight, innerHeight, clientHeight} = this;
	const {width, offsetWidth, outerWidth, innerWidth, clientWidth} = this;
	console.log('Size of', this,
			'\n height:',
			'\n\t height:', height,
			'\n\t offsetHeight:', offsetHeight,
			'\n\t outerHeight:', outerHeight,
			'\n\t innerHeight:', innerHeight,
			'\n\t clientHeight:', clientHeight,
			'\n\t style.height:', this.style.height,
			'\n\t style.minHeight:', this.style.minHeight,
			//
			'\n width:',
			'\n\t width:', width,
			'\n\t offsetWidth:', offsetWidth,
			'\n\t outerWidth:', outerWidth,
			'\n\t innerWidth:', innerWidth,
			'\n\t clientWidth:', clientWidth,
			'\n\t style.width:', this.style.width,
			'\n\t style.minWidth:', this.style.minWidth,
	);
}