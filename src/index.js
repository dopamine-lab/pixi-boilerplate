import Application from './core/Application';
import * as PIXI from 'pixi.js';

// required for pixi dev tools to work
window.PIXI = PIXI;

document.addEventListener('DOMContentLoaded', new Application());
