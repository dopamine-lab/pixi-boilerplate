import { Sprite, Texture } from 'pixi.js';
import { TimelineMax } from 'gsap/all';
import Assets from '../core/AssetManager';
import Scene from './Scene';

export default class Play extends Scene {
  async onCreated() {
    // create a sprite with the logo asset as texture and add it to the stage
    const sprite = Sprite.from('logo');

    this.coin = sprite;
    this.addChild(sprite);
    sprite.anchor.set(0.5);

    this.spinCoin(true);
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars
    if (this.coin) {
      this.coin.x = this.width / 2;
      this.coin.y = this.height / 2;
    }
  }

  async spinCoin(loop = false) {
    await (this._doSpin().then());

    if (loop) await this.spinCoin(true);
  }

  _doSpin() {
    const duration = 1.5;
    const sprite = this.coin;

    // create a simple coin flip animation
    // and swap the sprite texture(to the coin back side) midway
    return new TimelineMax()
      .call(() => Assets.sounds.coinFlip1.play())
      .to(sprite.skew, duration / 2, { x: 0, y: 1.568 })
      .call(() => sprite.texture = Texture.from('logoBack'))
      .call(() => Assets.sounds.coinFlip2.play())
      .to(sprite.skew, duration / 2, { x: 0, y: 3 })
      .to(sprite.skew, duration / 2, { x: 0, y: 4.568 })
      .call(() => sprite.texture = Texture.from('logo'))
      .call(() => Assets.sounds.coinFlip3.play())
      .to(sprite.skew, duration / 2, { x: 0, y: 6 });
  }
}
