# pulsebeat

> Beat it, execute it. Simple looping job runner


## Install

```
$ npm install --save pulsebeat
```


## Usage

```js
var pulse = new PulseBeat([1, 2, 3, 4, 5].map(function (itr) {
	return function() {
		return console.log(itr);
	};
}));

pulse.beat();
//=> 1

pulse.beat();

//=> 2
```


## API

### PulseBeat(arrayOfFunction)

#### arrayOfFunction

*Required*  
Type: `Array`

All of elements must be function to make a beat

### PulseBeat.beat([options])

Start the beat

#### [options]
```
{
	timeout: `millsec for next beat`, If it is not, beat will be executed at once
	interval: Beat will be executed continuously by interval timer
}
```

### PublsBear.stop()

Stop the beat

## License

MIT © [ragingwind](http://ragingwind.me)
