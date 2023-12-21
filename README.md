# LogJS

This is a *very* simple logging library. There are much better options out there which include a lot more features and options. I just wrote this to use with my own small personal projects which don't need all of those features.

## Installation
```bash
npm install --save @samr28/log
```

## Log levels
0 = silent
1 = errors
2 = warn
3 = info
4 = trace

When setting log level, all lower numbers will be included. So if you set log level = 2 then you will see errors and warnings but not info or trace.

The default log level is 0 to allow this library to be used in other packages without being noisy by default.

If you choose to use `l.log()`, that will always be printed regardless of log level set. This is intended to be used for quick debugging when you don't want to have to go in and mess with settings to see some output.


## Basic usage
```js
const l = include("@samr28/log");

l.log("This will always be printed regardless of what log level is set");
l.error("This will not be printed");

l.setLevel(2);
l.error("This will print");
l.warn("This will print");
l.info("This will NOT print");
```

## Options
Timestamp defaults to ON
Color defaults to ON
```js
const l = include("@samr28/log");
l.showTimestamp(false);         // Turns off timestamp
l.useColor(false);              // Turn off color

l.info("This will be a very boring message :(");
```