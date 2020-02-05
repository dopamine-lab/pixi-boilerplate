import { Sprite, Application } from 'pixi.js';
import config from './config';
import Game from './Game';
import { Viewport } from 'pixi-viewport';
import { center } from './utils';
import Assets from './AssetManager';

export default class GameApplication extends Application
{
  constructor()
  {
    super(config.view);

    this.config = config;
    Assets.renderer = this.renderer;

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
    await this.createBackground();

    this.game = new Game();
    this.viewport.addChild(this.game);

    center(this.viewport, this.config.view);
    this.resizeScene();

    this.game.init();
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

    if (this.config.game.drag) viewport.drag();
    if (this.config.game.pinch) viewport.pinch();
    if (this.config.game.wheel) viewport.wheel();
    if (this.config.game.decelerate) viewport.decelerate();

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
    center(this.background, { width, height });
    this.game.onResize(width, height);
  }

  async createBackground()
  {
    const images = { banner: Assets.images.banner };

    await Assets.load({ images });
    await Assets.prepareImages(images);

    const sprite = Sprite.from('banner');

    this.stage.addChildAt(sprite);
    this.background = sprite;
  }
}

