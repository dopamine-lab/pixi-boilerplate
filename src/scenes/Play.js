import { Sprite } from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';
import Wolf from '../animations/Wolf';

export default class Play extends Scene {
  async onCreated() {
    const wolfAnimation = new Wolf.stage;

    this.addChild(wolfAnimation);
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
