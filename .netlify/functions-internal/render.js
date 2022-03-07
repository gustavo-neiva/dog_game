const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["arrow-left.svg","arrow-right.svg","correct.json","dog-correct.json","dog-loading.json","dog-walking.json","dogs.jpeg","favicon.png","icon.svg","wrong.json"]),
	_: {
		mime: {".svg":"image/svg+xml",".json":"application/json",".jpeg":"image/jpeg",".png":"image/png"},
		entry: {"file":"start-8179753c.js","js":["start-8179753c.js","chunks/vendor-7f7f6d25.js","chunks/preload-helper-e4860ae8.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "about",
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "play",
				pattern: /^\/play\/?$/,
				params: null,
				path: "/play",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		]
	}
});
