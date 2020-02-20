import * as PIXI from 'pixi.js';
import 'pixi-animate';
import Application from './core/Application';

if (process.env.NODE_ENV === 'development') {
  // required for pixi dev tools to work
  window.PIXI = PIXI;
}

document.addEventListener('DOMContentLoaded', window.app = new Application());
