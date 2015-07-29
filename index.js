'use strict';

var objectAssign = require('object-assign');
var Iterarry = require('iterarry');

function PulseBeat(beats) {
	this._set = new Iterarry();

	if (beats instanceof Array) {
		this._set = this._set.concat(beats);
	} else {
		this._set.push(beats);
	}

	this._setItr = this._set.iterator();
}

PulseBeat.prototype.beat = function (opts) {
	opts = objectAssign({
		timeout: null,
		interval: false,
	}, opts);

	var itr = this._setItr;
	
	if (opts.timeout) {
		this.stop();
		this._timer = (opts.interval ? setInterval : setTimeout)(function() {
			itr.next()();
		}, opts.timeout);
	} else {
		itr.next()();
	}
};

PulseBeat.prototype.stop = function () {
	if (this._timer) {
		clearTimeout(this._timer);
	}
};

module.exports = PulseBeat;
