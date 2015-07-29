/* global it:true */
'use strict';
var assert = require('assert');
var PulseBeat = require('./');

it('should return next number', function () {
	var beats = [1, 2, 3, 4, 5];
	var pulse = new PulseBeat(beats.map(function (itr) {
		return function() {
			return assert.strictEqual(beats[itr - 1], itr);
		};
	}));

	pulse.beat();
	pulse.beat();
	pulse.beat();
	pulse.beat();
	pulse.beat();
	pulse.beat();
});

it('should return next number repeatly', function (done) {
	var beats = [1, 2, 3, 4, 5];
	var pulse = new PulseBeat(beats.map(function (itr) {
		return function() {
			return assert.strictEqual(beats[itr - 1], itr);
		};
	}));

	pulse.beat({timeout: 50, interval: true});

	setTimeout(done, 500);
});

it('should return next number once', function (done) {
	var beats = [1, 2, 3, 4, 5];
	var pulse = new PulseBeat(beats.map(function (itr) {
		return function() {
			return assert.strictEqual(beats[itr - 1], itr);
		};
	}));

	pulse.beat({timeout: 50});
	setTimeout(done, 100);
});
