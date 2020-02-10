import Assets from '../core/AssetManager';
import Scene from './Scene';
import { Text } from 'pixi.js';

export default class Splash extends Scene {
  constructor() {
    super();

    this.loadingText = new Text('0%', {
      fontSize: 75,
      fill: 0xAA0044,
    });

    this.loadingText.x = this.width / 2;
    this.loadingText.y = this.height / 2;
    this.addChild(this.loadingText);
  }

  preload() {
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

  onResize(width, height) { // eslint-disable-line no-unused-vars
    this.loadingText.x = width / 2;
    this.loadingText.y = (height / 2) + 500;
  }

  onLoadProgress(val) {
    this.loadingText.text = `${val}%`;
  }
}
