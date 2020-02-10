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
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }
}
