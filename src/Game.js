import Assets from './core/AssetManager';
import Splash from './scenes/Splash';
import Play from './scenes/Play';
import { Container } from 'pixi.js';

/**
 * Main game container, add your content here
 *
 * @extends {PIXI.Container}
 */
export default class Game extends Container
{
  constructor()
  {
    super();

    this.currentScene = null;
  }

  async start()
  {
    await this.switchScene(Splash);
    await this.currentScene.finish;

    this.switchScene(Play);
  }

  switchScene(constructor)
  {
    this.removeChild(this.currentScene);
    this.currentScene = new constructor();
    this.addChild(this.currentScene);

    return this.currentScene.onCreated();
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) // eslint-disable-line no-unused-vars
  {
    if (this.currentScene === null) return;

    this.currentScene.onResize(width, height);
  }
}
