import Assets from '../core/AssetManager';
import Scene from './Scene';

export default class Splash extends Scene
{
  preload()
  {
    const images = {
      logo: Assets.images.logo,
      logoBack: Assets.images.logoBack,
    };
    const sounds = {
      coinFlip1: Assets.sounds.coinFlip1,
      coinFlip2: Assets.sounds.coinFlip2,
      coinFlip3: Assets.sounds.coinFlip3,
    };

    return super.preload({ images, sounds });
  }
}
