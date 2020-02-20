(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.tile11Cap = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11Cap"));
        this.addChild(instance1);
    });

    lib.marker = Container.extend(function () {
        Container.call(this);

    });

    lib.tile11EyebrowR = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11EyebrowR"));
        this.addChild(instance1);
    });

    lib.tile11EyebrowL = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11EyebrowL"));
        this.addChild(instance1);
    });

    lib.tile11EyeL = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11EyeL"));
        this.addChild(instance1);
    });

    lib.tile11Nose = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11Nose"));
        this.addChild(instance1);
    });

    lib.tile11EyeR = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11EyeR"));
        this.addChild(instance1);
    });

    lib.tile11Mouth = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11Mouth"));
        this.addChild(instance1);
    });

    lib.tile11Head = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11Head"));
        this.addChild(instance1);
    });

    lib.headShadow = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11HeadShadow"));
        this.addChild(instance1);
    });

    lib.tile11HowlingEpaulet = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11HowlingEpaulet"));
        this.addChild(instance1);
    });

    lib.tile11HowlingMouth = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11HowlingMouth"));
        this.addChild(instance1);
    });

    lib.tile11HowlingEyebrow = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11HowlingEyebrow"));
        this.addChild(instance1);
    });

    lib.tile11HowlingHead = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11HowlingHead"));
        this.addChild(instance1);
    });

    lib.tile11HowlingPaw = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11HowlingPaw"));
        this.addChild(instance1);
    });

    lib.tile11HowlingFeathers = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11HowlingFeathers"));
        this.addChild(instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 169, loop: false });
        var instance1 = new Sprite(fromFrame("tile11FrameFront"))
            .setTransform(-107, -91.5);
        this.addTimedChild(instance1);
    });

    lib.tile11Body = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11BodyNew"));
        this.addChild(instance1);
    });

    lib.winFrameLight = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("winFrameLight"));
        this.addChild(instance1);
    });

    lib.frameBack = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile11FrameBack"));
        this.addChild(instance1);
    });

    lib.wolfTile = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 169,
            labels: {
                show: 0,
                howl: 44,
                hide: 104
            }
        });
        var instance16 = new lib.frameBack();
        var instance17 = new lib.winFrameLight();
        var instance31 = new lib.winFrameLight();
        var instance15 = new lib.tile11Body();
        var instance14 = new Graphic1(MovieClip.SYNCHED);
        var instance13 = new lib.tile11HowlingEpaulet();
        var instance22 = new lib.tile11HowlingFeathers();
        var instance21 = new lib.tile11HowlingEpaulet();
        var instance12 = new lib.tile11HowlingPaw();
        var instance11 = new lib.tile11HowlingPaw();
        var instance10 = new lib.tile11HowlingEpaulet();
        var instance9 = new lib.headShadow();
        var instance8 = new lib.tile11Head();
        var instance7 = new lib.tile11Mouth();
        var instance6 = new lib.tile11EyeR();
        var instance5 = new lib.tile11Nose();
        var instance4 = new lib.tile11EyeL();
        var instance3 = new lib.tile11EyebrowL();
        var instance2 = new lib.tile11EyebrowR();
        var instance20 = new lib.tile11HowlingHead();
        var instance19 = new lib.tile11HowlingEyebrow();
        var instance18 = new lib.tile11HowlingMouth();
        var instance30 = new lib.tile11HowlingEpaulet();
        var instance29 = new lib.tile11Head();
        var instance28 = new lib.tile11Mouth();
        var instance27 = new lib.tile11EyeR();
        var instance26 = new lib.tile11Nose();
        var instance25 = new lib.tile11EyeL();
        var instance24 = new lib.tile11EyebrowL();
        var instance23 = new lib.tile11EyebrowR();
        var instance1 = new lib.marker();
        this[instance1.name = "bombCreationMarker"] = instance1;
        var instance32 = new lib.tile11Cap();
        this.addTimedChild(instance16, 0, 147, {
                "0": {
                    x: 1.6,
                    y: 6.15,
                    sx: 1.054,
                    sy: 1.074
                },
                "15": {
                    x: 1.944,
                    y: 6.518,
                    sx: 1.05,
                    sy: 1.068
                },
                "16": {
                    x: 2.287,
                    y: 6.885,
                    sx: 1.046,
                    sy: 1.062
                },
                "17": {
                    x: 2.631,
                    y: 7.253,
                    sx: 1.042,
                    sy: 1.057
                },
                "18": {
                    x: 2.925,
                    y: 7.62,
                    sx: 1.037,
                    sy: 1.051
                },
                "19": {
                    x: 3.268,
                    y: 8.038,
                    sx: 1.033,
                    sy: 1.045
                },
                "20": {
                    x: 3.562,
                    y: 8.406,
                    sx: 1.029,
                    sy: 1.04
                },
                "21": {
                    x: 3.906,
                    y: 8.773,
                    sx: 1.025,
                    sy: 1.034
                },
                "22": {
                    x: 4.249,
                    y: 9.141,
                    sx: 1.021,
                    sy: 1.028
                },
                "23": {
                    x: 4.593,
                    y: 9.508,
                    sx: 1.017,
                    sy: 1.023
                },
                "24": {
                    x: 4.887,
                    y: 9.876,
                    sx: 1.012,
                    sy: 1.017
                },
                "25": {
                    x: 5.231,
                    y: 10.243,
                    sx: 1.008,
                    sy: 1.011
                },
                "26": {
                    x: 5.574,
                    y: 10.611,
                    sx: 1.004,
                    sy: 1.006
                },
                "27": {
                    x: 6,
                    y: 11,
                    sx: 1,
                    sy: 1
                },
                "44": {
                    y: 10.844,
                    sy: 1.004
                },
                "45": {
                    y: 10.736,
                    sy: 1.008
                },
                "46": {
                    y: 10.625,
                    sy: 1.011
                },
                "47": {
                    y: 10.512,
                    sy: 1.015
                },
                "48": {
                    y: 10.398,
                    sy: 1.018
                },
                "49": {
                    y: 10.23,
                    sy: 1.021
                },
                "50": {
                    y: 10.161,
                    sy: 1.024
                },
                "51": {
                    y: 10.039,
                    sy: 1.026
                },
                "52": {
                    y: 9.965,
                    sy: 1.029
                },
                "53": {
                    y: 9.889,
                    sy: 1.031
                },
                "54": {
                    y: 9.81,
                    sy: 1.033
                },
                "55": {
                    y: 9.729,
                    sy: 1.034
                },
                "56": {
                    y: 9.696,
                    sy: 1.036
                },
                "57": {
                    y: 9.661,
                    sy: 1.037
                },
                "58": {
                    y: 9.623,
                    sy: 1.038
                },
                "59": {
                    y: 9.583,
                    sy: 1.039
                },
                "60": {
                    y: 9.541,
                    sy: 1.04
                },
                "61": {
                    y: 9.547,
                    sy: 1.041
                },
                "62": {
                    y: 9.5
                },
                "64": {
                    y: 9.541,
                    sy: 1.04
                },
                "65": {
                    y: 9.631,
                    sy: 1.039
                },
                "66": {
                    y: 9.622,
                    sy: 1.038
                },
                "67": {
                    y: 9.712,
                    sy: 1.037
                },
                "68": {
                    y: 9.753,
                    sy: 1.036
                },
                "69": {
                    y: 9.744,
                    sy: 1.035
                },
                "70": {
                    y: 9.834,
                    sy: 1.034
                },
                "71": {
                    y: 9.825,
                    sy: 1.033
                },
                "72": {
                    y: 9.916,
                    sy: 1.032
                },
                "73": {
                    y: 9.906,
                    sy: 1.031
                },
                "74": {
                    y: 9.947,
                    sy: 1.03
                },
                "75": {
                    y: 9.988,
                    sy: 1.029
                },
                "76": {
                    y: 10.028,
                    sy: 1.028
                },
                "77": {
                    y: 10.069,
                    sy: 1.027
                },
                "78": {
                    y: 10.109,
                    sy: 1.026
                },
                "79": {
                    y: 10.15,
                    sy: 1.025
                },
                "80": {
                    y: 10.191,
                    sy: 1.024
                },
                "81": {
                    y: 10.231,
                    sy: 1.023
                },
                "82": {
                    y: 10.272,
                    sy: 1.022
                },
                "83": {
                    y: 10.313,
                    sy: 1.021
                },
                "84": {
                    y: 10.303,
                    sy: 1.019
                },
                "85": {
                    y: 10.394,
                    sy: 1.018
                },
                "86": {
                    y: 10.384,
                    sy: 1.017
                },
                "87": {
                    y: 10.475,
                    sy: 1.016
                },
                "88": {
                    y: 10.466,
                    sy: 1.015
                },
                "89": {
                    y: 10.506,
                    sy: 1.014
                },
                "90": {
                    y: 10.547,
                    sy: 1.013
                },
                "91": {
                    y: 10.588,
                    sy: 1.012
                },
                "92": {
                    y: 10.678,
                    sy: 1.011
                },
                "93": {
                    y: 10.669,
                    sy: 1.01
                },
                "94": {
                    y: 10.71,
                    sy: 1.009
                },
                "95": {
                    y: 10.75,
                    sy: 1.008
                },
                "96": {
                    y: 10.791,
                    sy: 1.007
                },
                "97": {
                    y: 10.832,
                    sy: 1.006
                },
                "98": {
                    y: 10.872,
                    sy: 1.005
                },
                "99": {
                    y: 10.863,
                    sy: 1.004
                },
                "100": {
                    y: 10.954,
                    sy: 1.003
                },
                "101": {
                    y: 10.944,
                    sy: 1.002
                },
                "102": {
                    y: 11.035,
                    sy: 1.001
                },
                "103": {
                    y: 11,
                    sy: 1
                }
            })
            .addTimedChild(instance17, 1, 39, {
                "1": {
                    x: 4.4,
                    y: 8.25,
                    sx: 0.544,
                    sy: 0.544,
                    r: 0,
                    a: 0
                },
                "2": {
                    x: -5.237,
                    y: -16.044,
                    sx: 0.666,
                    sy: 0.666,
                    r: 0.08,
                    a: 0.19
                },
                "3": {
                    x: -10.928,
                    y: -39.518,
                    sx: 0.776,
                    sy: 0.776,
                    r: 0.152,
                    a: 0.36
                },
                "4": {
                    x: -13.582,
                    y: -61.214,
                    sx: 0.873,
                    sy: 0.873,
                    r: 0.215,
                    a: 0.51
                },
                "5": {
                    x: -13.816,
                    y: -80.658,
                    sx: 0.956,
                    sy: 0.956,
                    r: 0.27,
                    a: 0.64
                },
                "6": {
                    x: -12.605,
                    y: -97.509,
                    sx: 1.027,
                    sy: 1.027,
                    r: 0.317,
                    a: 0.75
                },
                "7": {
                    x: -10.533,
                    y: -111.368,
                    sx: 1.085,
                    sy: 1.085,
                    r: 0.355,
                    a: 0.84
                },
                "8": {
                    x: -8.349,
                    y: -122.281,
                    sx: 1.13,
                    sy: 1.13,
                    r: 0.384,
                    a: 0.91
                },
                "9": {
                    x: -6.41,
                    y: -130.04,
                    sx: 1.162,
                    sy: 1.162,
                    r: 0.405,
                    a: 0.96
                },
                "10": {
                    x: -5.088,
                    y: -134.739,
                    sx: 1.182,
                    sy: 1.182,
                    r: 0.418,
                    a: 0.99
                },
                "11": {
                    x: -4.6,
                    y: -136.35,
                    sx: 1.188,
                    sy: 1.188,
                    r: 0.422,
                    a: 1
                },
                "12": {
                    x: 6.623,
                    y: -136.944,
                    sx: 1.172,
                    sy: 1.172,
                    r: 0.468
                },
                "13": {
                    x: 17.625,
                    y: -137.164,
                    sx: 1.157,
                    sy: 1.157,
                    r: 0.513
                },
                "14": {
                    x: 28.447,
                    y: -136.777,
                    sx: 1.141,
                    sy: 1.141,
                    r: 0.558
                },
                "15": {
                    x: 39.23,
                    y: -135.882,
                    sx: 1.125,
                    sy: 1.125,
                    r: 0.604
                },
                "16": {
                    x: 49.708,
                    y: -134.5,
                    sx: 1.109,
                    sy: 1.109,
                    r: 0.649
                },
                "17": {
                    x: 59.921,
                    y: -132.595,
                    sx: 1.093,
                    sy: 1.093,
                    r: 0.695
                },
                "18": {
                    x: 70.014,
                    y: -130.274,
                    sx: 1.077,
                    sy: 1.077,
                    r: 0.74
                },
                "19": {
                    x: 79.7,
                    y: -127.5,
                    sx: 1.061,
                    sy: 1.061,
                    r: 0.785
                },
                "20": {
                    x: 80.15,
                    y: -89.85,
                    sx: 0.873,
                    sy: 0.873
                },
                "21": {
                    x: 80.3,
                    y: -78.686,
                    sx: 0.817,
                    sy: 0.817,
                    a: 0.9
                },
                "22": {
                    x: 80.38,
                    y: -68.23,
                    sx: 0.765,
                    sy: 0.765,
                    a: 0.8
                },
                "23": {
                    x: 80.429,
                    y: -58.433,
                    sx: 0.715,
                    sy: 0.715,
                    a: 0.71
                },
                "24": {
                    x: 80.557,
                    y: -49.095,
                    sx: 0.669,
                    sy: 0.669,
                    a: 0.63
                },
                "25": {
                    x: 80.61,
                    y: -40.41,
                    sx: 0.625,
                    sy: 0.625,
                    a: 0.54
                },
                "26": {
                    x: 80.734,
                    y: -32.382,
                    sx: 0.585,
                    sy: 0.585,
                    a: 0.47
                },
                "27": {
                    x: 80.78,
                    y: -24.865,
                    sx: 0.547,
                    sy: 0.547,
                    a: 0.4
                },
                "28": {
                    x: 80.853,
                    y: -17.953,
                    sx: 0.512,
                    sy: 0.512,
                    a: 0.34
                },
                "29": {
                    x: 80.951,
                    y: -11.65,
                    sx: 0.481,
                    sy: 0.481,
                    a: 0.28
                },
                "30": {
                    x: 80.974,
                    y: -6.002,
                    sx: 0.452,
                    sy: 0.452,
                    a: 0.23
                },
                "31": {
                    x: 81.015,
                    y: -0.86,
                    sx: 0.427,
                    sy: 0.427,
                    a: 0.18
                },
                "32": {
                    x: 81.086,
                    y: 3.621,
                    sx: 0.404,
                    sy: 0.404,
                    a: 0.14
                },
                "33": {
                    x: 81.078,
                    y: 7.547,
                    sx: 0.384,
                    sy: 0.384,
                    a: 0.1
                },
                "34": {
                    x: 81.146,
                    y: 10.917,
                    sx: 0.367,
                    sy: 0.367,
                    a: 0.07
                },
                "35": {
                    x: 81.189,
                    y: 13.627,
                    sx: 0.354,
                    sy: 0.354,
                    a: 0.05
                },
                "36": {
                    x: 81.203,
                    y: 15.732,
                    sx: 0.343,
                    sy: 0.343,
                    a: 0.03
                },
                "37": {
                    x: 81.19,
                    y: 17.278,
                    sx: 0.335,
                    sy: 0.335,
                    a: 0.01
                },
                "38": {
                    x: 81.205,
                    y: 18.219,
                    sx: 0.331,
                    sy: 0.331,
                    a: 0
                },
                "39": {
                    x: 81.2,
                    y: 18.6,
                    sx: 0.329,
                    sy: 0.329
                }
            })
            .addTimedChild(instance31, 104, 37, {
                "104": {
                    x: 4.4,
                    y: 8.25,
                    sx: 0.544,
                    sy: 0.544,
                    r: 0,
                    a: 0
                },
                "105": {
                    x: -2.503,
                    y: -8.029,
                    sx: 0.627,
                    sy: 0.627,
                    r: 0.054,
                    a: 0.13
                },
                "106": {
                    x: -7.555,
                    y: -24.03,
                    sx: 0.704,
                    sy: 0.704,
                    r: 0.105,
                    a: 0.25
                },
                "107": {
                    x: -10.928,
                    y: -39.518,
                    sx: 0.776,
                    sy: 0.776,
                    r: 0.152,
                    a: 0.36
                },
                "108": {
                    x: -12.946,
                    y: -54.256,
                    sx: 0.842,
                    sy: 0.842,
                    r: 0.195,
                    a: 0.46
                },
                "109": {
                    x: -13.883,
                    y: -67.951,
                    sx: 0.902,
                    sy: 0.902,
                    r: 0.235,
                    a: 0.55
                },
                "110": {
                    x: -13.816,
                    y: -80.658,
                    sx: 0.956,
                    sy: 0.956,
                    r: 0.27,
                    a: 0.64
                },
                "111": {
                    x: -13.124,
                    y: -92.23,
                    sx: 1.005,
                    sy: 1.005,
                    r: 0.302,
                    a: 0.71
                },
                "112": {
                    x: -11.985,
                    y: -102.467,
                    sx: 1.048,
                    sy: 1.048,
                    r: 0.33,
                    a: 0.78
                },
                "113": {
                    x: -10.533,
                    y: -111.368,
                    sx: 1.085,
                    sy: 1.085,
                    r: 0.355,
                    a: 0.84
                },
                "114": {
                    x: -9.053,
                    y: -118.983,
                    sx: 1.117,
                    sy: 1.117,
                    r: 0.375,
                    a: 0.89
                },
                "115": {
                    x: -7.682,
                    y: -125.207,
                    sx: 1.142,
                    sy: 1.142,
                    r: 0.392,
                    a: 0.93
                },
                "116": {
                    x: -6.41,
                    y: -130.04,
                    sx: 1.162,
                    sy: 1.162,
                    r: 0.405,
                    a: 0.96
                },
                "117": {
                    x: -5.428,
                    y: -133.53,
                    sx: 1.177,
                    sy: 1.177,
                    r: 0.415,
                    a: 0.98
                },
                "118": {
                    x: -4.832,
                    y: -135.574,
                    sx: 1.185,
                    sy: 1.185,
                    r: 0.42,
                    a: 1
                },
                "119": {
                    x: -4.6,
                    y: -136.35,
                    sx: 1.188,
                    sy: 1.188,
                    r: 0.422
                },
                "120": {
                    x: -3.836,
                    y: -136.081,
                    sx: 1.186,
                    sy: 1.186,
                    r: 0.425
                },
                "121": {
                    x: -1.657,
                    y: -135.691,
                    sx: 1.18,
                    sy: 1.18,
                    r: 0.433,
                    a: 0.99
                },
                "122": {
                    x: 1.867,
                    y: -134.901,
                    sx: 1.171,
                    sy: 1.171,
                    r: 0.446,
                    a: 0.98
                },
                "123": {
                    x: 6.757,
                    y: -133.787,
                    sx: 1.157,
                    sy: 1.157,
                    r: 0.464,
                    a: 0.96
                },
                "124": {
                    x: 12.955,
                    y: -132.114,
                    sx: 1.14,
                    sy: 1.14,
                    r: 0.487,
                    a: 0.94
                },
                "125": {
                    x: 20.352,
                    y: -129.938,
                    sx: 1.118,
                    sy: 1.118,
                    r: 0.516,
                    a: 0.92
                },
                "126": {
                    x: 28.864,
                    y: -126.957,
                    sx: 1.093,
                    sy: 1.093,
                    r: 0.55,
                    a: 0.89
                },
                "127": {
                    x: 38.388,
                    y: -123.225,
                    sx: 1.064,
                    sy: 1.064,
                    r: 0.589,
                    a: 0.86
                },
                "128": {
                    x: 48.708,
                    y: -118.444,
                    sx: 1.03,
                    sy: 1.03,
                    r: 0.633,
                    a: 0.82
                },
                "129": {
                    x: 59.587,
                    y: -112.476,
                    sx: 0.993,
                    sy: 0.993,
                    r: 0.683,
                    a: 0.77
                },
                "130": {
                    x: 70.868,
                    y: -105.295,
                    sx: 0.952,
                    sy: 0.952,
                    r: 0.737,
                    a: 0.73
                },
                "131": {
                    x: 82.179,
                    y: -96.692,
                    sx: 0.908,
                    sy: 0.908,
                    r: 0.797,
                    a: 0.67
                },
                "132": {
                    x: 93.336,
                    y: -86.624,
                    sx: 0.859,
                    sy: 0.859,
                    r: 0.862,
                    a: 0.62
                },
                "133": {
                    x: 103.881,
                    y: -74.992,
                    sx: 0.806,
                    sy: 0.806,
                    r: 0.933,
                    a: 0.55
                },
                "134": {
                    x: 113.412,
                    y: -61.88,
                    sx: 0.75,
                    sy: 0.75,
                    r: 1.008,
                    a: 0.49
                },
                "135": {
                    x: 121.621,
                    y: -47.356,
                    sx: 0.689,
                    sy: 0.689,
                    r: 1.089,
                    a: 0.42
                },
                "136": {
                    x: 128.06,
                    y: -31.542,
                    sx: 0.625,
                    sy: 0.625,
                    r: 1.175,
                    a: 0.34
                },
                "137": {
                    x: 132.158,
                    y: -14.768,
                    sx: 0.557,
                    sy: 0.557,
                    r: 1.266,
                    a: 0.27
                },
                "138": {
                    x: 133.765,
                    y: 2.693,
                    sx: 0.485,
                    sy: 0.485,
                    r: 1.362,
                    a: 0.18
                },
                "139": {
                    x: 132.335,
                    y: 20.17,
                    sx: 0.409,
                    sy: 0.409,
                    r: 1.464,
                    a: 0.09
                },
                "140": {
                    x: 127.75,
                    y: 37.25,
                    sx: 0.329,
                    sy: 0.329,
                    r: 1.571,
                    a: 0
                }
            })
            .addTimedChild(instance15, 0, 131, {
                "0": {
                    x: -16,
                    y: 55,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    r: 0
                },
                "2": {
                    y: 59.596,
                    sy: 0.961
                },
                "3": {
                    y: 63.382,
                    sy: 0.929
                },
                "4": {
                    y: 66.312,
                    sy: 0.904
                },
                "5": {
                    y: 68.383,
                    sy: 0.886
                },
                "6": {
                    y: 69.644,
                    sy: 0.875
                },
                "7": {
                    y: 70,
                    sy: 0.872
                },
                "8": {
                    y: 69.215,
                    sy: 0.879
                },
                "9": {
                    y: 68.234,
                    sy: 0.887
                },
                "10": {
                    y: 67.106,
                    sy: 0.897
                },
                "11": {
                    y: 65.832,
                    sy: 0.908
                },
                "12": {
                    y: 64.409,
                    sy: 0.92
                },
                "13": {
                    y: 62.79,
                    sy: 0.933
                },
                "14": {
                    y: 61.124,
                    sy: 0.948
                },
                "15": {
                    y: 59.212,
                    sy: 0.964
                },
                "16": {
                    y: 57.2,
                    sy: 0.981
                },
                "17": {
                    y: 55,
                    sy: 1
                },
                "18": {
                    x: -18.35,
                    y: 47.065,
                    sy: 1.07,
                    kx: 0.022
                },
                "19": {
                    x: -20.98,
                    y: 39.049,
                    sy: 1.139,
                    kx: 0.044
                },
                "20": {
                    x: -23.791,
                    y: 31.196,
                    sy: 1.209,
                    kx: 0.066
                },
                "21": {
                    x: -26.886,
                    y: 23.349,
                    sy: 1.279,
                    kx: 0.088
                },
                "22": {
                    x: -30.115,
                    y: 15.602,
                    sy: 1.348,
                    kx: 0.111
                },
                "23": {
                    x: -33.63,
                    y: 7.85,
                    sy: 1.418,
                    kx: 0.133
                },
                "24": {
                    x: -37.35,
                    y: 0.05,
                    sy: 1.488,
                    kx: 0.155
                },
                "25": {
                    x: -36.98,
                    y: 1.05,
                    sx: 0.999,
                    sy: 1.479,
                    kx: 0.154
                },
                "26": {
                    x: -36.561,
                    y: 2.049,
                    sy: 1.47
                },
                "27": {
                    x: -36.243,
                    y: 2.999,
                    sx: 0.998,
                    sy: 1.462,
                    kx: 0.153
                },
                "28": {
                    x: -35.876,
                    y: 3.849,
                    sy: 1.455
                },
                "29": {
                    x: -35.56,
                    y: 4.649,
                    sy: 1.448,
                    kx: 0.152
                },
                "30": {
                    x: -35.296,
                    y: 5.348,
                    sx: 0.997,
                    sy: 1.441
                },
                "31": {
                    x: -35.082,
                    y: 6.048,
                    sy: 1.435,
                    kx: 0.151
                },
                "32": {
                    x: -34.77,
                    y: 6.698,
                    sy: 1.429
                },
                "33": {
                    x: -34.559,
                    y: 7.248,
                    sx: 0.996,
                    sy: 1.424,
                    kx: 0.15
                },
                "34": {
                    x: -34.348,
                    y: 7.798,
                    sy: 1.42
                },
                "35": {
                    x: -34.189,
                    y: 8.248,
                    sy: 1.416
                },
                "36": {
                    x: -34.081,
                    y: 8.647,
                    sx: 0.995,
                    sy: 1.412,
                    kx: 0.149
                },
                "37": {
                    x: -33.874,
                    y: 9.047,
                    sy: 1.409
                },
                "38": {
                    x: -33.718,
                    y: 9.397,
                    sy: 1.406
                },
                "39": {
                    x: -33.713,
                    y: 9.647,
                    sy: 1.404
                },
                "40": {
                    x: -33.61,
                    y: 9.797,
                    sy: 1.402
                },
                "41": {
                    x: -33.557,
                    y: 9.947,
                    sy: 1.401
                },
                "42": {
                    x: -33.505,
                    y: 9.997,
                    sy: 1.4
                },
                "43": {
                    x: -33.65,
                    y: 10
                },
                "44": {
                    x: -33.902,
                    y: 9.11,
                    sy: 1.409
                },
                "45": {
                    x: -34.255,
                    y: 8.167,
                    sx: 0.996,
                    sy: 1.417,
                    kx: 0.15
                },
                "46": {
                    x: -34.657,
                    y: 7.321,
                    sy: 1.424
                },
                "47": {
                    x: -34.909,
                    y: 6.521,
                    sx: 0.997,
                    sy: 1.432,
                    kx: 0.151
                },
                "48": {
                    x: -35.261,
                    y: 5.719,
                    sy: 1.438
                },
                "49": {
                    x: -35.513,
                    y: 5.014,
                    sy: 1.445,
                    kx: 0.152
                },
                "50": {
                    x: -35.815,
                    y: 4.355,
                    sx: 0.998,
                    sy: 1.451
                },
                "51": {
                    x: -36.017,
                    y: 3.694,
                    sy: 1.456,
                    kx: 0.153
                },
                "52": {
                    x: -36.217,
                    y: 3.129,
                    sy: 1.461
                },
                "53": {
                    x: -36.419,
                    y: 2.611,
                    sx: 0.999,
                    sy: 1.466
                },
                "54": {
                    x: -36.62,
                    y: 2.19,
                    sy: 1.47,
                    kx: 0.154
                },
                "55": {
                    x: -36.771,
                    y: 1.717,
                    sy: 1.474
                },
                "56": {
                    x: -36.921,
                    y: 1.39,
                    sy: 1.477
                },
                "57": {
                    x: -37.072,
                    y: 1.01,
                    sx: 1,
                    sy: 1.48
                },
                "58": {
                    x: -37.173,
                    y: 0.727,
                    sy: 1.482
                },
                "59": {
                    x: -37.223,
                    y: 0.49,
                    sy: 1.484,
                    kx: 0.155
                },
                "60": {
                    x: -37.273,
                    y: 0.351,
                    sy: 1.486
                },
                "61": {
                    x: -37.324,
                    y: 0.209,
                    sy: 1.487
                },
                "62": {
                    x: -37.374,
                    y: 0.113
                },
                "63": {
                    x: -37.35,
                    y: 0.05,
                    sy: 1.488
                },
                "64": {
                    x: -37.249,
                    y: 0.45,
                    sy: 1.485
                },
                "65": {
                    x: -37.199,
                    y: 0.75,
                    sy: 1.482,
                    kx: 0.154
                },
                "66": {
                    x: -37.1,
                    y: 1.1,
                    sy: 1.479
                },
                "67": {
                    x: -37,
                    y: 1.35,
                    sy: 1.476
                },
                "68": {
                    x: -36.95,
                    y: 1.7,
                    sy: 1.473
                },
                "69": {
                    x: -36.85,
                    y: 1.999,
                    sy: 1.471
                },
                "70": {
                    x: -36.75,
                    y: 2.349,
                    sy: 1.468,
                    kx: 0.153
                },
                "71": {
                    x: -36.7,
                    y: 2.649,
                    sy: 1.465
                },
                "72": {
                    x: -36.6,
                    y: 2.999,
                    sy: 1.462
                },
                "73": {
                    x: -36.5,
                    y: 3.299,
                    sy: 1.459
                },
                "74": {
                    x: -36.45,
                    y: 3.649,
                    sy: 1.456
                },
                "75": {
                    x: -36.35,
                    y: 3.949,
                    sy: 1.454,
                    kx: 0.152
                },
                "76": {
                    x: -36.2,
                    y: 4.249,
                    sy: 1.451
                },
                "77": {
                    x: -36.1,
                    y: 4.549,
                    sy: 1.448
                },
                "78": {
                    x: -36.05,
                    y: 4.899,
                    sy: 1.445
                },
                "79": {
                    x: -35.95,
                    y: 5.199,
                    sy: 1.442
                },
                "80": {
                    x: -35.85,
                    y: 5.548,
                    sy: 1.44,
                    kx: 0.151
                },
                "81": {
                    x: -35.8,
                    y: 5.848,
                    sy: 1.437
                },
                "82": {
                    x: -35.7,
                    y: 6.198,
                    sy: 1.434
                },
                "83": {
                    x: -35.6,
                    y: 6.498,
                    sy: 1.431
                },
                "84": {
                    x: -35.55,
                    y: 6.848,
                    sy: 1.428
                },
                "85": {
                    x: -35.45,
                    y: 7.098,
                    sy: 1.425,
                    kx: 0.15
                },
                "86": {
                    x: -35.35,
                    y: 7.448,
                    sy: 1.423
                },
                "87": {
                    x: -35.3,
                    y: 7.748,
                    sy: 1.42
                },
                "88": {
                    x: -35.2,
                    y: 8.098,
                    sy: 1.417
                },
                "89": {
                    x: -35.1,
                    y: 8.398,
                    sy: 1.414
                },
                "90": {
                    x: -35.05,
                    y: 8.747,
                    sy: 1.411,
                    kx: 0.149
                },
                "91": {
                    x: -34.95,
                    y: 9.047,
                    sy: 1.408
                },
                "92": {
                    x: -34.85,
                    y: 9.397,
                    sy: 1.406
                },
                "93": {
                    x: -34.8,
                    y: 9.697,
                    sy: 1.403
                },
                "94": {
                    x: -34.75,
                    y: 10,
                    sy: 1.4
                },
                "99": {
                    x: -28.146,
                    y: 23.479,
                    sy: 1.278,
                    kx: 0.103
                },
                "100": {
                    x: -23.286,
                    y: 34.738,
                    sy: 1.178,
                    kx: 0.066
                },
                "101": {
                    x: -19.852,
                    y: 43.539,
                    sy: 1.1,
                    kx: 0.037
                },
                "102": {
                    x: -17.623,
                    y: 49.892,
                    sy: 1.044,
                    kx: 0.017
                },
                "103": {
                    x: -16.367,
                    y: 53.702,
                    sy: 1.011,
                    kx: 0.004
                },
                "104": {
                    x: -16,
                    y: 55,
                    sy: 1,
                    kx: 0
                },
                "105": {
                    y: 51.545,
                    sy: 1.03
                },
                "106": {
                    y: 48.276,
                    sy: 1.058
                },
                "107": {
                    y: 45.245,
                    sy: 1.084
                },
                "108": {
                    y: 42.499,
                    sy: 1.107
                },
                "109": {
                    y: 39.991,
                    sy: 1.129
                },
                "110": {
                    y: 37.668,
                    sy: 1.149
                },
                "111": {
                    y: 35.633,
                    sy: 1.166
                },
                "112": {
                    y: 33.784,
                    sy: 1.182
                },
                "113": {
                    y: 32.221,
                    sy: 1.195
                },
                "114": {
                    y: 30.945,
                    sy: 1.206
                },
                "115": {
                    y: 29.806,
                    sy: 1.216
                },
                "116": {
                    y: 29.003,
                    sy: 1.223
                },
                "117": {
                    y: 28.386,
                    sy: 1.228
                },
                "118": {
                    y: 28.006,
                    sy: 1.231
                },
                "119": {
                    y: 27.85,
                    sy: 1.232
                },
                "120": {
                    x: -13.909,
                    y: 30.479,
                    sx: 0.982,
                    sy: 1.213,
                    r: -0.013
                },
                "121": {
                    x: -11.422,
                    y: 33.408,
                    sx: 0.962,
                    sy: 1.192,
                    r: -0.028
                },
                "122": {
                    x: -8.545,
                    y: 36.729,
                    sx: 0.938,
                    sy: 1.167,
                    r: -0.045
                },
                "123": {
                    x: -5.083,
                    y: 40.434,
                    sx: 0.911,
                    sy: 1.139,
                    r: -0.065
                },
                "124": {
                    x: -1.243,
                    y: 44.366,
                    sx: 0.882,
                    sy: 1.108,
                    r: -0.087
                },
                "125": {
                    x: 3.164,
                    y: 48.617,
                    sx: 0.849,
                    sy: 1.074,
                    r: -0.11
                },
                "126": {
                    x: 8.08,
                    y: 53.077,
                    sx: 0.814,
                    sy: 1.036,
                    r: -0.136
                },
                "127": {
                    x: 13.743,
                    y: 57.74,
                    sx: 0.776,
                    sy: 0.996,
                    r: -0.164
                },
                "128": {
                    x: 19.989,
                    y: 62.645,
                    sx: 0.734,
                    sy: 0.952,
                    r: -0.195
                },
                "129": {
                    x: 26.855,
                    y: 67.536,
                    sx: 0.69,
                    sy: 0.906,
                    r: -0.227
                },
                "130": {
                    x: 34.6,
                    y: 72.45,
                    sx: 0.643,
                    sy: 0.856,
                    r: -0.262
                }
            })
            .addTimedChild(instance14, 0, 169, {
                "0": {
                    x: 85,
                    y: 85,
                    sx: 1.007,
                    sy: 1.006,
                    r: -0.004
                },
                "15": {
                    x: 85.03,
                    y: 85.07,
                    sy: 1.008
                },
                "16": {
                    x: 85.057,
                    y: 85.091,
                    sx: 1.006,
                    sy: 1.01,
                    r: -0.003
                },
                "17": {
                    x: 85.033,
                    y: 85.113,
                    sy: 1.012
                },
                "18": {
                    x: 85.059,
                    y: 85.133,
                    sx: 1.005,
                    sy: 1.015
                },
                "19": {
                    x: 85.036,
                    y: 85.155,
                    sx: 1.004,
                    sy: 1.017
                },
                "20": {
                    x: 85.063,
                    y: 85.178,
                    sy: 1.019,
                    r: -0.002
                },
                "21": {
                    x: 85.04,
                    y: 85.249,
                    sx: 1.003,
                    sy: 1.022
                },
                "22": {
                    x: 85.066,
                    y: 85.222,
                    sy: 1.024
                },
                "23": {
                    x: 85.042,
                    y: 85.242,
                    sx: 1.002,
                    sy: 1.026,
                    r: -0.001
                },
                "24": {
                    x: 85.07,
                    y: 85.264,
                    sy: 1.029
                },
                "25": {
                    x: 85.046,
                    y: 85.286,
                    sx: 1.001,
                    sy: 1.031
                },
                "26": {
                    x: 85.071,
                    y: 85.306,
                    sy: 1.033,
                    r: 0
                },
                "27": {
                    x: 85,
                    y: 85.25,
                    sx: 1,
                    sy: 1.036
                },
                "28": {
                    y: 85.267,
                    sy: 1.033
                },
                "29": {
                    y: 85.183,
                    sy: 1.031
                },
                "30": {
                    y: 85.151,
                    sy: 1.029
                },
                "31": {
                    y: 85.118,
                    sy: 1.027
                },
                "32": {
                    y: 85.036,
                    sy: 1.024
                },
                "33": {
                    y: 85.002,
                    sy: 1.022
                },
                "34": {
                    y: 84.97,
                    sy: 1.02
                },
                "35": {
                    y: 84.937,
                    sy: 1.018
                },
                "36": {
                    y: 84.904,
                    sy: 1.016
                },
                "37": {
                    y: 84.871,
                    sy: 1.013
                },
                "38": {
                    y: 84.789,
                    sy: 1.011
                },
                "39": {
                    y: 84.756,
                    sy: 1.009
                },
                "40": {
                    y: 84.723,
                    sy: 1.007
                },
                "41": {
                    y: 84.64,
                    sy: 1.004
                },
                "42": {
                    y: 84.607,
                    sy: 1.002
                },
                "43": {
                    y: 84.5,
                    sy: 1
                },
                "44": {
                    y: 84.591,
                    sy: 1.003
                },
                "45": {
                    y: 84.667,
                    sy: 1.007
                },
                "46": {
                    y: 84.729,
                    sy: 1.01
                },
                "47": {
                    y: 84.775,
                    sy: 1.013
                },
                "48": {
                    y: 84.857,
                    sy: 1.015
                },
                "49": {
                    y: 84.924,
                    sy: 1.018
                },
                "50": {
                    y: 84.976,
                    sy: 1.02
                },
                "51": {
                    y: 85.013,
                    sy: 1.023
                },
                "52": {
                    y: 85.036,
                    sy: 1.025
                },
                "53": {
                    y: 85.093,
                    sy: 1.027
                },
                "54": {
                    y: 85.137,
                    sy: 1.028
                },
                "55": {
                    y: 85.164,
                    sy: 1.03
                },
                "56": {
                    y: 85.178,
                    sy: 1.031
                },
                "57": {
                    y: 85.226,
                    sy: 1.032
                },
                "58": {
                    y: 85.208,
                    sy: 1.033
                },
                "59": {
                    y: 85.227,
                    sy: 1.034
                },
                "60": {
                    y: 85.281,
                    sy: 1.035
                },
                "61": {
                    y: 85.269
                },
                "62": {
                    y: 85.293
                },
                "63": {
                    y: 85.25,
                    sy: 1.036
                },
                "64": {
                    y: 85.277,
                    sy: 1.035
                },
                "65": {
                    y: 85.256,
                    sy: 1.034
                },
                "66": {
                    y: 85.234,
                    sy: 1.033
                },
                "67": {
                    y: 85.263,
                    sy: 1.032
                },
                "68": {
                    y: 85.191,
                    sy: 1.031
                },
                "69": {
                    y: 85.219,
                    sy: 1.03
                },
                "70": {
                    y: 85.149,
                    sy: 1.029
                },
                "71": {
                    y: 85.128
                },
                "72": {
                    y: 85.156,
                    sy: 1.028
                },
                "73": {
                    y: 85.085,
                    sy: 1.027
                },
                "74": {
                    y: 85.113,
                    sy: 1.026
                },
                "75": {
                    y: 85.093,
                    sy: 1.025
                },
                "76": {
                    y: 85.071,
                    sy: 1.024
                },
                "77": {
                    y: 85.05,
                    sy: 1.023
                },
                "78": {
                    y: 85.028
                },
                "79": {
                    y: 85.008,
                    sy: 1.022
                },
                "80": {
                    y: 84.986,
                    sy: 1.021
                },
                "81": {
                    y: 84.965,
                    sy: 1.02
                },
                "82": {
                    y: 84.943,
                    sy: 1.019
                },
                "83": {
                    y: 84.972,
                    sy: 1.018
                },
                "84": {
                    y: 84.901,
                    sy: 1.017
                },
                "85": {
                    y: 84.879,
                    sy: 1.016
                },
                "86": {
                    y: 84.907
                },
                "87": {
                    y: 84.836,
                    sy: 1.015
                },
                "88": {
                    y: 84.864,
                    sy: 1.014
                },
                "89": {
                    y: 84.794,
                    sy: 1.013
                },
                "90": {
                    y: 84.822,
                    sy: 1.012
                },
                "91": {
                    y: 84.801,
                    sy: 1.011
                },
                "92": {
                    y: 84.729,
                    sy: 1.01
                },
                "93": {
                    y: 84.759
                },
                "94": {
                    y: 84.737,
                    sy: 1.009
                },
                "95": {
                    y: 84.716,
                    sy: 1.008
                },
                "96": {
                    y: 84.694,
                    sy: 1.007
                },
                "97": {
                    y: 84.723,
                    sy: 1.006
                },
                "98": {
                    y: 84.652,
                    sy: 1.005
                },
                "99": {
                    y: 84.631,
                    sy: 1.004
                },
                "100": {
                    y: 84.609,
                    sy: 1.003
                },
                "101": {
                    y: 84.588
                },
                "102": {
                    y: 84.618,
                    sy: 1.002
                },
                "103": {
                    y: 84.546,
                    sy: 1.001
                },
                "104": {
                    y: 84.5,
                    sy: 1
                },
                "133": {
                    y: 86.25
                },
                "134": {
                    y: 88
                },
                "135": {
                    y: 89.75
                },
                "136": {
                    y: 91.5
                },
                "137": {
                    y: 93.25
                },
                "138": {
                    y: 95
                },
                "139": {
                    y: 96.75
                },
                "140": {
                    y: 98.5
                },
                "141": {
                    y: 98.2
                },
                "142": {
                    y: 97.35
                },
                "143": {
                    y: 95.95
                },
                "144": {
                    y: 93.95
                },
                "145": {
                    y: 91.35
                },
                "146": {
                    y: 88.2
                },
                "147": {
                    y: 84.5
                },
                "148": {
                    x: 85.046,
                    y: 84.533,
                    r: -0.012
                },
                "149": {
                    x: 85.03,
                    y: 84.506,
                    r: -0.025
                },
                "150": {
                    x: 85.051,
                    y: 84.514,
                    r: -0.037
                },
                "151": {
                    x: 85.006,
                    y: 84.51,
                    r: -0.05
                },
                "152": {
                    x: 85.048,
                    y: 84.542,
                    r: -0.062
                },
                "153": {
                    x: 85.027,
                    y: 84.513,
                    r: -0.075
                },
                "154": {
                    x: 85,
                    y: 84.5,
                    r: -0.087
                },
                "155": {
                    x: 84.962,
                    y: 84.518,
                    r: -0.07
                },
                "156": {
                    x: 84.999,
                    y: 84.512,
                    r: -0.052
                },
                "157": {
                    x: 85.011,
                    y: 84.53,
                    r: -0.035
                },
                "158": {
                    x: 84.997,
                    y: 84.521,
                    r: -0.017
                },
                "159": {
                    x: 85,
                    y: 84.5,
                    r: 0
                },
                "160": {
                    x: 85.011,
                    y: 84.538,
                    r: 0.009
                },
                "161": {
                    x: 85.017,
                    y: 84.521,
                    r: 0.017
                },
                "162": {
                    x: 85.013,
                    y: 84.546,
                    r: 0.026
                },
                "163": {
                    x: 85,
                    y: 84.5,
                    r: 0.035
                },
                "164": {
                    x: 85.031,
                    y: 84.654,
                    r: 0.026
                },
                "165": {
                    x: 85.009,
                    y: 84.753,
                    r: 0.017
                },
                "166": {
                    x: 85.028,
                    y: 84.895,
                    r: 0.009
                },
                "167": {
                    x: 85,
                    y: 85,
                    r: 0
                }
            })
            .addTimedChild(instance13, 0, 131, {
                "0": {
                    x: 42,
                    y: 36.3,
                    sx: 0.75,
                    sy: 0.844,
                    kx: 0.262,
                    ky: 2.883
                },
                "2": {
                    x: 41.999,
                    y: 39.399
                },
                "3": {
                    y: 41.899
                },
                "4": {
                    y: 43.849
                },
                "5": {
                    y: 45.249
                },
                "6": {
                    y: 46.049
                },
                "7": {
                    x: 42,
                    y: 46.3
                },
                "8": {
                    x: 41.999,
                    y: 45.549
                },
                "9": {
                    y: 44.499
                },
                "10": {
                    y: 43.299
                },
                "11": {
                    y: 41.849
                },
                "12": {
                    y: 40.249
                },
                "13": {
                    y: 38.399
                },
                "14": {
                    x: 42,
                    y: 36.3
                },
                "15": {
                    x: 41.999,
                    y: 36.199
                },
                "16": {
                    y: 35.799
                },
                "17": {
                    y: 35.149
                },
                "18": {
                    y: 34.199
                },
                "19": {
                    y: 33.049
                },
                "20": {
                    y: 31.549
                },
                "21": {
                    y: 29.849
                },
                "22": {
                    y: 27.849
                },
                "23": {
                    y: 25.599
                },
                "24": {
                    x: 42,
                    y: 23
                },
                "44": {
                    x: 41.91,
                    y: 23.243,
                    sx: 0.751,
                    sy: 0.846
                },
                "45": {
                    x: 41.867,
                    y: 23.434,
                    sx: 0.752,
                    sy: 0.847
                },
                "46": {
                    x: 41.772,
                    y: 23.623,
                    sx: 0.753,
                    sy: 0.848
                },
                "47": {
                    x: 41.674,
                    y: 23.811,
                    sx: 0.754,
                    sy: 0.85
                },
                "48": {
                    x: 41.572,
                    y: 23.996,
                    sx: 0.755,
                    sy: 0.851
                },
                "49": {
                    x: 41.518,
                    y: 24.128,
                    sx: 0.756,
                    sy: 0.852
                },
                "50": {
                    x: 41.46,
                    y: 24.309,
                    sy: 0.853
                },
                "51": {
                    x: 41.4,
                    y: 24.387,
                    sx: 0.757,
                    sy: 0.854
                },
                "52": {
                    x: 41.336,
                    y: 24.514,
                    sx: 0.758,
                    sy: 0.855
                },
                "53": {
                    x: 41.318,
                    y: 24.637
                },
                "54": {
                    x: 41.198,
                    y: 24.709,
                    sx: 0.759,
                    sy: 0.856
                },
                "55": {
                    x: 41.175,
                    y: 24.827,
                    sy: 0.857,
                    ky: 2.884
                },
                "56": {
                    x: 41.098,
                    y: 24.894,
                    sx: 0.76
                },
                "57": {
                    x: 41.069,
                    y: 24.96,
                    sy: 0.858
                },
                "58": {
                    x: 41.086,
                    y: 25.021
                },
                "59": {
                    x: 41.05,
                    y: 25.082
                },
                "60": {
                    x: 41.011,
                    y: 25.089,
                    sx: 0.761,
                    sy: 0.859
                },
                "61": {
                    x: 40.968,
                    y: 25.095
                },
                "62": {
                    x: 40.973,
                    y: 25.149
                },
                "63": {
                    x: 40.95,
                    y: 25.05
                },
                "64": {
                    x: 41.03,
                    y: 25.034,
                    sy: 0.858
                },
                "65": {
                    x: 41.06,
                    y: 25.019,
                    sx: 0.76
                },
                "66": {
                    x: 41.141,
                    y: 24.904
                },
                "67": {
                    x: 41.122,
                    y: 24.788,
                    sy: 0.857
                },
                "68": {
                    x: 41.152,
                    y: 24.723,
                    sx: 0.759
                },
                "69": {
                    x: 41.182,
                    y: 24.707,
                    sy: 0.856
                },
                "70": {
                    x: 41.214,
                    y: 24.593,
                    ky: 2.883
                },
                "71": {
                    x: 41.243,
                    y: 24.527,
                    sx: 0.758,
                    sy: 0.855
                },
                "72": {
                    x: 41.324,
                    y: 24.511
                },
                "73": {
                    x: 41.354,
                    y: 24.397,
                    sx: 0.757,
                    sy: 0.854
                },
                "74": {
                    x: 41.385,
                    y: 24.331
                },
                "75": {
                    x: 41.366,
                    y: 24.266,
                    sy: 0.853
                },
                "76": {
                    x: 41.395,
                    y: 24.251,
                    sx: 0.756
                },
                "77": {
                    x: 41.426,
                    y: 24.134,
                    sy: 0.852
                },
                "78": {
                    x: 41.507,
                    y: 24.069
                },
                "79": {
                    x: 41.537,
                    y: 24.055,
                    sx: 0.755,
                    sy: 0.851
                },
                "80": {
                    x: 41.568,
                    y: 23.939
                },
                "81": {
                    x: 41.599,
                    y: 23.874,
                    sy: 0.85
                },
                "82": {
                    x: 41.628,
                    y: 23.859,
                    sx: 0.754
                },
                "83": {
                    x: 41.609,
                    y: 23.744
                },
                "84": {
                    x: 41.69,
                    y: 23.678,
                    sy: 0.849
                },
                "85": {
                    x: 41.72,
                    y: 23.612,
                    sx: 0.753
                },
                "86": {
                    x: 41.751,
                    y: 23.547,
                    sy: 0.848
                },
                "87": {
                    x: 41.781,
                    y: 23.482
                },
                "88": {
                    x: 41.812,
                    y: 23.416,
                    sx: 0.752,
                    sy: 0.847
                },
                "89": {
                    x: 41.893,
                    y: 23.402
                },
                "90": {
                    x: 41.923,
                    y: 23.286,
                    sy: 0.846
                },
                "91": {
                    x: 41.904,
                    y: 23.221,
                    sx: 0.751
                },
                "92": {
                    x: 41.934,
                    y: 23.155,
                    sy: 0.845
                },
                "93": {
                    x: 41.965,
                    y: 23.09
                },
                "94": {
                    x: 42,
                    y: 23,
                    sx: 0.75,
                    sy: 0.844
                },
                "104": {
                    x: 42.483,
                    y: 23.601,
                    sx: 0.755,
                    sy: 0.812,
                    kx: 0.294,
                    ky: 2.851
                },
                "105": {
                    x: 42.97,
                    y: 24.113,
                    sx: 0.759,
                    sy: 0.782,
                    kx: 0.323,
                    ky: 2.822
                },
                "106": {
                    x: 43.435,
                    y: 24.589,
                    sx: 0.762,
                    sy: 0.754,
                    kx: 0.351,
                    ky: 2.794
                },
                "107": {
                    x: 43.948,
                    y: 25.033,
                    sx: 0.766,
                    sy: 0.728,
                    kx: 0.377,
                    ky: 2.768
                },
                "108": {
                    x: 44.378,
                    y: 25.397,
                    sx: 0.769,
                    sy: 0.705,
                    kx: 0.4,
                    ky: 2.745
                },
                "109": {
                    x: 44.793,
                    y: 25.734,
                    sx: 0.772,
                    sy: 0.683,
                    kx: 0.422,
                    ky: 2.723
                },
                "110": {
                    x: 45.209,
                    y: 26.093,
                    sx: 0.774,
                    sy: 0.663,
                    kx: 0.441,
                    ky: 2.704
                },
                "111": {
                    x: 45.589,
                    y: 26.424,
                    sx: 0.777,
                    sy: 0.646,
                    kx: 0.458,
                    ky: 2.687
                },
                "112": {
                    x: 45.897,
                    y: 26.676,
                    sx: 0.779,
                    sy: 0.63,
                    kx: 0.474,
                    ky: 2.671
                },
                "113": {
                    x: 46.195,
                    y: 26.848,
                    sx: 0.781,
                    sy: 0.617,
                    kx: 0.487,
                    ky: 2.658
                },
                "114": {
                    x: 46.442,
                    y: 27.089,
                    sx: 0.782,
                    sy: 0.605,
                    kx: 0.498,
                    ky: 2.647
                },
                "115": {
                    x: 46.647,
                    y: 27.247,
                    sx: 0.783,
                    sy: 0.596,
                    kx: 0.508,
                    ky: 2.638
                },
                "116": {
                    x: 46.766,
                    y: 27.322,
                    sx: 0.784,
                    sy: 0.589,
                    kx: 0.515,
                    ky: 2.63
                },
                "117": {
                    x: 46.954,
                    y: 27.411,
                    sx: 0.785,
                    sy: 0.584,
                    kx: 0.52,
                    ky: 2.625
                },
                "118": {
                    x: 47.016,
                    y: 27.467,
                    sy: 0.58,
                    kx: 0.523,
                    ky: 2.622
                },
                "119": {
                    x: 47.05,
                    y: 27.5,
                    sx: 0.786,
                    sy: 0.579,
                    kx: 0.524,
                    ky: 2.621
                },
                "120": {
                    x: 51.106,
                    y: 29.487,
                    sx: 0.782,
                    sy: 0.577
                },
                "121": {
                    x: 55.065,
                    y: 31.326,
                    sx: 0.779,
                    sy: 0.575
                },
                "122": {
                    x: 59.124,
                    y: 33.163,
                    sx: 0.776,
                    sy: 0.572
                },
                "123": {
                    x: 63.132,
                    y: 35.101,
                    sx: 0.773,
                    sy: 0.57
                },
                "124": {
                    x: 67.191,
                    y: 36.889,
                    sx: 0.77,
                    sy: 0.568
                },
                "125": {
                    x: 71.248,
                    y: 38.827,
                    sx: 0.766,
                    sy: 0.565
                },
                "126": {
                    x: 75.208,
                    y: 40.666,
                    sx: 0.763,
                    sy: 0.563
                },
                "127": {
                    x: 79.266,
                    y: 42.504,
                    sx: 0.76,
                    sy: 0.561
                },
                "128": {
                    x: 83.274,
                    y: 44.441,
                    sx: 0.757,
                    sy: 0.558
                },
                "129": {
                    x: 87.332,
                    y: 46.23,
                    sx: 0.754,
                    sy: 0.556
                },
                "130": {
                    x: 91.25,
                    y: 48.1,
                    sx: 0.75,
                    sy: 0.554
                }
            })
            .addTimedChild(instance22, 24, 75, {
                "24": {
                    x: 142.45,
                    y: 5.95,
                    sx: 1.071,
                    r: 0.187
                },
                "25": {
                    x: 142.061,
                    y: 5.564,
                    sx: 1.067,
                    r: 0.177
                },
                "26": {
                    x: 141.612,
                    y: 5.137,
                    sx: 1.064,
                    r: 0.167
                },
                "27": {
                    x: 141.247,
                    y: 4.718,
                    sx: 1.06,
                    r: 0.157
                },
                "28": {
                    x: 140.817,
                    y: 4.309,
                    sx: 1.056,
                    r: 0.147
                },
                "29": {
                    x: 140.421,
                    y: 3.911,
                    sx: 1.052,
                    r: 0.138
                },
                "30": {
                    x: 140.011,
                    y: 3.468,
                    sx: 1.049,
                    r: 0.128
                },
                "31": {
                    x: 139.635,
                    y: 3.04,
                    sx: 1.045,
                    r: 0.118
                },
                "32": {
                    x: 139.198,
                    y: 2.669,
                    sx: 1.041,
                    r: 0.108
                },
                "33": {
                    x: 138.791,
                    y: 2.262,
                    sx: 1.037,
                    r: 0.098
                },
                "34": {
                    x: 138.374,
                    y: 1.811,
                    sx: 1.034,
                    r: 0.088
                },
                "35": {
                    x: 137.992,
                    y: 1.373,
                    sx: 1.03,
                    r: 0.079
                },
                "36": {
                    x: 137.596,
                    y: 0.993,
                    sx: 1.026,
                    r: 0.069
                },
                "37": {
                    x: 137.237,
                    y: 0.577,
                    sx: 1.022,
                    r: 0.059
                },
                "38": {
                    x: 136.811,
                    y: 0.068,
                    sx: 1.019,
                    r: 0.049
                },
                "39": {
                    x: 136.426,
                    y: -0.327,
                    sx: 1.015,
                    r: 0.039
                },
                "40": {
                    x: 136.025,
                    y: -0.711,
                    sx: 1.011,
                    r: 0.029
                },
                "41": {
                    x: 135.66,
                    y: -1.133,
                    sx: 1.007,
                    r: 0.02
                },
                "42": {
                    x: 135.233,
                    y: -1.547,
                    sx: 1.004,
                    r: 0.01
                },
                "43": {
                    x: 135,
                    y: -2,
                    sx: 1,
                    r: 0
                },
                "44": {
                    x: 136.106,
                    y: -1.073,
                    r: 0.012
                },
                "45": {
                    x: 137.097,
                    y: -0.228,
                    r: 0.024
                },
                "46": {
                    x: 138.02,
                    y: 0.531,
                    r: 0.035
                },
                "47": {
                    x: 138.927,
                    y: 1.253,
                    r: 0.046
                },
                "48": {
                    x: 139.775,
                    y: 1.937,
                    r: 0.056
                },
                "49": {
                    x: 140.565,
                    y: 2.636,
                    r: 0.065
                },
                "50": {
                    x: 141.246,
                    y: 3.195,
                    r: 0.074
                },
                "51": {
                    x: 141.977,
                    y: 3.772,
                    r: 0.082
                },
                "52": {
                    x: 142.553,
                    y: 4.31,
                    r: 0.089
                },
                "53": {
                    x: 143.13,
                    y: 4.761,
                    r: 0.096
                },
                "54": {
                    x: 143.707,
                    y: 5.176,
                    r: 0.102
                },
                "55": {
                    x: 144.19,
                    y: 5.606,
                    r: 0.107
                },
                "56": {
                    x: 144.577,
                    y: 5.948,
                    r: 0.112
                },
                "57": {
                    x: 144.92,
                    y: 6.207,
                    r: 0.116
                },
                "58": {
                    x: 145.271,
                    y: 6.478,
                    r: 0.12
                },
                "59": {
                    x: 145.477,
                    y: 6.612,
                    r: 0.123
                },
                "60": {
                    x: 145.695,
                    y: 6.811,
                    r: 0.125
                },
                "61": {
                    x: 145.819,
                    y: 6.926,
                    r: 0.126
                },
                "62": {
                    x: 145.904,
                    y: 6.954,
                    r: 0.127
                },
                "63": {
                    x: 145.85,
                    y: 6.95,
                    r: 0.128
                },
                "64": {
                    x: 145.579,
                    y: 6.751,
                    r: 0.124
                },
                "65": {
                    x: 145.205,
                    y: 6.45,
                    r: 0.119
                },
                "66": {
                    x: 144.829,
                    y: 6.149,
                    r: 0.115
                },
                "67": {
                    x: 144.501,
                    y: 5.848,
                    r: 0.111
                },
                "68": {
                    x: 144.119,
                    y: 5.547,
                    r: 0.107
                },
                "69": {
                    x: 143.786,
                    y: 5.295,
                    r: 0.103
                },
                "70": {
                    x: 143.454,
                    y: 4.994,
                    r: 0.099
                },
                "71": {
                    x: 143.064,
                    y: 4.742,
                    r: 0.095
                },
                "72": {
                    x: 142.725,
                    y: 4.44,
                    r: 0.091
                },
                "73": {
                    x: 142.382,
                    y: 4.141,
                    r: 0.086
                },
                "74": {
                    x: 142.036,
                    y: 3.841,
                    r: 0.082
                },
                "75": {
                    x: 141.685,
                    y: 3.589,
                    r: 0.078
                },
                "76": {
                    x: 141.337,
                    y: 3.286,
                    r: 0.074
                },
                "77": {
                    x: 140.985,
                    y: 2.984,
                    r: 0.07
                },
                "78": {
                    x: 140.628,
                    y: 2.681,
                    r: 0.066
                },
                "79": {
                    x: 140.271,
                    y: 2.383,
                    r: 0.062
                },
                "80": {
                    x: 139.911,
                    y: 2.081,
                    r: 0.058
                },
                "81": {
                    x: 139.55,
                    y: 1.83,
                    r: 0.054
                },
                "82": {
                    x: 139.232,
                    y: 1.527,
                    r: 0.049
                },
                "83": {
                    x: 138.863,
                    y: 1.228,
                    r: 0.045
                },
                "84": {
                    x: 138.495,
                    y: 0.925,
                    r: 0.041
                },
                "85": {
                    x: 138.17,
                    y: 0.674,
                    r: 0.037
                },
                "86": {
                    x: 137.798,
                    y: 0.371,
                    r: 0.033
                },
                "87": {
                    x: 137.518,
                    y: 0.121,
                    r: 0.029
                },
                "88": {
                    x: 137.189,
                    y: -0.178,
                    r: 0.025
                },
                "89": {
                    x: 136.807,
                    y: -0.479,
                    r: 0.021
                },
                "90": {
                    x: 136.474,
                    y: -0.731,
                    r: 0.016
                },
                "91": {
                    x: 136.133,
                    y: -1.031,
                    r: 0.012
                },
                "92": {
                    x: 135.792,
                    y: -1.33,
                    r: 0.008
                },
                "93": {
                    x: 135.452,
                    y: -1.63,
                    r: 0.004
                },
                "94": {
                    x: 135,
                    y: -2,
                    r: 0
                },
                "95": {
                    x: 138.879,
                    y: 0.355,
                    r: 0.08
                },
                "96": {
                    x: 141.714,
                    y: 2.108,
                    r: 0.137
                },
                "97": {
                    x: 143.425,
                    y: 3.127,
                    r: 0.171
                },
                "98": {
                    x: 143.95,
                    y: 3.4,
                    r: 0.182
                }
            })
            .addTimedChild(instance21, 24, 75, {
                "24": {
                    x: 106,
                    y: 29,
                    sx: 0.998,
                    sy: 0.997,
                    kx: -0.262,
                    ky: 0.261
                },
                "44": {
                    x: 106.296,
                    y: 29.37
                },
                "45": {
                    x: 106.494,
                    y: 29.641
                },
                "46": {
                    x: 106.693,
                    y: 29.963
                },
                "47": {
                    x: 106.893,
                    y: 30.235,
                    ky: 0.26
                },
                "48": {
                    x: 107.043,
                    y: 30.462
                },
                "49": {
                    x: 107.291,
                    y: 30.738
                },
                "50": {
                    x: 107.439,
                    y: 30.915
                },
                "51": {
                    x: 107.589,
                    y: 31.097
                },
                "52": {
                    x: 107.689,
                    y: 31.28
                },
                "53": {
                    x: 107.838,
                    y: 31.463,
                    ky: 0.259
                },
                "54": {
                    x: 107.938,
                    y: 31.597
                },
                "55": {
                    x: 108.088,
                    y: 31.733,
                    sy: 0.996
                },
                "56": {
                    x: 108.186,
                    y: 31.872
                },
                "57": {
                    x: 108.287,
                    y: 31.961
                },
                "58": {
                    x: 108.336,
                    y: 32.003
                },
                "59": {
                    x: 108.386,
                    y: 32.145
                },
                "60": {
                    x: 108.436,
                    y: 32.19
                },
                "61": {
                    x: 108.487,
                    y: 32.184
                },
                "62": {
                    x: 108.486,
                    y: 32.232
                },
                "63": {
                    x: 108.45,
                    y: 32.15
                },
                "64": {
                    x: 108.347,
                    y: 32.109
                },
                "65": {
                    x: 108.297,
                    y: 31.97
                },
                "66": {
                    x: 108.198,
                    y: 31.88
                },
                "67": {
                    x: 108.197,
                    y: 31.791
                },
                "68": {
                    x: 108.099,
                    y: 31.702
                },
                "69": {
                    x: 108.049,
                    y: 31.563
                },
                "70": {
                    x: 107.949,
                    y: 31.473,
                    sy: 0.997
                },
                "71": {
                    x: 107.799,
                    y: 31.385
                },
                "72": {
                    x: 107.75,
                    y: 31.295
                },
                "73": {
                    x: 107.651,
                    y: 31.204,
                    ky: 0.26
                },
                "74": {
                    x: 107.602,
                    y: 31.117
                },
                "75": {
                    x: 107.5,
                    y: 30.977
                },
                "76": {
                    x: 107.402,
                    y: 30.887
                },
                "77": {
                    x: 107.352,
                    y: 30.797
                },
                "78": {
                    x: 107.253,
                    y: 30.71
                },
                "79": {
                    x: 107.201,
                    y: 30.57
                },
                "80": {
                    x: 107.152,
                    y: 30.479
                },
                "81": {
                    x: 107.104,
                    y: 30.391
                },
                "82": {
                    x: 106.952,
                    y: 30.251
                },
                "83": {
                    x: 106.852,
                    y: 30.162
                },
                "84": {
                    x: 106.802,
                    y: 30.073,
                    ky: 0.261
                },
                "85": {
                    x: 106.703,
                    y: 29.932
                },
                "86": {
                    x: 106.653,
                    y: 29.845
                },
                "87": {
                    x: 106.556,
                    y: 29.804
                },
                "88": {
                    x: 106.454,
                    y: 29.716
                },
                "89": {
                    x: 106.405,
                    y: 29.575
                },
                "90": {
                    x: 106.305,
                    y: 29.487
                },
                "91": {
                    x: 106.256,
                    y: 29.397
                },
                "92": {
                    x: 106.154,
                    y: 29.307
                },
                "93": {
                    x: 106.106,
                    y: 29.17
                },
                "94": {
                    x: 106,
                    y: 29
                }
            })
            .addTimedChild(instance12, 0, 131, {
                "0": {
                    x: 95,
                    y: 123,
                    sx: 0.926,
                    sy: 0.926
                },
                "2": {
                    x: 95.049,
                    y: 123.637,
                    sy: 0.909
                },
                "3": {
                    y: 124.136,
                    sy: 0.895
                },
                "4": {
                    y: 124.546,
                    sy: 0.884
                },
                "5": {
                    y: 124.818,
                    sy: 0.876
                },
                "6": {
                    y: 125,
                    sy: 0.872
                },
                "7": {
                    x: 95,
                    sy: 0.87
                },
                "8": {
                    x: 95.049,
                    y: 124.861,
                    sy: 0.874
                },
                "9": {
                    y: 124.699,
                    sy: 0.879
                },
                "10": {
                    y: 124.462,
                    sy: 0.885
                },
                "11": {
                    y: 124.25,
                    sy: 0.891
                },
                "12": {
                    y: 124.013,
                    sy: 0.898
                },
                "13": {
                    y: 123.701,
                    sy: 0.907
                },
                "14": {
                    y: 123.415,
                    sy: 0.916
                },
                "15": {
                    x: 95,
                    y: 123,
                    sy: 0.926
                },
                "16": {
                    x: 94.915,
                    y: 122.914,
                    sx: 0.929,
                    sy: 0.93
                },
                "17": {
                    x: 94.661,
                    y: 122.565,
                    sx: 0.936,
                    sy: 0.941
                },
                "18": {
                    x: 94.24,
                    y: 121.943,
                    sx: 0.949,
                    sy: 0.961
                },
                "19": {
                    x: 93.652,
                    y: 121.058,
                    sx: 0.967,
                    sy: 0.988
                },
                "20": {
                    x: 92.845,
                    y: 119.957,
                    sx: 0.991,
                    sy: 1.023
                },
                "21": {
                    x: 91.92,
                    y: 118.586,
                    sx: 1.019,
                    sy: 1.066
                },
                "22": {
                    x: 90.776,
                    y: 116.996,
                    sx: 1.053,
                    sy: 1.116
                },
                "23": {
                    x: 89.514,
                    y: 115.14,
                    sx: 1.092,
                    sy: 1.175
                },
                "24": {
                    x: 88,
                    y: 113,
                    sx: 1.136,
                    sy: 1.241
                },
                "25": {
                    x: 88.02,
                    y: 113.05,
                    sx: 1.122,
                    sy: 1.216
                },
                "26": {
                    x: 88.001,
                    y: 113.024,
                    sx: 1.109,
                    sy: 1.193
                },
                "27": {
                    x: 87.988,
                    y: 113.02,
                    sx: 1.096,
                    sy: 1.171
                },
                "28": {
                    x: 88.035,
                    y: 113.039,
                    sx: 1.085,
                    sy: 1.15
                },
                "29": {
                    x: 87.99,
                    y: 113.027,
                    sx: 1.074,
                    sy: 1.131
                },
                "30": {
                    x: 88.002,
                    y: 112.987,
                    sx: 1.064,
                    sy: 1.113
                },
                "31": {
                    x: 88.024,
                    y: 113.018,
                    sx: 1.054,
                    sy: 1.096
                },
                "32": {
                    x: 88.004,
                    y: 113.022,
                    sx: 1.046,
                    sy: 1.081
                },
                "33": {
                    x: 87.992,
                    y: 112.997,
                    sx: 1.038,
                    sy: 1.067
                },
                "34": {
                    x: 88.039,
                    y: 112.994,
                    sx: 1.03,
                    sy: 1.054
                },
                "35": {
                    x: 88.043,
                    y: 113.011,
                    sx: 1.024,
                    sy: 1.043
                },
                "36": {
                    x: 88.005,
                    y: 112.999,
                    sx: 1.018,
                    sy: 1.033
                },
                "37": {
                    x: 88.027,
                    y: 113.009,
                    sx: 1.014,
                    sy: 1.024
                },
                "38": {
                    x: 88.006,
                    y: 112.992,
                    sx: 1.009,
                    sy: 1.017
                },
                "39": {
                    x: 87.994,
                    y: 112.995,
                    sx: 1.006,
                    sy: 1.011
                },
                "40": {
                    x: 88.04,
                    y: 112.969,
                    sx: 1.003,
                    sy: 1.006
                },
                "41": {
                    x: 87.995,
                    y: 112.968,
                    sx: 1.002,
                    sy: 1.003
                },
                "42": {
                    x: 88.008,
                    y: 112.985,
                    sx: 1,
                    sy: 1.001
                },
                "43": {
                    x: 88,
                    y: 113,
                    sy: 1
                },
                "44": {
                    x: 87.983,
                    y: 113.026,
                    sx: 1.007,
                    sy: 1.012
                },
                "45": {
                    x: 87.986,
                    y: 113.035,
                    sx: 1.013,
                    sy: 1.023
                },
                "46": {
                    x: 88.008,
                    y: 113.024,
                    sx: 1.019,
                    sy: 1.033
                },
                "47": {
                    x: 88.051,
                    y: 113.047,
                    sx: 1.024,
                    sy: 1.043
                },
                "48": {
                    x: 88.014,
                    y: 113.05,
                    sx: 1.03,
                    sy: 1.053
                },
                "49": {
                    x: 87.998,
                    y: 113.087,
                    sx: 1.035,
                    sy: 1.061
                },
                "50": {
                    x: 88.051,
                    y: 113.054,
                    sx: 1.039,
                    sy: 1.07
                },
                "51": {
                    x: 88.024,
                    sx: 1.043,
                    sy: 1.077
                },
                "52": {
                    x: 88.018,
                    y: 113.037,
                    sx: 1.047,
                    sy: 1.084
                },
                "53": {
                    x: 88.032,
                    y: 113.101,
                    sx: 1.051,
                    sy: 1.09
                },
                "54": {
                    x: 88.016,
                    y: 113.097,
                    sx: 1.054,
                    sy: 1.096
                },
                "55": {
                    x: 88.019,
                    y: 113.025,
                    sx: 1.057,
                    sy: 1.101
                },
                "56": {
                    x: 87.994,
                    y: 113.085,
                    sx: 1.06,
                    sy: 1.106
                },
                "57": {
                    x: 88.038,
                    y: 113.077,
                    sx: 1.062,
                    sy: 1.11
                },
                "58": {
                    x: 88.052,
                    y: 113.101,
                    sx: 1.064,
                    sy: 1.113
                },
                "59": {
                    x: 88.036,
                    y: 113.058,
                    sx: 1.065,
                    sy: 1.116
                },
                "60": {
                    x: 88.041,
                    y: 113.096,
                    sx: 1.066,
                    sy: 1.118
                },
                "61": {
                    x: 88.016,
                    y: 113.065,
                    sx: 1.067,
                    sy: 1.119
                },
                "62": {
                    x: 88.011,
                    y: 113.066,
                    sx: 1.068,
                    sy: 1.12
                },
                "63": {
                    x: 88,
                    y: 113.05
                },
                "64": {
                    x: 88.017,
                    y: 113.107,
                    sx: 1.066,
                    sy: 1.116
                },
                "65": {
                    x: 87.987,
                    y: 113.065,
                    sx: 1.064,
                    sy: 1.113
                },
                "66": {
                    x: 88.056,
                    y: 113.074,
                    sx: 1.061,
                    sy: 1.109
                },
                "67": {
                    x: 88.026,
                    y: 113.03,
                    sx: 1.059,
                    sy: 1.105
                },
                "68": {
                    x: 88.045,
                    y: 113.04,
                    sx: 1.057,
                    sy: 1.101
                },
                "69": {
                    x: 88.015,
                    y: 113.047,
                    sx: 1.055,
                    sy: 1.097
                },
                "70": {
                    x: 88.034,
                    y: 113.056,
                    sx: 1.053,
                    sy: 1.093
                },
                "71": {
                    x: 88.054,
                    y: 113.064,
                    sx: 1.05,
                    sy: 1.089
                },
                "72": {
                    x: 88.024,
                    y: 113.072,
                    sx: 1.048,
                    sy: 1.085
                },
                "73": {
                    x: 87.993,
                    y: 113.079,
                    sx: 1.046,
                    sy: 1.082
                },
                "74": {
                    x: 88.013,
                    y: 113.089,
                    sx: 1.044,
                    sy: 1.078
                },
                "75": {
                    x: 88.031,
                    y: 113.048,
                    sx: 1.042,
                    sy: 1.074
                },
                "76": {
                    x: 88.051,
                    y: 113.054,
                    sx: 1.039,
                    sy: 1.07
                },
                "77": {
                    x: 88.02,
                    y: 113.064,
                    sx: 1.037,
                    sy: 1.066
                },
                "78": {
                    x: 87.99,
                    y: 113.071,
                    sx: 1.035,
                    sy: 1.062
                },
                "79": {
                    x: 88.06,
                    y: 113.08,
                    sx: 1.033,
                    sy: 1.058
                },
                "80": {
                    x: 88.03,
                    y: 113.038,
                    sx: 1.031,
                    sy: 1.054
                },
                "81": {
                    x: 88.049,
                    y: 113.046,
                    sx: 1.028,
                    sy: 1.05
                },
                "82": {
                    x: 88.019,
                    y: 113.053,
                    sx: 1.026,
                    sy: 1.047
                },
                "83": {
                    x: 88.038,
                    y: 113.013,
                    sx: 1.024,
                    sy: 1.043
                },
                "84": {
                    x: 88.058,
                    y: 113.022,
                    sx: 1.022,
                    sy: 1.039
                },
                "85": {
                    x: 88.027,
                    y: 113.028,
                    sx: 1.02,
                    sy: 1.035
                },
                "86": {
                    x: 87.995,
                    y: 113.039,
                    sx: 1.017,
                    sy: 1.031
                },
                "87": {
                    x: 88.017,
                    y: 113.045,
                    sx: 1.015,
                    sy: 1.027
                },
                "88": {
                    x: 88.036,
                    y: 113.054,
                    sx: 1.013,
                    sy: 1.023
                },
                "89": {
                    x: 88.056,
                    y: 113.062,
                    sx: 1.011,
                    sy: 1.019
                },
                "90": {
                    x: 88.024,
                    y: 113.071,
                    sx: 1.009,
                    sy: 1.016
                },
                "91": {
                    x: 87.994,
                    y: 113.029,
                    sx: 1.007,
                    sy: 1.012
                },
                "92": {
                    x: 88.063,
                    y: 113.037,
                    sx: 1.004,
                    sy: 1.008
                },
                "93": {
                    x: 88.033,
                    y: 113.044,
                    sx: 1.002,
                    sy: 1.004
                },
                "94": {
                    x: 88,
                    y: 113,
                    sx: 1,
                    sy: 1
                },
                "95": {
                    x: 89.482,
                    y: 115.143,
                    sx: 0.984,
                    sy: 0.984
                },
                "96": {
                    x: 90.825,
                    y: 116.943,
                    sx: 0.971,
                    sy: 0.971
                },
                "97": {
                    x: 91.879,
                    y: 118.6,
                    sx: 0.959,
                    sy: 0.959
                },
                "98": {
                    x: 92.842,
                    y: 119.962,
                    sx: 0.949,
                    sy: 0.949
                },
                "99": {
                    x: 93.619,
                    y: 121.032,
                    sx: 0.941,
                    sy: 0.941
                },
                "100": {
                    x: 94.255,
                    y: 121.908,
                    sx: 0.934,
                    sy: 0.934
                },
                "101": {
                    x: 94.653,
                    y: 122.543,
                    sx: 0.93,
                    sy: 0.93
                },
                "102": {
                    x: 94.961,
                    y: 122.882,
                    sx: 0.927,
                    sy: 0.927
                },
                "103": {
                    x: 95,
                    y: 123,
                    sx: 0.926,
                    sy: 0.926
                },
                "104": {
                    x: 94.76,
                    y: 122.82,
                    sx: 0.933,
                    sy: 0.933
                },
                "105": {
                    x: 94.473,
                    y: 122.643,
                    sx: 0.94,
                    sy: 0.94
                },
                "106": {
                    x: 94.187,
                    y: 122.466,
                    sx: 0.947,
                    sy: 0.947
                },
                "107": {
                    x: 93.9,
                    y: 122.29,
                    sx: 0.954,
                    sy: 0.954
                },
                "108": {
                    x: 93.562,
                    y: 122.011,
                    sx: 0.961,
                    sy: 0.961
                },
                "109": {
                    x: 93.275,
                    y: 121.835,
                    sx: 0.968,
                    sy: 0.968
                },
                "110": {
                    x: 92.987,
                    y: 121.656,
                    sx: 0.975,
                    sy: 0.975
                },
                "111": {
                    x: 92.7,
                    y: 121.48,
                    sx: 0.981,
                    sy: 0.981
                },
                "112": {
                    x: 92.463,
                    y: 121.253,
                    sx: 0.988,
                    sy: 0.988
                },
                "113": {
                    x: 92.175,
                    y: 121.075,
                    sx: 0.995,
                    sy: 0.995
                },
                "114": {
                    x: 91.888,
                    y: 120.898,
                    sx: 1.002,
                    sy: 1.002
                },
                "115": {
                    x: 91.6,
                    y: 120.72,
                    sx: 1.009,
                    sy: 1.009
                },
                "116": {
                    x: 91.261,
                    y: 120.491,
                    sx: 1.016,
                    sy: 1.016
                },
                "117": {
                    x: 90.976,
                    y: 120.266,
                    sx: 1.023,
                    sy: 1.023
                },
                "118": {
                    x: 90.688,
                    y: 120.088,
                    sx: 1.03,
                    sy: 1.03
                },
                "119": {
                    x: 90.5,
                    y: 120,
                    sx: 1.037,
                    sy: 1.037
                },
                "120": {
                    x: 92.602,
                    y: 120.891,
                    sx: 1.003,
                    sy: 1.003
                },
                "121": {
                    x: 94.655,
                    y: 121.683,
                    sx: 0.969,
                    sy: 0.969
                },
                "122": {
                    x: 96.709,
                    y: 122.578,
                    sx: 0.936,
                    sy: 0.936
                },
                "123": {
                    x: 98.762,
                    y: 123.42,
                    sx: 0.902,
                    sy: 0.902
                },
                "124": {
                    x: 100.816,
                    y: 124.263,
                    sx: 0.868,
                    sy: 0.868
                },
                "125": {
                    x: 102.87,
                    y: 125.107,
                    sx: 0.834,
                    sy: 0.834
                },
                "126": {
                    x: 104.923,
                    y: 125.95,
                    sx: 0.801,
                    sy: 0.801
                },
                "127": {
                    x: 107.026,
                    y: 126.792,
                    sx: 0.767,
                    sy: 0.767
                },
                "128": {
                    x: 109.031,
                    y: 127.636,
                    sx: 0.733,
                    sy: 0.733
                },
                "129": {
                    x: 111.084,
                    y: 128.479,
                    sx: 0.699,
                    sy: 0.699
                },
                "130": {
                    x: 113.05,
                    y: 129.25,
                    sx: 0.666,
                    sy: 0.666
                }
            })
            .addTimedChild(instance11, 0, 131, {
                "0": {
                    x: 67.5,
                    y: 128.05,
                    sx: 0.812,
                    sy: 0.812,
                    ky: 3.142
                },
                "2": {
                    x: 67.499,
                    y: 128.594,
                    sy: 0.797
                },
                "3": {
                    y: 129.017,
                    sy: 0.785
                },
                "4": {
                    y: 129.318,
                    sy: 0.775
                },
                "5": {
                    y: 129.548,
                    sy: 0.769
                },
                "6": {
                    y: 129.705,
                    sy: 0.765
                },
                "7": {
                    x: 67.5,
                    y: 129.75,
                    sy: 0.763
                },
                "8": {
                    x: 67.499,
                    y: 129.682,
                    sy: 0.767
                },
                "9": {
                    y: 129.497,
                    sy: 0.771
                },
                "10": {
                    y: 129.34,
                    sy: 0.776
                },
                "11": {
                    y: 129.116,
                    sy: 0.782
                },
                "12": {
                    y: 128.869,
                    sy: 0.788
                },
                "13": {
                    y: 128.652,
                    sy: 0.795
                },
                "14": {
                    y: 128.365,
                    sy: 0.803
                },
                "15": {
                    x: 67.5,
                    y: 128.05,
                    sy: 0.812
                },
                "16": {
                    x: 67.593,
                    y: 127.925,
                    sx: 0.815,
                    sy: 0.817
                },
                "17": {
                    x: 67.873,
                    y: 127.45,
                    sx: 0.824,
                    sy: 0.831
                },
                "18": {
                    x: 68.341,
                    y: 126.728,
                    sx: 0.839,
                    sy: 0.854
                },
                "19": {
                    x: 68.995,
                    y: 125.656,
                    sx: 0.859,
                    sy: 0.886
                },
                "20": {
                    x: 69.837,
                    y: 124.336,
                    sx: 0.885,
                    sy: 0.927
                },
                "21": {
                    x: 70.866,
                    y: 122.716,
                    sx: 0.918,
                    sy: 0.978
                },
                "22": {
                    x: 72.032,
                    y: 120.797,
                    sx: 0.956,
                    sy: 1.038
                },
                "23": {
                    x: 73.434,
                    y: 118.578,
                    sx: 1,
                    sy: 1.107
                },
                "24": {
                    x: 75,
                    y: 116,
                    sx: 1.049,
                    sy: 1.185
                },
                "25": {
                    x: 75.043,
                    y: 116.043,
                    sx: 1.04,
                    sy: 1.162
                },
                "26": {
                    x: 75.073,
                    y: 116.057,
                    sx: 1.032,
                    sy: 1.14
                },
                "27": {
                    x: 75.038,
                    y: 116.044,
                    sx: 1.023,
                    sy: 1.119
                },
                "28": {
                    x: 75.09,
                    y: 116.004,
                    sx: 1.016,
                    sy: 1.1
                },
                "29": {
                    x: 75.025,
                    y: 115.986,
                    sx: 1.009,
                    sy: 1.082
                },
                "30": {
                    x: 75.048,
                    y: 115.988,
                    sx: 1.002,
                    sy: 1.065
                },
                "31": {
                    x: 75.055,
                    y: 116.014,
                    sx: 0.996,
                    sy: 1.05
                },
                "32": {
                    x: 75.096,
                    y: 116.012,
                    sx: 0.99,
                    sy: 1.035
                },
                "33": {
                    x: 75.075,
                    y: 116.032,
                    sx: 0.985,
                    sy: 1.022
                },
                "34": {
                    x: 75.088,
                    y: 115.973,
                    sx: 0.98,
                    sy: 1.01
                },
                "35": {
                    x: 75.037,
                    y: 116.036,
                    sx: 0.976,
                    sy: 1
                },
                "36": {
                    x: 75.071,
                    y: 116.021,
                    sx: 0.972,
                    sy: 0.991
                },
                "37": {
                    x: 75.091,
                    y: 115.978,
                    sx: 0.969,
                    sy: 0.982
                },
                "38": {
                    x: 75.046,
                    y: 116.007,
                    sx: 0.966,
                    sy: 0.976
                },
                "39": {
                    x: 75.087,
                    y: 116.008,
                    sx: 0.964,
                    sy: 0.97
                },
                "40": {
                    x: 75.062,
                    y: 115.98,
                    sx: 0.962,
                    sy: 0.966
                },
                "41": {
                    x: 75.074,
                    y: 115.975,
                    sx: 0.961,
                    sy: 0.962
                },
                "42": {
                    x: 75.07,
                    y: 115.993,
                    sx: 0.96,
                    sy: 0.961
                },
                "43": {
                    x: 75,
                    y: 116,
                    sy: 0.96
                },
                "44": {
                    x: 74.99,
                    y: 116.024,
                    sx: 0.964,
                    sy: 0.971
                },
                "45": {
                    x: 75.013,
                    y: 116.081,
                    sx: 0.968,
                    sy: 0.981
                },
                "46": {
                    x: 75.019,
                    y: 116.068,
                    sx: 0.972,
                    sy: 0.991
                },
                "47": {
                    x: 75.008,
                    y: 116.041,
                    sx: 0.976,
                    sy: 1
                },
                "48": {
                    x: 75.029,
                    y: 116.044,
                    sx: 0.98,
                    sy: 1.009
                },
                "49": {
                    x: 75.033,
                    y: 116.078,
                    sx: 0.983,
                    sy: 1.017
                },
                "50": {
                    x: 75.019,
                    y: 116.096,
                    sx: 0.986,
                    sy: 1.025
                },
                "51": {
                    x: 75.036,
                    y: 116.094,
                    sx: 0.989,
                    sy: 1.032
                },
                "52": {
                    x: 75.039,
                    y: 116.075,
                    sx: 0.991,
                    sy: 1.038
                },
                "53": {
                    x: 75.022,
                    y: 116.09,
                    sx: 0.994,
                    sy: 1.044
                },
                "54": {
                    x: 75.038,
                    y: 116.084,
                    sx: 0.996,
                    sy: 1.05
                },
                "55": {
                    x: 75.037,
                    y: 116.111,
                    sx: 0.998,
                    sy: 1.054
                },
                "56": {
                    x: 75.018,
                    y: 116.071,
                    sx: 0.999,
                    sy: 1.059
                },
                "57": {
                    x: 75.03,
                    y: 116.064,
                    sx: 1.001,
                    sy: 1.062
                },
                "58": {
                    x: 75.028,
                    y: 116.085,
                    sx: 1.002,
                    sy: 1.065
                },
                "59": {
                    x: 75.007,
                    y: 116.142,
                    sx: 1.003,
                    sy: 1.068
                },
                "60": {
                    x: 75.067,
                    y: 116.129,
                    sx: 1.004,
                    sy: 1.07
                },
                "61": {
                    x: 75.011,
                    y: 116.099,
                    sy: 1.071
                },
                "62": {
                    x: 75.037,
                    y: 116.103,
                    sx: 1.005,
                    sy: 1.072
                },
                "63": {
                    x: 75,
                    y: 116.05
                },
                "64": {
                    x: 74.99,
                    y: 116.055,
                    sx: 1.003,
                    sy: 1.069
                },
                "65": {
                    x: 74.984,
                    y: 116.064,
                    sx: 1.002,
                    sy: 1.065
                },
                "66": {
                    x: 74.975,
                    y: 116.071,
                    sx: 1,
                    sy: 1.062
                },
                "67": {
                    x: 75.019,
                    y: 116.078,
                    sx: 0.999,
                    sy: 1.058
                },
                "68": {
                    x: 75.01,
                    y: 116.084,
                    sx: 0.998,
                    sy: 1.054
                },
                "69": {
                    x: 75.002,
                    y: 116.043,
                    sx: 0.996,
                    sy: 1.051
                },
                "70": {
                    x: 74.995,
                    y: 116.05,
                    sx: 0.995,
                    sy: 1.047
                },
                "71": {
                    x: 74.987,
                    y: 116.057,
                    sx: 0.993,
                    sy: 1.043
                },
                "72": {
                    x: 74.978,
                    y: 116.066,
                    sx: 0.992,
                    sy: 1.04
                },
                "73": {
                    x: 75.022,
                    y: 116.072,
                    sx: 0.99,
                    sy: 1.036
                },
                "74": {
                    x: 75.013,
                    y: 116.079,
                    sx: 0.989,
                    sy: 1.033
                },
                "75": {
                    x: 75.006,
                    y: 116.038,
                    sx: 0.987,
                    sy: 1.029
                },
                "76": {
                    x: 74.998,
                    y: 116.047,
                    sx: 0.986,
                    sy: 1.025
                },
                "77": {
                    x: 74.989,
                    y: 116.053,
                    sx: 0.985,
                    sy: 1.022
                },
                "78": {
                    x: 74.983,
                    y: 116.06,
                    sx: 0.983,
                    sy: 1.018
                },
                "79": {
                    x: 75.024,
                    y: 116.069,
                    sx: 0.982,
                    sy: 1.014
                },
                "80": {
                    x: 75.018,
                    y: 116.026,
                    sx: 0.98,
                    sy: 1.011
                },
                "81": {
                    x: 75.009,
                    y: 116.033,
                    sx: 0.979,
                    sy: 1.007
                },
                "82": {
                    x: 75.002,
                    y: 116.041,
                    sx: 0.977,
                    sy: 1.004
                },
                "83": {
                    x: 74.994,
                    y: 116.048,
                    sx: 0.976,
                    sy: 1
                },
                "84": {
                    x: 74.985,
                    y: 116.055,
                    sx: 0.974,
                    sy: 0.996
                },
                "85": {
                    x: 75.029,
                    y: 116.012,
                    sx: 0.973,
                    sy: 0.993
                },
                "86": {
                    x: 75.02,
                    y: 116.021,
                    sx: 0.972,
                    sy: 0.989
                },
                "87": {
                    x: 75.012,
                    y: 116.028,
                    sx: 0.97,
                    sy: 0.985
                },
                "88": {
                    x: 75.005,
                    y: 116.035,
                    sx: 0.969,
                    sy: 0.982
                },
                "89": {
                    x: 74.997,
                    y: 116.043,
                    sx: 0.967,
                    sy: 0.978
                },
                "90": {
                    x: 74.989,
                    y: 116,
                    sx: 0.966,
                    sy: 0.974
                },
                "91": {
                    x: 75.032,
                    y: 116.007,
                    sx: 0.964,
                    sy: 0.971
                },
                "92": {
                    x: 75.023,
                    y: 116.016,
                    sx: 0.963,
                    sy: 0.967
                },
                "93": {
                    x: 75.016,
                    y: 116.024,
                    sx: 0.961,
                    sy: 0.964
                },
                "94": {
                    x: 75,
                    y: 116,
                    sx: 0.96,
                    sy: 0.96
                },
                "95": {
                    x: 73.476,
                    y: 118.601,
                    sx: 0.929,
                    sy: 0.929
                },
                "96": {
                    x: 72.037,
                    y: 120.793,
                    sx: 0.902,
                    sy: 0.902
                },
                "97": {
                    x: 70.833,
                    y: 122.726,
                    sx: 0.878,
                    sy: 0.878
                },
                "98": {
                    x: 69.814,
                    y: 124.349,
                    sx: 0.858,
                    sy: 0.858
                },
                "99": {
                    x: 69.031,
                    y: 125.715,
                    sx: 0.841,
                    sy: 0.841
                },
                "100": {
                    x: 68.332,
                    y: 126.719,
                    sx: 0.829,
                    sy: 0.829
                },
                "101": {
                    x: 67.871,
                    y: 127.468,
                    sx: 0.819,
                    sy: 0.819
                },
                "102": {
                    x: 67.594,
                    y: 127.958,
                    sx: 0.814,
                    sy: 0.814
                },
                "103": {
                    x: 67.5,
                    y: 128.05,
                    sx: 0.812,
                    sy: 0.812
                },
                "104": {
                    x: 67.672,
                    y: 127.962,
                    sx: 0.816,
                    sy: 0.816
                },
                "105": {
                    x: 67.846,
                    y: 127.875,
                    sx: 0.82,
                    sy: 0.82
                },
                "106": {
                    x: 67.969,
                    y: 127.739,
                    sx: 0.824,
                    sy: 0.824
                },
                "107": {
                    x: 68.145,
                    y: 127.656,
                    sx: 0.828,
                    sy: 0.828
                },
                "108": {
                    x: 68.318,
                    y: 127.52,
                    sx: 0.832,
                    sy: 0.832
                },
                "109": {
                    x: 68.441,
                    y: 127.433,
                    sx: 0.836,
                    sy: 0.836
                },
                "110": {
                    x: 68.615,
                    y: 127.347,
                    sx: 0.839,
                    sy: 0.839
                },
                "111": {
                    x: 68.788,
                    y: 127.26,
                    sx: 0.843,
                    sy: 0.843
                },
                "112": {
                    x: 68.961,
                    y: 127.172,
                    sx: 0.847,
                    sy: 0.847
                },
                "113": {
                    x: 69.084,
                    y: 127.085,
                    sx: 0.851,
                    sy: 0.851
                },
                "114": {
                    x: 69.258,
                    y: 126.949,
                    sx: 0.855,
                    sy: 0.855
                },
                "115": {
                    x: 69.433,
                    y: 126.866,
                    sx: 0.859,
                    sy: 0.859
                },
                "116": {
                    x: 69.556,
                    y: 126.73,
                    sx: 0.863,
                    sy: 0.863
                },
                "117": {
                    x: 69.73,
                    y: 126.643,
                    sx: 0.867,
                    sy: 0.867
                },
                "118": {
                    x: 69.903,
                    y: 126.557,
                    sx: 0.871,
                    sy: 0.871
                },
                "119": {
                    x: 70,
                    y: 126.4,
                    sx: 0.874,
                    sy: 0.874
                },
                "120": {
                    x: 69.416,
                    y: 126.648,
                    sx: 0.847,
                    sy: 0.847
                },
                "121": {
                    x: 68.78,
                    y: 126.896,
                    sx: 0.819,
                    sy: 0.819
                },
                "122": {
                    x: 68.145,
                    y: 127.196,
                    sx: 0.791,
                    sy: 0.791
                },
                "123": {
                    x: 67.512,
                    y: 127.444,
                    sx: 0.763,
                    sy: 0.764
                },
                "124": {
                    x: 66.876,
                    y: 127.693,
                    sx: 0.735,
                    sy: 0.736
                },
                "125": {
                    x: 66.192,
                    y: 127.945,
                    sx: 0.707,
                    sy: 0.708
                },
                "126": {
                    x: 65.557,
                    y: 128.193,
                    sx: 0.679,
                    sy: 0.681
                },
                "127": {
                    x: 64.923,
                    y: 128.443,
                    sx: 0.651,
                    sy: 0.653
                },
                "128": {
                    x: 64.288,
                    y: 128.741,
                    sx: 0.623,
                    sy: 0.625
                },
                "129": {
                    x: 63.654,
                    y: 128.991,
                    sx: 0.595,
                    sy: 0.598
                },
                "130": {
                    x: 63.05,
                    y: 129.25,
                    sx: 0.567,
                    sy: 0.57
                }
            })
            .addTimedChild(instance10, 0, 24, {
                "0": {
                    x: 96,
                    y: 41.85,
                    sx: 0.998,
                    sy: 0.997,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "2": {
                    x: 96.046,
                    y: 44.948
                },
                "3": {
                    y: 47.448
                },
                "4": {
                    y: 49.398
                },
                "5": {
                    y: 50.798
                },
                "6": {
                    y: 51.598
                },
                "7": {
                    x: 96,
                    y: 51.85
                },
                "8": {
                    x: 96.046,
                    y: 51.048
                },
                "9": {
                    y: 49.998
                },
                "10": {
                    y: 48.798
                },
                "11": {
                    y: 47.348
                },
                "12": {
                    y: 45.748
                },
                "13": {
                    y: 43.898
                },
                "14": {
                    x: 96,
                    y: 41.85
                },
                "15": {
                    x: 96.161,
                    y: 41.705,
                    kx: -0.004,
                    ky: 0.003
                },
                "16": {
                    x: 96.497,
                    y: 41.233,
                    kx: 0,
                    ky: 0,
                    r: 0.013
                },
                "17": {
                    x: 97.039,
                    y: 40.37,
                    r: 0.029
                },
                "18": {
                    x: 97.805,
                    y: 39.152,
                    kx: -0.052,
                    ky: 0.051,
                    r: 0
                },
                "19": {
                    x: 98.856,
                    y: 37.657,
                    kx: -0.081,
                    ky: 0.08
                },
                "20": {
                    x: 100.14,
                    y: 35.907,
                    kx: -0.117,
                    ky: 0.116
                },
                "21": {
                    x: 101.798,
                    y: 33.861,
                    kx: -0.159,
                    ky: 0.158
                },
                "22": {
                    x: 103.707,
                    y: 31.569,
                    kx: -0.207,
                    ky: 0.206
                },
                "23": {
                    x: 106,
                    y: 29,
                    kx: -0.262,
                    ky: 0.261
                }
            })
            .addTimedChild(instance9, 0, 24, {
                "0": {
                    x: 45,
                    y: 48.5,
                    r: 0
                },
                "2": {
                    y: 51.55
                },
                "3": {
                    y: 54.05
                },
                "4": {
                    y: 56
                },
                "5": {
                    y: 57.4
                },
                "6": {
                    y: 58.2
                },
                "7": {
                    y: 58.5
                },
                "8": {
                    y: 57.95
                },
                "9": {
                    y: 57.3
                },
                "10": {
                    y: 56.55
                },
                "11": {
                    y: 55.7
                },
                "12": {
                    y: 54.75
                },
                "13": {
                    y: 53.7
                },
                "14": {
                    y: 52.55
                },
                "15": {
                    y: 51.3
                },
                "16": {
                    y: 49.95
                },
                "17": {
                    y: 48.5
                },
                "18": {
                    x: 44.7,
                    y: 46.714,
                    r: 0.019
                },
                "19": {
                    x: 43.702,
                    y: 41.244,
                    r: 0.078
                },
                "20": {
                    x: 42.534,
                    y: 32.634,
                    r: 0.175
                },
                "21": {
                    x: 41.622,
                    y: 21.333,
                    r: 0.311
                },
                "22": {
                    x: 41.477,
                    y: 8.391,
                    r: 0.485
                },
                "23": {
                    x: 42.35,
                    y: -4.7,
                    r: 0.699
                }
            })
            .addTimedChild(instance8, 0, 24, {
                "0": {
                    x: -38,
                    y: -98,
                    r: 0
                },
                "2": {
                    y: -94.95
                },
                "3": {
                    y: -92.45
                },
                "4": {
                    y: -90.5
                },
                "5": {
                    y: -89.1
                },
                "6": {
                    y: -88.3
                },
                "7": {
                    y: -88
                },
                "8": {
                    y: -88.55
                },
                "9": {
                    y: -89.2
                },
                "10": {
                    y: -89.95
                },
                "11": {
                    y: -90.8
                },
                "12": {
                    y: -91.75
                },
                "13": {
                    y: -92.8
                },
                "14": {
                    y: -93.95
                },
                "15": {
                    y: -95.2
                },
                "16": {
                    y: -96.55
                },
                "17": {
                    y: -98
                },
                "18": {
                    x: -35.528,
                    y: -101.46,
                    r: 0.021
                },
                "19": {
                    x: -27.725,
                    y: -111.438,
                    r: 0.082
                },
                "20": {
                    x: -13.531,
                    y: -126.566,
                    r: 0.185
                },
                "21": {
                    x: 8.531,
                    y: -144.32,
                    r: 0.329
                },
                "22": {
                    x: 39.917,
                    y: -160.622,
                    r: 0.514
                },
                "23": {
                    x: 80.95,
                    y: -170.1,
                    r: 0.74
                }
            })
            .addTimedChild(instance7, 0, 24, {
                "0": {
                    x: 64,
                    y: 71,
                    sx: 1,
                    sy: 1,
                    r: -0.75
                },
                "2": {
                    x: 63.999,
                    y: 74.099
                },
                "3": {
                    y: 76.599
                },
                "4": {
                    y: 78.549
                },
                "5": {
                    y: 79.949
                },
                "6": {
                    y: 80.749
                },
                "7": {
                    x: 64,
                    y: 81
                },
                "8": {
                    x: 63.999,
                    y: 80.449
                },
                "9": {
                    y: 79.799
                },
                "10": {
                    y: 79.049
                },
                "11": {
                    y: 78.199
                },
                "12": {
                    y: 77.249
                },
                "13": {
                    y: 76.199
                },
                "14": {
                    y: 75.049
                },
                "15": {
                    y: 73.799
                },
                "16": {
                    y: 72.449
                },
                "17": {
                    x: 64,
                    y: 71
                },
                "18": {
                    x: 63.389,
                    y: 69.231,
                    sx: 0.986,
                    sy: 0.989,
                    r: -0.72
                },
                "19": {
                    x: 61.776,
                    y: 63.686,
                    sx: 0.945,
                    sy: 0.957,
                    r: -0.628
                },
                "20": {
                    x: 59.874,
                    y: 55.083,
                    sx: 0.876,
                    sy: 0.903,
                    r: -0.476
                },
                "21": {
                    x: 58.473,
                    y: 44.199,
                    sx: 0.779,
                    sy: 0.828,
                    r: -0.262
                },
                "22": {
                    x: 58.295,
                    y: 32.853,
                    sx: 0.655,
                    sy: 0.731,
                    r: 0.013
                },
                "23": {
                    x: 58.8,
                    y: 23.05,
                    sx: 0.503,
                    sy: 0.613,
                    r: 0.349
                }
            })
            .addTimedChild(instance6, 0, 24, {
                "0": {
                    x: 28,
                    y: 24,
                    r: 0
                },
                "2": {
                    y: 27.05
                },
                "3": {
                    y: 29.55
                },
                "4": {
                    y: 31.5
                },
                "5": {
                    y: 32.9
                },
                "6": {
                    y: 33.7
                },
                "7": {
                    y: 34
                },
                "8": {
                    y: 33.45
                },
                "9": {
                    y: 32.8
                },
                "10": {
                    y: 32.05
                },
                "11": {
                    y: 31.2
                },
                "12": {
                    y: 30.25
                },
                "13": {
                    y: 29.2
                },
                "14": {
                    y: 28.05
                },
                "15": {
                    y: 26.8
                },
                "16": {
                    y: 25.45
                },
                "17": {
                    y: 24
                },
                "18": {
                    x: 28.501,
                    y: 22.22,
                    r: 0.021
                },
                "19": {
                    x: 29.885,
                    y: 16.818,
                    r: 0.082
                },
                "20": {
                    x: 32.309,
                    y: 8.039,
                    r: 0.185
                },
                "21": {
                    x: 36,
                    y: -3.844,
                    r: 0.329
                },
                "22": {
                    x: 41.041,
                    y: -18.538,
                    r: 0.514
                },
                "23": {
                    x: 47.4,
                    y: -35.4,
                    r: 0.74
                }
            })
            .addTimedChild(instance5, 0, 24, {
                "0": {
                    x: -23,
                    y: 71,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.506
                },
                "2": {
                    y: 74.099
                },
                "3": {
                    y: 76.599
                },
                "4": {
                    y: 78.549
                },
                "5": {
                    y: 79.949
                },
                "6": {
                    y: 80.749
                },
                "7": {
                    y: 81
                },
                "8": {
                    y: 80.499
                },
                "9": {
                    y: 79.849
                },
                "10": {
                    y: 79.099
                },
                "11": {
                    y: 78.249
                },
                "12": {
                    y: 77.299
                },
                "13": {
                    y: 76.249
                },
                "14": {
                    y: 75.099
                },
                "15": {
                    y: 73.849
                },
                "16": {
                    y: 72.499
                },
                "17": {
                    y: 71
                },
                "18": {
                    x: -24.078,
                    y: 66.443,
                    sy: 1.002,
                    kx: 0.461,
                    ky: -0.471,
                    r: 0
                },
                "19": {
                    x: -26.369,
                    y: 52.612,
                    sy: 1.008,
                    kx: 0.325,
                    ky: -0.367
                },
                "20": {
                    x: -27.499,
                    y: 29.504,
                    sy: 1.019,
                    kx: 0.1,
                    ky: -0.194
                },
                "21": {
                    x: -23.18,
                    y: -2.004,
                    sy: 1.033,
                    kx: -0.216,
                    ky: 0.049
                },
                "22": {
                    x: -8.539,
                    y: -38.591,
                    sy: 1.052,
                    kx: -0.623,
                    ky: 0.361
                },
                "23": {
                    x: 20.2,
                    y: -73.8,
                    sy: 1.075,
                    kx: -1.12,
                    ky: 0.743
                }
            })
            .addTimedChild(instance4, 0, 24, {
                "0": {
                    x: 77,
                    y: 20,
                    r: 0
                },
                "2": {
                    y: 23.05
                },
                "3": {
                    y: 25.55
                },
                "4": {
                    y: 27.5
                },
                "5": {
                    y: 28.9
                },
                "6": {
                    y: 29.7
                },
                "7": {
                    y: 30
                },
                "8": {
                    y: 29.45
                },
                "9": {
                    y: 28.8
                },
                "10": {
                    y: 28.05
                },
                "11": {
                    y: 27.2
                },
                "12": {
                    y: 26.25
                },
                "13": {
                    y: 25.2
                },
                "14": {
                    y: 24.05
                },
                "15": {
                    y: 22.8
                },
                "16": {
                    y: 21.45
                },
                "17": {
                    y: 20
                },
                "18": {
                    x: 77.172,
                    y: 19.128,
                    r: 0.021
                },
                "19": {
                    x: 77.647,
                    y: 16.505,
                    r: 0.082
                },
                "20": {
                    x: 78.559,
                    y: 12.318,
                    r: 0.185
                },
                "21": {
                    x: 80.167,
                    y: 6.892,
                    r: 0.329
                },
                "22": {
                    x: 82.73,
                    y: 0.759,
                    r: 0.514
                },
                "23": {
                    x: 86.3,
                    y: -5.35,
                    r: 0.74
                }
            })
            .addTimedChild(instance3, 0, 24, {
                "0": {
                    x: 73,
                    y: 21,
                    r: -0.506
                },
                "2": {
                    x: 73.049,
                    y: 24.95
                },
                "3": {
                    y: 28.2
                },
                "4": {
                    y: 30.75
                },
                "5": {
                    y: 32.55
                },
                "6": {
                    y: 33.65
                },
                "7": {
                    x: 73,
                    y: 34
                },
                "8": {
                    x: 73.099,
                    y: 33.299
                },
                "9": {
                    y: 32.449
                },
                "10": {
                    y: 31.449
                },
                "11": {
                    y: 30.349
                },
                "12": {
                    y: 29.149
                },
                "13": {
                    y: 27.749
                },
                "14": {
                    y: 26.249
                },
                "15": {
                    y: 24.649
                },
                "16": {
                    y: 22.899
                },
                "17": {
                    x: 73,
                    y: 21
                },
                "18": {
                    x: 73.052,
                    y: 20.247,
                    r: -0.486
                },
                "19": {
                    x: 72.978,
                    y: 18.023,
                    r: -0.424
                },
                "20": {
                    x: 73.292,
                    y: 14.165,
                    r: -0.321
                },
                "21": {
                    x: 74.458,
                    y: 8.597,
                    r: -0.177
                },
                "22": {
                    x: 77.257,
                    y: 1.411,
                    r: 0.008
                },
                "23": {
                    x: 82.6,
                    y: -7.3,
                    r: 0.234
                }
            })
            .addTimedChild(instance2, 0, 24, {
                "0": {
                    x: 30,
                    y: 6,
                    r: 0.506
                },
                "2": {
                    y: 10
                },
                "3": {
                    y: 13.25
                },
                "4": {
                    y: 15.8
                },
                "5": {
                    y: 17.6
                },
                "6": {
                    y: 18.7
                },
                "7": {
                    y: 19
                },
                "8": {
                    y: 18.3
                },
                "9": {
                    y: 17.45
                },
                "10": {
                    y: 16.45
                },
                "11": {
                    y: 15.35
                },
                "12": {
                    y: 14.15
                },
                "13": {
                    y: 12.75
                },
                "14": {
                    y: 11.25
                },
                "15": {
                    y: 9.65
                },
                "16": {
                    y: 7.9
                },
                "17": {
                    y: 6
                },
                "18": {
                    x: 30.869,
                    y: 4.415,
                    r: 0.527
                },
                "19": {
                    x: 33.505,
                    y: -0.457,
                    r: 0.588
                },
                "20": {
                    x: 37.784,
                    y: -8.435,
                    r: 0.691
                },
                "21": {
                    x: 43.855,
                    y: -19.534,
                    r: 0.835
                },
                "22": {
                    x: 51.629,
                    y: -33.581,
                    r: 1.02
                },
                "23": {
                    x: 61,
                    y: -50.35,
                    r: 1.246
                }
            })
            .addTimedChild(instance20, 24, 75, {
                "24": {
                    x: 47.2,
                    y: -169.85,
                    sx: 1.06,
                    sy: 1.061,
                    kx: 0,
                    ky: 0,
                    r: 0.243
                },
                "25": {
                    x: 41.71,
                    y: -167.964,
                    sx: 1.054,
                    sy: 1.055,
                    r: 0.218
                },
                "26": {
                    x: 36.528,
                    y: -166.064,
                    sx: 1.048,
                    sy: 1.049,
                    r: 0.194
                },
                "27": {
                    x: 31.765,
                    y: -164.271,
                    sx: 1.043,
                    sy: 1.043,
                    r: 0.172
                },
                "28": {
                    x: 27.36,
                    y: -162.452,
                    sx: 1.038,
                    sy: 1.038,
                    r: 0.151
                },
                "29": {
                    x: 23.213,
                    y: -160.82,
                    sx: 1.033,
                    sy: 1.033,
                    r: 0.132
                },
                "30": {
                    x: 19.475,
                    y: -159.24,
                    sx: 1.028,
                    sy: 1.028,
                    r: 0.114
                },
                "31": {
                    x: 16.089,
                    y: -157.775,
                    sx: 1.024,
                    sy: 1.024,
                    r: 0.097
                },
                "32": {
                    x: 12.903,
                    y: -156.397,
                    sx: 1.02,
                    sy: 1.02,
                    r: 0.081
                },
                "33": {
                    x: 10.167,
                    y: -155.158,
                    sx: 1.017,
                    sy: 1.017,
                    r: 0.067
                },
                "34": {
                    x: 7.622,
                    y: -153.971,
                    sx: 1.013,
                    sy: 1.014,
                    kx: -0.054,
                    ky: 0.055,
                    r: 0
                },
                "35": {
                    x: 5.37,
                    y: -152.894,
                    sx: 1.011,
                    sy: 1.011,
                    kx: 0,
                    ky: 0,
                    r: 0.043
                },
                "36": {
                    x: 3.403,
                    y: -151.939,
                    sx: 1.008,
                    sy: 1.008,
                    r: 0.033
                },
                "37": {
                    x: 1.719,
                    y: -151.155,
                    sx: 1.006,
                    sy: 1.006,
                    r: 0.024
                },
                "38": {
                    x: 0.319,
                    y: -150.459,
                    sx: 1.004,
                    sy: 1.004,
                    r: 0.017
                },
                "39": {
                    x: -0.848,
                    y: -149.9,
                    sx: 1.003,
                    sy: 1.003,
                    r: 0.011
                },
                "40": {
                    x: -1.74,
                    y: -149.482,
                    sx: 1.001,
                    sy: 1.001,
                    r: 0.006
                },
                "41": {
                    x: -2.351,
                    y: -149.162,
                    r: 0.003
                },
                "42": {
                    x: -2.739,
                    y: -148.939,
                    sx: 1,
                    sy: 1,
                    r: 0.001
                },
                "43": {
                    x: -3,
                    y: -149,
                    r: 0
                },
                "44": {
                    x: -0.484,
                    y: -150.677,
                    sy: 1.005,
                    kx: -0.011,
                    ky: 0.012
                },
                "45": {
                    x: 1.865,
                    y: -152.25,
                    sy: 1.01,
                    kx: -0.022,
                    ky: 0.023
                },
                "46": {
                    x: 4.089,
                    y: -153.672,
                    sy: 1.014,
                    kx: -0.032,
                    ky: 0.034
                },
                "47": {
                    x: 6.293,
                    y: -154.986,
                    sy: 1.019,
                    kx: -0.041,
                    ky: 0.044
                },
                "48": {
                    x: 8.365,
                    y: -156.304,
                    sy: 1.023,
                    kx: -0.05,
                    ky: 0.054
                },
                "49": {
                    x: 10.26,
                    y: -157.472,
                    sy: 1.026,
                    kx: -0.058,
                    ky: 0.063
                },
                "50": {
                    x: 11.973,
                    y: -158.545,
                    sy: 1.03,
                    kx: -0.066,
                    ky: 0.071
                },
                "51": {
                    x: 13.655,
                    y: -159.572,
                    sx: 1.001,
                    sy: 1.033,
                    kx: -0.073,
                    ky: 0.079
                },
                "52": {
                    x: 15.248,
                    y: -160.51,
                    sy: 1.036,
                    kx: -0.08,
                    ky: 0.086
                },
                "53": {
                    x: 16.659,
                    y: -161.259,
                    sy: 1.039,
                    kx: -0.086,
                    ky: 0.092
                },
                "54": {
                    x: 17.979,
                    y: -162.017,
                    sy: 1.041,
                    kx: -0.091,
                    ky: 0.098
                },
                "55": {
                    x: 19.163,
                    y: -162.69,
                    sy: 1.044,
                    kx: -0.096,
                    ky: 0.104
                },
                "56": {
                    x: 20.155,
                    y: -163.274,
                    sy: 1.046,
                    kx: -0.1,
                    ky: 0.108
                },
                "57": {
                    x: 21.061,
                    y: -163.782,
                    sy: 1.047,
                    kx: -0.104,
                    ky: 0.112
                },
                "58": {
                    x: 21.869,
                    y: -164.199,
                    sy: 1.049,
                    kx: -0.107,
                    ky: 0.116
                },
                "59": {
                    x: 22.441,
                    y: -164.539,
                    sy: 1.05,
                    kx: -0.11,
                    ky: 0.118
                },
                "60": {
                    x: 22.916,
                    y: -164.843,
                    sy: 1.051,
                    kx: -0.112,
                    ky: 0.121
                },
                "61": {
                    x: 23.251,
                    y: -164.97,
                    kx: -0.113,
                    ky: 0.122
                },
                "62": {
                    x: 23.49,
                    y: -165.112,
                    sy: 1.052,
                    kx: -0.114,
                    ky: 0.123
                },
                "63": {
                    x: 23.45,
                    y: -165.05
                },
                "64": {
                    x: 22.614,
                    y: -164.564,
                    sy: 1.05,
                    kx: -0.111,
                    ky: 0.119
                },
                "65": {
                    x: 21.726,
                    y: -164.039,
                    sy: 1.049,
                    kx: -0.107,
                    ky: 0.115
                },
                "66": {
                    x: 20.842,
                    y: -163.558,
                    sy: 1.047,
                    kx: -0.103,
                    ky: 0.111
                },
                "67": {
                    x: 19.961,
                    y: -163.072,
                    sy: 1.045,
                    kx: -0.1,
                    ky: 0.107
                },
                "68": {
                    x: 19.027,
                    y: -162.583,
                    sy: 1.043,
                    kx: -0.096,
                    ky: 0.103
                },
                "69": {
                    x: 18.201,
                    y: -162.095,
                    sy: 1.042,
                    kx: -0.092,
                    ky: 0.099
                },
                "70": {
                    x: 17.271,
                    y: -161.554,
                    sy: 1.04,
                    kx: -0.088,
                    ky: 0.095
                },
                "71": {
                    x: 16.446,
                    y: -161.061,
                    sy: 1.038,
                    kx: -0.085,
                    ky: 0.091
                },
                "72": {
                    x: 15.521,
                    y: -160.512,
                    sy: 1.037,
                    kx: -0.081,
                    ky: 0.088
                },
                "73": {
                    x: 14.697,
                    y: -160.014,
                    sy: 1.035,
                    kx: -0.077,
                    ky: 0.084
                },
                "74": {
                    x: 13.777,
                    y: -159.513,
                    sy: 1.033,
                    kx: -0.074,
                    ky: 0.08
                },
                "75": {
                    x: 12.955,
                    y: -158.961,
                    sy: 1.032,
                    kx: -0.07,
                    ky: 0.076
                },
                "76": {
                    x: 12.041,
                    y: -158.453,
                    sx: 1,
                    sy: 1.03,
                    kx: -0.066,
                    ky: 0.072
                },
                "77": {
                    x: 11.224,
                    y: -157.947,
                    sy: 1.028,
                    kx: -0.063,
                    ky: 0.068
                },
                "78": {
                    x: 10.31,
                    y: -157.436,
                    sy: 1.027,
                    kx: -0.059,
                    ky: 0.064
                },
                "79": {
                    x: 9.547,
                    y: -156.92,
                    sy: 1.025,
                    kx: -0.055,
                    ky: 0.06
                },
                "80": {
                    x: 8.637,
                    y: -156.406,
                    sy: 1.023,
                    kx: -0.052,
                    ky: 0.056
                },
                "81": {
                    x: 7.831,
                    y: -155.889,
                    sy: 1.022,
                    kx: -0.048,
                    ky: 0.052
                },
                "82": {
                    x: 6.97,
                    y: -155.418,
                    sy: 1.02,
                    kx: -0.044,
                    ky: 0.048
                },
                "83": {
                    x: 6.116,
                    y: -154.897,
                    sy: 1.018,
                    kx: -0.041,
                    ky: 0.044
                },
                "84": {
                    x: 5.262,
                    y: -154.37,
                    sy: 1.017,
                    kx: -0.037,
                    ky: 0.04
                },
                "85": {
                    x: 4.46,
                    y: -153.796,
                    sy: 1.015,
                    kx: -0.033,
                    ky: 0.036
                },
                "86": {
                    x: 3.613,
                    y: -153.267,
                    sy: 1.013,
                    kx: -0.03,
                    ky: 0.032
                },
                "87": {
                    x: 2.763,
                    y: -152.736,
                    sy: 1.012,
                    kx: -0.026,
                    ky: 0.028
                },
                "88": {
                    x: 1.915,
                    y: -152.199,
                    sy: 1.01,
                    kx: -0.022,
                    ky: 0.024
                },
                "89": {
                    x: 1.12,
                    y: -151.668,
                    sy: 1.008,
                    kx: -0.018,
                    ky: 0.02
                },
                "90": {
                    x: 0.281,
                    y: -151.131,
                    sy: 1.007,
                    kx: -0.015,
                    ky: 0.016
                },
                "91": {
                    x: -0.51,
                    y: -150.589,
                    sy: 1.005,
                    kx: -0.011,
                    ky: 0.012
                },
                "92": {
                    x: -1.35,
                    y: -150.047,
                    sy: 1.003,
                    kx: -0.007,
                    ky: 0.008
                },
                "93": {
                    x: -2.139,
                    y: -149.503,
                    sy: 1.002,
                    kx: 0,
                    ky: 0,
                    r: 0.004
                },
                "94": {
                    x: -3,
                    y: -149,
                    sy: 1,
                    r: 0
                },
                "95": {
                    x: 13.223,
                    y: -157.014,
                    r: 0.08
                },
                "96": {
                    x: 25.174,
                    y: -162.219,
                    r: 0.137
                },
                "97": {
                    x: 32.471,
                    y: -165.191,
                    r: 0.171
                },
                "98": {
                    x: 34.9,
                    y: -166.2,
                    r: 0.182
                }
            })
            .addTimedChild(instance19, 24, 75, {
                "24": {
                    x: 110.85,
                    y: -37.55,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.383
                },
                "25": {
                    x: 108.438,
                    y: -37.571,
                    r: 0.344
                },
                "26": {
                    x: 106.107,
                    y: -37.502,
                    r: 0.307
                },
                "27": {
                    x: 103.931,
                    y: -37.442,
                    r: 0.272
                },
                "28": {
                    x: 101.942,
                    y: -37.352,
                    r: 0.239
                },
                "29": {
                    x: 100.108,
                    y: -37.237,
                    r: 0.208
                },
                "30": {
                    x: 98.403,
                    y: -37.153,
                    r: 0.179
                },
                "31": {
                    x: 96.799,
                    y: -37.01,
                    r: 0.153
                },
                "32": {
                    x: 95.358,
                    y: -36.918,
                    r: 0.128
                },
                "33": {
                    x: 94.051,
                    y: -36.781,
                    r: 0.106
                },
                "34": {
                    x: 92.892,
                    y: -36.661,
                    r: 0.086
                },
                "35": {
                    x: 91.892,
                    y: -36.563,
                    r: 0.068
                },
                "36": {
                    x: 90.966,
                    y: -36.496,
                    r: 0.052
                },
                "37": {
                    x: 90.221,
                    y: -36.368,
                    r: 0.038
                },
                "38": {
                    x: 89.563,
                    y: -36.333,
                    r: 0.027
                },
                "39": {
                    x: 88.954,
                    y: -36.245,
                    r: 0.017
                },
                "40": {
                    x: 88.598,
                    y: -36.213,
                    r: 0.01
                },
                "41": {
                    x: 88.294,
                    y: -36.186,
                    r: 0.004
                },
                "42": {
                    x: 88.101,
                    y: -36.169,
                    r: 0.001
                },
                "43": {
                    x: 88,
                    y: -36,
                    r: 0
                },
                "44": {
                    x: 89.099,
                    y: -36.467,
                    sy: 1.002,
                    kx: -0.018,
                    ky: 0.019
                },
                "45": {
                    x: 90.038,
                    y: -36.856,
                    sy: 1.003,
                    kx: -0.035,
                    ky: 0.037
                },
                "46": {
                    x: 90.969,
                    y: -37.171,
                    sx: 1.001,
                    sy: 1.005,
                    kx: -0.051,
                    ky: 0.055
                },
                "47": {
                    x: 91.948,
                    y: -37.512,
                    sy: 1.007,
                    kx: -0.066,
                    ky: 0.071
                },
                "48": {
                    x: 92.73,
                    y: -37.881,
                    sy: 1.008,
                    kx: -0.08,
                    ky: 0.086
                },
                "49": {
                    x: 93.513,
                    y: -38.131,
                    sy: 1.009,
                    kx: -0.094,
                    ky: 0.101
                },
                "50": {
                    x: 94.256,
                    y: -38.464,
                    sy: 1.011,
                    kx: -0.106,
                    ky: 0.114
                },
                "51": {
                    x: 94.959,
                    y: -38.627,
                    sx: 1.002,
                    sy: 1.012,
                    kx: -0.118,
                    ky: 0.126
                },
                "52": {
                    x: 95.625,
                    y: -38.927,
                    sy: 1.013,
                    kx: -0.128,
                    ky: 0.138
                },
                "53": {
                    x: 96.16,
                    y: -39.058,
                    sy: 1.014,
                    kx: -0.138,
                    ky: 0.148
                },
                "54": {
                    x: 96.716,
                    y: -39.278,
                    sy: 1.015,
                    kx: -0.146,
                    ky: 0.157
                },
                "55": {
                    x: 97.193,
                    y: -39.382,
                    kx: -0.154,
                    ky: 0.166
                },
                "56": {
                    x: 97.643,
                    y: -39.573,
                    sy: 1.016,
                    kx: -0.161,
                    ky: 0.173
                },
                "57": {
                    x: 97.919,
                    y: -39.701,
                    sy: 1.017,
                    kx: -0.167,
                    ky: 0.179
                },
                "58": {
                    x: 98.275,
                    y: -39.865,
                    kx: -0.172,
                    ky: 0.185
                },
                "59": {
                    x: 98.508,
                    y: -39.868,
                    sy: 1.018,
                    kx: -0.176,
                    ky: 0.189
                },
                "60": {
                    x: 98.722,
                    y: -39.909,
                    kx: -0.179,
                    ky: 0.193
                },
                "61": {
                    x: 98.866,
                    y: -39.989,
                    kx: -0.182,
                    ky: 0.195
                },
                "62": {
                    x: 98.994,
                    y: -40.005,
                    kx: -0.183,
                    ky: 0.197
                },
                "63": {
                    x: 98.9,
                    y: -39.95,
                    kx: -0.184
                },
                "64": {
                    x: 98.554,
                    y: -39.888,
                    kx: -0.178,
                    ky: 0.191
                },
                "65": {
                    x: 98.158,
                    y: -39.78,
                    sy: 1.017,
                    kx: -0.172,
                    ky: 0.184
                },
                "66": {
                    x: 97.807,
                    y: -39.667,
                    sy: 1.016,
                    kx: -0.166,
                    ky: 0.178
                },
                "67": {
                    x: 97.502,
                    y: -39.505,
                    kx: -0.16,
                    ky: 0.172
                },
                "68": {
                    x: 97.143,
                    y: -39.389,
                    sy: 1.015,
                    kx: -0.154,
                    ky: 0.165
                },
                "69": {
                    x: 96.731,
                    y: -39.274,
                    kx: -0.148,
                    ky: 0.159
                },
                "70": {
                    x: 96.366,
                    y: -39.154,
                    sy: 1.014,
                    kx: -0.142,
                    ky: 0.153
                },
                "71": {
                    x: 95.998,
                    y: -38.988,
                    kx: -0.136,
                    ky: 0.146
                },
                "72": {
                    x: 95.674,
                    y: -38.917,
                    sy: 1.013,
                    kx: -0.13,
                    ky: 0.14
                },
                "73": {
                    x: 95.299,
                    y: -38.744,
                    sy: 1.012,
                    kx: -0.124,
                    ky: 0.134
                },
                "74": {
                    x: 94.919,
                    y: -38.618,
                    kx: -0.118,
                    ky: 0.127
                },
                "75": {
                    x: 94.591,
                    y: -38.492,
                    sy: 1.011,
                    kx: -0.113,
                    ky: 0.121
                },
                "76": {
                    x: 94.202,
                    y: -38.417,
                    sx: 1.001,
                    kx: -0.107,
                    ky: 0.114
                },
                "77": {
                    x: 93.813,
                    y: -38.286,
                    sy: 1.01,
                    kx: -0.101,
                    ky: 0.108
                },
                "78": {
                    x: 93.52,
                    y: -38.105,
                    sy: 1.009,
                    kx: -0.095,
                    ky: 0.102
                },
                "79": {
                    x: 93.172,
                    y: -38.022,
                    kx: -0.089,
                    ky: 0.095
                },
                "80": {
                    x: 92.824,
                    y: -37.887,
                    sy: 1.008,
                    kx: -0.083,
                    ky: 0.089
                },
                "81": {
                    x: 92.421,
                    y: -37.751,
                    kx: -0.077,
                    ky: 0.083
                },
                "82": {
                    x: 92.064,
                    y: -37.562,
                    sy: 1.007,
                    kx: -0.071,
                    ky: 0.076
                },
                "83": {
                    x: 91.804,
                    y: -37.471,
                    sy: 1.006,
                    kx: -0.065,
                    ky: 0.07
                },
                "84": {
                    x: 91.441,
                    y: -37.33,
                    kx: -0.059,
                    ky: 0.064
                },
                "85": {
                    x: 91.076,
                    y: -37.184,
                    sy: 1.005,
                    kx: -0.053,
                    ky: 0.057
                },
                "86": {
                    x: 90.705,
                    y: -37.089,
                    kx: -0.047,
                    ky: 0.051
                },
                "87": {
                    x: 90.381,
                    y: -36.943,
                    sy: 1.004,
                    kx: -0.041,
                    ky: 0.045
                },
                "88": {
                    x: 90.005,
                    y: -36.791,
                    sx: 1,
                    sy: 1.003,
                    kx: -0.036,
                    ky: 0.038
                },
                "89": {
                    x: 89.673,
                    y: -36.691,
                    kx: -0.03,
                    ky: 0.032
                },
                "90": {
                    x: 89.341,
                    y: -36.535,
                    sy: 1.002,
                    kx: -0.024,
                    ky: 0.025
                },
                "91": {
                    x: 89.006,
                    y: -36.38,
                    kx: -0.018,
                    ky: 0.019
                },
                "92": {
                    x: 88.665,
                    y: -36.221,
                    sy: 1.001,
                    kx: -0.012,
                    ky: 0.013
                },
                "93": {
                    x: 88.271,
                    y: -36.162,
                    kx: 0,
                    ky: 0,
                    r: 0.006
                },
                "94": {
                    x: 88,
                    y: -36,
                    sy: 1,
                    r: 0
                },
                "95": {
                    x: 94.886,
                    y: -37.229,
                    r: 0.08
                },
                "96": {
                    x: 99.833,
                    y: -37.977,
                    r: 0.137
                },
                "97": {
                    x: 102.888,
                    y: -38.467,
                    r: 0.171
                },
                "98": {
                    x: 103.9,
                    y: -38.55,
                    r: 0.182
                }
            })
            .addTimedChild(instance18, 24, 75, {
                "24": {
                    x: 39.1,
                    y: -105.75,
                    sx: 1.996,
                    sy: 1,
                    r: 0.243
                },
                "25": {
                    x: 36.231,
                    y: -103.522,
                    sx: 1.894,
                    r: 0.218
                },
                "26": {
                    x: 33.511,
                    y: -101.404,
                    sx: 1.798,
                    r: 0.194
                },
                "27": {
                    x: 30.949,
                    y: -99.452,
                    sx: 1.706,
                    r: 0.172
                },
                "28": {
                    x: 28.598,
                    y: -97.628,
                    sx: 1.621,
                    r: 0.151
                },
                "29": {
                    x: 26.415,
                    y: -96.001,
                    sx: 1.541,
                    r: 0.132
                },
                "30": {
                    x: 24.451,
                    y: -94.528,
                    sx: 1.466,
                    r: 0.114
                },
                "31": {
                    x: 22.563,
                    y: -93.17,
                    sx: 1.397,
                    r: 0.097
                },
                "32": {
                    x: 20.851,
                    y: -91.944,
                    sx: 1.334,
                    r: 0.081
                },
                "33": {
                    x: 19.319,
                    y: -90.852,
                    sx: 1.276,
                    r: 0.067
                },
                "34": {
                    x: 17.917,
                    y: -89.859,
                    sx: 1.223,
                    r: 0.054
                },
                "35": {
                    x: 16.598,
                    y: -88.973,
                    sx: 1.177,
                    r: 0.043
                },
                "36": {
                    x: 15.562,
                    y: -88.249,
                    sx: 1.135,
                    r: 0.033
                },
                "37": {
                    x: 14.559,
                    y: -87.643,
                    sx: 1.099,
                    r: 0.024
                },
                "38": {
                    x: 13.74,
                    y: -87.066,
                    sx: 1.069,
                    r: 0.017
                },
                "39": {
                    x: 13.108,
                    y: -86.617,
                    sx: 1.044,
                    r: 0.011
                },
                "40": {
                    x: 12.608,
                    y: -86.302,
                    sx: 1.025,
                    r: 0.006
                },
                "41": {
                    x: 12.194,
                    y: -86.076,
                    sx: 1.011,
                    r: 0.003
                },
                "42": {
                    x: 11.969,
                    y: -85.939,
                    sx: 1.003,
                    r: 0.001
                },
                "43": {
                    x: 12,
                    y: -86,
                    sx: 1,
                    r: 0
                },
                "44": {
                    x: 14.141,
                    y: -87.399,
                    sx: 1.007,
                    sy: 1.013,
                    r: 0.012
                },
                "45": {
                    x: 16.051,
                    y: -88.688,
                    sx: 1.014,
                    sy: 1.026,
                    r: 0.023
                },
                "46": {
                    x: 17.924,
                    y: -89.863,
                    sx: 1.02,
                    sy: 1.038,
                    r: 0.033
                },
                "47": {
                    x: 19.657,
                    y: -91.027,
                    sx: 1.026,
                    sy: 1.049,
                    r: 0.043
                },
                "48": {
                    x: 21.345,
                    y: -92.132,
                    sx: 1.032,
                    sy: 1.06,
                    r: 0.052
                },
                "49": {
                    x: 22.938,
                    y: -93.079,
                    sx: 1.037,
                    sy: 1.07,
                    r: 0.061
                },
                "50": {
                    x: 24.38,
                    y: -94.069,
                    sx: 1.042,
                    sy: 1.079,
                    r: 0.069
                },
                "51": {
                    x: 25.77,
                    y: -94.908,
                    sx: 1.046,
                    sy: 1.088,
                    r: 0.076
                },
                "52": {
                    x: 27.006,
                    y: -95.741,
                    sx: 1.051,
                    sy: 1.095,
                    r: 0.083
                },
                "53": {
                    x: 28.135,
                    y: -96.425,
                    sx: 1.054,
                    sy: 1.103,
                    r: 0.089
                },
                "54": {
                    x: 29.105,
                    y: -97.106,
                    sx: 1.058,
                    sy: 1.109,
                    r: 0.095
                },
                "55": {
                    x: 30.016,
                    y: -97.69,
                    sx: 1.061,
                    sy: 1.115,
                    r: 0.1
                },
                "56": {
                    x: 30.862,
                    y: -98.175,
                    sx: 1.064,
                    sy: 1.12,
                    r: 0.104
                },
                "57": {
                    x: 31.596,
                    y: -98.614,
                    sx: 1.066,
                    sy: 1.125,
                    r: 0.108
                },
                "58": {
                    x: 32.216,
                    y: -99.008,
                    sx: 1.068,
                    sy: 1.128,
                    r: 0.111
                },
                "59": {
                    x: 32.668,
                    y: -99.305,
                    sx: 1.07,
                    sy: 1.131,
                    r: 0.114
                },
                "60": {
                    x: 33.056,
                    y: -99.606,
                    sx: 1.071,
                    sy: 1.134,
                    r: 0.116
                },
                "61": {
                    x: 33.375,
                    y: -99.766,
                    sx: 1.072,
                    sy: 1.135,
                    r: 0.118
                },
                "62": {
                    x: 33.527,
                    y: -99.883,
                    sy: 1.136
                },
                "63": {
                    x: 33.6,
                    y: -99.9,
                    sy: 1.137,
                    r: 0.119
                },
                "64": {
                    x: 32.976,
                    y: -99.483,
                    sx: 1.07,
                    sy: 1.132,
                    r: 0.115
                },
                "65": {
                    x: 32.204,
                    y: -99.065,
                    sx: 1.068,
                    sy: 1.128,
                    r: 0.111
                },
                "66": {
                    x: 31.532,
                    y: -98.597,
                    sx: 1.065,
                    sy: 1.124,
                    r: 0.107
                },
                "67": {
                    x: 30.815,
                    y: -98.176,
                    sx: 1.063,
                    sy: 1.119,
                    r: 0.103
                },
                "68": {
                    x: 30.15,
                    y: -97.755,
                    sx: 1.061,
                    sy: 1.115,
                    r: 0.1
                },
                "69": {
                    x: 29.388,
                    y: -97.276,
                    sx: 1.058,
                    sy: 1.11,
                    r: 0.096
                },
                "70": {
                    x: 28.727,
                    y: -96.852,
                    sx: 1.056,
                    sy: 1.106,
                    r: 0.092
                },
                "71": {
                    x: 27.969,
                    y: -96.42,
                    sx: 1.054,
                    sy: 1.101,
                    r: 0.088
                },
                "72": {
                    x: 27.312,
                    y: -95.889,
                    sx: 1.051,
                    sy: 1.097,
                    r: 0.084
                },
                "73": {
                    x: 26.66,
                    y: -95.506,
                    sx: 1.049,
                    sy: 1.093,
                    r: 0.08
                },
                "74": {
                    x: 25.911,
                    y: -95.07,
                    sx: 1.047,
                    sy: 1.088,
                    r: 0.077
                },
                "75": {
                    x: 25.263,
                    y: -94.582,
                    sx: 1.044,
                    sy: 1.084,
                    r: 0.073
                },
                "76": {
                    x: 24.518,
                    y: -94.143,
                    sx: 1.042,
                    sy: 1.079,
                    r: 0.069
                },
                "77": {
                    x: 23.827,
                    y: -93.702,
                    sx: 1.04,
                    sy: 1.075,
                    r: 0.065
                },
                "78": {
                    x: 23.087,
                    y: -93.309,
                    sx: 1.037,
                    sy: 1.071,
                    r: 0.061
                },
                "79": {
                    x: 22.45,
                    y: -92.81,
                    sx: 1.035,
                    sy: 1.066,
                    r: 0.057
                },
                "80": {
                    x: 21.767,
                    y: -92.365,
                    sx: 1.033,
                    sy: 1.062,
                    r: 0.054
                },
                "81": {
                    x: 21.037,
                    y: -91.965,
                    sx: 1.03,
                    sy: 1.057,
                    r: 0.05
                },
                "82": {
                    x: 20.356,
                    y: -91.464,
                    sx: 1.028,
                    sy: 1.053,
                    r: 0.046
                },
                "83": {
                    x: 19.63,
                    y: -91.01,
                    sx: 1.026,
                    sy: 1.049,
                    r: 0.042
                },
                "84": {
                    x: 18.957,
                    y: -90.604,
                    sx: 1.023,
                    sy: 1.044,
                    r: 0.038
                },
                "85": {
                    x: 18.286,
                    y: -90.151,
                    sx: 1.021,
                    sy: 1.04,
                    r: 0.034
                },
                "86": {
                    x: 17.62,
                    y: -89.69,
                    sx: 1.019,
                    sy: 1.035,
                    r: 0.031
                },
                "87": {
                    x: 16.954,
                    y: -89.229,
                    sx: 1.016,
                    sy: 1.031,
                    r: 0.027
                },
                "88": {
                    x: 16.242,
                    y: -88.817,
                    sx: 1.014,
                    sy: 1.026,
                    r: 0.023
                },
                "89": {
                    x: 15.532,
                    y: -88.352,
                    sx: 1.012,
                    sy: 1.022,
                    r: 0.019
                },
                "90": {
                    x: 14.825,
                    y: -87.886,
                    sx: 1.009,
                    sy: 1.018,
                    r: 0.015
                },
                "91": {
                    x: 14.22,
                    y: -87.42,
                    sx: 1.007,
                    sy: 1.013,
                    r: 0.012
                },
                "92": {
                    x: 13.47,
                    y: -87.05,
                    sx: 1.005,
                    sy: 1.009,
                    r: 0.008
                },
                "93": {
                    x: 12.822,
                    y: -86.527,
                    sx: 1.002,
                    sy: 1.004,
                    r: 0.004
                },
                "94": {
                    x: 12,
                    y: -86,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "95": {
                    x: 23.509,
                    y: -92.87,
                    r: 0.08
                },
                "96": {
                    x: 31.703,
                    y: -97.764,
                    r: 0.137
                },
                "97": {
                    x: 36.644,
                    y: -100.608,
                    r: 0.171
                },
                "98": {
                    x: 38.25,
                    y: -101.55,
                    r: 0.182
                }
            })
            .addTimedChild(instance30, 99, 32, {
                "99": {
                    x: 106,
                    y: 29,
                    sx: 0.998,
                    sy: 0.997,
                    kx: -0.262,
                    ky: 0.261,
                    r: 0
                },
                "100": {
                    x: 103.819,
                    y: 30.863,
                    kx: -0.21,
                    ky: 0.209
                },
                "101": {
                    x: 101.697,
                    y: 32.762,
                    kx: 0,
                    ky: 0,
                    r: 0.157
                },
                "102": {
                    x: 99.676,
                    y: 34.765,
                    kx: -0.105,
                    ky: 0.104,
                    r: 0
                },
                "103": {
                    x: 97.808,
                    y: 36.881,
                    kx: -0.053,
                    ky: 0.052
                },
                "104": {
                    x: 96,
                    y: 39.05,
                    kx: 0,
                    ky: 0
                },
                "105": {
                    x: 95.872,
                    y: 38.922,
                    sx: 1.003,
                    sy: 1.002
                },
                "106": {
                    x: 95.648,
                    y: 38.795,
                    sx: 1.007,
                    sy: 1.006
                },
                "107": {
                    x: 95.474,
                    y: 38.618,
                    sx: 1.012,
                    sy: 1.01
                },
                "108": {
                    x: 95.251,
                    y: 38.491,
                    sx: 1.016,
                    sy: 1.015
                },
                "109": {
                    x: 95.077,
                    y: 38.365,
                    sx: 1.021,
                    sy: 1.019
                },
                "110": {
                    x: 94.903,
                    y: 38.188,
                    sx: 1.025,
                    sy: 1.024
                },
                "111": {
                    x: 94.679,
                    y: 38.061,
                    sx: 1.029,
                    sy: 1.028
                },
                "112": {
                    x: 94.506,
                    y: 37.835,
                    sx: 1.034,
                    sy: 1.033
                },
                "113": {
                    x: 94.332,
                    y: 37.708,
                    sx: 1.038,
                    sy: 1.037
                },
                "114": {
                    x: 94.108,
                    y: 37.631,
                    sx: 1.043,
                    sy: 1.041
                },
                "115": {
                    x: 93.933,
                    y: 37.454,
                    sx: 1.047,
                    sy: 1.046
                },
                "116": {
                    x: 93.711,
                    y: 37.328,
                    sx: 1.052,
                    sy: 1.05
                },
                "117": {
                    x: 93.536,
                    y: 37.201,
                    sx: 1.056,
                    sy: 1.055
                },
                "118": {
                    x: 93.363,
                    y: 37.024,
                    sx: 1.06,
                    sy: 1.059
                },
                "119": {
                    x: 93.1,
                    y: 36.95,
                    sx: 1.065,
                    sy: 1.064
                },
                "120": {
                    x: 96.994,
                    y: 37.791,
                    sx: 1.013,
                    sy: 1.012,
                    kx: -0.024,
                    ky: 0.023
                },
                "121": {
                    x: 100.83,
                    y: 38.706,
                    sx: 0.962,
                    sy: 0.961,
                    kx: -0.048,
                    ky: 0.047
                },
                "122": {
                    x: 104.567,
                    y: 39.792,
                    sx: 0.911,
                    sy: 0.91,
                    kx: -0.072,
                    ky: 0.07
                },
                "123": {
                    x: 108.208,
                    y: 40.953,
                    sx: 0.859,
                    sy: 0.858,
                    kx: -0.096,
                    ky: 0.094
                },
                "124": {
                    x: 111.764,
                    y: 42.238,
                    sx: 0.808,
                    sy: 0.807,
                    kx: -0.119,
                    ky: 0.117
                },
                "125": {
                    x: 115.295,
                    y: 43.655,
                    sx: 0.757,
                    sy: 0.756,
                    kx: -0.143,
                    ky: 0.141
                },
                "126": {
                    x: 118.702,
                    y: 45.105,
                    sx: 0.705,
                    sy: 0.705,
                    kx: -0.167,
                    ky: 0.164
                },
                "127": {
                    x: 122.047,
                    y: 46.741,
                    sx: 0.654,
                    sy: 0.653,
                    kx: -0.191,
                    ky: 0.188
                },
                "128": {
                    x: 125.387,
                    y: 48.466,
                    sx: 0.602,
                    sy: 0.602,
                    kx: -0.215,
                    ky: 0.212
                },
                "129": {
                    x: 128.529,
                    y: 50.284,
                    sx: 0.551,
                    sy: 0.551,
                    kx: -0.238,
                    ky: 0.235
                },
                "130": {
                    x: 131.6,
                    y: 52.1,
                    sx: 0.5,
                    sy: 0.5,
                    kx: -0.262,
                    ky: 0.259
                }
            })
            .addTimedChild(instance29, 99, 32, {
                "99": {
                    x: 80.95,
                    y: -170.1,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.74
                },
                "100": {
                    x: 32.927,
                    y: -157.754,
                    r: 0.473
                },
                "101": {
                    x: -1.266,
                    y: -137.244,
                    r: 0.266
                },
                "102": {
                    x: -22.868,
                    y: -117.074,
                    r: 0.118
                },
                "103": {
                    x: -34.377,
                    y: -103.15,
                    r: 0.03
                },
                "104": {
                    x: -38,
                    y: -98,
                    r: 0
                },
                "105": {
                    x: -30.718,
                    y: -109.57,
                    sx: 1.017,
                    sy: 1.017,
                    kx: -0.059,
                    ky: 0.06
                },
                "106": {
                    x: -23.545,
                    y: -119.551,
                    sx: 1.032,
                    sy: 1.033,
                    kx: 0,
                    ky: 0,
                    r: 0.112
                },
                "107": {
                    x: -16.741,
                    y: -128.068,
                    sx: 1.045,
                    sy: 1.046,
                    kx: -0.157,
                    ky: 0.158,
                    r: 0
                },
                "108": {
                    x: -10.646,
                    y: -134.942,
                    sx: 1.055,
                    sy: 1.057,
                    kx: -0.195,
                    ky: 0.196
                },
                "109": {
                    x: -5.28,
                    y: -140.452,
                    sx: 1.064,
                    sy: 1.066,
                    kx: -0.227,
                    ky: 0.228
                },
                "110": {
                    x: -1.099,
                    y: -144.657,
                    sx: 1.071,
                    sy: 1.073,
                    kx: -0.251,
                    ky: 0.252
                },
                "111": {
                    x: 2.108,
                    y: -147.607,
                    sx: 1.076,
                    sy: 1.079,
                    kx: -0.268,
                    ky: 0.27
                },
                "112": {
                    x: 4.064,
                    y: -149.341,
                    sx: 1.079,
                    sy: 1.082,
                    kx: -0.279,
                    ky: 0.28
                },
                "113": {
                    x: 4.65,
                    y: -150,
                    sx: 1.08,
                    sy: 1.083,
                    kx: -0.282,
                    ky: 0.284
                },
                "120": {
                    x: 4.066,
                    y: -148.501,
                    sx: 1.076,
                    sy: 1.079,
                    kx: -0.278,
                    ky: 0.279
                },
                "121": {
                    x: 2.076,
                    y: -144.05,
                    sx: 1.065,
                    sy: 1.068,
                    kx: -0.264,
                    ky: 0.266
                },
                "122": {
                    x: -0.931,
                    y: -136.688,
                    sx: 1.047,
                    sy: 1.049,
                    kx: -0.242,
                    ky: 0.243
                },
                "123": {
                    x: -4.814,
                    y: -126.377,
                    sx: 1.021,
                    sy: 1.023,
                    kx: -0.21,
                    ky: 0.212
                },
                "124": {
                    x: -9.12,
                    y: -113.163,
                    sx: 0.988,
                    sy: 0.99,
                    kx: -0.17,
                    ky: 0.171
                },
                "125": {
                    x: -13.437,
                    y: -96.989,
                    sx: 0.947,
                    sy: 0.949,
                    kx: -0.12,
                    ky: 0.121
                },
                "126": {
                    x: -17.077,
                    y: -78.05,
                    sx: 0.9,
                    sy: 0.901,
                    kx: -0.062,
                    ky: 0.063
                },
                "127": {
                    x: -19.488,
                    y: -56.677,
                    sx: 0.844,
                    sy: 0.845,
                    kx: 0,
                    ky: 0,
                    r: -0.005
                },
                "128": {
                    x: -19.905,
                    y: -33.067,
                    sx: 0.782,
                    sy: 0.782,
                    kx: 0.082,
                    ky: -0.081,
                    r: 0
                },
                "129": {
                    x: -17.707,
                    y: -7.992,
                    sx: 0.712,
                    sy: 0.712,
                    kx: 0,
                    ky: 0,
                    r: -0.167
                },
                "130": {
                    x: -12.3,
                    y: 18,
                    sx: 0.634,
                    sy: 0.634,
                    r: -0.262
                }
            })
            .addTimedChild(instance28, 99, 32, {
                "99": {
                    x: 58.8,
                    y: 23.05,
                    sx: 0.503,
                    sy: 0.613,
                    kx: 0,
                    ky: 0,
                    r: 0.349
                },
                "100": {
                    x: 58.1,
                    y: 34.959,
                    sx: 0.682,
                    sy: 0.752,
                    r: -0.047
                },
                "101": {
                    x: 58.746,
                    y: 48.542,
                    sx: 0.821,
                    sy: 0.861,
                    r: -0.355
                },
                "102": {
                    x: 60.814,
                    y: 60.422,
                    sx: 0.921,
                    sy: 0.938,
                    r: -0.575
                },
                "103": {
                    x: 62.934,
                    y: 68.272,
                    sx: 0.98,
                    sy: 0.984,
                    r: -0.707
                },
                "104": {
                    x: 64,
                    y: 71,
                    sx: 1,
                    sy: 1,
                    r: -0.75
                },
                "105": {
                    x: 62.275,
                    y: 63.546,
                    sx: 1.027,
                    sy: 1.142,
                    r: -0.608
                },
                "106": {
                    x: 61.747,
                    y: 56.421,
                    sx: 1.051,
                    sy: 1.267,
                    r: -0.482
                },
                "107": {
                    x: 62.058,
                    y: 49.86,
                    sx: 1.072,
                    sy: 1.376,
                    kx: 0.373,
                    ky: -0.374,
                    r: 0
                },
                "108": {
                    x: 62.92,
                    y: 44.256,
                    sx: 1.09,
                    sy: 1.468,
                    kx: 0,
                    ky: 0,
                    r: -0.281
                },
                "109": {
                    x: 64.097,
                    y: 39.568,
                    sx: 1.104,
                    sy: 1.543,
                    kx: 0.205,
                    ky: -0.206,
                    r: 0
                },
                "110": {
                    x: 65.298,
                    y: 35.911,
                    sx: 1.115,
                    sy: 1.602,
                    kx: 0.146,
                    ky: -0.147
                },
                "111": {
                    x: 66.272,
                    y: 33.262,
                    sx: 1.123,
                    sy: 1.644,
                    kx: 0.104,
                    ky: -0.105
                },
                "112": {
                    x: 66.911,
                    y: 31.772,
                    sx: 1.128,
                    sy: 1.669,
                    kx: 0.079,
                    ky: -0.08
                },
                "113": {
                    x: 67.3,
                    y: 31.3,
                    sx: 1.13,
                    sy: 1.677,
                    kx: 0.071,
                    ky: -0.072
                },
                "114": {
                    x: 66.329,
                    y: 31.417,
                    sx: 1.162
                },
                "115": {
                    x: 65.475,
                    y: 31.459,
                    sx: 1.188
                },
                "116": {
                    x: 64.839,
                    y: 31.526,
                    sx: 1.208
                },
                "117": {
                    x: 64.371,
                    y: 31.565,
                    sx: 1.223
                },
                "118": {
                    x: 64.069,
                    y: 31.579,
                    sx: 1.231
                },
                "119": {
                    x: 63.9,
                    y: 31.55,
                    sx: 1.234
                },
                "120": {
                    x: 63.93,
                    y: 32.386,
                    sx: 1.229,
                    sy: 1.668,
                    kx: 0.079,
                    ky: -0.08
                },
                "121": {
                    x: 63.69,
                    y: 34.611,
                    sx: 1.214,
                    sy: 1.642,
                    kx: 0.102,
                    ky: -0.103
                },
                "122": {
                    x: 63.414,
                    y: 38.369,
                    sx: 1.19,
                    sy: 1.599,
                    kx: 0.141,
                    ky: -0.142
                },
                "123": {
                    x: 63.12,
                    y: 43.591,
                    sx: 1.155,
                    sy: 1.539,
                    kx: 0.195,
                    ky: -0.196
                },
                "124": {
                    x: 63.17,
                    y: 50.121,
                    sx: 1.11,
                    sy: 1.461,
                    kx: 0.265,
                    ky: -0.266
                },
                "125": {
                    x: 63.643,
                    y: 57.824,
                    sx: 1.056,
                    sy: 1.367,
                    kx: 0.351,
                    ky: -0.352
                },
                "126": {
                    x: 64.706,
                    y: 66.611,
                    sx: 0.991,
                    sy: 1.255,
                    kx: 0.452,
                    ky: -0.453
                },
                "127": {
                    x: 66.618,
                    y: 76.011,
                    sx: 0.917,
                    sy: 1.125,
                    kx: 0,
                    ky: 0,
                    r: -0.569
                },
                "128": {
                    x: 69.472,
                    y: 85.862,
                    sx: 0.832,
                    sy: 0.979,
                    r: -0.701
                },
                "129": {
                    x: 73.365,
                    y: 95.562,
                    sx: 0.738,
                    sy: 0.815,
                    r: -0.849
                },
                "130": {
                    x: 77.95,
                    y: 104.8,
                    sx: 0.634,
                    sy: 0.634,
                    r: -1.012
                }
            })
            .addTimedChild(instance27, 99, 32, {
                "99": {
                    x: 47.4,
                    y: -35.4,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.74
                },
                "100": {
                    x: 39.861,
                    y: -15.476,
                    r: 0.473
                },
                "101": {
                    x: 34.343,
                    y: 1.282,
                    r: 0.266
                },
                "102": {
                    x: 30.677,
                    y: 13.723,
                    r: 0.118
                },
                "103": {
                    x: 28.609,
                    y: 21.405,
                    r: 0.03
                },
                "104": {
                    x: 28,
                    y: 24,
                    r: 0
                },
                "105": {
                    x: 29.575,
                    y: 18.316,
                    sx: 1.017,
                    sy: 1.017,
                    kx: -0.059,
                    ky: 0.06
                },
                "106": {
                    x: 31.047,
                    y: 13.209,
                    sx: 1.032,
                    sy: 1.033,
                    kx: 0,
                    ky: 0,
                    r: 0.112
                },
                "107": {
                    x: 32.363,
                    y: 8.834,
                    sx: 1.045,
                    sy: 1.046,
                    kx: -0.157,
                    ky: 0.158,
                    r: 0
                },
                "108": {
                    x: 33.515,
                    y: 5.147,
                    sx: 1.055,
                    sy: 1.057,
                    kx: -0.195,
                    ky: 0.196
                },
                "109": {
                    x: 34.484,
                    y: 2.163,
                    sx: 1.064,
                    sy: 1.066,
                    kx: -0.227,
                    ky: 0.228
                },
                "110": {
                    x: 35.199,
                    y: -0.16,
                    sx: 1.071,
                    sy: 1.073,
                    kx: -0.251,
                    ky: 0.252
                },
                "111": {
                    x: 35.831,
                    y: -1.764,
                    sx: 1.076,
                    sy: 1.079,
                    kx: -0.268,
                    ky: 0.27
                },
                "112": {
                    x: 36.143,
                    y: -2.788,
                    sx: 1.079,
                    sy: 1.082,
                    kx: -0.279,
                    ky: 0.28
                },
                "113": {
                    x: 36.25,
                    y: -3.25,
                    sx: 1.08,
                    sy: 1.083,
                    kx: -0.282,
                    ky: 0.284
                },
                "120": {
                    x: 36.41,
                    y: -2.451,
                    sx: 1.076,
                    sy: 1.079,
                    kx: -0.278,
                    ky: 0.279
                },
                "121": {
                    x: 36.541,
                    y: -0.349,
                    sx: 1.065,
                    sy: 1.068,
                    kx: -0.264,
                    ky: 0.266
                },
                "122": {
                    x: 36.73,
                    y: 3.23,
                    sx: 1.047,
                    sy: 1.049,
                    kx: -0.242,
                    ky: 0.243
                },
                "123": {
                    x: 37.112,
                    y: 8.219,
                    sx: 1.021,
                    sy: 1.023,
                    kx: -0.21,
                    ky: 0.212
                },
                "124": {
                    x: 37.715,
                    y: 14.672,
                    sx: 0.988,
                    sy: 0.99,
                    kx: -0.17,
                    ky: 0.171
                },
                "125": {
                    x: 38.472,
                    y: 22.405,
                    sx: 0.947,
                    sy: 0.949,
                    kx: -0.12,
                    ky: 0.121
                },
                "126": {
                    x: 39.568,
                    y: 31.702,
                    sx: 0.9,
                    sy: 0.901,
                    kx: -0.062,
                    ky: 0.063
                },
                "127": {
                    x: 41.047,
                    y: 42.262,
                    sx: 0.844,
                    sy: 0.845,
                    kx: 0,
                    ky: 0,
                    r: -0.005
                },
                "128": {
                    x: 42.921,
                    y: 54.247,
                    sx: 0.782,
                    sy: 0.782,
                    kx: 0.082,
                    ky: -0.081,
                    r: 0
                },
                "129": {
                    x: 45.275,
                    y: 67.43,
                    sx: 0.712,
                    sy: 0.712,
                    kx: 0,
                    ky: 0,
                    r: -0.167
                },
                "130": {
                    x: 48.2,
                    y: 81.95,
                    sx: 0.634,
                    sy: 0.634,
                    r: -0.262
                }
            })
            .addTimedChild(instance26, 99, 32, {
                "99": {
                    x: 20.2,
                    y: -73.8,
                    sx: 1,
                    sy: 1.075,
                    kx: -1.12,
                    ky: 0.743,
                    r: 0
                },
                "100": {
                    x: -12.399,
                    y: -31.315,
                    sy: 1.048,
                    kx: -0.534,
                    ky: 0.293
                },
                "101": {
                    x: -25.833,
                    y: 11.306,
                    sy: 1.027,
                    kx: -0.079,
                    ky: -0.056
                },
                "102": {
                    x: -27.187,
                    y: 44.322,
                    sy: 1.012,
                    kx: 0.246,
                    ky: -0.306
                },
                "103": {
                    x: -24.495,
                    y: 64.309,
                    sy: 1.003,
                    kx: 0.441,
                    ky: -0.456
                },
                "104": {
                    x: -23,
                    y: 71,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: -0.506
                },
                "105": {
                    x: -30.475,
                    y: 55.872,
                    sx: 1.043,
                    sy: 1.017,
                    kx: 0.376,
                    ky: -0.375,
                    r: 0
                },
                "106": {
                    x: -35.708,
                    y: 41.14,
                    sx: 1.082,
                    sy: 1.032,
                    kx: 0,
                    ky: 0,
                    r: -0.26
                },
                "107": {
                    x: -39.145,
                    y: 27.521,
                    sx: 1.115,
                    sy: 1.045,
                    kx: 0.161,
                    ky: -0.16,
                    r: 0
                },
                "108": {
                    x: -41.049,
                    y: 15.428,
                    sx: 1.143,
                    sy: 1.056,
                    kx: 0,
                    ky: 0,
                    r: -0.076
                },
                "109": {
                    x: -41.937,
                    y: 5.197,
                    sx: 1.166,
                    sy: 1.065,
                    r: -0.007
                },
                "110": {
                    x: -42.323,
                    y: -2.917,
                    sx: 1.184,
                    sy: 1.072,
                    r: 0.047
                },
                "111": {
                    x: -42.215,
                    y: -8.833,
                    sx: 1.196,
                    sy: 1.077,
                    kx: -0.085,
                    ky: 0.086,
                    r: 0
                },
                "112": {
                    x: -42.11,
                    y: -12.346,
                    sx: 1.204,
                    sy: 1.08,
                    kx: -0.108,
                    ky: 0.109
                },
                "113": {
                    x: -42,
                    y: -13.45,
                    sx: 1.207,
                    sy: 1.082,
                    kx: 0,
                    ky: 0,
                    r: 0.116
                },
                "120": {
                    x: -41.86,
                    y: -11.551,
                    sx: 1.202,
                    sy: 1.077,
                    kx: -0.106,
                    ky: 0.107,
                    r: 0
                },
                "121": {
                    x: -41.412,
                    y: -6.119,
                    sx: 1.188,
                    sy: 1.065,
                    kx: -0.078,
                    ky: 0.079
                },
                "122": {
                    x: -40.374,
                    y: 2.81,
                    sx: 1.164,
                    sy: 1.045,
                    kx: 0,
                    ky: 0,
                    r: 0.031
                },
                "123": {
                    x: -38.417,
                    y: 15.061,
                    sx: 1.131,
                    sy: 1.016,
                    kx: 0.036,
                    ky: -0.035,
                    r: 0
                },
                "124": {
                    x: -34.975,
                    y: 30.112,
                    sx: 1.088,
                    sy: 0.979,
                    kx: 0.121,
                    ky: -0.12
                },
                "125": {
                    x: -29.517,
                    y: 47.382,
                    sx: 1.036,
                    sy: 0.934,
                    kx: 0,
                    ky: 0,
                    r: -0.225
                },
                "126": {
                    x: -21.575,
                    y: 66.266,
                    sx: 0.975,
                    sy: 0.881,
                    r: -0.348
                },
                "127": {
                    x: -10.78,
                    y: 85.625,
                    sx: 0.904,
                    sy: 0.82,
                    r: -0.49
                },
                "128": {
                    x: 2.938,
                    y: 104.108,
                    sx: 0.823,
                    sy: 0.751,
                    r: -0.651
                },
                "129": {
                    x: 19.163,
                    y: 120.369,
                    sx: 0.734,
                    sy: 0.673,
                    r: -0.831
                },
                "130": {
                    x: 36.85,
                    y: 133.25,
                    sx: 0.634,
                    sy: 0.587,
                    r: -1.03
                }
            })
            .addTimedChild(instance25, 99, 32, {
                "99": {
                    x: 86.3,
                    y: -5.35,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.74
                },
                "100": {
                    x: 82.147,
                    y: 1.926,
                    r: 0.473
                },
                "101": {
                    x: 79.415,
                    y: 9.089,
                    r: 0.266
                },
                "102": {
                    x: 77.899,
                    y: 14.857,
                    r: 0.118
                },
                "103": {
                    x: 77.195,
                    y: 18.627,
                    r: 0.03
                },
                "104": {
                    x: 77,
                    y: 20,
                    r: 0
                },
                "105": {
                    x: 79.202,
                    y: 17.319,
                    sx: 1.017,
                    sy: 1.017,
                    kx: -0.059,
                    ky: 0.06
                },
                "106": {
                    x: 81.189,
                    y: 14.958,
                    sx: 1.032,
                    sy: 1.033,
                    kx: 0,
                    ky: 0,
                    r: 0.112
                },
                "107": {
                    x: 82.963,
                    y: 12.985,
                    sx: 1.045,
                    sy: 1.046,
                    kx: -0.157,
                    ky: 0.158,
                    r: 0
                },
                "108": {
                    x: 84.608,
                    y: 11.228,
                    sx: 1.055,
                    sy: 1.057,
                    kx: -0.195,
                    ky: 0.196
                },
                "109": {
                    x: 85.897,
                    y: 9.927,
                    sx: 1.064,
                    sy: 1.066,
                    kx: -0.227,
                    ky: 0.228
                },
                "110": {
                    x: 86.945,
                    y: 8.828,
                    sx: 1.071,
                    sy: 1.073,
                    kx: -0.251,
                    ky: 0.252
                },
                "111": {
                    x: 87.751,
                    y: 8.077,
                    sx: 1.076,
                    sy: 1.079,
                    kx: -0.268,
                    ky: 0.27
                },
                "112": {
                    x: 88.249,
                    y: 7.676,
                    sx: 1.079,
                    sy: 1.082,
                    kx: -0.279,
                    ky: 0.28
                },
                "113": {
                    x: 88.3,
                    y: 7.4,
                    sx: 1.08,
                    sy: 1.083,
                    kx: -0.282,
                    ky: 0.284
                },
                "120": {
                    x: 88.177,
                    y: 7.978,
                    sx: 1.076,
                    sy: 1.079,
                    kx: -0.278,
                    ky: 0.279
                },
                "121": {
                    x: 87.711,
                    y: 9.629,
                    sx: 1.065,
                    sy: 1.068,
                    kx: -0.264,
                    ky: 0.266
                },
                "122": {
                    x: 86.958,
                    y: 12.349,
                    sx: 1.047,
                    sy: 1.049,
                    kx: -0.242,
                    ky: 0.243
                },
                "123": {
                    x: 85.918,
                    y: 16.166,
                    sx: 1.021,
                    sy: 1.023,
                    kx: -0.21,
                    ky: 0.212
                },
                "124": {
                    x: 84.669,
                    y: 21.049,
                    sx: 0.988,
                    sy: 0.99,
                    kx: -0.17,
                    ky: 0.171
                },
                "125": {
                    x: 83.338,
                    y: 26.999,
                    sx: 0.947,
                    sy: 0.949,
                    kx: -0.12,
                    ky: 0.121
                },
                "126": {
                    x: 81.956,
                    y: 34.011,
                    sx: 0.9,
                    sy: 0.901,
                    kx: -0.062,
                    ky: 0.063
                },
                "127": {
                    x: 80.569,
                    y: 42.02,
                    sx: 0.844,
                    sy: 0.845,
                    kx: 0,
                    ky: 0,
                    r: -0.005
                },
                "128": {
                    x: 79.356,
                    y: 50.95,
                    sx: 0.782,
                    sy: 0.782,
                    kx: 0.082,
                    ky: -0.081,
                    r: 0
                },
                "129": {
                    x: 78.349,
                    y: 60.759,
                    sx: 0.712,
                    sy: 0.712,
                    kx: 0,
                    ky: 0,
                    r: -0.167
                },
                "130": {
                    x: 77.5,
                    y: 71.4,
                    sx: 0.634,
                    sy: 0.634,
                    r: -0.262
                }
            })
            .addTimedChild(instance24, 99, 32, {
                "99": {
                    x: 82.6,
                    y: -7.3,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0.234
                },
                "100": {
                    x: 76.466,
                    y: 2.822,
                    r: -0.033
                },
                "101": {
                    x: 73.786,
                    y: 10.943,
                    r: -0.24
                },
                "102": {
                    x: 73.008,
                    y: 16.628,
                    r: -0.388
                },
                "103": {
                    x: 72.922,
                    y: 19.914,
                    r: -0.477
                },
                "104": {
                    x: 73,
                    y: 21,
                    r: -0.506
                },
                "105": {
                    x: 75.081,
                    y: 17.294,
                    sx: 1.017,
                    sy: 1.017,
                    r: -0.447
                },
                "106": {
                    x: 76.974,
                    y: 13.924,
                    sx: 1.032,
                    sy: 1.033,
                    kx: 0.394,
                    ky: -0.395,
                    r: 0
                },
                "107": {
                    x: 78.722,
                    y: 10.964,
                    sx: 1.044,
                    sy: 1.046,
                    kx: 0,
                    ky: 0,
                    r: -0.349
                },
                "108": {
                    x: 80.211,
                    y: 8.346,
                    sx: 1.055,
                    sy: 1.057,
                    kx: 0.31,
                    ky: -0.311,
                    r: 0
                },
                "109": {
                    x: 81.51,
                    y: 6.159,
                    sx: 1.064,
                    sy: 1.066,
                    kx: 0,
                    ky: 0,
                    r: -0.279
                },
                "110": {
                    x: 82.527,
                    y: 4.451,
                    sx: 1.071,
                    sy: 1.073,
                    kx: 0.254,
                    ky: -0.255,
                    r: 0
                },
                "111": {
                    x: 83.314,
                    y: 3.221,
                    sx: 1.076,
                    sy: 1.079,
                    kx: 0.237,
                    ky: -0.238
                },
                "112": {
                    x: 83.751,
                    y: 2.473,
                    sx: 1.079,
                    sy: 1.082,
                    kx: 0.226,
                    ky: -0.227
                },
                "113": {
                    x: 83.9,
                    y: 2.3,
                    sx: 1.08,
                    sy: 1.083,
                    kx: 0.223,
                    ky: -0.224
                },
                "114": {
                    x: 84,
                    y: 0.7
                },
                "115": {
                    y: -0.55
                },
                "116": {
                    y: -1.5
                },
                "117": {
                    y: -2.2
                },
                "118": {
                    y: -2.6
                },
                "119": {
                    x: 83.9,
                    y: -2.7
                },
                "120": {
                    y: -1.967,
                    sx: 1.076,
                    sy: 1.079,
                    kx: 0.227,
                    ky: -0.228
                },
                "121": {
                    x: 83.643,
                    y: 0.147,
                    sx: 1.065,
                    sy: 1.068,
                    kx: 0.241,
                    ky: -0.242
                },
                "122": {
                    x: 83.152,
                    y: 3.693,
                    sx: 1.047,
                    sy: 1.049,
                    kx: 0.263,
                    ky: -0.264
                },
                "123": {
                    x: 82.583,
                    y: 8.597,
                    sx: 1.021,
                    sy: 1.023,
                    kx: 0.295,
                    ky: -0.296
                },
                "124": {
                    x: 81.834,
                    y: 14.78,
                    sx: 0.988,
                    sy: 0.99,
                    kx: 0.335,
                    ky: -0.336
                },
                "125": {
                    x: 81.102,
                    y: 22.24,
                    sx: 0.947,
                    sy: 0.949,
                    kx: 0.385,
                    ky: -0.386
                },
                "126": {
                    x: 80.143,
                    y: 30.718,
                    sx: 0.899,
                    sy: 0.901,
                    kx: 0.443,
                    ky: -0.444
                },
                "127": {
                    x: 79.183,
                    y: 40.144,
                    sx: 0.844,
                    sy: 0.845,
                    kx: 0.511,
                    ky: -0.512
                },
                "128": {
                    x: 78.084,
                    y: 50.422,
                    sx: 0.782,
                    sy: 0.782,
                    kx: 0,
                    ky: 0,
                    r: -0.588
                },
                "129": {
                    x: 76.902,
                    y: 61.344,
                    sx: 0.712,
                    sy: 0.712,
                    r: -0.673
                },
                "130": {
                    x: 75.25,
                    y: 72.65,
                    sx: 0.634,
                    sy: 0.634,
                    r: -0.768
                }
            })
            .addTimedChild(instance23, 99, 32, {
                "99": {
                    x: 61,
                    y: -50.35,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 1.246
                },
                "100": {
                    x: 50.048,
                    y: -30.629,
                    r: 0.98
                },
                "101": {
                    x: 41.28,
                    y: -14.874,
                    r: 0.772
                },
                "102": {
                    x: 35.032,
                    y: -3.399,
                    r: 0.625
                },
                "103": {
                    x: 31.275,
                    y: 3.603,
                    r: 0.536
                },
                "104": {
                    x: 30,
                    y: 6,
                    r: 0.506
                },
                "105": {
                    x: 32.939,
                    y: -0.791,
                    sx: 1.017,
                    sy: 1.017,
                    kx: -0.565,
                    ky: 0.566,
                    r: 0
                },
                "106": {
                    x: 35.416,
                    y: -6.831,
                    sx: 1.032,
                    sy: 1.032,
                    kx: -0.617,
                    ky: 0.618
                },
                "107": {
                    x: 37.667,
                    y: -12.034,
                    sx: 1.045,
                    sy: 1.045,
                    kx: -0.663,
                    ky: 0.664
                },
                "108": {
                    x: 39.575,
                    y: -16.358,
                    sx: 1.056,
                    sy: 1.056,
                    kx: -0.701,
                    ky: 0.703
                },
                "109": {
                    x: 41.119,
                    y: -19.91,
                    sx: 1.065,
                    sy: 1.065,
                    kx: -0.732,
                    ky: 0.734
                },
                "110": {
                    x: 42.321,
                    y: -22.693,
                    sx: 1.072,
                    sy: 1.072,
                    kx: -0.756,
                    ky: 0.759
                },
                "111": {
                    x: 43.153,
                    y: -24.709,
                    sx: 1.077,
                    sy: 1.077,
                    kx: -0.774,
                    ky: 0.776
                },
                "112": {
                    x: 43.675,
                    y: -25.908,
                    sx: 1.08,
                    sy: 1.08,
                    kx: -0.784,
                    ky: 0.787
                },
                "113": {
                    x: 43.7,
                    y: -26.3,
                    sx: 1.081,
                    sy: 1.081,
                    kx: -0.788,
                    ky: 0.79
                },
                "114": {
                    x: 43.699,
                    y: -27.899
                },
                "115": {
                    y: -29.149
                },
                "116": {
                    y: -30.099
                },
                "117": {
                    y: -30.799
                },
                "118": {
                    y: -31.199
                },
                "119": {
                    x: 43.7,
                    y: -31.3
                },
                "120": {
                    x: 43.76,
                    y: -30.487,
                    sx: 1.078,
                    sy: 1.078,
                    kx: -0.783,
                    ky: 0.786
                },
                "121": {
                    x: 43.789,
                    y: -27.991,
                    sx: 1.067,
                    sy: 1.067,
                    kx: -0.77,
                    ky: 0.772
                },
                "122": {
                    x: 43.846,
                    y: -23.824,
                    sx: 1.048,
                    sy: 1.048,
                    kx: -0.747,
                    ky: 0.75
                },
                "123": {
                    x: 43.88,
                    y: -17.978,
                    sx: 1.022,
                    sy: 1.022,
                    kx: -0.716,
                    ky: 0.718
                },
                "124": {
                    x: 43.96,
                    y: -10.425,
                    sx: 0.989,
                    sy: 0.989,
                    kx: -0.676,
                    ky: 0.678
                },
                "125": {
                    x: 44.158,
                    y: -1.214,
                    sx: 0.948,
                    sy: 0.948,
                    kx: -0.626,
                    ky: 0.628
                },
                "126": {
                    x: 44.32,
                    y: 9.722,
                    sx: 0.9,
                    sy: 0.9,
                    kx: -0.568,
                    ky: 0.569
                },
                "127": {
                    x: 44.612,
                    y: 22.413,
                    sx: 0.845,
                    sy: 0.845,
                    kx: -0.5,
                    ky: 0.502
                },
                "128": {
                    x: 45.085,
                    y: 36.742,
                    sx: 0.782,
                    sy: 0.782,
                    kx: -0.424,
                    ky: 0.425
                },
                "129": {
                    x: 45.672,
                    y: 52.79,
                    sx: 0.712,
                    sy: 0.712,
                    kx: 0,
                    ky: 0,
                    r: 0.339
                },
                "130": {
                    x: 46.4,
                    y: 70.6,
                    sx: 0.634,
                    sy: 0.634,
                    r: 0.244
                }
            })
            .addTimedChild(instance1, 0, 168, {
                "0": {
                    x: 87,
                    y: 77
                }
            })
            .addTimedChild(instance32, 125, 44, {
                "125": {
                    x: -51.1,
                    y: -9.8,
                    sx: 1.542,
                    sy: 1.468,
                    r: -0.087
                },
                "126": {
                    x: -50.117,
                    y: -9.086,
                    sx: 1.532,
                    sy: 1.459
                },
                "127": {
                    x: -47.469,
                    y: -7.344,
                    sx: 1.501,
                    sy: 1.43
                },
                "128": {
                    x: -43.005,
                    y: -4.475,
                    sx: 1.451,
                    sy: 1.382
                },
                "129": {
                    x: -36.826,
                    y: -0.328,
                    sx: 1.381,
                    sy: 1.315
                },
                "130": {
                    x: -28.881,
                    y: 4.845,
                    sx: 1.291,
                    sy: 1.229
                },
                "131": {
                    x: -19.171,
                    y: 11.248,
                    sx: 1.18,
                    sy: 1.124
                },
                "132": {
                    x: -7.8,
                    y: 18.8,
                    sx: 1.05,
                    sy: 1
                },
                "133": {
                    x: -5.248,
                    y: 18.972,
                    r: -0.047
                },
                "134": {
                    x: -2.936,
                    y: 19.163,
                    r: -0.012
                },
                "135": {
                    x: -0.916,
                    y: 19.335,
                    r: 0.017
                },
                "136": {
                    x: 0.806,
                    y: 19.546,
                    r: 0.041
                },
                "137": {
                    x: 2.177,
                    y: 19.753,
                    r: 0.06
                },
                "138": {
                    x: 3.194,
                    y: 19.911,
                    r: 0.073
                },
                "139": {
                    x: 3.806,
                    y: 20.024,
                    r: 0.081
                },
                "140": {
                    x: 4,
                    y: 19.95,
                    r: 0.084
                },
                "141": {
                    x: 4.029,
                    y: 19.793,
                    sx: 1.049,
                    r: 0.082
                },
                "142": {
                    x: 3.915,
                    y: 19.271,
                    sx: 1.046,
                    r: 0.077
                },
                "143": {
                    x: 3.657,
                    y: 18.333,
                    sx: 1.041,
                    r: 0.069
                },
                "144": {
                    x: 3.408,
                    y: 17.129,
                    sx: 1.033,
                    r: 0.057
                },
                "145": {
                    x: 3.014,
                    y: 15.457,
                    sx: 1.024,
                    r: 0.041
                },
                "146": {
                    x: 2.526,
                    y: 13.414,
                    sx: 1.013,
                    r: 0.022
                },
                "147": {
                    x: 2,
                    y: 11,
                    sx: 1,
                    r: 0
                },
                "148": {
                    x: 1.187,
                    y: 12.074,
                    r: -0.012
                },
                "149": {
                    x: 0.323,
                    y: 13.097,
                    r: -0.025
                },
                "150": {
                    x: -0.49,
                    y: 14.168,
                    r: -0.037
                },
                "151": {
                    x: -1.304,
                    y: 15.237,
                    r: -0.05
                },
                "152": {
                    x: -2.119,
                    y: 16.304,
                    r: -0.062
                },
                "153": {
                    x: -2.884,
                    y: 17.37,
                    r: -0.075
                },
                "154": {
                    x: -3.75,
                    y: 18.45,
                    r: -0.087
                },
                "155": {
                    x: -2.671,
                    y: 16.982,
                    r: -0.07
                },
                "156": {
                    x: -1.541,
                    y: 15.458,
                    r: -0.052
                },
                "157": {
                    x: -0.41,
                    y: 13.928,
                    r: -0.035
                },
                "158": {
                    x: 0.722,
                    y: 12.493,
                    r: -0.017
                },
                "159": {
                    x: 2,
                    y: 11,
                    r: 0
                },
                "160": {
                    x: 2.523,
                    y: 10.464,
                    r: 0.007
                },
                "161": {
                    x: 2.996,
                    y: 9.877,
                    r: 0.014
                },
                "162": {
                    x: 3.469,
                    y: 9.34,
                    r: 0.021
                },
                "163": {
                    x: 3.992,
                    y: 8.752,
                    r: 0.028
                },
                "164": {
                    x: 4.45,
                    y: 8.15,
                    r: 0.035
                },
                "165": {
                    x: 3.644,
                    y: 9.098,
                    r: 0.023
                },
                "166": {
                    x: 2.838,
                    y: 10.044,
                    r: 0.012
                },
                "167": {
                    x: 2,
                    y: 11,
                    r: 0
                }
            });
    });

    lib.Wolf = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60
        });
        var instance1 = new lib.wolfTile();
        this.addChild(instance1);
    });

    lib.Wolf.assets = {
        "tile11Cap": "../assets/tile11Cap.png",
        "tile11EyebrowR": "../assets/tile11EyebrowR.png",
        "tile11EyebrowL": "../assets/tile11EyebrowL.png",
        "tile11EyeL": "../assets/tile11EyeL.png",
        "tile11Nose": "../assets/tile11Nose.png",
        "tile11EyeR": "../assets/tile11EyeR.png",
        "tile11Mouth": "../assets/tile11Mouth.png",
        "tile11Head": "../assets/tile11Head.png",
        "tile11HeadShadow": "../assets/tile11HeadShadow.png",
        "tile11HowlingEpaulet": "../assets/tile11HowlingEpaulet.png",
        "tile11HowlingMouth": "../assets/tile11HowlingMouth.png",
        "tile11HowlingEyebrow": "../assets/tile11HowlingEyebrow.png",
        "tile11HowlingHead": "../assets/tile11HowlingHead.png",
        "tile11HowlingPaw": "../assets/tile11HowlingPaw.png",
        "tile11HowlingFeathers": "../assets/tile11HowlingFeathers.png",
        "tile11FrameFront": "../assets/tile11FrameFront.png",
        "tile11BodyNew": "../assets/tile11BodyNew.png",
        "winFrameLight": "../assets/winFrameLight.png",
        "tile11FrameBack": "../assets/tile11FrameBack.png"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.Wolf,
        background: 0x666666,
        width: 1280,
        height: 720,
        framerate: 60,
        totalFrames: 1,
        library: lib
    };
}