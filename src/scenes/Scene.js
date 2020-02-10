import Assets from '../core/AssetManager';
import { Container } from 'pixi.js';

/**
 * Scene abstract class, defines common scene methods
 * and implements assets preload method.
 *
 * @abstract
 */
export default class Scene extends Container {
  /* eslint-disable */
  constructor()
  {
    super();
  }

  /**
   * Hook called on the current active scene, when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {

  }

  /**
   * Define the assets used by this scene, so they can be loaded
   * and used by all subsequent scenes
   */
  async preload({images, sounds} = {})
  {
    // note that we don't use Promise.all here
    // since images have to be loaded over the network first
    // and then uploaded to the gpu
    return Assets.load({ images, sounds }, this.onLoadProgress.bind(this))
      .then(() => Assets.prepareImages(images));
  }

  /**
   * Called when an individual asset is loaded and load progress is made
   * 
   * @param  {Number} progress Current progress value as a number
   */
  onLoadProgress(progress) {

  }

  /**
   * Called by the game when this scene's assets have been loaded that the content animations
   * can be started from here
   * 
   */
  onCreated()
  {

    return this.preload();
  }
  /* eslint-enable */

  get finish() {
    return Promise.resolve();
  }
}

