import Assets from '../core/AssetManager';
import Scene from './Scene';
import { Text } from 'pixi.js';
import config from '../config';
import {animate} from 'pixi.js';
import Wolf from '../animations/Wolf';

export default class Splash extends Scene {
  constructor() {
    super();

    this.loadingText = new Text('0%', {
      fontSize: 75,
      fill: 0xffc900,
    });

    this.config = config.scenes.Splash;

    this.loadingText.anchor.set(0.5);
    this.loadingText.x = this.width / 2;
    this.loadingText.y = this.height / 2;
    this.addChild(this.loadingText);
  }

  get finish() {
    return new Promise((res)=>setTimeout(res, this.config.hideDelay))
  }

  preload() {
    // load the Wolf animation
    return new Promise((resolve)=>animate.load(Wolf.stage, resolve, 'src/'));

    // const images = {
    //   tile11Cap: Assets.images.tile11Cap,
    //   tile11EyebrowR: Assets.images.tile11EyebrowR,
    //   tile11EyebrowL: Assets.images.tile11EyebrowL,
    //   tile11EyeL: Assets.images.tile11EyeL,
    //   tile11Nose: Assets.images.tile11Nose,
    //   tile11EyeR: Assets.images.tile11EyeR,
    //   tile11Mouth: Assets.images.tile11Mouth,
    //   tile11Head: Assets.images.tile11Head,
    //   tile11HeadShadow: Assets.images.tile11HeadShadow,
    //   tile11HowlingEpaulet: Assets.images.tile11HowlingEpaulet,
    //   tile11HowlingMouth: Assets.images.tile11HowlingMouth,
    //   tile11HowlingEyebrow: Assets.images.tile11HowlingEyebrow,
    //   tile11HowlingHead: Assets.images.tile11HowlingHead,
    //   tile11HowlingPaw: Assets.images.tile11HowlingPaw,
    //   tile11HowlingFeathers: Assets.images.tile11HowlingFeathers,
    //   tile11FrameFront: Assets.images.tile11FrameFront,
    //   tile11BodyNew: Assets.images.tile11BodyNew,
    //   winFrameLight: Assets.images.winFrameLight,
    //   tile11FrameBack: Assets.images.tile11FrameBack,
    // };
    // const sounds = {
      
    // };

    // return super.preload({ images, sounds });
  }

  onResize(width, height) { // eslint-disable-line no-unused-vars
    this.loadingText.x = width / 2;
    this.loadingText.y = (height / 2) + 500;
  }

  onLoadProgress(val) {
    this.loadingText.text = `${val}%`;
  }
}
