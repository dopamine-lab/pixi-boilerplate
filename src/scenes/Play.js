import { Sprite } from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';

export default class Play extends Scene {
  async onCreated() {
    // create a sprite with the gamepad asset as texture and add it to the stage
    const sprite = Sprite.from('gamepad');

    this.addChild(sprite);
    sprite.anchor.set(0.5);

    gsap.to(sprite.scale, { x: 1.1, y: 1.1, duration: 1, repeat: -1, yoyo: true, ease: "power2.out" });
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
