import Assets from '../core/AssetManager';
import { Container } from 'pixi.js';

export default class Scene extends Container
{
  /* eslint-disable */
  constructor()
  {
    super();
  }

  onResize() {

  }

  async preload({images, sounds} = {})
  {
    // note that we don't use Promise.all here
    // since images have to be loaded over the network first
    // and then uploaded to the gpu
    return Assets.load({ images, sounds })
      .then(() => Assets.prepareImages(images));
  }

  onCreated()
  {

    return this.preload();
  }
  /* eslint-enable */

  get finish()
  {
    return Promise.resolve();
  }
}

