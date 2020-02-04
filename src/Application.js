import logo from './assets/logo.png';
import logoBack from './assets/logo-back.png';
import banner from './assets/banner.jpg';
import { Loader, Sprite, Application, Texture } from 'pixi.js';
import config from './config';
import Game from './Game';
import {Viewport} from 'pixi-viewport';
import {center} from './utils';

export default class GameApplication extends Application
{
  constructor()
  {
    super(config.view);

    this.config = config;

    this.setupViewport();
    this.initGame();
  }

  /**
   * Game main entry point. Loads and prerenders assets.
   * Creates the main game container.
   * 
   */
  async initGame()
  {
    await this.loadAssets();
    await this.prepareAssets();

    this.createBackground();

    this.game = new Game;
    this.viewport.addChild(this.game);

    center(this.viewport, this.config.view);
    this.resizeScene();
    this.game.spinCoin(true);
  }

  /**
     * Create a Loader instance and add the game assets to the queue
     *
     * @return {Promise} Resolved when the assets files are downloaded and parsed into texture objects
     */
  loadAssets()
  {
    const loader = new Loader(this.config.root);

    loader.add(logo);
    loader.add(logoBack);
    loader.add(banner);

    return new Promise(loader.load.bind(loader));
  }

  /**
     * Prerender our loaded textures, so that they don't need to be uploaded to the GPU the first time we use them.
     * Very helpful when we want to swap textures during an animation without the animation stuttering
     *
     * @return {Promise} Resolved when all queued uploads have completed
     */
  prepareAssets()
  {
    const prepare = this.renderer.plugins.prepare;

    prepare.add(Texture.from(logo));
    prepare.add(Texture.from(logoBack));
    prepare.add(Texture.from(banner));

    return new Promise(prepare.upload.bind(prepare));
  }

  /**
     * Initialize the game world viewport.
     *
     * @return {PIXI.Application}
     */
  setupViewport()
  {
    const viewport = new Viewport({
      screenWidth: this.config.view.width,
      screenHeight: this.config.view.height,
      worldWidth: this.config.game.width,
      worldHeight: this.config.game.height,
      // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
      interaction: this.renderer.plugins.interaction,
    });

    this.renderer.runners.resize.add({
      resize: this.resizeScene.bind(this),
    });
    document.body.appendChild(this.view);

    this.stage.addChild(viewport);

    if(this.config.game.drag) viewport.drag();
    if(this.config.game.pinch) viewport.pinch();
    if(this.config.game.wheel) viewport.wheel();
    if(this.config.game.decelerate) viewport.decelerate();

    this.viewport = viewport;
  }

  /**
     * Called after the browser window has been resized.
     * Implement game specific resize logic here
     * @param  {PIXI.Application} app The PIXI Appliaction instance
     * @param  {Number} width         The updated viewport width
     * @param  {Number} height        The updated viewport width
     */
  resizeScene(width = this.config.view.width, height = this.config.view.height)
  {
    center(this.background, {width, height});
    this.game.onResize(width, height);
  }

  createBackground() {
    const sprite = Sprite.from(banner);

    this.stage.addChildAt(sprite);
    this.background = sprite;
  }

}

