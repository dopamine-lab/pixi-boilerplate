import logo from './assets/logo.png';
import logoBack from './assets/logo-back.png';
import {Loader, Sprite, Texture, Renderer, Application, utils} from 'pixi.js';
import { TimelineMax } from 'gsap/all';
import config from './config';

class Game {
	constructor() {
		this.config = config;

		this.createApp();
		this.init();
	}

	async init() {
		await this.loadAssets();
		await this.prepareAssets();

		// implement your game logic here
		this.createScene();
	}

	createScene() {
		// create a sprite with the logo asset as texture and add it to the stage
		const sprite = Sprite.from(logo);

		this.app.stage.addChild(sprite);
		sprite.scale.set(0.1);
		sprite.anchor.set(0.5);

		// update our scene to fit the screen
		this.resizeScene();

		this.spinCoin(sprite);
	}

	spinCoin(sprite) {
		const duration = 1.5;

		// create a simple coin flip animation
		// and swap the sprite texture(to the coin back side) midway
		new TimelineMax()
		.to(sprite.skew, duration/2, {x: 0, y: 1.568 })
		.call(() => {
			this.app.renderer.backgroundColor = 0xfffff5;
			sprite.texture = this.textures[logoBack];
		})
		.to(sprite.skew, duration/2, {x: 0, y: 3 })
	}

	/**
	 * Create a Loader instance and add the game assets to the queue
	 * 
	 * @return {Promise} Resolved when the assets files are downloaded and parsed into texture objects
	 */
	loadAssets() {
		const loader = new Loader(this.config.root);

		return new Promise((resolve, reject)=>{
			loader.add(logo);
			loader.add(logoBack);

			loader.load(resolve);
		});
	}

	get textures() {
		return utils.TextureCache;
	}

	/**
	 * Prerender our loaded textures, so that they don't need to be uploaded to the GPU the first time we use them.
	 * Very helpful when we want to swap textures during an animation without the animation stuttering
	 * 
	 * @return {Promise} Resolved when all queued uploads have completed
	 */
	prepareAssets() {
		const prepare = this.app.renderer.plugins.prepare;

		return new Promise((resolve)=>{
			prepare.add( utils.TextureCache[logo])
			prepare.add( utils.TextureCache[logoBack])

			prepare.upload(resolve)
		});
	}

	/**
	 * Initialize our Application instance
	 * 
	 * @return {PIXI.Application}
	 */
	createApp() {
		const app = new Application(this.config.view);

		app.renderer.runners.resize.add({
			resize: this.resizeScene.bind(this)
		});
		document.body.appendChild(app.view);

		this.app = app;
	}

	/**
	 * Called after the browser window has been resized.
	 * Implement game specific resize logic here
	 * @param  {PIXI.Application} app The PIXI Appliaction instance
	 * @param  {Number} width         The updated viewport width
	 * @param  {Number} height        The updated viewport width
	 */
	resizeScene(width = this.config.view.width, height = this.config.view.height) {
		this.app.stage.children.forEach((child)=>{
			child.x = width/2;
			child.y = height/2;
		})
	}

}

document.addEventListener('DOMContentLoaded', new Game);
