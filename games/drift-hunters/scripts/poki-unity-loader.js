!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 1)
}([function(e, t, n) {
    "use strict";
    function i() {
        s.style.display = "block",
        r.style.display = "none",
        a(),
        window.POKI_TRACKER.track(window.poki.tracking.screen.preloaderFinished),
        window.removeSlideshowEventListeners()
    }
    function o() {
        if (!m) {
            m = !0;
            var e = document.createElement("script");
            e.src = window.config.unityWebglLoaderUrl,
            e.addEventListener("load", function() {
                window.unityGame = window.UnityLoader.instantiate("game", window.config.unityWebglBuildUrl, {
                    onProgress: d,
                    Module: {
                        onRuntimeInitialized: i
                    }
                })
            }),
            document.body.appendChild(e)
        }
    }
    function a() {
        var e = window.innerWidth
          , t = window.innerHeight
          , n = e / t;
        n > window.config.maxRatio ? (s.style.height = t + "px",
        s.style.width = t * window.config.maxRatio + "px") : n < window.config.minRatio ? (s.style.width = e + "px",
        s.style.height = e / window.config.minRatio + "px") : (s.style.width = e + "px",
        s.style.height = t + "px");
        var i = s.getBoundingClientRect();
        s.style.marginLeft = -.5 * i.width + "px",
        s.style.marginTop = -.5 * i.height + "px"
    }
    function d(e, t) {
        if (e.Module) {
            var n = 100 * t;
            l.style.width = n + "%",
            u.innerHTML = (n << 0) + "%",
            t >= 1 && (c.className = "done")
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.startLoadingGame = o;
    var s = document.getElementById("game-container")
      , r = document.getElementById("loader")
      , c = document.getElementById("progress-container")
      , l = document.getElementById("progress-fill")
      , u = document.getElementById("progress-amount")
      , m = !1;
    window.addEventListener("resize", a),
    window.addEventListener("focus", a),
    window.POKI_ADS.init({
        debug: window.config && window.config.debug,
        wrapper: s,
        onReady: function() {
            window.pokiReady = !0,
            window.POKI_TRACKER.track(window.poki.tracking.screen.preloaderStart)
        },
        onAdblocked: function() {
            window.pokiAdblocked = !0
        }
    })
}
, function(e, t, n) {
    e.exports = n(2)
}
, function(e, t, n) {
    "use strict";
    n(0),
    n(3),
    n(4)
}
, function(e, t, n) {
    "use strict";
    function i() {
        var e = 1e3 * p
          , t = k.querySelector("#slideshow-images .right")
          , n = t.getAttribute("data-idx") << 0;
        if (t.getAttribute("fullImageLoaded"))
            window.setTimeout(o, e);
        else {
            var i = Date.now();
            s("screenshots/" + (n + 1) + ".jpg")(function(n) {
                t.querySelector("img").src = n.src,
                t.setAttribute("fullImageLoaded", !0);
                var a = Date.now() - i;
                a > e ? o() : window.setTimeout(o, e - a)
            })
        }
    }
    function o() {
        if (!S) {
            var e = x + 1;
            e > v - 1 && (e = 0),
            a(e)
        }
    }
    function a(e) {
        x = e << 0;
        var t = x > 0 ? x - 1 : v - 1
          , n = x < v - 1 ? x + 1 : 0;
        k.querySelectorAll(".image").forEach(function(e) {
            e.className === A + " left" && (e.className = A + " fromLeft"),
            e.className === A + " right" && (e.className = A + " fromRight"),
            -1 === e.className.indexOf("inactive") && (e.className += " inactive")
        }),
        k.querySelector('[data-idx="' + x + '"]').className = A + " middle",
        k.querySelector('[data-idx="' + t + '"]').className = A + " left",
        k.querySelector('[data-idx="' + n + '"]').className = A + " right",
        b.querySelectorAll(".bullet").forEach(function(e, t) {
            e.className = "bullet",
            t === x && (e.className += " active")
        }),
        window.setTimeout(function() {
            k.querySelectorAll(".inactive").forEach(function(e) {
                e.className = A + " inactive fromRight"
            })
        }, 1e3 * h),
        i()
    }
    function d() {
        var e = window.innerWidth / window.innerHeight
          , t = u / I * e
          , n = u;
        t > m && (t = m,
        n = t * I / e);
        var i = n * w
          , o = .5 - n / 2
          , a = n * f
          , d = -2 * a
          , s = 1 + a
          , r = (1 - n) / 4 - n / 2
          , c = .5 - .5 * n - (i + n) / 2 - g
          , l = 1 - (1 - n) / 4 - n / 2
          , p = .5 + .5 * i + g
          , v = Math.min(r, c)
          , y = Math.max(l, p);
        R.innerHTML = "\n\t\t#slideshow-images {\n\t\t\theight: " + 100 * t + "vh;\n\t\t}\n\t\t#slideshow-images .image {\n\t\t\ttransition-duration: " + h + "s;\n\t\t\twidth: " + 100 * n + "vw;\n\t\t\theight: " + 100 * t + "vh;\n\t\t}\n\t\t#slideshow-images .middle {\n\t\t\ttransform: translateX(" + 100 * o + "vw);\n\t\t}\n\t\t#slideshow-images .left {\n\t\t\ttransform: translateX(" + 100 * v + "vw) scale(" + w + ");\n\t\t}\n\t\t#slideshow-images .right {\n\t\t\ttransform: translateX(" + 100 * y + "vw) scale(" + w + ");\n\t\t}\n\t\t#slideshow-images .inactive.fromLeft {\n\t\t\ttransform: translateX(" + 100 * d + "vw) scale(" + w * f + ");\n\t\t}\n\t\t#slideshow-images .inactive.fromRight {\n\t\t\ttransform: translateX(" + 100 * s + "vw) scale(" + w * f + ");\n\t\t}\n\t"
    }
    function s(e) {
        return function(t) {
            var n = new Image;
            return "function" == typeof t && (n.onload = function() {
                t(n),
                n.onload = null
            }
            ),
            n.src = e,
            n
        }
    }
    function r(e, t) {
        var n = e.slice()
          , i = []
          , o = n.length
          , a = function(e) {
            i.push(e(function() {
                0 == --o && t(i)
            }))
        };
        n.forEach(a)
    }
    function c() {
        var e = document.createElement("div");
        return e.className = A,
        e
    }
    var l = n(0)
      , u = .6
      , m = .7
      , w = .8
      , f = .5
      , g = 0
      , h = .5
      , p = 5
      , v = window.config.numScreenshots
      , y = document.getElementById("slideshow")
      , E = document.getElementById("slideshow-top")
      , b = document.getElementById("slideshow-nav")
      , k = document.getElementById("slideshow-images")
      , A = "image"
      , x = 0
      , I = void 0
      , R = void 0
      , S = !1;
    s("screenshots/1-small.jpg")(function(e) {
        I = e.width / e.height,
        R = document.createElement("style"),
        d(),
        document.body.appendChild(R),
        window.addEventListener("resize", d);
        for (var t = 0; t <= v - 1; t++) {
            var n = document.createElement("div");
            n.className = "bullet" + (0 === t ? " active" : ""),
            n.setAttribute("data-idx", t),
            b.appendChild(n)
        }
        s("thumbnail.jpg")(function() {
            E.className = "active",
            s("screenshots/1.jpg")(function(e) {
                var t = c();
                t.className = A + " middle",
                t.setAttribute("fullImageLoaded", !0),
                t.setAttribute("data-idx", 0),
                t.appendChild(e),
                k.appendChild(t);
                for (var n = [], o = 1; o <= v - 1; o++)
                    n.push(s("screenshots/" + (o + 1) + "-small.jpg"));
                r(n, function(e) {
                    e.forEach(function(e) {
                        var t = (e.src.match(/screenshots\/([0-9]+)[-.]/)[1] << 0) - 1
                          , n = c();
                        n.appendChild(e),
                        n.setAttribute("data-idx", t),
                        n.className = 1 === t ? A + " right" : t === v - 1 ? A + " left" : A + " inactive",
                        k.appendChild(n)
                    }),
                    y.className = "active",
                    i()
                }),
                (0,
                l.startLoadingGame)()
            })
        })
    }),
    window.removeSlideshowEventListeners = function() {
        S = !0
    }
}
, function(e, t, n) {
    "use strict";
    var i = ["adblocked", "completed", "error", "impression", "limit", "ready", "requested", "skipped", "started", "update"];
    window.initPokiBridge = function(e) {
        window.pokiReady ? window.unityGame.SendMessage(e, "Ready") : window.pokiAdblocked ? window.unityGame.SendMessage(e, "AdBlocked") : (POKI_DISPATCHER.addEventListener(poki.ready, function() {
            window.unityGame.SendMessage(e, "Ready")
        }),
        POKI_DISPATCHER.addEventListener(poki.adblocked, function() {
            window.unityGame.SendMessage(e, "AdBlocked")
        })),
        i.forEach(function(t) {
            POKI_DISPATCHER.addEventListener(poki.ads[t], function() {
                window.unityGame.SendMessage(e, "AdEvent", t)
            })
        })
    }
    ,
    window.pokiRequestAd = function(e) {
        POKI_ADS.requestAd({
            position: e
        })
    }
    ,
    window.pokiTrack = function(e) {
        POKI_TRACKER.track(e)
    }
}
]);
