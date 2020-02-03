import logo from './assets/logo.png';
import logoBack from './assets/logo-back.png';
import {Loader, Sprite, Texture, Renderer, Application, utils} from 'pixi.js';
import { TimelineMax } from 'gsap/all';

const config = {
	view: {
		width: window.innerWidth,
		height: window.innerHeight,
		backgroundColor: 0xfafafa,
		resizeTo: window,
	},
	assets: {
		root: '/',
	}
};

async function main() {
	const {stage, renderer} = createApp();

	await loadAssets();
	await prepareAssets({stage, renderer});

	const sprite = Sprite.from(logo);
	const duration = 1.5;

	sprite.scale.set(0.1);
	sprite.anchor.set(0.5)
	stage.addChild(sprite);

	resizeScene({stage});

	new TimelineMax()
	.to({}, 2, {})
	.to(sprite.skew, duration/2, {x: 0, y: 1.568 })
	.call(() => {
		renderer.backgroundColor = 0xfffff5;
		sprite.texture = utils.TextureCache[logoBack];
	})
	.to({}, 0.2, {})
	.to(sprite.skew, duration/2, {x: 0, y: 3 })
}

function resizeScene({stage}, width = config.view.width, height = config.view.height) {
	stage.children.forEach((child)=>{
		child.x = width/2;
		child.y = height/2;
	})
}

function loadAssets() {
	const loader = new Loader(config.root);

	return new Promise((resolve, reject)=>{
		loader.add(logo);
		loader.add(logoBack);

		loader.load(resolve);
	});
}

function prepareAssets({stage, renderer}) {
	return new Promise((resolve)=>{
		const prepare = renderer.plugins.prepare;

		prepare.add( utils.TextureCache[logo])
		prepare.add( utils.TextureCache[logoBack])

		prepare.upload(resolve)
	});
}

function createApp() {
	const app = new Application(config.view);

	app.renderer.runners.resize.add({
		resize: (...args)=>resizeScene(app, ...args)
	});
	document.body.appendChild(app.view);

	return app;
}

document.addEventListener('DOMContentLoaded', main);