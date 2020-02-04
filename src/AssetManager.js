import { Howl } from 'howler';
import { Loader, utils, Texture } from 'pixi.js';
import config from './config';

import logo from './assets/logo.png';
import logoBack from './assets/logo-back.png';
import banner from './assets/banner.jpg';

import coinFlip1 from './assets/coinFlip1.wav';
import coinFlip2 from './assets/coinFlip2.wav';
import coinFlip3 from './assets/coinFlip3.wav';

class AssetManager
{
  constructor()
  {
    this._sounds = [];
  }

  load()
  {
    return Promise.all([
      this.loadImages(),
      this.loadSounds(),
    ]);
  }

  /**
     * Create a Loader instance and add the game assets to the queue
     *
     * @return {Promise} Resolved when the assets files are downloaded and parsed into texture objects
     */
  loadImages()
  {
    const loader = new Loader(config.root);

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
  prepareImages(renderer)
  {
    const prepare = renderer.plugins.prepare;

    prepare.add(Texture.from(logo));
    prepare.add(Texture.from(logoBack));
    prepare.add(Texture.from(banner));

    return new Promise(prepare.upload.bind(prepare));
  }

  get images()
  {
    return utils.TextureCache;
  }

  loadSounds()
  {
    return Promise.all([
      this._loadSound(coinFlip1),
      this._loadSound(coinFlip2),
      this._loadSound(coinFlip3),
    ]);
  }

  get sounds()
  {
    return this._sounds;
  }

  _loadSound(id)
  {
    const sound = new Howl({ src: [id] });

    this._sounds[id] = sound;

    return new Promise((res) => sound.once('load', res));
  }
}

export default new AssetManager();
