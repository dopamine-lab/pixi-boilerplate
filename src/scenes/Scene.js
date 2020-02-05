import Assets from '../AssetManager';
window.as = Assets;

export default class Scene
{
  /* eslint-disable */
  constructor()
  {

  }

  async preloadAssets()
  {
    await Assets.load();
    await Assets.prepareImages(Assets.images, this.renderer);
  }

  onCreated()
  {

  }
  /* eslint-enable */
}

