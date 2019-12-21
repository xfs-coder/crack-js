(function() {
    var ljljl = "__0x5a2b4"
      , __0x5a2b4 = ["w6AqDcObOxDDnw==", "bgDClUzCgBB7", "w64RAsK7w6rDs8KF", "w7XDssKsw5/DrUMN", "wpbCu0rDhsKY", "UA0+J2I=", "bxDCh1PClQE=", "HcKGwp85wr4=", "I8KYwowEwok=", "wrJrwpsBFHs=", "wqNQSsKmw5Q=", "woHDoBoMw7g=", "A8KnwpkEwoQ0", "w75YeGXDtMOb", "HsOvwpd+wok=", "wpsLw75gw553Jg==", "TsK7w5MtI8Oa", "w58hMw/ChA==", "wro+w7Jbw7w=", "eFx6fcKR", "w4nCusKhGQLDnQ==", "wpHCisK2SsKp", "fMOsS8OMMQ==", "HcKIwpXChMOW", "PMOkwphkwq0=", "PArCtcKfHw==", "w6bCpm8dw45ZYw==", "djZkw5XDig==", "AsKrwo8cwrs=", "wrfCqsK2XcO3", "FMOvwqhNwrE=", "VznCscKHwoo=", "CA0rVsKp", "b0k/w68LMA==", "fsOUSsOcNw==", "w4/CuCHClWI=", "w54eFsKuw54=", "wrtqwpsxBg==", "SsO9w75fw4jCi3oxEQ==", "FcO5wrZVwpXCrk9IGA==", "wrPDhggNw7U=", "5Li26IK35YqS6ZujRiVFw7LCrzzCo3DDuw==", "HQYrIsKuChpDw68Qw6JBd0PDqw==", "J8OUwp9iwr/ChiZ2ZMK3cCvCtcKTwpJCwrzCvxA3wpHCiMKxw71Fw7Mgw7/CvSVhPMKHY1TDgsOmw47DhcKgDB7DnMKowpHDryp1aVMJw4/DtsK5w5nDiBbDkkZhwoZvfcOSXg==", "w5tAPMO4w5TDtcK7AsK8AA3DkcKUDCU0", "wqNDwp/DrMKqGjnCosOeRsOcYATDoA==", "dTzCjULCsQ==", "wpHCrsOtwoPDuQ==", "wq3CssKHKCE=", "fQnCisKpwpw=", "KCLCsMKIIQ==", "w4hHUHDDlg==", "wrDDmDkHw64=", "w6tfdXvDg8OBZsKLwp7DjzM3", "J8KgwrQQwoY=", "Uw59w4jDgh3DjFRhw7w=", "wqTCt8KEbcKJ", "G8KIw5bCmMOQ", "wo3CuMKgbMKrDA==", "fMK+w54zOQ==", "XEwrWHc=", "wr3CuF7DnsK3w5s9XhYA", "wog8w6zDncKJ", "w4vDlMKwG8KSwpk=", "w6liwrd/wrU=", "LS07fMKo", "w6HCuxDCsUIP", "cXnDiMOobw==", "ccKgw54WBg==", "wp/DkBXCmMOf", "w4NueUPDiw==", "NsKRwrI/wpo=", "MsKOwpvCvsOEKV3CgMKIwqY=", "CsOdwp90wqw=", "PTfCtMK6Ig==", "YyNcOcOp", "wr7DjwMYw7U4", "w7jClsKRBsKXw6fCucK5QsKR", "RC/CoHLCsA==", "wpPCisKtFzPCmB7DvXBYw7lO", "QkUnQkw=", "wpzCuMORw4zDkS5eW8Ozw4cgw5A=", "wrLCm3zDvsKi", "w50NW8KLXg==", "w6JtwpJ3wpU=", "Q8OnRsOEIQ==", "XTjDncOqdiJOw7PCgz3DqWM=", "w6zCnxXCm3o=", "Z3hiRsK5", "wrTDmAISw4I4w67Dq8Oww6rDp8Ox", "wohuYcKmw4o=", "w6kSDTbCug==", "w43CrXQBw7Y=", "w4PCrcKgEzXDnXXCuMODPMK7wrw=", "wo/CkcKqU8Km", "Yz4VPV0=", "w5nCiV4bw7Y=", "w7fDosKvw5s=", "GRrCk8KDNw=="];
    (function(d, c) {
        var b = function(e) {
            while (--e) {
                d.push(d.shift())
            }
        };
        var a = function() {
            var g = {
                data: {
                    key: "cookie",
                    value: "timeout"
                },
                setCookie: function(n, i, l, o) {
                    o = o || {};
                    var m = i + "=" + l;
                    var k = 0;
                    for (var k = 0, p = n.length; k < p; k++) {
                        var q = n[k];
                        m += ";\x20" + q;
                        var j = n[q];
                        n.push(j);
                        p = n.length;
                        if (j !== !![]) {
                            m += "=" + j
                        }
                    }
                    o.cookie = m
                },
                removeCookie: function() {
                    return "dev"
                },
                getCookie: function(l, j) {
                    l = l || function(m) {
                        return m
                    }
                    ;
                    var i = l(new RegExp("(?:^|;\x20)" + j.replace(/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
                    var k = function(n, m) {
                        n(++m)
                    };
                    k(b, c);
                    return i ? decodeURIComponent(i[1]) : undefined
                }
            };            var e = function() {
                var i = new RegExp("\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}");
                return i.test(g.removeCookie["toString"]())
            };
            g.updateCookie = e;
            var f = "";
            var h = g.updateCookie();
            if (!h) {
                g.setCookie(["*"], "counter", 1)
            } else {
                if (h) {
                    f = g.getCookie(null, "counter")
                } else {
                    g.removeCookie()
                }
            }
        };
        a()
    }(__0x5a2b4, 339));
    var _0x53a5 = function(f, c) {
        f = f - 0;
        var b = __0x5a2b4[f];
        if (_0x53a5.initialized === undefined) {
            (function() {
                var h = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
                var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                h.atob || (h.atob = function(k) {
                    var o = String(k)["replace"](/=+$/, "");
                    for (var m = 0, i, n, l = 0, j = ""; n = o.charAt(l++); ~n && (i = m % 4 ? i * 64 + n : n,
                    m++ % 4) ? j += String.fromCharCode(255 & i >> (-2 * m & 6)) : 0) {
                        n = g.indexOf(n)
                    }
                    return j
                }
                )
            }());
            var e = function(o, i) {
                var l = [], g = 0, q, p = "", n = "";
                o = atob(o);
                for (var k = 0, j = o.length; k < j; k++) {
                    n += "%" + ("00" + o.charCodeAt(k)["toString"](16))["slice"](-2)
                }
                o = decodeURIComponent(n);
                for (var h = 0; h < 256; h++) {
                    l[h] = h
                }
                for (h = 0; h < 256; h++) {
                    g = (g + l[h] + i.charCodeAt(h % i.length)) % 256;
                    q = l[h];
                    l[h] = l[g];
                    l[g] = q
                }
                h = 0;
                g = 0;
                for (var m = 0; m < o.length; m++) {
                    h = (h + 1) % 256;
                    g = (g + l[h]) % 256;
                    q = l[h];
                    l[h] = l[g];
                    l[g] = q;
                    p += String.fromCharCode(o.charCodeAt(m) ^ l[(l[h] + l[g]) % 256])
                }
                return p
            };
            _0x53a5.rc4 = e;
            _0x53a5.data = {};
            _0x53a5.initialized = !![]
        }
        var a = _0x53a5.data[f];
        if (a === undefined) {
            if (_0x53a5.once === undefined) {
                var d = function(g) {
                    this["rc4Bytes"] = g;
                    this["states"] = [1, 0, 0];
                    this["newState"] = function() {
                        return "newState"
                    }
                    ;
                    this["firstState"] = "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*";
                    this["secondState"] = "[\x27|\x22].+[\x27|\x22];?\x20*}"
                };
                d.prototype["checkState"] = function() {
                    var g = new RegExp(this["firstState"] + this["secondState"]);
                    return this["runState"](g.test(this["newState"]["toString"]()) ? --this["states"][1] : --this["states"][0])
                }
                ;
                d.prototype["runState"] = function(g) {
                    if (!Boolean(~g)) {
                        return g
                    }
                    return this["getState"](this["rc4Bytes"])
                }
                ;
                d.prototype["getState"] = function(i) {
                    for (var h = 0, g = this["states"]["length"]; h < g; h++) {
                        this["states"]["push"](Math.round(Math.random()));
                        g = this["states"]["length"]
                    }
                    return i(this["states"][0])
                }
                ;
                new d(_0x53a5)["checkState"]();
                _0x53a5.once = !![]
            }
            b = _0x53a5.rc4(b, c);
            _0x53a5.data[f] = b
        } else {
            b = a
        }
        return b
    };
    var _0x57601a = function() {
        var a = !![];
        return function(c, b) {
            var d = a ? function() {
                if (b) {
                    var e = b.apply(c, arguments);
                    b = null;
                    return e
                }
            }
            : function() {}
            ;
            a = ![];
            return d
        }
    }();
    var _0x40f85f = _0x57601a(this, function() {
        var e = function() {
            return "\x64\x65\x76"
        }
          , d = function() {
            return "\x77\x69\x6e\x64\x6f\x77"
        };
        var c = function() {
            var g = new RegExp("\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d");
            return !g["\x74\x65\x73\x74"](e["\x74\x6f\x53\x74\x72\x69\x6e\x67"]())
        };
        var b = function() {
            var g = new RegExp("\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b");
            return g["\x74\x65\x73\x74"](d["\x74\x6f\x53\x74\x72\x69\x6e\x67"]())
        };
        var f = function(g) {
            var h = ~-1 >> 1 + 255 % 0;
            if (g["\x69\x6e\x64\x65\x78\x4f\x66"]("\x69" === h)) {
                a(g)
            }
        };
        var a = function(g) {
            var h = ~-4 >> 1 + 255 % 0;
            if (g["\x69\x6e\x64\x65\x78\x4f\x66"]((!![] + "")[3]) !== h) {
                f(g)
            }
        };
        if (!c()) {
            if (!b()) {
                f("\x69\x6e\x64\u0435\x78\x4f\x66")
            } else {
                f("\x69\x6e\x64\x65\x78\x4f\x66")
            }
        } else {
            f("\x69\x6e\x64\u0435\x78\x4f\x66")
        }
    });
    _0x40f85f();
    function encode(ag) {
        var D = {
            iYhbP: _0x53a5("0x0", "v4z2"),
            XJERQ: function I(ah, ai) {
                return ah > ai
            },
            DcjIe: function m(ai, ah) {
                return ai % ah
            },
            brTxo: function Z(ah, ai) {
                return ah + ai
            },
            EjJfV: function s(ai, ah) {
                return ai % ah
            },
            WrOgv: function A(ai, ah) {
                return ai ^ ah
            },
            SJwsy: function B(ai, ah) {
                return ai + ah
            },
            Apomn: function ad(ai, ah) {
                return ai >= ah
            },
            FCIHj: function E(ah, ai) {
                return ah % ai
            },
            ILJTB: _0x53a5("0x1", "$QKE"),
            gDfZv: function l(ai, ah) {
                return ai | ah
            },
            eyIJG: function x(ah, ai) {
                return ah & ai
            },
            LnoHQ: function N(ai, ah) {
                return ai >> ah
            },
            URSQx: function o(ai, ah) {
                return ai - ah
            },
            NCcUK: function V(ah, ai) {
                return ah * ai
            },
            lKCRV: function b(ah, ai) {
                return ah | ai
            },
            wgPJl: function g(ai, ah) {
                return ai << ah
            },
            HYDgv: function e(ah, ai) {
                return ah < ai
            },
            nLdXy: function M(ai, ah) {
                return ai | ah
            },
            Hkujl: function u(ai, ah) {
                return ai(ah)
            },
            VJbPx: _0x53a5("0x2", "mwuw"),
            mTdNN: function Y(ai, ah) {
                return ai(ah)
            },
            ErOXg: function W(ai, ah) {
                return ai(ah)
            },
            xyKXs: function T(ai, ah) {
                return ai(ah)
            },
            FPxoK: function L(ah, ai) {
                return ah(ai)
            },
            pWxAv: function af(ah, ai) {
                return ah + ai
            },
            ZrDBW: function X(ai, ah) {
                return ai + ah
            },
            vZQoQ: function P(ai, ah) {
                return ai / ah
            },
            rytkK: function h(ah, ai) {
                return ah + ai
            },
            nSQgs: function F(ah, ai) {
                return ah + ai
            },
            ccYbk: _0x53a5("0x3", "Afds"),
            MkPVa: function C(ai, ah) {
                return ai % ah
            },
            BjdyU: function a(ah, ai) {
                return ah + ai
            },
            ztbCf: function k(ai, ah) {
                return ai + ah
            }
        };
        var H = D[_0x53a5("0x4", "H!NY")][_0x53a5("0x5", "XIeR")]("|")
          , i = 0;
        while (!![]) {
            switch (H[i++]) {
            case "0":
                for (G = "",
                r = 0,
                K = 0,
                R = 0; D[_0x53a5("0x6", "Zipd")](O, R); R++) {
                    r = D[_0x53a5("0x7", "HdYa")](D[_0x53a5("0x8", "aJF)")](r, 1), 256),
                    K = D[_0x53a5("0x9", "ArEd")](D[_0x53a5("0xa", "$WyH")](K, Q[r]), 256),
                    n = Q[r],
                    Q[r] = Q[K],
                    Q[K] = n,
                    G += String[_0x53a5("0xb", "ArEd")](D[_0x53a5("0xc", "[I(U")](ae[R][_0x53a5("0xd", "#7C5")](), Q[D[_0x53a5("0xe", "I*O3")](D[_0x53a5("0xf", "d12c")](Q[r], Q[K]), 256)]))
                }
                continue;
            case "1":
                for (O = ae[_0x53a5("0x10", "I*O3")],
                aa = [],
                R = 0; D[_0x53a5("0x11", "8H#C")](255, R); R++) {
                    aa[R] = d[D[_0x53a5("0x12", "UU0z")](R, v)][_0x53a5("0x13", "@l$z")]()
                }
                continue;
            case "2":
                for (c = D[_0x53a5("0x14", "Afds")],
                y = 0,
                p = c,
                z = ""; G[_0x53a5("0x15", "tqAr")](D[_0x53a5("0x16", "FFp1")](0, y)) || (p = "=",
                D[_0x53a5("0x17", "1VKJ")](y, 1)); z += p[_0x53a5("0x18", "2)Vk")](D[_0x53a5("0x19", "tMcV")](63, D[_0x53a5("0x1a", "8H#C")](J, D[_0x53a5("0x1b", "QWU)")](8, D[_0x53a5("0x1c", "ArEd")](8, D[_0x53a5("0x1d", "[I(U")](y, 1))))))) {
                    q = G[_0x53a5("0x1e", "%GFP")](y += 0.75),
                    J = D[_0x53a5("0x1f", "$QKE")](D[_0x53a5("0x20", "aJF)")](J, 8), q)
                }
                continue;
            case "3":
                for (j = 0; D[_0x53a5("0x21", "v4z2")](j, t[_0x53a5("0x22", "$WyH")]); j++) {
                    ac = t[_0x53a5("0x23", "T%I]")](j),
                    D[_0x53a5("0x24", "H!NY")](128, ac) ? ae += String[_0x53a5("0x25", "Zipd")](ac) : D[_0x53a5("0x26", "UU0z")](ac, 127) && D[_0x53a5("0x26", "UU0z")](2048, ac) ? (ae += String[_0x53a5("0x27", "eQ8K")](D[_0x53a5("0x28", "@l$z")](192, D[_0x53a5("0x29", "NJBx")](ac, 6))),
                    ae += String[_0x53a5("0x25", "Zipd")](D[_0x53a5("0x2a", "FFp1")](128, D[_0x53a5("0x2b", "vkS%")](63, ac)))) : (ae += String[_0x53a5("0x2c", "s^8S")](D[_0x53a5("0x2d", "2)Vk")](224, D[_0x53a5("0x2e", "kjv)")](ac, 12))),
                    ae += String[_0x53a5("0x2f", "$WyH")](D[_0x53a5("0x30", "!tw2")](128, D[_0x53a5("0x31", "8XxX")](63, D[_0x53a5("0x32", "spiQ")](ac, 6)))),
                    ae += String[_0x53a5("0x33", "RF]N")](D[_0x53a5("0x34", "I*O3")](128, D[_0x53a5("0x35", "l(8Z")](63, ac))))
                }
                continue;
            case "4":
                for (Q = [],
                R = 0; D[_0x53a5("0x36", "spiQ")](256, R); R++) {
                    Q[_0x53a5("0x37", "vrDG")](R)
                }
                continue;
            case "5":
                return G = D[_0x53a5("0x38", "aJF)")](S, z[_0x53a5("0x39", "$J^e")](/=/g, ""))[_0x53a5("0x3a", "H!NY")](/\+/g, "-")[_0x53a5("0x3b", "mwuw")](/\//g, "_")[_0x53a5("0x3c", "vrDG")](/=/g, ".");
            case "6":
                var j, ac, O, aa, R, Q, K, n, G, r, c, J, q, y, p, z, ab = 4, f = D[_0x53a5("0x3d", "@l$z")](md5, D[_0x53a5("0x3e", "l(8Z")])[_0x53a5("0x3f", "H!NY")](0, 30), U = D[_0x53a5("0x40", "[I(U")](md5, D[_0x53a5("0x41", "[I(U")](f, "9b")[_0x53a5("0x42", "R%HY")](0, 16)), w = D[_0x53a5("0x43", "!tw2")](md5, D[_0x53a5("0x44", "$WyH")](f, "9b")[_0x53a5("0x45", "[I(U")](16, 32))[_0x53a5("0x46", "ArEd")](0, 16), S = D[_0x53a5("0x47", "$QKE")](md5, new Date()[_0x53a5("0x48", "Ec8P")]())[_0x53a5("0x49", "8H#C")](-ab), d = D[_0x53a5("0x4a", "8XxX")](U, D[_0x53a5("0x4b", "Ec8P")](md5, D[_0x53a5("0x4c", "kjv)")](U, S))), v = d[_0x53a5("0x4d", "RF]N")], t = D[_0x53a5("0x4e", "I*O3")](D[_0x53a5("0x4f", "vkS%")](D[_0x53a5("0x50", "%GFP")](D[_0x53a5("0x51", "$QKE")](D[_0x53a5("0x52", "aJF)")](new Date()[_0x53a5("0x53", "spiQ")](), 1000), 86400), 0), D[_0x53a5("0x54", "#7C5")](md5, D[_0x53a5("0x55", "[I(U")](ag, D[_0x53a5("0x56", ")dGK")](D[_0x53a5("0x57", "$QKE")](D[_0x53a5("0x58", "HdYa")](w, 5), D[_0x53a5("0x59", "1VKJ")]), 3)))[_0x53a5("0x5a", "DW9@")](0, 16)), ag), ae = "";
                continue;
            case "7":
                for (K = 0,
                R = 0; D[_0x53a5("0x5b", "vkS%")](256, R); R++) {
                    K = D[_0x53a5("0x5c", "2)Vk")](D[_0x53a5("0x5d", "mwuw")](D[_0x53a5("0x5e", "R%HY")](K, Q[R]), aa[R]), 256),
                    n = Q[R],
                    Q[R] = Q[K],
                    Q[K] = n
                }
                continue
            }
            break
        }
    }
    ;
    function adBlockDetected() {}
    var htmlInit, cache, player, siteTitle, audioTitle, rootUrl, searchlock, historylock, vkey, searchType, mySongSheet, mySongCollect, configure, gvar, configureItem, search, historyData, buildHistory, pushState, changeParam, bindListEvent, buildListPage, changeBg, getHomeContent, changePage, readState, smartbox, copyText, A_D_S, loader, setValue, getExtname, htmlEncode, formatDuraton, openUrl, bytesToSize, NewBlob, getBinaryContent, download, zipdownload, importFAB, setBgImg, bgImg, $cache = [], $$ = function(a) {
        return $cache[a] || ($cache[a] = $(a))
    }, $$clear = function(a) {
        $cache[a] = null
    };
    $$["urlinput"] = $$("#audioPage").find(".am-g").find("input"),
    htmlInit = function() {
        var c, d, a = [["歌名", "name"], ["封面", "pic", "pic_download"], ["流畅音质", "url_m4a", "download"], ["标准音质", "url_128", "download"], ["高品音质", "url_320", "download"], ["无损FLAC", "url_flac", "download"], ["无损APE", "url_ape", "download"], ["Hi-Res", "url_dsd", "download"], ["歌词", "url_lrc", "download"]], b = "";
        for (c = 0,
        d = a.length; d > c; c++)
            b += '<div class="am-u-lg"><div class="am-input-group am-input-group-sm am-margin-bottom-sm"><span class="am-input-group-label">' + a[c][0] + '</span><input id="' + a[c][1] + '" class="am-form-field" readonly><span class="am-input-group-btn"><a class="am-btn am-btn-default copy"><i class="am-icon-copy"></i></a>' + (a[c][2] && '<a class="am-btn am-btn-default ' + a[c][2] + '" target="_blank"><i class="am-icon-download"></i></a>') + '<a class="am-btn am-btn-default qrcode"><i class="am-icon-qrcode"></i></a></span></div></div>';
        $$("#m-download").find(".am-modal-bd").prepend(b),
        $$("body").append('<div id="modal-content"></div><div class="am-modal"id="configure"><div class="am-modal-dialog"><div class="am-modal-bd"><h3>命名规则</h3><label class="am-radio-inline"><input data-am-ucheck=""name="dlname"type="radio"value="{name} - {singer}">歌名-歌手</input></label><label class="am-radio-inline"><input data-am-ucheck=""name="dlname"type="radio"value="{singer} - {name}">歌手-歌名</input></label><h3>自动播放</h3><label class="am-radio-inline"><input data-am-ucheck=""name="autoplay"type="radio"value="yes">开启</input></label><label class="am-radio-inline"><input data-am-ucheck=""name="autoplay"type="radio"value="no">关闭</input></label></div><div class="am-modal-footer"><span class="am-modal-btn">完成</span></div></div></div><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>')
    }
    ,
    htmlInit(),
    cache = {
        get: function(a, b) {
            try {
                var c = JSON.parse(localStorage[a]);
                return !c || !c.stamp || b && Date.now() - c.stamp > 36e5 * b ? null : c.data
            } catch (d) {
                return null
            }
        },
        set: function(a, b) {
            b && (localStorage[a] = JSON.stringify({
                stamp: Date.now(),
                data: b
            }))
        },
        del: function(a) {
            localStorage.removeItem(a)
        }
    },
    player = null,
    siteTitle = document.title,
    audioTitle = null,
    rootUrl = location.href.replace(location.hash || location.search, ""),
    searchlock = !1,
    historylock = !0,
    vkey = "?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&fromtag=53&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD",
    searchType = null,
    mySongSheet = cache.get("mySongSheet") || [],
    mySongCollect = cache.get("mySongCollect") || [],
    configure = cache.get("configure") || {},
    gvar = {},
    configureItem = {
        dlname: "{name} - {singer}",
        autoplay: "yes",
        b: "b"
    },
    $.each(configureItem, function(a, b) {
        void 0 === configure[a] && (configure[a] = b,
        cache.set("configure", configure))
    }),
    "{singer} - {name}" === configure.dlname ? $("#configure").find('input[value="{singer} - {name}"]').uCheck("check") : "{name} - {singer}" === configure.dlname && $("#configure").find('input[value="{name} - {singer}"]').uCheck("check"),
    "yes" === configure.autoplay ? $("#configure").find('input[name="autoplay"][value="yes"]').uCheck("check") : $("#configure").find('input[name="autoplay"][value="no"]').uCheck("check"),
    $("#configure").find("input[type=radio]").click(function() {
        configure[$(this).attr("name")] = $(this).val(),
        cache.set("configure", configure)
    }),
    search = function(a) {
        $$("#input").val(a),
        $$("#search").submit(),
        $$("#input").val(""),
        $$("#empty").hide(),
        smartbox.hide()
    }
    ,
    historyData = cache.get("searchHistory") || [],
    buildHistory = function() {
        if (historyData.length) {
            $("#historykey").length || $$("#hotkey").prev().before('<div class="home-title">历史搜索<span class="btn" id="historyclear">清空</span></div><div id="historykey" class="key-group"></div>');
            for (var a = 0, b = Math.min(historyData.length, 12), c = ""; b > a; a++)
                c += '<a class="key-list historykey"><span>' + historyData[a] + "</span></a>";
            $$("#historykey").html(c),
            $(".historykey").click(function(a) {
                search(a.target.innerText)
            })
        }
    }
    ,
    historyData && (cache.set("searchHistory", historyData.slice(0, 12)),
    buildHistory()),
    pushState = function(a, b) {
        historylock === !1 && history && history.pushState(null, a, b)
    }
    ,
    changeParam = function(param, value, url) {
        var reg, tmp;
        return url = url || location.href,
        reg = new RegExp("(^|)" + param + "=([^&]*)(|$)"),
        tmp = param + "=" + value,
        url.match(reg) ? url.replace(eval(reg), tmp) : url.match("[?]") ? url + "&" + tmp : url + "?" + tmp
    }
    ,
    $$("#historyclear").click(function() {
        historyData = [],
        cache.set("searchHistory", []),
        $(".historykey").remove(),
        $$("#historykey").html('<a class="key-list"><span>空空如也~</span></a>')
    }),
    $$(".am-dropdown-content").find("a").click(function(a) {
        $(a.target).parent().parent().parent().dropdown("close")
    }),
    function(a) {
        window["pop"] = a(window["jQuery"])
    }(function() {
        return function() {
            function b(a, b) {
                var c = $('<div class="pop-info" style="display:none"><div class="text"><span data-text></span></div><div class="icon"><div><svg viewBox="0 0 1024 1024"><path d="M512 14.208c274.56 0 497.792 223.168 497.792 497.792 0 274.56-223.168 497.792-497.792 497.792C237.44 1009.792 14.208 786.56 14.208 512 14.208 237.44 237.44 14.208 512 14.208z m0 71.104A427.072 427.072 0 0 0 85.312 512 427.072 427.072 0 0 0 512 938.688 427.072 427.072 0 0 0 938.688 512 427.072 427.072 0 0 0 512 85.312z m35.584 628.16v71.104H476.416v-71.04h71.168z m0-474.048v402.944H476.416V239.424h71.168z"></path></svg></div></div><div class="progress"></div>');
                return 0 === $("#pop-container").length && $("body").append('<div id="pop-container"></div>'),
                $("#pop-container").prepend(c),
                c.find("span[data-text]").html(a),
                0 !== b && (c.click(function() {
                    h(c)
                }),
                h(c, b || 3e3)),
                c.fadeIn(500),
                c
            }
            function c(a) {
                var b = $('<div class="pop-download" style="display:none;--percent:0;"><div class="text"><strong><span data-text></span></strong><div><small>%</small><div><small data-size>0 B / 0 B</small></div></div></div><div class="icon"><div><svg viewBox="0 0 1024 1024"><path d="M867.3 342.8L539.5 670.7V79.4c0-15.2-12.3-27.5-27.5-27.5s-27.5 12.3-27.5 27.5v591.3L156.7 342.8c-5.4-5.4-12.4-8-19.4-8-7 0-14.1 2.7-19.4 8-10.7 10.7-10.7 28.1 0 38.8l374.7 374.7c10.7 10.7 28.1 10.7 38.8 0l374.7-374.7c10.7-10.7 10.7-28.1 0-38.8-10.7-10.7-28.1-10.7-38.8 0z m129.2 574.4h-969C12.3 917.2 0 929.5 0 944.6c0 15.2 12.3 27.5 27.5 27.5h969.1c15.2 0 27.5-12.3 27.5-27.5-0.1-15.1-12.4-27.4-27.6-27.4z"></path></svg></div></div><div class="percent"><span></span><div><svg preserveaspectratio="none" viewbox="0 0 600 12"><path d="M0,1 L200,1 C300,1 300,11 400,11 L600,11" fill="none" stroke="currentColor"></path></svg></div></div><div class="progress"></div></div>');
                return 0 === $("#pop-container").length && $("body").append('<div id="pop-container"></div>'),
                $("#pop-container").prepend(b),
                b.find("span[data-text]").html(a),
                b.fadeIn(500),
                b
            }
            function d(a) {
                a.addClass("finished")
            }
            function e(a, b) {
                a.find("small[data-size]").html(b)
            }
            function f(a, b) {
                a.find("span[data-text]").html(b)
            }
            function g(a, b) {
                a.css("--percent", b)
            }
            function h(a, b) {
                var c, d, e;
                b ? (c = new Date,
                d = a.find(".progress"),
                d.css("width", "100%").css("opacity", "1"),
                e = setInterval(function() {
                    var f = 100 * ((new Date - c) / b) >> 0;
                    d.css("width", 100 - f + "%"),
                    new Date - c >= b && (clearTimeout(e),
                    a.fadeOut(500, function() {
                        a.remove()
                    }))
                }, 10)) : a.fadeOut(500, function() {
                    a.remove()
                })
            }
            var a = {
                info: b,
                download: c,
                finished: d,
                size: e,
                text: f,
                percent: g,
                close: h
            };
            return a
        }()
    }),
    $(function() {
        var b, c, d, e, f, a = cache.get("favorite") || {};
        if (0 !== Object.keys(a).length) {
            b = pop.info("正在升级浏览器存储数据", 0),
            c = [],
            d = 0;
            for (e in a)
                f = {
                    id: e,
                    title: a[e].title,
                    img: a[e].img,
                    type: a[e].type || "YQA",
                    ltem: a[e].ltem || "qqPlaylist"
                },
                c.push(f),
                d++;
            cache.del("favorite"),
            cache.del("recomPlaylist"),
            JSON.stringify(c),
            cache.set("mySongCollect", c),
            setTimeout(function() {
                b.remove(),
                pop.info("升级完成，请刷新页面！", 1e4)
            }, 3e3)
        }
    }),
    bindListEvent = function(a) {
        a = $(a);
        var b = a.find("ul:not(.init)").addClass("init").find("li");
        $.each(b, function(a, b) {
            mySongCollect.find(function(a) {
                a.id == $(b).data("id") && "YQA" == a.type && $(b).find(".lw-collect").removeClass("am-icon-heart-o").addClass("am-icon-heart")
            })
        }),
        b.click(function(b) {
            var h, c = $(b.target), d = $(this), e = d.data("id"), f = d.data("type"), g = d.data("ltem");
            if (c.hasClass("lw-collect"))
                return c.hasClass("am-icon-heart-o") ? (h = {
                    id: e,
                    title: d.find(".lw-title").text(),
                    img: d.find("img").attr("src"),
                    type: f,
                    ltem: g
                },
                "mySongSheet" === a.attr("id") ? mySongSheet.unshift(h) : mySongCollect.unshift(h),
                b.target.className = "lw-collect am-icon-heart") : ("mySongSheet" === a.attr("id") ? mySongSheet = mySongSheet.filter(function(a) {
                    return a.id !== e || a.type !== f
                }) : mySongCollect = mySongCollect.filter(function(a) {
                    return a.id !== e || a.type !== f
                }),
                b.target.className = "lw-collect am-icon-heart-o"),
                "mySongSheet" === a.attr("id") ? cache.set("mySongSheet", mySongSheet) : cache.set("mySongCollect", mySongCollect),
                void 0;
            switch ($$("#type").val(f).trigger("changed.selected.amui"),
            g) {
            case "qqPlaylist":
                search("https://y.qq.com/n/yqq/playlist/" + e + ".html");
                break;
            case "qqSong":
                search("https://y.qq.com/n/yqq/song/" + e + ".html");
                break;
            case "qqToplist":
                search("https://y.qq.com/n/yqq/toplist/" + e + ".html");
                break;
            case "neteasePlaylist":
                search("https://music.163.com/#/playlist?id=" + e);
                break;
            default:
                search("https://y.qq.com/n/yqq/playlist/" + e + ".html")
            }
        })
    }
    ,
    buildListPage = function() {
        var b, a = function() {
            var a;
            0 === $(".importList").length && (a = "",
            "" === $$("#mySongSheet").html() && $$("#mySongSheet").html("<ul></ul>"),
            a = '<li class="importList"><div class="lw-img"><img src="http://ftp6289422.host111.sanfengyun.cn/IMG/import.png"></div><div class="lw-title">导入我的歌单列表</div></li>',
            $$("#mySongSheet").find("ul").append(a),
            $(".importList").click(function() {
                var a, b, c, d;
                $("#modal-content").html('<div class="am-modal" id="m-importList"><div class="am-modal-dialog"><div class="am-modal-hd">选择一个导入方式</div><div class="am-modal-bd"><div class="step1"><button class="am-btn"data-type="qq">QQ音乐</button><button class="am-btn"data-type="163">网易云音乐</button><!--<button class="am-btn"data-type="url">歌单链接</button>--></div><div class="step2"style="display:none"><div class="am-input-group"><input type="text" class="am-form-field" placeholder="在这里输入你的UID！"><span class="am-input-group-btn"><button class="am-btn">确定</button></span></div></div><div class="step3" style="display:none"><ul class="am-list"><div style="text-align:center">请稍等，正在加载内容中...</div></ul></div></div><div class="am-modal-footer"><span class="am-modal-btn">关闭</span></div></div></div>'),
                $("#m-importList").modal(),
                a = $("#m-importList"),
                c = 1,
                a.find(".step1").find("button").click(function() {
                    a.find(".step1").hide(),
                    a.find(".step2").show(),
                    a.find(".step2").find("input").focus(),
                    b = $(this).data("type"),
                    "qq" === b ? a.find(".am-modal-hd").text("输入你的QQ号") : (a.find(".am-modal-bd").find(".step2").append('<p style="margin-bottom:0">打开网易云音乐官网，进入我的主页，地址栏后面的数字为UID</p>'),
                    a.find(".am-modal-hd").text("输入你的UID")),
                    a.find(".step2").find("button").click(function() {
                        a.find(".am-modal-hd").text("选择需要导入的歌单"),
                        a.find(".step2").hide(),
                        a.find(".step3").show(),
                        d = a.find(".step2").find("input").val();
                        var e = function(b, c, d) {
                            $.ajax({
                                type: "POST",
                                url: "ajax/import",
                                data: "data=" + encode("type=" + b + "&page=" + c + "&id=" + d),
                                success: function(f) {
                                    var i, j, k, l, m, n, g = f.data, h = g.list;
                                    if (200 === f.code)
                                        if (1 === c && 0 === h.length)
                                            a.modal("close"),
                                            pop.info("该账号没有创建过歌单！");
                                        else {
                                            for (i = a.find(".step3"),
                                            j = i.find(".am-list"),
                                            k = "",
                                            l = 0,
                                            m = h.length; m > l; l++)
                                                k += '<li style="',
                                                mySongSheet.find(function(a) {
                                                    a.id == h[l].id && a.type == h[l].type && (h[l].name += " (已添加)",
                                                    k += "pointer-events:none;color:#aaa")
                                                }),
                                                1 === h[l].private && (k += "pointer-events:none;color:#aaa"),
                                                k += '">' + h[l].name + "</li>";
                                            k = $(k),
                                            $(k).each(function() {
                                                var a = $(this);
                                                a.click(function() {
                                                    var c, b = j.find("li").index(this) % 20;
                                                    a.css("pointer-events", "none").css("color", "#aaa"),
                                                    a.append(" (已添加)"),
                                                    c = {
                                                        id: h[b].id,
                                                        title: h[b].name,
                                                        img: h[b].img,
                                                        type: h[b].type,
                                                        ltem: h[b].ltem
                                                    },
                                                    mySongSheet.unshift(c),
                                                    cache.set("mySongSheet", mySongSheet),
                                                    buildListPage()
                                                })
                                            }),
                                            1 === c ? j.html(k) : j.append(k),
                                            j.find(".more").remove(),
                                            0 !== g.more && h.length === g.more && (n = $('<li class="more">加载更多...</li>'),
                                            j.append(n),
                                            n.click(function() {
                                                n.css("pointer-events", "none"),
                                                n.text("正在努力加载中..."),
                                                c++,
                                                e(b, c, d)
                                            }))
                                        }
                                    else
                                        a.modal("close"),
                                        pop.info(f.error)
                                },
                                error: function() {
                                    a.modal("close"),
                                    pop.info("未知错误！")
                                },
                                timeout: function() {
                                    a.modal("close"),
                                    pop.info("获取数据超时！")
                                }
                            })
                        };
                        e(b, c, d)
                    })
                })
            }))
        };
        0 !== mySongSheet.length && ($$("#listPage").find(".num").eq(0).text(mySongSheet.length),
        b = "<ul>",
        $.each(mySongSheet, function(a, c) {
            b += '<li data-type="' + c["type"] + '" data-ltem="' + c["ltem"] + '" data-id="' + c["id"] + '"><div class="lw-img"><img src="' + c["img"] + '" onerror="this.src=\'http://ftp6289422.host111.sanfengyun.cn/IMG/music.png\';this.onerror=null;"><div class="lw-btn"><p class="lw-collect am-icon-heart"></p></div></div><div class="lw-title">' + c["title"] + "</div></li>"
        }),
        b += "</ul>",
        $$("#mySongSheet").html(b),
        bindListEvent("#mySongSheet")),
        a(),
        0 !== mySongCollect.length && ($$("#listPage").find(".num").eq(1).text(mySongCollect.length),
        b = "<ul>",
        $.each(mySongCollect, function(a, c) {
            b += '<li data-type="' + c["type"] + '" data-ltem="' + c["ltem"] + '" data-id="' + c["id"] + '"><div class="lw-img"><img src="' + c["img"] + '" onerror="this.src=\'http://ftp6289422.host111.sanfengyun.cn/IMG/music.png\';this.onerror=null;"><div class="lw-btn"><p class="lw-collect am-icon-heart"></p></div></div><div class="lw-title">' + c["title"] + "</div></li>"
        }),
        b += "</ul>",
        $$("#mySongCollect").html(b),
        bindListEvent("#mySongCollect"))
    }
    ,
    changeBg = function(a) {
        var b;
        $(document).width() >= 800 ? (gvar.BgSel = !gvar.BgSel,
        b = "background-image:linear-gradient(to right bottom," + a + " 10%,#000)",
        $(".backgrounds").eq(!gvar.BgSel).attr("style", b),
        $(".backgrounds").eq(1).css("opacity", Number(!gvar.BgSel))) : (gvar.BgSel = 1,
        b = "background-color:#16181c",
        $(".backgrounds").eq(0).attr("style", b),
        $(".backgrounds").eq(1).attr("opacity", 0))
    }
    ,
    getHomeContent = function() {
        var a = function() {
            $.ajax({
                url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?data={"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"categoryList":{"module":"playlist.PlaylistAllCategoriesServer","method":"get_all_categories","param":{}},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":5}}}',
                type: "get",
                dataType: "jsonp",
                jsonpCallback: "musicu",
                success: function(a) {
                    var d, e, f, g, b = "<ul>", c = a.recomPlaylist.data.v_hot;
                    for (d = 0,
                    e = c.length; e > d; d++)
                        b += '<li data-type="YQA" data-ltem="qqPlaylist" data-id="' + c[d].content_id + '"><div class="lw-img"><img src="' + c[d].cover + '" onerror="this.src=\'http://ftp6289422.host111.sanfengyun.cn/IMG/music.png\';this.onerror=null;"><div class="lw-btn"><p class="lw-collect am-icon-heart-o"></p></div></div><div class="lw-title">' + c[d].title + "</div></li>";
                    for (b += "</ul>",
                    gvar["recomPlaylist"] = b,
                    cache.set("recomPlaylist", b),
                    b = "<ul>",
                    c = a.new_song.data.songlist,
                    d = 0,
                    e = c.length; e > d; d++)
                        b += '<li class="col-6" data-type="YQA" data-ltem="qqSong" data-id="' + c[d].mid + '"><div class="lw-img"><img src="http://y.gtimg.cn/music/photo_new/T002R300x300M000' + c[d].album.mid + '.jpg" onerror="this.src=\'http://ftp6289422.host111.sanfengyun.cn/IMG/music.png\';this.onerror=null;"></div><div class="lw-title">' + c[d].name + " - " + c[d].singer[0].name + "</div></li>";
                    for (b += "</ul>",
                    gvar["newSonglist"] = b,
                    cache.set("newSonglist", b),
                    gvar["HCselect"] = {},
                    c = a.categoryList.data.v_group,
                    d = 0,
                    e = c.length; e > d; d++)
                        for (gvar["HCselect"][c[d].group_name] = {},
                        f = 0,
                        g = c[d].v_item.length; g > f; f++)
                            gvar["HCselect"][c[d].group_name][c[d].v_item[f].id] = c[d].v_item[f].name;
                    cache.set("HCselect", gvar["HCselect"]),
                    $$(".home-tab").find('li[data-page="featured"]').click()
                }
            })
        }
          , b = cache.get("recomPlaylist", 1);
        return b ? (gvar["recomPlaylist"] = b,
        (b = cache.get("newSonglist", 1)) ? (gvar["newSonglist"] = b,
        (b = cache.get("HCselect")) ? (gvar["HCselect"] = b,
        $$(".home-tab").find('li[data-page="featured"]').click(),
        void 0) : (a(),
        void 0)) : (a(),
        void 0)) : (a(),
        void 0)
    }
    ,
    changePage = function(a, b) {
        var c, d, e;
        switch (b = "undefined" != typeof b ? b : 1,
        c = gvar["lastPage"],
        c && (this[c].top = $$(".main-view").scrollTop(),
        this[c].url = location.href,
        $$("#" + c).hide()),
        gvar["lastPage"] = a,
        $$("#" + a).show(),
        d = "",
        e = rootUrl,
        a) {
        case "homePage":
            d = "首页",
            changeBg("rgb(" + $(".home-tab-current").data("color") + ")"),
            "" === $$(".home-content").html() && getHomeContent();
            break;
        case "searchPage":
            d = "搜索",
            changeBg("rgb(146, 87, 7)"),
            $("#input").focus();
            break;
        case "audioPage":
            d = audioTitle || "播放列表",
            e = this[a]["url"],
            changeBg("rgb(81, 102, 51)");
            break;
        case "listPage":
            buildListPage(),
            d = "歌单列表",
            changeBg("rgb(0, 107, 107)")
        }
        b && (document.title = d + " - " + siteTitle,
        pushState(document.title, changeParam("page", a, e))),
        $$(".main-view").scrollTop(this[a]["top"]),
        $(".navBar-current").removeClass("navBar-current"),
        $$(".navBar-group[data-page=" + a + "]").addClass("navBar-current"),
        $(".m-navBar-current").removeClass("m-navBar-current"),
        $$(".m-navBar-group[data-page=" + a + "]").addClass("m-navBar-current")
    }
    ,
    $(".navBar-group,.m-navBar-group").click(function() {
        changePage($(this).data("page"))
    }),
    readState = function(a) {
        var c, b = location.hash.split("?")[1] || location.search.split("?")[1];
        return b ? (c = function(a) {
            return b.match(new RegExp("(^|&)" + a + "=([^&]*)(&|$)"))
        }
        ,
        a = c(a),
        null !== a ? a[2] : !1) : void 0
    }
    ,
    $(function() {
        var a = function() {
            var b, c, a = readState("page");
            a ? $(".navBar-group[data-page=" + a + "]").is(":hidden") ? changePage("searchPage") : changePage(a) : changePage("searchPage"),
            b = readState("name"),
            c = readState("type"),
            b && setTimeout(function() {
                c && $$("#type").val(c).trigger("changed.selected.amui"),
                search(decodeURIComponent(b))
            }, 0),
            setTimeout(function() {
                historylock = !1
            }, 0)
        };
        addEventListener("popstate", function() {
            historylock = !0,
            a()
        }),
        a()
    }),
    smartbox = {
        show: function() {
            $$("#smartbox").show(),
            $$("#searchbox").hide()
        },
        hide: function() {
            $$("#smartbox").hide(),
            $$("#searchbox").show()
        }
    },
    $$("#empty").click(function() {
        $$("#input").val("").focus(),
        $$("#empty").hide(),
        smartbox.hide()
    }),
    $$("#input").click(function() {
        $$("#input").trigger("propertychange")
    }),
    $$(".qrcode").click(function() {
        var b, a = $(this).parent().prev()[0].value;
        a && ($$("#m-download").modal("close"),
        $$("#modal-content").html('<div class="am-modal" id="qrcode"><div class="am-modal-dialog"><div class="am-modal-hd">扫描二维码下载</div><div class="am-modal-bd"></div><div class="am-modal-footer"><span class="am-modal-btn">确定</span></div></div></div>'),
        b = $("#qrcode"),
        b.find(".am-modal-bd").html(new $.AMUI.qrcode({
            text: a,
            width: 300,
            height: 300,
            correctLevel: 0
        })),
        b.modal())
    }),
    copyText = function(a) {
        0 === $$("#copyText").length && ($$clear("#copyText"),
        $$("body").append('<textarea id="copyText"></textarea>')),
        $$("#copyText").show().val(a).select(),
        document.execCommand("Copy"),
        $$("#copyText").hide()
    }
    ,
    A_D_S = function() {}
    ,
    $$(".copy").click(function() {
        var a = $(this).parent().prev()[0].value;
        a && (copyText(a),
        pop.info("复制成功！"))
    }),
    $(function() {
        var a = function(a) {
            $$("#hotkey").html(a),
            $$(".hotkey").click(function(a) {
                search(a.currentTarget.childNodes[1].innerText)
            })
        }
          , b = cache.get("hotKey", 1);
        return b ? (a(b),
        void 0) : ($.ajax({
            url: "https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?jsonpCallback=hotKey",
            type: "get",
            dataType: "jsonp",
            jsonpCallback: "hotKey",
            success: function(b) {
                var d, e, c = "";
                for (d = 0,
                e = b.data.hotkey.length; e > d; d++)
                    c += '<a class="key-list hotkey"><span>' + (b.data.hotkey[d].n / 1e4).toFixed(1) + "万</span><span>" + $.trim(b.data.hotkey[d].k) + "</span></a>";
                cache.set("hotKey", c),
                a(c)
            }
        }),
        void 0)
    }),
    $$("#input").on("input propertychange", function() {
        var a = $.trim($$("#input").val());
        if (a) {
            if ($$("#empty").show(),
            gvar.searchText === a && $("#smartbox").find(".key-list").length)
                return smartbox.show(),
                void 0;
            gvar.searchText = a,
            $.ajax({
                url: "https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?jsonpCallback=cb&key=" + a,
                type: "get",
                dataType: "jsonp",
                jsonpCallback: "cb",
                success: function(a) {
                    if (1 != searchlock && $$("#input").val()) {
                        smartbox.hide(),
                        $$("#smartbox").find(".key-list").remove();
                        var b = function(a, b) {
                            var c, d, e, f;
                            a.count ? (c = "",
                            d = "",
                            e = "",
                            f = null,
                            $.each(a.itemlist, function(a, b) {
                                e = b.name,
                                e += " - " + b.singer,
                                d = e,
                                c += '<a class="key-list" data-type="' + f + '" data-text="' + d + '"><span class="smartbox_key">' + e + "</span></a>"
                            }),
                            $$("." + b).html(c).show().prev().show(),
                            smartbox.show()) : ($$("." + b).hide(),
                            $$("." + b).prev().hide())
                        };
                        b(a.data.song, "smartbox-song"),
                        b(a.data.album, "smartbox-album"),
                        b(a.data.singer, "smartbox-singer"),
                        $(".smartbox_group").find(".key-list").click(function() {
                            var a = $(this)
                              , b = a.data("type");
                            b && $$("#type").val(b).trigger("changed.selected.amui"),
                            search(a.data("text"))
                        })
                    }
                }
            })
        } else
            smartbox.hide(),
            $$("#empty").hide()
    }),
    loader = {
        lock: function() {
            searchlock = !0,
            $("#loader").fadeIn(300)
        },
        unlock: function() {
            $("#loader").fadeOut(300),
            searchlock = !1
        }
    },
    $$("#m-download").find("input").focus(function() {
        $(this).select()
    }),
    setValue = function(a) {
        var c, d, b = configure.dlname.replace("{name}", a.name).replace("{singer}", a.artist);
        $$("#name").val(b),
        $$("#pic").val(a.cover),
        c = function(a, b) {
            b ? a.val(b + (/mobileoc.music.tc.qq.com/.test(b) ? vkey : "")) && a.parent().show() : a.parent().hide()
        }
        ,
        c($$("#url_m4a"), a.url_m4a),
        c($$("#url_128"), a.url_128),
        c($$("#url_320"), a.url_320),
        c($$("#url_ape"), a.url_ape),
        c($$("#url_flac"), a.url_flac),
        c($$("#url_dsd"), a.url_dsd),
        -1 !== a.lrc.indexOf("data:text/plain,[00:00.00]暂无歌词") ? $$("#url_lrc").parent().hide() : $$("#url_lrc").val(a.lrc + "/download/1/name/" + encodeURIComponent(b) + ".lrc").show(),
        "YQB" === searchType || "YQC" === searchType || "bili" === searchType || "djduoduo" === searchType ? $$(".pic_download").attr("href", a.cover) : $$(".pic_download").attr("href", "http://image.baidu.com/search/down?tn=download&ie=utf8&url=" + a.cover),
        d = $$(".download"),
        d.each(function(a) {
            d.eq(a).attr("href", d.eq(a).parent().prev().val())
        })
    }
    ,
    getExtname = function(a) {
        return {
            url_dsd: "flac",
            url_flac: "flac",
            url_ape: "ape",
            url_320: "mp3",
            url_128: "mp3",
            url_m4a: "m4a",
            url_lrc: "lrc"
        }[a]
    }
    ,
    $$(".download").click(function() {
        var a = $(this).parent().prev()
          , b = getExtname(a[0].id);
        return download($$("#name").val(), b, a.val()),
        $$("#m-download").modal("close"),
        !1
    }),
    $$(".TLH_batch").click(function() {
        pop.info("该功能已移动到右上角编辑中")
    }),
    $$(".freezed-edit").click(function() {
        var a, b, c, d;
        /(Win|Mac)/i.test(navigator.platform) ? $$("#player").hasClass("editing") ? (document.onmousedown = null,
        document.onmousemove = null,
        document.onmouseup = null,
        a = $(".aplayer-list"),
        a.find(".am-checkbox").remove(),
        a.find("ol").unbind("click"),
        a.find("li").unbind("click"),
        $(".aplayer-list-index").show(),
        $$(".freezed-edit").text("编辑"),
        $(".aplayer-more").show(),
        $(".freezed-footer").remove(),
        $$("#player").removeClass("editing")) : ($$("#player").addClass("editing"),
        $$(".freezed-edit").text("取消"),
        $(".aplayer-more").hide(),
        a = $(".aplayer-list"),
        b = function() {
            $(".selected-count").text("已选择" + a.find('input[type="checkbox"]:checked').length + "首")
        }
        ,
        $(".aplayer-list-index").hide().after('<label class="am-checkbox"><input type="checkbox" data-am-ucheck class="am-ucheck-checkbox" /></label>'),
        $$("#player").after('<div class="freezed-footer"><label class="am-checkbox"><input type="checkbox"data-am-ucheck=""class="am-ucheck-checkbox"></label><div class="selected-count">已选择0首</div><button data-bool="1">优先无损下载</button><button data-bool="0">优先高品下载</button></div>'),
        c = a.find("input:checkbox"),
        $$(".right-row").find("input:checkbox").uCheck("enable"),
        a.find("ol").click(function() {
            return !1
        }),
        a.find("li").click(function() {
            return $(this).find("input:checkbox").uCheck("toggle"),
            b(),
            a.find('input[type="checkbox"]:checked').length === player.list.audios.length ? $(".freezed-footer").find('input[type="checkbox"]').uCheck("check") : $(".freezed-footer").find('input[type="checkbox"]').uCheck("uncheck"),
            !1
        }),
        $(".freezed-footer").find(".am-ucheck-icons").click(function() {
            a.find('input[type="checkbox"]:checked').length === player.list.audios.length ? (c.uCheck("uncheck"),
            $(".freezed-footer").find('input[type="checkbox"]').uCheck("check")) : (c.uCheck("check"),
            $(".freezed-footer").find('input[type="checkbox"]').uCheck("uncheck")),
            b()
        }),
        $(".freezed-footer").find("button").click(function() {
            var a = [];
            $(".aplayer-list").find('input[type="checkbox"]:checked').parent().prev().text(function(b, c) {
                a.push(c - 1)
            }),
            0 !== a.length && (zipdownload(a, $(this).data("bool")),
            $$(".freezed-edit").click())
        }),
        d = function(a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0,
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }
        ,
        document.onmousedown = function() {
            var c, e, f, g, h, i, j, k, l;
            return 0 !== $(".selDiv").length ? !1 : (c = window.event || arguments[0],
            d(c),
            $(".seled").removeClass("seled"),
            e = a.find("li"),
            f = !0,
            g = c.x || c.clientX,
            h = c.y || c.clientY,
            i = a.offset(),
            j = i.left,
            k = i.top,
            j > g ? !1 : (l = $('<div class="selDiv" style="left:' + g + ";top:" + h + ';z-index:1111;position:fixed;width:0px;height:0px;border:1px dashed #0099FF;background-color:#C3D5ED;opacity:0.5;display:none"></div>'),
            a.append(l),
            document.onmousemove = function() {
                var m, n, o, p, q, r, s, t, u, v, w, x;
                if (i = a.offset(),
                j = i.left,
                k = i.top,
                c = window.event || arguments[0],
                d(c),
                f && (m = c.pageX,
                n = c.pageY,
                j > m && (m = j),
                o = Math.abs(m - g),
                p = Math.abs(n - h),
                o + p > 10))
                    for (l.show(),
                    l.css({
                        left: Math.min(m, g),
                        top: Math.min(n, h),
                        width: o,
                        height: p
                    }),
                    q = l.offset().left - j,
                    r = l.offset().top - k,
                    o = l.width(),
                    p = l.height(),
                    s = a[0].offsetWidth,
                    t = a[0].offsetLeft,
                    u = 0,
                    v = e.length; v > u; u++)
                        w = s + t,
                        x = 50 * (u + 1),
                        w > q && x > r && q + o > t && r + p > 50 * u && -1 == e[u].className.indexOf("seled") && (e.find("input:checkbox").eq(u).uCheck("toggle"),
                        e[u].className = e[u].className + " seled",
                        b())
            }
            ,
            document.onmouseup = function() {
                c = window.event || arguments[0],
                d(c),
                f = !1,
                l && l.remove(),
                e = null,
                _x = null,
                _y = null,
                l = null,
                g = null,
                h = null,
                c = null
            }
            ,
            void 0))
        }
        ) : pop.info("暂时仅支持PC端浏览器")
    }),
    htmlEncode = function(a) {
        var b = document.createElement("span");
        return b.appendChild(document.createTextNode(a)),
        b.innerHTML
    }
    ,
    formatDuraton = function(a) {
        var b = Math.floor(a / 60)
          , c = Math.floor(a % 60);
        return b + ":" + (10 > c ? "0" + c : c)
    }
    ,
    $$("#search").submit(function(a) {
        var b, c, d, e, f;
        a.preventDefault(),
        searchlock === !1 && (loader.lock(),
        smartbox.hide(),
        b = $.trim($$("#input").val()),
        searchType = $$("#type").val(),
        pushState(document.title, changeParam("name", encodeURIComponent(b), changeParam("type", searchType, changeParam("page", "audioPage")))),
        /^(http(s):\/\/[\w.\/]+)(?![^<]+>)/i.test(b) || (c = historyData.indexOf(htmlEncode(b)),
        -1 !== c && historyData.splice(c, 1),
        historyData.unshift(htmlEncode(b)),
        cache.set("searchHistory", historyData),
        buildHistory()),
        d = 1,
        e = $('<div class="aplayer-more"></div>'),
        f = function() {
            "YQA" === searchType || "YQD" === searchType || "bili" === searchType || "xiami" === searchType || "ximalaya" === searchType ? ($$(".TLH_batch").removeClass("btn-green-disabled"),
            $$(".freezed-header").addClass("can-batch")) : ($$(".TLH_batch").addClass("btn-green-disabled"),
            $$(".freezed-header").removeClass("can-batch")),
            $.ajax({
                type: "POST",
                url: "ajax/search",
                data: "data=" + encode("text=" + b + "&page=" + d + "&type=" + searchType),
                success: function(a) {
                    var b, c, g, h, i, j, k, l, m, n, o, p, q;
                    if (200 === a.code)
                        if (b = a.data,
                        c = b.list,
                        0 === c.length && 1 === d)
                            pop.info("没有搜索到任何歌曲，或请求超时，请重试！");
                        else {
                            for (changePage("audioPage", 0),
                            g = c.length - 1; g >= 0; g--)
                                /mobileoc.music.tc.qq.com/.test(c[g].url) && (c[g].url += vkey);
                            for (1 === d ? ($(".aplayer-more").remove(),
                            h = function(a) {
                                var b = player.list.audios[a];
                                $$(".cover-art-image").css("background-image", "url(" + b.cover + "),url('http://ftp6289422.host111.sanfengyun.cn/IMG/music.png')"),
                                $$(".mo-info-name").html(b.name),
                                $$(".mo-meta").html(b.artist),
                                $$(".pb-lrc").text(b.name + " - " + b.artist)
                            }
                            ,
                            player ? (player.list.clear(),
                            player.list.add(c)) : ($$(".EmptyState").hide(),
                            $$(".right-side").show(),
                            $$(".TLH_download").removeClass("btn-green-disabled"),
                            player = new APlayer({
                                container: $$("#player")[0],
                                autoplay: "yes" === configure.autoplay ? !0 : !1,
                                mode: "circulation",
                                theme: "#1ed760",
                                lrcType: 3,
                                audio: c
                            }),
                            $$("body").addClass("with-play-bar"),
                            $$("#play-bar").show().append($$(".aplayer-body").detach()).find(".aplayer-pic").after('<div class="pb-control"><svg data-id="skipBack"viewbox="0 0 1024 1024"><path d="M511.984485 977.424927a465.440441 465.440441 0 1 1 465.440442-465.440442 465.440441 465.440441 0 0 1-465.440442 465.440442z m-93.088088-620.587255h-62.058725v310.293627h62.058725v-310.293627z m248.234902 0l-217.205539 155.146813 217.205539 155.146814v-310.293627z"></path></svg><svg data-id="play"style="display:none"viewbox="0 0 1024 1024"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m148.873846-530.983385c-15.36-13.154462-195.741538-166.951385-204.8-174.592-11.421538-9.531077-22.843077 2.599385-22.843077 18.865231v349.892923c0 17.92 12.603077 26.584615 22.055385 18.707693 13.390769-10.712615 194.56-165.415385 205.587692-174.985847a27.214769 27.214769 0 0 0 0-37.888z"></path></svg><svg data-id="pause"viewbox="0 0 1024 1024"><path d="M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512zM392.533 273.066c-28.277 0-51.2 22.923-51.2 51.2v375.467c0 28.277 22.923 51.2 51.2 51.2 28.277 0 51.2-22.923 51.2-51.2V324.266c0-28.277-22.923-51.2-51.2-51.2z m238.933 0c-28.277 0-51.2 22.923-51.2 51.2v375.467c0 28.277 22.923 51.2 51.2 51.2 28.277 0 51.2-22.923 51.2-51.2V324.266c0-28.277-22.923-51.2-51.2-51.2z"></path></svg><svg data-id="skipForward"viewbox="0 0 1024 1024"><path d="M511.984485 977.424927a465.440441 465.440441 0 1 1 465.440442-465.440442 465.440441 465.440441 0 0 1-465.440442 465.440442z m-155.146813-620.587255v310.293627l217.205539-155.146814z m310.293627 0h-62.058725v310.293627h62.058725v-310.293627z"></path></svg></div>'),
                            $$(".play-lrc").html($$(".aplayer-lrc").detach()),
                            $$(".aplayer-controller").before('<div class="pb-lrc" style="height:26px;text-overflow:ellipsis;white-space:nowrap;font-size:19px;text-align:center;margin:-12px 0 12px;overflow:hidden">Loading</div'),
                            $$(".pb-control svg").click(function() {
                                player[$(this).data("id")]()
                            }),
                            i = ["0.5", "0.75", "1", "1.25", "1.5", "2"],
                            j = 2,
                            k = $('<button style="width:auto;margin-left:2px" type="button" class="aplayer-icon">' + i[j] + "X</button>"),
                            $(".aplayer-icon-loop").after(k),
                            k.click(function() {
                                j += 1,
                                i.length === j && (j = 0),
                                player.audio.playbackRate = i[j],
                                k.text(i[j] + "X")
                            }),
                            l = function() {
                                var a = player.list.audios[player.list.index];
                                audioTitle = (player.audio.paused ? "" : "▶ ") + a.name + " - " + a.artist + " - " + siteTitle,
                                $$("#audioPage").is(":visible") && (document.title = audioTitle)
                            }
                            ,
                            m = "",
                            n = new MutationObserver(function() {
                                $$(".aplayer-lrc").stop().animate({
                                    scrollTop: 20 * (player.lrc.index - 2)
                                }, 300),
                                m = $(".aplayer-lrc-current").text() || "",
                                "Loading" !== m && ($$(".pb-lrc").text(m),
                                "hidden" == document.visibilityState && player.lrc.current.length > 1 && (document.title = m))
                            }
                            ),
                            n.observe($(".aplayer-lrc-contents")[0], {
                                attributes: !0,
                                attributeFilter: ["style"]
                            }),
                            addEventListener("visibilitychange", function() {
                                player && player.audio.paused || ("hidden" == document.visibilityState ? (gvar.tempTitle = document.title,
                                player.lrc.current.length > 1 && (document.title = m)) : $$("#audioPage").is(":visible") ? l() : gvar.tempTitle && (document.title = gvar.tempTitle))
                            }),
                            player.on("play", function() {
                                l(),
                                $$('.pb-control svg[data-id="play"]').hide(),
                                $$('.pb-control svg[data-id="pause"]').show(),
                                player.audio.playbackRate = i[j]
                            }),
                            player.on("listswitch", function(a) {
                                h(a.index)
                            }),
                            player.on("pause", function() {
                                l(),
                                $$('.pb-control svg[data-id="pause"]').hide(),
                                $$('.pb-control svg[data-id="play"]').show()
                            }),
                            player.on("canplay", function() {
                                "yes" === configure.autoplay && player.play()
                            }),
                            h(0)),
                            $$("#player").scrollTop(0)) : player.list.add(c),
                            o = $(".aplayer-list li:not(.init)"),
                            g = o.length - 1; g >= 0; g--)
                                p = o.eq(g),
                                q = player.list.audios[player.list.audios.length - o.length + g].time,
                                q && (p.addClass("with-time"),
                                p.prepend('<span class="aplayer-list-time">' + formatDuraton(q) + "</span>")),
                                p.prepend('<span class="aplayer-list-download am-icon-download"></span>'),
                                p.addClass("init");
                            $(".aplayer-list-download").click(function() {
                                return setValue(player.list.audios[$(this).parent().find(".aplayer-list-index").text() - 1]),
                                $$("#m-download").modal(),
                                !1
                            }),
                            void 0 == b.more || 0 == b.more ? ($$("#player").append(e),
                            e.html("没有了")) : (d++,
                            $$("#player").append(e),
                            c.length <= b.more - 1 ? e.html("没有了") : e.html("下一页"),
                            e.click(function() {
                                "下一页" === e.html() && (e.html("正在努力加载中"),
                                f())
                            }))
                        }
                    else
                        pop.info(a.error || "发生未知错误")
                },
                error: function() {
                    loader.unlock(),
                    e.html("下一页")
                },
                complete: function() {
                    loader.unlock(),
                    "正在努力加载中" === e.html() && e.html("下一页")
                }
            })
        }
        ,
        f())
    }),
    $(".TLH_download").click(function() {
        setValue(player.list.audios[player.list.index]),
        $$("#m-download").modal()
    }),
    openUrl = function(a) {
        0 === $$("#openUrl").length && ($$clear("#openUrl"),
        $$("body").append('<a target="_blank" id="openUrl"></a>'));
        var b = $$("#openUrl");
        b.attr("href", a),
        b[0].click()
    }
    ,
    bytesToSize = function(a) {
        if (0 === a)
            return "0 B";
        var b = 1024
          , c = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
          , d = Math.floor(Math.log(a) / Math.log(b));
        return (a / Math.pow(b, d)).toFixed(2) + " " + c[d]
    }
    ,
    NewBlob = function(a, b) {
        var c, e;
        b = "undefined" != typeof b ? b : "application/octet-stream";
        try {
            c = new Blob(a,{
                type: b
            })
        } catch (d) {
            if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
            "TypeError" == d.name && window.BlobBuilder) {
                e = new BlobBuilder;
                for (i in a)
                    e.append(i);
                c = e.getBlob(b)
            } else
                "InvalidStateError" == d.name && (c = new Blob(a,{
                    type: b
                }))
        }
        return c
    }
    ,
    getBinaryContent = function(a, b, c, d) {
        var e, f, g;
        c && (e = pop.download(a, "download")),
        f = function() {
            c && pop.close(e),
            d("error")
        }
        ;
        try {
            g = new XMLHttpRequest,
            g.open("GET", b, !0),
            g.responseType = "blob",
            "YQA" === searchType && /mobileoc.music.tc.qq.com/.test(b) && g.setRequestHeader("Range", "bytes=0-"),
            g.onprogress = function(a) {
                a.lengthComputable && c && (pop.size(e, bytesToSize(a.loaded) + " / " + bytesToSize(a.total)),
                pop.percent(e, 100 * (a.loaded / a.total) >> 0))
            }
            ,
            g.onload = function() {
                if (4 == g.readyState && g.response)
                    try {
                        var b = new NewBlob([g.response]);
                        d("success", b),
                        c && (pop.finished(e),
                        pop.close(e, 2e3))
                    } catch (a) {
                        f()
                    }
                else
                    f()
            }
            ,
            g.onreadystatechange = function() {
                4 != g.readyState || g.response || f()
            }
            ,
            g.send()
        } catch (h) {
            f()
        }
    }
    ,
    download = function(a, b, c) {
        copyText(a),
        /(Win|Mac)/i.test(navigator.platform) || window.chrome ? "YQA" === searchType || "YQD" === searchType || "bili" === searchType || "xiami" === searchType || "ximalaya" === searchType ? (a += "." + b,
        getBinaryContent(a, c, !0, function(b, d) {
            "success" === b && saveAs(d, a),
            "error" === b && openUrl(c)
        })) : openUrl(c) : openUrl(c)
    }
    ,
    zipdownload = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n;
        for (b = b || !1,
        c = new JSZip,
        d = JSZip.external.Promise,
        e = (player.list.audios[a[0]].name + ".zip").replace(/\//g, " "),
        f = pop.info("准备打包 " + e + "（0/" + a.length + "）", 0),
        g = 0,
        h = function(b, c) {
            return new d(function(d) {
                getBinaryContent(b, c, !0, function(b, c) {
                    if ("success" === b && c) {
                        g += 1;
                        var h = g === a.length ? "开始打包" : "准备打包";
                        pop.text(f, h + " " + e + "（" + g + "/" + a.length + "）")
                    }
                    "success" === b && d(c),
                    "error" === b && d("")
                })
            }
            )
        }
        ,
        i = 0,
        j = a.length; j > i; i++)
            k = "",
            l = a[i],
            m = configure.dlname.replace("{name}", player.list.audios[l].name).replace("{singer}", player.list.audios[l].artist).replace(/\//g, " "),
            n = function(a) {
                if ("" === k && void 0 !== player.list.audios[l][a]) {
                    var b = function(a, b) {
                        c.file(a, h(a, b), {
                            binary: !0
                        })
                    };
                    k = player.list.audios[l][a],
                    /mobileoc.music.tc.qq.com/.test(k) && (k += vkey),
                    b(m + "." + getExtname(a), k)
                }
            }
            ,
            b && (n("url_dsd"),
            n("url_flac"),
            n("url_ape")),
            "" === k && (n("url_320"),
            n("url_128"),
            n("url_m4a"));
        c.generateAsync({
            type: "blob"
        }).then(function(a) {
            pop.text(f, e + " 打包完成！", "success", 3e3),
            pop.close(f, 2e3),
            saveAs(a, e)
        })
    }
    ,
    $$(".home-tab").find("li").click(function() {
        var c, d, e, f, g, h, i, j, k, l, a = $(this), b = a.data("page");
        if ($(".home-tab-current").removeClass("home-tab-current"),
        a.addClass("home-tab-current"),
        $$("#homePage").is(":visible") && changeBg("rgb(" + a.data("color") + ")"),
        "featured" === b)
            $$(".home-content").html('<div class="home-title">公告</div><div class="home-ads"><ins class="adsbygoogle" style="display:block;margin-bottom:20px" data-ad-format="fluid" data-ad-layout-key="-hh-7+2h-1m-4u" data-ad-client="ca-pub-8773997952639831" data-ad-slot="4336550278"></ins></div><div id="msg"><a href="http://tool.liumingye.cn/alipay/index.html" target="_blank">1.每日一次，领支付宝红包</a><br><a href="http://lab.liumingye.cn/api/question.php#download-no-windows" target="_blank">2.下载不显示保存框？下载的歌去哪了？点我查看解决方法</a><br><a href="http://lab.liumingye.cn/api_old/" target="_blank" style="color:#1ed760">3.点我回到旧版UI，旧版UI网站：http://lab.liumingye.cn/api_old/</a></div><div class="home-title">歌单推荐</div><div id="recomPlaylist"class="listwrapper"></div><div class="home-title">新歌首发</div><div id="newSonglist"class="listwrapper"></div>'),
            $("#recomPlaylist").html(gvar["recomPlaylist"]),
            bindListEvent("#recomPlaylist"),
            $("#newSonglist").html(gvar["newSonglist"]),
            bindListEvent("#newSonglist"),
            A_D_S();
        else if ("category" === b) {
            $$(".home-content").html('<div class="home-title">分类歌单</div><div class="HC-select-group"><select data-am-selected class="HC-select"></select><select data-am-selected class="HC-selects"></select></div><div id="categorylist"class="listwrapper"><div id="categorylist" class="listwrapper"><div style="text-align:center;font-size:30px;height:200px;line-height:200px">加载分类歌单中...</div></div></div>'),
            c = $("#categorylist"),
            d = $(".HC-select"),
            e = $(".HC-selects"),
            f = "";
            for (g in gvar["HCselect"])
                f += "<option value=" + g + ">" + g + "</option>";
            d.html(f),
            d.on("change", function() {
                var c, a = gvar["HCselect"][$(this).val()], b = "";
                for (c in a)
                    b += "<option value=" + c + ">" + a[c] + "</option>";
                e.html(b)
            }),
            e.on("change", function() {
                var a = function(b, d, e) {
                    $.ajax({
                        url: 'http://u.y.qq.com/cgi-bin/musicu.fcg?data={"list":{"module":"playlist.PlayListCategoryServer","method":"get_category_content","param":{"cmd":0,"caller":"0","category_id":' + b + ',"last_id":"' + d + '","size":20}}}',
                        type: "get",
                        dataType: "jsonp",
                        jsonpCallback: "musicu",
                        success: function(d) {
                            var h, i, j, f = d.list.data.content.v_item, g = "<ul>";
                            for (h = 0,
                            i = f.length; i > h; h++)
                                g += '<li data-type="YQA" data-ltem="qqPlaylist" data-id="' + f[h].basic.tid + '"><div class="lw-img"><img src="' + f[h].basic.cover.small_url + '" onerror="this.src=\'http://ftp6289422.host111.sanfengyun.cn/IMG/music.png\';this.onerror=null;"><div class="lw-btn"><p class="lw-collect am-icon-heart-o"></p></div></div><div class="lw-title">' + f[h].basic.title + "</div></li>";
                            g += "</ul>",
                            1 === e ? c.html(g) : c.append(g),
                            bindListEvent(c),
                            $(".HC-more").remove(),
                            d.list.data.content.total_cnt / (20 * e) > 1 && (j = $('<div class="HC-more">加载更多</div>'),
                            j.click(function() {
                                j.off("click").text("正在努力加载中"),
                                a(b, f[f.length - 1].basic.tid, e + 1)
                            }),
                            c.append(j),
                            $$(".main-view").scroll(function() {
                                "category" === $(".home-tab-current").data("page") && $(window).height() - j.offset().top > 60 && j.click()
                            }))
                        }
                    })
                };
                a($(this).val(), 0, 1)
            }),
            d.selected(),
            e.selected(),
            setTimeout(function() {
                d.val(0).trigger("changed.selected.amui")
            }, 100)
        } else if ("toplist" === b) {
            for (f = "",
            h = [{
                name: "引擎A排行榜",
                type: "YQA",
                ltem: "qqToplist",
                pica: "http://y.gtimg.cn/music/photo_new/T003R300x300M00000",
                picb: ".jpg",
                list: [{
                    id: 4,
                    name: "流行榜",
                    pic: "4CHrx53B8rgC"
                }, {
                    id: 26,
                    name: "热歌榜",
                    pic: "04JIUl2GfhcN"
                }, {
                    id: 27,
                    name: "新歌榜",
                    pic: "2foxC92eS4RA"
                }, {
                    id: 62,
                    name: "飙升榜",
                    pic: "1QrIob3eu6mP"
                }, {
                    id: 5,
                    name: "内地榜",
                    pic: "1cQwpD3xKMIy"
                }, {
                    id: 61,
                    name: "台湾地区榜",
                    pic: "1MlerW1bHIpK"
                }, {
                    id: 59,
                    name: "香港地区榜",
                    pic: "2BcdyZ33j1Of"
                }, {
                    id: 3,
                    name: "欧美榜",
                    pic: "0X5Hky1K28ty"
                }, {
                    id: 16,
                    name: "韩国榜",
                    pic: "4U6Ghk19n8G3"
                }, {
                    id: 17,
                    name: "日本榜",
                    pic: "4gZKfk2HdAcC"
                }, {
                    id: 58,
                    name: "说唱榜",
                    pic: "2QfJJN43WCks"
                }, {
                    id: 57,
                    name: "电音榜",
                    pic: "4UCIP61yHVCt"
                }, {
                    id: 28,
                    name: "网络歌曲榜",
                    pic: "3hl3172StI1S"
                }, {
                    id: 60,
                    name: "抖音排行榜",
                    pic: "017jj64FsNto"
                }, {
                    id: 36,
                    name: "K歌金曲",
                    pic: "27STh01as0qc"
                }, {
                    id: 29,
                    name: "影视金曲",
                    pic: "4FAFeN4CkSkj"
                }, {
                    id: 65,
                    name: "国风热歌榜",
                    pic: "4C9aUd2wEFd4"
                }, {
                    id: 66,
                    name: "ACG新歌榜",
                    pic: "414RFl12Ejh4"
                }]
            }, {
                name: "引擎D排行榜",
                type: "YQD",
                ltem: "neteasePlaylist",
                pica: "http://p1.music.126.net/",
                picb: ".jpg?param=200y200",
                list: [{
                    id: 19723756,
                    name: "飙升榜",
                    pic: "DrRIg6CrgDfVLEph9SNh7w==/18696095720518497"
                }, {
                    id: 3779629,
                    name: "新歌榜",
                    pic: "N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048"
                }, {
                    id: 2884035,
                    name: "原创榜",
                    pic: "sBzD11nforcuh1jdLSgX7g==/18740076185638788"
                }, {
                    id: 3778678,
                    name: "热歌榜",
                    pic: "GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091"
                }, {
                    id: 1978921795,
                    name: "电音榜",
                    pic: "5tgOCD4jiPKBGt7znJl-2g==/18822539557941307"
                }, {
                    id: 991319590,
                    name: "说唱榜",
                    pic: "y8zyTt4HwXbJqB31aQKz1A==/109951164353220919"
                }, {
                    id: 2617766278,
                    name: "新声榜",
                    pic: "XbjRDARP1xv5a-40ZDOy6A==/109951163785427934"
                }, {
                    id: 71384707,
                    name: "古典音乐榜",
                    pic: "BzSxoj6O1LQPlFceDn-LKw==/18681802069355169"
                }, {
                    id: 2250011882,
                    name: "抖音排行榜",
                    pic: "oUxnXXvM33OUHxxukYnUjQ==/109951164174523461"
                }, {
                    id: 71385702,
                    name: "ACG音乐榜",
                    pic: "vttjtRjL75Q4DEnjRsO8-A==/18752170813539664"
                }, {
                    id: 10520166,
                    name: "国电榜",
                    pic: "8-GBrukQ3BHhs4CmK6qE4w==/109951163424197392"
                }, {
                    id: 11641012,
                    name: "iTunes榜",
                    pic: "WTpbsVfxeB6qDs_3_rnQtg==/109951163601178881"
                }, {
                    id: 2809513713,
                    name: "欧美热歌榜",
                    pic: "c0iThrYPpnFVgFvU6JCVXQ==/109951164091703579"
                }, {
                    id: 2809577409,
                    name: "欧美新歌榜",
                    pic: "Zb8AL5xdl9-_7WIyAhRLbw==/109951164091690485"
                }]
            }],
            i = 0,
            j = h.length; j > i; i++) {
                for (f += '<div class="home-title">' + h[i].name + '</div><div id="toplist" class="listwrapper"><ul>',
                k = 0,
                l = h[i].list.length; l > k; k++)
                    f += '<li class="col-6" data-ltem="' + h[i].ltem + '" data-type="' + h[i].type + '" data-id="' + h[i].list[k].id + '"><div class="lw-img"><img src="' + h[i].pica + h[i].list[k].pic + h[i].picb + '" onerror="this.src=\'http://ftp6289422.host111.sanfengyun.cn/IMG/music.png\';this.onerror=null;"></div><div class="lw-title">' + h[i].list[k].name + "</div></li>";
                f += "</ul></div>"
            }
            $$(".home-content").html(f),
            bindListEvent(".home-content")
        }
    }),
    setTimeout(function() {
        loader.unlock(),
        A_D_S()
    }, 10),
    $$(".goto-top").click(function() {
        var b, a = $$(".goto-top");
        a.hasClass("animate") || (a.addClass("animate"),
        b = 500,
        setTimeout(function() {
            a.removeClass("animate")
        }, b + 100),
        $$(".main-view").animate({
            scrollTop: 0
        }, b),
        $$("#audioPage").is(":visible") && $$("#player").animate({
            scrollTop: 0
        }, b))
    }),
    $("#modal-zanzhu").click(function() {
        $$("#modal-content").html('<div class="am-modal"id="zanzhu"><div class="am-modal-dialog"><div class="am-modal-hd">一路陪伴，请赞助我</div><div class="am-modal-bd"><ul class="am-avg-sm-2 am-thumbnails"><li><span>支付宝</span><img class="am-thumbnail"src="http://ww1.sinaimg.cn/large/006A66c0gy1g1wsr5yuy3j30dc0dcq3i.jpg"/></li><li><span>微信</span><img class="am-thumbnail"src="http://ww1.sinaimg.cn/large/006A66c0gy1g1wsr5x147j30dc0dcdg5.jpg"/></li></ul></div><div class="am-modal-footer"><span class="am-modal-btn">关闭</span></div></div></div>'),
        $("#zanzhu").modal()
    }),
    $("#searchPage").find(".home-title").eq(0).dblclick(function() {
        var a = $('<option value="YQA">腾讯</option><option value="YQB">酷我</option><option value="YQC">酷狗</option>');
        $("#type").prepend(a).trigger("changed.selected.amui"),
        $(".js-hidden").removeClass("js-hidden")
    }),
    $(function() {
        var a = new MutationObserver(function() {
            a.disconnect(),
            $$("#main").attr("style", ""),
            b()
        }
        )
          , b = function() {
            var b = document.getElementById("main");
            a.observe(b, {
                attributes: !0,
                attributeFilter: ["style"]
            })
        };
        b(),
        $$("#main").attr("style", "")
    }),
    "undefined" != typeof fuckAdBlock || "undefined" != typeof FuckAdBlock ? adBlockDetected() : (importFAB = document.createElement("script"),
    importFAB.onload = function() {
        fuckAdBlock.onDetected(adBlockDetected)
    }
    ,
    importFAB.onerror = function() {
        adBlockDetected()
    }
    ,
    importFAB.integrity = "sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=",
    importFAB.crossOrigin = "anonymous",
    importFAB.src = cdn + "fuckadblock/3.2.1/fuckadblock.min.js",
    document.head.appendChild(importFAB)),
    $(document).width() > 800 && (setBgImg = function(a) {
        $(".backgrounds").eq(1).remove(),
        $(".backgrounds").eq(0).attr("style", "background-image:url(" + a + ");position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:-1;background-size:cover;background-repeat:no-repeat;filter:brightness(60%);"),
        $(".backgrounds").eq(0).removeClass("backgrounds"),
        $("head").append("<style>.nav-bar{background:rgba(0, 0, 0, .2)}#play-bar{background:rgba(0, 0, 0, .2)}#play-bar .aplayer-lrc::after{width:0}</style>")
    }
    ,
    bgImg = cache.get("bgImg"),
    bgImg && setBgImg(bgImg),
    $(".navBar-logo").dblclick(function() {
        if (bgImg)
            localStorage.removeItem("bgImg"),
            location.reload();
        else {
            var a = $('<input accept=".jpg,.bmp,.png" type="file">');
            a.bind("change", function() {
                var a = this.files[0]
                  , b = new FileReader;
                b.onload = function() {
                    bgImg = this.result,
                    setBgImg(bgImg),
                    cache.set("bgImg", bgImg)
                }
                ,
                b.readAsDataURL(a)
            }),
            a.click()
        }
    })),
    $(".Rootlist").before('<div style="line-height:16px;font-weight:bold;padding:20px"><p><a href="http://tool.liumingye.cn/alipay/index.html" target="_blank">1.每日一次，领支付宝红包</a></p></div>');

}
)();
