import logo from './assets/logo.png';
import logoBack from './assets/logo-back.png';
import {Loader, Sprite, Texture, Renderer, Application, utils} from 'pixi.js';
import { TimelineMax } from 'gsap/all';

class Game {
	constructor() {
		this.config = {
			view: {
				width: window.innerWidth,
				height: window.innerHeight,
				backgroundColor: 0xfafafa,
			},
			assets: {
				root: '/',
			}
		}

		this.createApp();
		this.init();
	}

	async init() {
		await this.loadAssets();
		await this.prepareAssets();

		this.createScene();
	}

	createScene() {
		const {stage, renderer} = this.app;
		const sprite = Sprite.from(logo);
		const duration = 1.5;

		sprite.scale.set(0.1);
		sprite.anchor.set(0.5)

		sprite.x = this.config.view.width/2;
		sprite.y = this.config.view.height/2;

		stage.addChild(sprite);

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

	loadAssets() {
		const loader = new Loader(this.config.root);

		return new Promise((resolve, reject)=>{
			loader.add(logo);
			loader.add(logoBack);

			loader.load(resolve);
		});
	}

	prepareAssets() {
		const prepare = this.app.renderer.plugins.prepare;

		return new Promise((resolve)=>{
			prepare.add( utils.TextureCache[logo])
			prepare.add( utils.TextureCache[logoBack])

			prepare.upload(resolve)
		});
	}

	createApp() {
		const app = new Application(this.config.view);

		document.body.appendChild(app.view);

		this.app = app;
	}
}

document.addEventListener('DOMContentLoaded', new Game);
