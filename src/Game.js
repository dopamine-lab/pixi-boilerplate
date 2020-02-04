import logo from './assets/logo.png';
import logoBack from './assets/logo-back.png';
import { Loader, Sprite, Application, Container, utils, Texture } from 'pixi.js';
import { TimelineMax } from 'gsap/all';
import {center} from './utils';

/**
 * Main game container, add your content here
 *
 * @extends {PIXI.Container}
 */
export default class Game extends Container {
 
  constructor() {
  	super();

    // create a sprite with the logo asset as texture and add it to the stage
    const sprite = Sprite.from(logo);

    this.coin = sprite;
    this.addChild(sprite);
    sprite.anchor.set(0.5);
  }

  async spinCoin(loop = false)
  {
  	const spin = await (this._doSpin().then());

  	if(loop) await this.spinCoin(true);
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   * 
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    this.coin.x = this.width/2;
    this.coin.y = this.height/2;
  }

  _doSpin() {
  	const duration = 1.5;
    const sprite = this.coin;

    // create a simple coin flip animation
    // and swap the sprite texture(to the coin back side) midway
    return new TimelineMax()
      .to(sprite.skew, duration / 2, { x: 0, y: 1.568 })
      .call(() => sprite.texture = Texture.from(logoBack))
      .to(sprite.skew, duration / 2, { x: 0, y: 3 })
      .to(sprite.skew, duration / 2, { x: 0, y: 4.568 })
      .call(() => sprite.texture = Texture.from(logo))
      .to(sprite.skew, duration / 2, { x: 0, y: 6 });
  }
}