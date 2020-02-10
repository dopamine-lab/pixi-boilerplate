export default {
  view: {
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xfafafa,
    worldWidth: 1000,
    worldHeight: 500,
    resizeTo: window,
    centerOnResize: true,
  },
  game: {
    width: 1000,
    height: 500,
    drag: true,
    pinch: true,
    decelerate: true,
    wheel: true,
  },
  scenes: {
    Splash: {
      hideDelay: 2000,
    },
  },
  assets: {
    root: '/',
  },
};
