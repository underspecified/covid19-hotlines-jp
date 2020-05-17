(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var NumericUtils_1 = __webpack_require__(563),
    ArrayUtils_1 = __webpack_require__(561),
    StringUtils = function () {
  function r() {}

  return r.isString = function (r) {
    return "string" == typeof r || r instanceof String;
  }, r.isUrl = function (t) {
    var e = !1;

    if (!r.isEmpty(t) && r.isString(t)) {
      e = !!(t.length < 2083 && new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i").test(t));
    }

    return e;
  }, r.isEmpty = function (t, e) {
    if (void 0 === e && (e = []), !r.isString(t)) {
      if (null == t || "" == t) return !0;
      throw new Error("value is not a string");
    }

    return "" === r.replace(t, e.concat([" ", "\n", "\r", "\t"]), "");
  }, r.isCamelCase = function () {}, r.isSnakeCase = function () {}, r.replace = function (t, e, n, i) {
    if (void 0 === i && (i = -1), !r.isString(t)) throw new Error("string is not valid");
    if (!r.isString(e) && !ArrayUtils_1.ArrayUtils.isArray(e)) throw new Error("search is not a string or array");
    if (!r.isString(n) && !ArrayUtils_1.ArrayUtils.isArray(n)) throw new Error("replacement is not a string or array");
    if (!NumericUtils_1.NumericUtils.isInteger(i) || 0 === i) throw new Error("count must be a positive integer");
    var l = t,
        o = r.isString(e) ? [String(e)] : e,
        s = r.isString(n) ? [String(n)] : n;
    if (s.length > 1 && o.length !== s.length) throw new Error("search and replacement arrays must have the same length");

    for (var a = 0; a < o.length; a++) {
      if ("" !== o[a]) {
        var u = 1 === s.length ? s[0] : s[a];
        void 0 !== u && null !== u || (u = "");

        for (var f = [], g = l.split(o[a]), h = 0; h < g.length; h++) {
          f.push(g[h]), h < g.length - 1 && (i < 0 || h < i ? f.push(u) : f.push(o[a]));
        }

        l = f.join("");
      }
    }

    return l;
  }, r.trim = function (t, e) {
    return void 0 === e && (e = " \n\r"), r.trimLeft(r.trimRight(t, e), e);
  }, r.trimLeft = function (t, e) {
    if (void 0 === e && (e = " \n\r"), !r.isString(t)) throw new Error("value is not a string");
    return t.replace(new RegExp("^[" + e + "]+"), "");
  }, r.trimRight = function (t, e) {
    if (void 0 === e && (e = " \n\r"), !r.isString(t)) throw new Error("value is not a string");
    return t.replace(new RegExp("[" + e + "]+$"), "");
  }, r.countStringOccurences = function (t, e) {
    if (!r.isString(t) || !r.isString(e)) throw new Error("value is not a string");
    if ("" === e) throw new Error("cannot count occurences for an empty string");
    return t.split(e).length - 1;
  }, r.countByCase = function (t, e) {
    if (void 0 === e && (e = r.FORMAT_ALL_UPPER_CASE), t = r.removeAccents(t), e === r.FORMAT_ALL_UPPER_CASE) return t.replace(/[^A-Z]+/g, "").length;
    if (e === r.FORMAT_ALL_LOWER_CASE) return t.replace(/[^a-z]+/g, "").length;
    throw new Error("invalid case value");
  }, r.countWords = function (t, e) {
    void 0 === e && (e = " ");

    for (var n = 0, i = r.getLines(t), l = 0; l < i.length; l++) {
      for (var o = i[l].split(e), s = 0; s < o.length; s++) {
        r.isEmpty(o[s]) || n++;
      }
    }

    return n;
  }, r.countPathElements = function (t) {
    return "" == (t = 0 === (t = r.formatPath(t, "/")).indexOf("/") ? t.substr(1) : t) ? 0 : t.split("/").length;
  }, r.limitLen = function (t, e, n) {
    if (void 0 === e && (e = 100), void 0 === n && (n = " ..."), e <= 0 || !NumericUtils_1.NumericUtils.isNumeric(e)) throw new Error("limit must be a positive numeric value");
    return r.isString(t) ? t.length <= e ? t : n.length > e ? n.substring(0, e) : t.substring(0, e - n.length) + n : "";
  }, r.getDomainFromUrl = function (t) {
    var e = r.getHostNameFromUrl(t);
    return (e = e.split(".")).length > 2 && e.shift(), e.join(".");
  }, r.getHostNameFromUrl = function (t) {
    if (r.isEmpty(t) || !r.isUrl(t)) return "";
    var e = document.createElement("a");
    e.href = t;
    var n = (e.host.match(/\./g) || []).length;
    return n <= 0 || n > 2 ? "" : e.host;
  }, r.getLines = function (t, e) {
    void 0 === e && (e = [/\s+/g]);
    var n = [];
    if (!r.isString(t)) return n;

    for (var i = t.split(/\r?\n|\n|\r/), l = 0; l < i.length; l++) {
      if (r.isString(i[l])) {
        for (var o = i[l], s = 0; s < e.length; s++) {
          o = o.replace(e[s], "");
        }

        "" != o && n.push(i[l]);
      }
    }

    return n;
  }, r.getKeyWords = function () {}, r.getPath = function (t, e, n) {
    if (void 0 === e && (e = 1), void 0 === n && (n = "/"), r.isEmpty(t)) return "";
    if ("/" === (t = r.formatPath(t, "/"))) return t;
    var i = (0 === t.indexOf("/") ? t.substr(1) : t).split("/");
    if (e > i.length || e < -1) return "";

    for (var l = [], o = i.length - e; o < i.length; o++) {
      l.push(i[o]);
    }

    return l.length <= 0 ? t : r.formatPath(t.substring(0, t.length - l.join("/").length - 1), n);
  }, r.getPathElement = function (t, e) {
    if (void 0 === e && (e = -1), r.isEmpty(t)) return "";
    var n = (t = 0 === (t = r.formatPath(t, "/")).indexOf("/") ? t.substr(1) : t).split("/");
    if (e >= n.length || e < -n.length) throw new Error("Invalid position specified");
    return e < 0 ? n[n.length + e] : n[e];
  }, r.getPathElementWithoutExt = function (t, e, n) {
    void 0 === e && (e = -1), void 0 === n && (n = ".");
    var i = r.getPathElement(t, e);
    return i.indexOf(n) >= 0 && (i = i.substr(0, i.lastIndexOf(n))), i;
  }, r.getPathExtension = function (t, e, n) {
    void 0 === e && (e = -1), void 0 === n && (n = ".");
    var i = r.getPathElement(t, e);
    return i.indexOf(n) < 0 ? "" : i.substr(i.lastIndexOf(n) + 1);
  }, r.getSchemeFromUrl = function (t) {
    if (null == t || void 0 == t) return "";
    if (!r.isString(t)) throw new Error("Specified value must be a string");
    if (!r.isUrl(t)) return "";
    var e = t.split("://");
    return 2 === e.length ? e[0] : "";
  }, r.formatCase = function (t, e) {
    if (!r.isString(t)) throw new Error("value is not a string");
    if (r.isEmpty(t)) return t;
    if (e === r.FORMAT_START_CASE) return t.split(" ").map(function (r) {
      return (r.length > 0 ? r[0].toUpperCase() : "") + (r.length > 1 ? r.substr(1).toLowerCase() : "");
    }).join(" ");
    if (e === r.FORMAT_ALL_UPPER_CASE) return t.toUpperCase();
    if (e === r.FORMAT_ALL_LOWER_CASE) return t.toLowerCase();
    if (e === r.FORMAT_FIRST_UPPER_REST_LOWER) return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();

    if (e.indexOf("CAMEL_CASE") > 0) {
      var n = r.removeAccents(t).replace(/[^a-z0-9]+/gi, " ").trim().split(" ");
      if (n.length > 1) for (var i = 1; i < n.length; i++) {
        n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1);
      }
      return t = n.join(""), e == r.FORMAT_UPPER_CAMEL_CASE ? t.charAt(0).toUpperCase() + t.slice(1) : e == r.FORMAT_LOWER_CAMEL_CASE ? t.charAt(0).toLowerCase() + t.slice(1) : t;
    }

    throw new Error("Unknown format specified");
  }, r.formatPath = function (t, e) {
    if (void 0 === e && (e = "/"), !r.isString(t)) throw new Error("path must be a string");
    if ("/" !== e && "\\" !== e) throw new Error("separator must be a slash or backslash");

    for (t = (t = t.replace(/\//g, e)).replace(/\\/g, e); t.indexOf(e + e) >= 0;) {
      t = t.replace(e + e, e);
    }

    return t.length > 1 && t.substr(t.length - 1) === e && (t = t.substr(0, t.length - 1)), t;
  }, r.formatUrl = function (t) {
    if ("" == t) return "";
    if (!r.isString(t)) throw new Error("url must be a string");
    if (r.isEmpty(t)) return t;

    for (t = (t = (t = (t = t.trim()).replace(/\//g, "/")).replace(/\\/g, "/")).replace(/\:\/\//g, "@@@"); t.indexOf("//") >= 0;) {
      t = t.replace("//", "/");
    }

    return t = t.replace(/@@@/g, "://"), "" === this.getSchemeFromUrl(t) && r.isUrl("http://" + t) ? "http://" + t : t;
  }, r.formatForFullTextSearch = function () {}, r.compareByLevenshtein = function (t, e) {
    if (!r.isString(t) || !r.isString(e)) throw new Error("string1 and string2 must be strings");
    var n = t.length,
        i = e.length;
    if (n < i) return r.compareByLevenshtein(e, t);
    if (0 == n) return i;
    if (t === e) return 0;

    for (var l = [], o = [], s = 0; s <= i; s++) {
      o.push(s);
    }

    for (s = 0; s < n; s++) {
      (l = [])[0] = s + 1;

      for (var a = t.substr(s, 1), u = 0; u < i; u++) {
        var f = e.substr(u, 1),
            g = o[u + 1] + 1,
            h = l[u] + 1,
            c = o[u] + (a !== f ? 1 : 0);
        l.push(Math.min(g, h, c));
      }

      o = l;
    }

    return o[i];
  }, r.compareSimilarityPercent = function (t, e) {
    var n = r.compareByLevenshtein(t, e);
    return 0 === n ? 100 : 100 * (1 - n / Math.max(t.length, e.length));
  }, r.generateRandom = function (t, e, n) {
    if (void 0 === n && (n = ["0-9", "a-z", "A-Z"]), t < 0 || !NumericUtils_1.NumericUtils.isInteger(t) || e < 0 || !NumericUtils_1.NumericUtils.isInteger(e)) throw new Error("minLength and maxLength must be positive numbers");
    if (e < t) throw new Error("Provided maxLength must be higher or equal than minLength");
    if (!ArrayUtils_1.ArrayUtils.isArray(n) || n.length <= 0) throw new Error("invalid charset");

    for (var i = "", l = 0, o = n; l < o.length; l++) {
      var s = o[l];
      if (!r.isString(s) || r.isEmpty(s)) throw new Error("invalid charset");
      var a = s.substr(0, 1),
          u = s.substr(2, 1);
      3 === s.length && 1 === s.indexOf("-") && "\\" !== a ? "0123456789".indexOf(a) >= 0 ? i += "0123456789".substring("0123456789".indexOf(a), "0123456789".indexOf(u) + 1) : "abcdefghijkmnopqrstuvwxyz".indexOf(a) >= 0 ? i += "abcdefghijkmnopqrstuvwxyz".substring("abcdefghijkmnopqrstuvwxyz".indexOf(a), "abcdefghijkmnopqrstuvwxyz".indexOf(u) + 1) : "ABCDEFGHIJKMNOPQRSTUVWXYZ".indexOf(a) >= 0 && (i += "ABCDEFGHIJKMNOPQRSTUVWXYZ".substring("ABCDEFGHIJKMNOPQRSTUVWXYZ".indexOf(a), "ABCDEFGHIJKMNOPQRSTUVWXYZ".indexOf(u) + 1)) : i += r.replace(s, "\\-", "-");
    }

    for (var f = "", g = t === e ? e : NumericUtils_1.NumericUtils.generateRandomInteger(t, e), h = 0; h < g; h++) {
      f += i.charAt(Math.floor(Math.random() * i.length));
    }

    return f;
  }, r.findMostSimilarString = function () {}, r.findMostSimilarStringIndex = function () {}, r.removeNewLineCharacters = function () {}, r.removeAccents = function (t) {
    if (!r.isString(t)) throw new Error("value is not a string");

    for (var e = [{
      b: "A",
      l: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
    }, {
      b: "AA",
      l: "Ꜳ"
    }, {
      b: "AE",
      l: "ÆǼǢ"
    }, {
      b: "AO",
      l: "Ꜵ"
    }, {
      b: "AU",
      l: "Ꜷ"
    }, {
      b: "AV",
      l: "ꜸꜺ"
    }, {
      b: "AY",
      l: "Ꜽ"
    }, {
      b: "B",
      l: "BⒷＢḂḄḆɃƂƁ"
    }, {
      b: "C",
      l: "CⒸＣĆĈĊČÇḈƇȻꜾ"
    }, {
      b: "D",
      l: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
    }, {
      b: "DZ",
      l: "ǱǄ"
    }, {
      b: "Dz",
      l: "ǲǅ"
    }, {
      b: "E",
      l: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
    }, {
      b: "F",
      l: "FⒻＦḞƑꝻ"
    }, {
      b: "G",
      l: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
    }, {
      b: "H",
      l: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
    }, {
      b: "I",
      l: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
    }, {
      b: "J",
      l: "JⒿＪĴɈ"
    }, {
      b: "K",
      l: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
    }, {
      b: "L",
      l: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
    }, {
      b: "LJ",
      l: "Ǉ"
    }, {
      b: "Lj",
      l: "ǈ"
    }, {
      b: "M",
      l: "MⓂＭḾṀṂⱮƜ"
    }, {
      b: "N",
      l: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
    }, {
      b: "NJ",
      l: "Ǌ"
    }, {
      b: "Nj",
      l: "ǋ"
    }, {
      b: "O",
      l: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
    }, {
      b: "OI",
      l: "Ƣ"
    }, {
      b: "OO",
      l: "Ꝏ"
    }, {
      b: "OU",
      l: "Ȣ"
    }, {
      b: "OE",
      l: "Œ"
    }, {
      b: "oe",
      l: "œ"
    }, {
      b: "P",
      l: "PⓅＰṔṖƤⱣꝐꝒꝔ"
    }, {
      b: "Q",
      l: "QⓆＱꝖꝘɊ"
    }, {
      b: "R",
      l: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
    }, {
      b: "S",
      l: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
    }, {
      b: "T",
      l: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
    }, {
      b: "TZ",
      l: "Ꜩ"
    }, {
      b: "U",
      l: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
    }, {
      b: "V",
      l: "VⓋＶṼṾƲꝞɅ"
    }, {
      b: "VY",
      l: "Ꝡ"
    }, {
      b: "W",
      l: "WⓌＷẀẂŴẆẄẈⱲ"
    }, {
      b: "X",
      l: "XⓍＸẊẌ"
    }, {
      b: "Y",
      l: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
    }, {
      b: "Z",
      l: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
    }, {
      b: "a",
      l: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
    }, {
      b: "aa",
      l: "ꜳ"
    }, {
      b: "ae",
      l: "æǽǣ"
    }, {
      b: "ao",
      l: "ꜵ"
    }, {
      b: "au",
      l: "ꜷ"
    }, {
      b: "av",
      l: "ꜹꜻ"
    }, {
      b: "ay",
      l: "ꜽ"
    }, {
      b: "b",
      l: "bⓑｂḃḅḇƀƃɓ"
    }, {
      b: "c",
      l: "cⓒｃćĉċčçḉƈȼꜿↄ"
    }, {
      b: "d",
      l: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
    }, {
      b: "dz",
      l: "ǳǆ"
    }, {
      b: "e",
      l: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
    }, {
      b: "f",
      l: "fⓕｆḟƒꝼ"
    }, {
      b: "g",
      l: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
    }, {
      b: "h",
      l: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
    }, {
      b: "hv",
      l: "ƕ"
    }, {
      b: "i",
      l: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
    }, {
      b: "j",
      l: "jⓙｊĵǰɉ"
    }, {
      b: "k",
      l: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
    }, {
      b: "l",
      l: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
    }, {
      b: "lj",
      l: "ǉ"
    }, {
      b: "m",
      l: "mⓜｍḿṁṃɱɯ"
    }, {
      b: "n",
      l: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
    }, {
      b: "nj",
      l: "ǌ"
    }, {
      b: "o",
      l: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
    }, {
      b: "oi",
      l: "ƣ"
    }, {
      b: "ou",
      l: "ȣ"
    }, {
      b: "oo",
      l: "ꝏ"
    }, {
      b: "p",
      l: "pⓟｐṕṗƥᵽꝑꝓꝕ"
    }, {
      b: "q",
      l: "qⓠｑɋꝗꝙ"
    }, {
      b: "r",
      l: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
    }, {
      b: "s",
      l: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
    }, {
      b: "t",
      l: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
    }, {
      b: "tz",
      l: "ꜩ"
    }, {
      b: "u",
      l: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
    }, {
      b: "v",
      l: "vⓥｖṽṿʋꝟʌ"
    }, {
      b: "vy",
      l: "ꝡ"
    }, {
      b: "w",
      l: "wⓦｗẁẃŵẇẅẘẉⱳ"
    }, {
      b: "x",
      l: "xⓧｘẋẍ"
    }, {
      b: "y",
      l: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
    }, {
      b: "z",
      l: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
    }], n = {}, i = 0; i < e.length; i++) {
      for (var l = e[i].l, o = 0; o < l.length; o++) {
        n[l[o]] = e[i].b;
      }
    }

    return t.replace(/[^\u0000-\u007E]/g, function (r) {
      return n[r] || r;
    });
  }, r.removeWordsShorterThan = function () {}, r.removeWordsLongerThan = function () {}, r.removeUrls = function () {}, r.removeHtmlCode = function () {}, r.removeSameConsecutive = function () {}, r.FORMAT_SENTENCE_CASE = "FORMAT_SENTENCE_CASE", r.FORMAT_START_CASE = "FORMAT_START_CASE", r.FORMAT_ALL_UPPER_CASE = "FORMAT_ALL_UPPER_CASE", r.FORMAT_ALL_LOWER_CASE = "FORMAT_ALL_LOWER_CASE", r.FORMAT_FIRST_UPPER_REST_LOWER = "FORMAT_FIRST_UPPER_REST_LOWER", r.FORMAT_CAMEL_CASE = "FORMAT_CAMEL_CASE", r.FORMAT_UPPER_CAMEL_CASE = "FORMAT_UPPER_CAMEL_CASE", r.FORMAT_LOWER_CAMEL_CASE = "FORMAT_LOWER_CAMEL_CASE", r.FORMAT_SNAKE_CASE = "FORMAT_SNAKE_CASE", r.FORMAT_UPPER_SNAKE_CASE = "FORMAT_UPPER_SNAKE_CASE", r.FORMAT_LOWER_SNAKE_CASE = "FORMAT_LOWER_SNAKE_CASE", r;
}();

exports.StringUtils = StringUtils;

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipeable = exports.pipe = void 0;

var function_1 = __webpack_require__(564);

function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij) {
  switch (arguments.length) {
    case 1:
      return a;

    case 2:
      return ab(a);

    case 3:
      return bc(ab(a));

    case 4:
      return cd(bc(ab(a)));

    case 5:
      return de(cd(bc(ab(a))));

    case 6:
      return ef(de(cd(bc(ab(a)))));

    case 7:
      return fg(ef(de(cd(bc(ab(a))))));

    case 8:
      return gh(fg(ef(de(cd(bc(ab(a)))))));

    case 9:
      return hi(gh(fg(ef(de(cd(bc(ab(a))))))));

    case 10:
      return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
  }

  return;
}

exports.pipe = pipe;

var isFunctor = function isFunctor(I) {
  return typeof I.map === 'function';
};

var isContravariant = function isContravariant(I) {
  return typeof I.contramap === 'function';
};

var isFunctorWithIndex = function isFunctorWithIndex(I) {
  return typeof I.mapWithIndex === 'function';
};

var isApply = function isApply(I) {
  return typeof I.ap === 'function';
};

var isChain = function isChain(I) {
  return typeof I.chain === 'function';
};

var isBifunctor = function isBifunctor(I) {
  return typeof I.bimap === 'function';
};

var isExtend = function isExtend(I) {
  return typeof I.extend === 'function';
};

var isFoldable = function isFoldable(I) {
  return typeof I.reduce === 'function';
};

var isFoldableWithIndex = function isFoldableWithIndex(I) {
  return typeof I.reduceWithIndex === 'function';
};

var isAlt = function isAlt(I) {
  return typeof I.alt === 'function';
};

var isCompactable = function isCompactable(I) {
  return typeof I.compact === 'function';
};

var isFilterable = function isFilterable(I) {
  return typeof I.filter === 'function';
};

var isFilterableWithIndex = function isFilterableWithIndex(I) {
  return typeof I.filterWithIndex === 'function';
};

var isProfunctor = function isProfunctor(I) {
  return typeof I.promap === 'function';
};

var isSemigroupoid = function isSemigroupoid(I) {
  return typeof I.compose === 'function';
};

var isMonadThrow = function isMonadThrow(I) {
  return typeof I.throwError === 'function';
};

function pipeable(I) {
  var r = {};

  if (isFunctor(I)) {
    var map = function map(f) {
      return function (fa) {
        return I.map(fa, f);
      };
    };

    r.map = map;
  }

  if (isContravariant(I)) {
    var contramap = function contramap(f) {
      return function (fa) {
        return I.contramap(fa, f);
      };
    };

    r.contramap = contramap;
  }

  if (isFunctorWithIndex(I)) {
    var mapWithIndex = function mapWithIndex(f) {
      return function (fa) {
        return I.mapWithIndex(fa, f);
      };
    };

    r.mapWithIndex = mapWithIndex;
  }

  if (isApply(I)) {
    var ap = function ap(fa) {
      return function (fab) {
        return I.ap(fab, fa);
      };
    };

    var apFirst = function apFirst(fb) {
      return function (fa) {
        return I.ap(I.map(fa, function (a) {
          return function () {
            return a;
          };
        }), fb);
      };
    };

    r.ap = ap;
    r.apFirst = apFirst;

    r.apSecond = function (fb) {
      return function (fa) {
        return I.ap(I.map(fa, function () {
          return function (b) {
            return b;
          };
        }), fb);
      };
    };
  }

  if (isChain(I)) {
    var chain = function chain(f) {
      return function (ma) {
        return I.chain(ma, f);
      };
    };

    var chainFirst = function chainFirst(f) {
      return function (ma) {
        return I.chain(ma, function (a) {
          return I.map(f(a), function () {
            return a;
          });
        });
      };
    };

    var flatten = function flatten(mma) {
      return I.chain(mma, function_1.identity);
    };

    r.chain = chain;
    r.chainFirst = chainFirst;
    r.flatten = flatten;
  }

  if (isBifunctor(I)) {
    var bimap = function bimap(f, g) {
      return function (fa) {
        return I.bimap(fa, f, g);
      };
    };

    var mapLeft = function mapLeft(f) {
      return function (fa) {
        return I.mapLeft(fa, f);
      };
    };

    r.bimap = bimap;
    r.mapLeft = mapLeft;
  }

  if (isExtend(I)) {
    var extend = function extend(f) {
      return function (wa) {
        return I.extend(wa, f);
      };
    };

    var duplicate = function duplicate(wa) {
      return I.extend(wa, function_1.identity);
    };

    r.extend = extend;
    r.duplicate = duplicate;
  }

  if (isFoldable(I)) {
    var reduce = function reduce(b, f) {
      return function (fa) {
        return I.reduce(fa, b, f);
      };
    };

    var foldMap = function foldMap(M) {
      var foldMapM = I.foldMap(M);
      return function (f) {
        return function (fa) {
          return foldMapM(fa, f);
        };
      };
    };

    var reduceRight = function reduceRight(b, f) {
      return function (fa) {
        return I.reduceRight(fa, b, f);
      };
    };

    r.reduce = reduce;
    r.foldMap = foldMap;
    r.reduceRight = reduceRight;
  }

  if (isFoldableWithIndex(I)) {
    var reduceWithIndex = function reduceWithIndex(b, f) {
      return function (fa) {
        return I.reduceWithIndex(fa, b, f);
      };
    };

    var foldMapWithIndex = function foldMapWithIndex(M) {
      var foldMapM = I.foldMapWithIndex(M);
      return function (f) {
        return function (fa) {
          return foldMapM(fa, f);
        };
      };
    };

    var reduceRightWithIndex = function reduceRightWithIndex(b, f) {
      return function (fa) {
        return I.reduceRightWithIndex(fa, b, f);
      };
    };

    r.reduceWithIndex = reduceWithIndex;
    r.foldMapWithIndex = foldMapWithIndex;
    r.reduceRightWithIndex = reduceRightWithIndex;
  }

  if (isAlt(I)) {
    var alt = function alt(that) {
      return function (fa) {
        return I.alt(fa, that);
      };
    };

    r.alt = alt;
  }

  if (isCompactable(I)) {
    r.compact = I.compact;
    r.separate = I.separate;
  }

  if (isFilterable(I)) {
    var filter = function filter(predicate) {
      return function (fa) {
        return I.filter(fa, predicate);
      };
    };

    var filterMap = function filterMap(f) {
      return function (fa) {
        return I.filterMap(fa, f);
      };
    };

    var partition = function partition(predicate) {
      return function (fa) {
        return I.partition(fa, predicate);
      };
    };

    var partitionMap = function partitionMap(f) {
      return function (fa) {
        return I.partitionMap(fa, f);
      };
    };

    r.filter = filter;
    r.filterMap = filterMap;
    r.partition = partition;
    r.partitionMap = partitionMap;
  }

  if (isFilterableWithIndex(I)) {
    var filterWithIndex = function filterWithIndex(predicateWithIndex) {
      return function (fa) {
        return I.filterWithIndex(fa, predicateWithIndex);
      };
    };

    var filterMapWithIndex = function filterMapWithIndex(f) {
      return function (fa) {
        return I.filterMapWithIndex(fa, f);
      };
    };

    var partitionWithIndex = function partitionWithIndex(predicateWithIndex) {
      return function (fa) {
        return I.partitionWithIndex(fa, predicateWithIndex);
      };
    };

    var partitionMapWithIndex = function partitionMapWithIndex(f) {
      return function (fa) {
        return I.partitionMapWithIndex(fa, f);
      };
    };

    r.filterWithIndex = filterWithIndex;
    r.filterMapWithIndex = filterMapWithIndex;
    r.partitionWithIndex = partitionWithIndex;
    r.partitionMapWithIndex = partitionMapWithIndex;
  }

  if (isProfunctor(I)) {
    var promap = function promap(f, g) {
      return function (fa) {
        return I.promap(fa, f, g);
      };
    };

    r.promap = promap;
  }

  if (isSemigroupoid(I)) {
    var compose = function compose(that) {
      return function (fa) {
        return I.compose(fa, that);
      };
    };

    r.compose = compose;
  }

  if (isMonadThrow(I)) {
    var fromOption = function fromOption(onNone) {
      return function (ma) {
        return ma._tag === 'None' ? I.throwError(onNone()) : I.of(ma.value);
      };
    };

    var fromEither = function fromEither(ma) {
      return ma._tag === 'Left' ? I.throwError(ma.left) : I.of(ma.right);
    };

    var fromPredicate = function fromPredicate(predicate, onFalse) {
      return function (a) {
        return predicate(a) ? I.of(a) : I.throwError(onFalse(a));
      };
    };

    var filterOrElse = function filterOrElse(predicate, onFalse) {
      return function (ma) {
        return I.chain(ma, function (a) {
          return predicate(a) ? I.of(a) : I.throwError(onFalse(a));
        });
      };
    };

    r.fromOption = fromOption;
    r.fromEither = fromEither;
    r.fromPredicate = fromPredicate;
    r.filterOrElse = filterOrElse;
  }

  return r;
}

exports.pipeable = pipeable;

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var ObjectUtils_1 = __webpack_require__(562),
    StringUtils_1 = __webpack_require__(559),
    ValidationManager_1 = __webpack_require__(568),
    ArrayUtils = function () {
  function r() {}

  return r.isArray = function (r) {
    return "[object Array]" === Object.prototype.toString.call(r);
  }, r.isEqualTo = function (t, e) {
    if (!r.isArray(t) || !r.isArray(e)) throw new Error("parameters must be arrays");
    if (t.length != e.length) return !1;

    for (var i = 0, a = t.length; i < a; i++) {
      if (r.isArray(t[i]) && r.isArray(e[i])) {
        if (!r.isEqualTo(t[i], e[i])) return !1;
      } else if (ObjectUtils_1.ObjectUtils.isObject(t[i]) && ObjectUtils_1.ObjectUtils.isObject(e[i])) {
        if (!ObjectUtils_1.ObjectUtils.isEqualTo(t[i], e[i])) return !1;
      } else if (t[i] !== e[i]) return !1;
    }

    return !0;
  }, r.isStringFound = function (t, e, i) {
    if (void 0 === i && (i = !0), !r.isArray(t)) throw new Error("parameter must be an array");
    if (!StringUtils_1.StringUtils.isString(e)) throw new Error("str is not a string");

    for (var a = 0; a < t.length; a++) {
      if (StringUtils_1.StringUtils.isString(t[a]) && (i && t[a].indexOf(e) >= 0 || !i && t[a].toLowerCase().indexOf(e.toLowerCase()) >= 0)) return !0;
      if (r.isArray(t[a]) && r.isStringFound(t[a], e, i)) return !0;
      if (ObjectUtils_1.ObjectUtils.isObject(t[a]) && ObjectUtils_1.ObjectUtils.isStringFound(t[a], e, i)) return !0;
    }

    return !1;
  }, r.removeElement = function (t, e) {
    if (!r.isArray(t)) throw new Error("parameter must be an array");
    var i = [];
    if (r.isArray(e)) for (var a = 0; a < t.length; a++) {
      r.isArray(t[a]) && r.isEqualTo(e, t[a]) || i.push(t[a]);
    } else for (var n = 0; n < t.length; n++) {
      e !== t[n] && i.push(t[n]);
    }
    return i;
  }, r.removeDuplicateElements = function (t) {
    if (!r.isArray(t)) throw new Error("parameter must be an array");

    for (var e = [], i = t.length, a = new ValidationManager_1.ValidationManager(), n = 0; n < i; n++) {
      for (var s = !1, o = e.length, l = 0; l < o; l++) {
        if (a.isEqualTo(t[n], e[l])) {
          s = !0;
          break;
        }
      }

      s || e.push(t[n]);
    }

    return e;
  }, r.hasDuplicateElements = function (t) {
    if (!r.isArray(t)) throw new Error("parameter must be an array");

    for (var e = t.length, i = new ValidationManager_1.ValidationManager(), a = 0; a < e; a++) {
      for (var n = a + 1; n < e; n++) {
        if (i.isEqualTo(t[a], t[n])) return !0;
      }
    }

    return !1;
  }, r.getDuplicateElements = function (t) {
    if (!r.isArray(t)) throw new Error("parameter must be an array");

    for (var e = [], i = t.length, a = new ValidationManager_1.ValidationManager(), n = 0; n < i; n++) {
      for (var s = n + 1; s < i; s++) {
        a.isEqualTo(t[n], t[s]) && e.push(t[n]);
      }
    }

    return r.removeDuplicateElements(e);
  }, r;
}();

exports.ArrayUtils = ArrayUtils;

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var ArrayUtils_1 = __webpack_require__(561),
    StringUtils_1 = __webpack_require__(559),
    ValidationManager_1 = __webpack_require__(568),
    ObjectUtils = function () {
  function r() {}

  return r.isObject = function (r) {
    return !(ArrayUtils_1.ArrayUtils.isArray(r) || null === r || "object" != _typeof(r));
  }, r.getKeys = function (t) {
    if (!r.isObject(t)) throw new Error("parameter must be an object");
    return Object.keys(t);
  }, r.isEqualTo = function (t, e) {
    var i = new ValidationManager_1.ValidationManager();
    if (!r.isObject(t) || !r.isObject(e)) throw new Error("parameters must be objects");
    var n = r.getKeys(t).sort(),
        s = r.getKeys(e).sort();
    if (!ArrayUtils_1.ArrayUtils.isEqualTo(n, s)) return !1;

    for (var o = 0; o < n.length; o++) {
      if (!i.isEqualTo(t[n[o]], e[s[o]])) return !1;
    }

    return !0;
  }, r.isStringFound = function (t, e, i) {
    if (void 0 === i && (i = !0), !r.isObject(t)) throw new Error("parameter must be an object");
    if (!StringUtils_1.StringUtils.isString(e)) throw new Error("str is not a string");

    for (var n = 0, s = r.getKeys(t); n < s.length; n++) {
      var o = s[n];
      if (StringUtils_1.StringUtils.isString(t[o]) && (i && t[o].indexOf(e) >= 0 || !i && t[o].toLowerCase().indexOf(e.toLowerCase()) >= 0)) return !0;
      if (ArrayUtils_1.ArrayUtils.isArray(t[o]) && ArrayUtils_1.ArrayUtils.isStringFound(t[o], e, i)) return !0;
      if (r.isObject(t[o]) && r.isStringFound(t[o], e, i)) return !0;
    }

    return !1;
  }, r.merge = function (t, e) {
    if (!r.isObject(t) || !r.isObject(e)) throw new Error("destination and source must objects");

    for (var i = 0, n = r.getKeys(e); i < n.length; i++) {
      var s = n[i];
      t.hasOwnProperty(s) && r.isObject(e[s]) && r.isObject(t[s]) ? t[s] = r.merge(t[s], e[s]) : t[s] = r.clone(e[s]);
    }

    return t;
  }, r.clone = function (t) {
    if (null == t || "object" != _typeof(t)) return t;
    var e = new t.constructor();

    for (var i in t) {
      t.hasOwnProperty(i) && (e[i] = r.clone(t[i]));
    }

    return e;
  }, r;
}();

exports.ObjectUtils = ObjectUtils;

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StringUtils_1 = __webpack_require__(559),
    NumericUtils = function () {
  function r() {}

  return r.isNumeric = function (r) {
    return StringUtils_1.StringUtils.isString(r) && (r = String(r).trim()), !isNaN(parseFloat(r)) && isFinite(r);
  }, r.isInteger = function (i) {
    return !!r.isNumeric(i) && String(i).indexOf(".") < 0;
  }, r.getNumeric = function (i) {
    if (r.isNumeric(i)) return Number(i);
    throw new Error("NumericUtils.getNumeric : Provided value is not numeric");
  }, r.generateRandomInteger = function (i, e) {
    if (!r.isInteger(e) || !r.isInteger(i)) throw new Error("Provided max and min must be integers");
    if (e <= i) throw new Error("Provided max must be higher than min");
    return Math.floor(Math.random() * (e - i + 1)) + i;
  }, r;
}();

exports.NumericUtils = NumericUtils;

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @since 2.0.0
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.not = exports.unsafeCoerce = exports.identity = void 0;
/**
 * @since 2.0.0
 */

function identity(a) {
  return a;
}

exports.identity = identity;
/**
 * @since 2.0.0
 */

exports.unsafeCoerce = identity;
/**
 * @since 2.0.0
 */

function not(predicate) {
  return function (a) {
    return !predicate(a);
  };
}

exports.not = not;
/**
 * @since 2.0.0
 */

function constant(a) {
  return function () {
    return a;
  };
}

exports.constant = constant;
/**
 * A thunk that returns always `true`
 *
 * @since 2.0.0
 */

exports.constTrue = function () {
  return true;
};
/**
 * A thunk that returns always `false`
 *
 * @since 2.0.0
 */


exports.constFalse = function () {
  return false;
};
/**
 * A thunk that returns always `null`
 *
 * @since 2.0.0
 */


exports.constNull = function () {
  return null;
};
/**
 * A thunk that returns always `undefined`
 *
 * @since 2.0.0
 */


exports.constUndefined = function () {
  return;
};
/**
 * A thunk that returns always `void`
 *
 * @since 2.0.0
 */


exports.constVoid = function () {
  return;
};
/**
 * Flips the order of the arguments of a function of two arguments.
 *
 * @since 2.0.0
 */


function flip(f) {
  return function (b, a) {
    return f(a, b);
  };
}

exports.flip = flip;

function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
  switch (arguments.length) {
    case 1:
      return ab;

    case 2:
      return function () {
        return bc(ab.apply(this, arguments));
      };

    case 3:
      return function () {
        return cd(bc(ab.apply(this, arguments)));
      };

    case 4:
      return function () {
        return de(cd(bc(ab.apply(this, arguments))));
      };

    case 5:
      return function () {
        return ef(de(cd(bc(ab.apply(this, arguments)))));
      };

    case 6:
      return function () {
        return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
      };

    case 7:
      return function () {
        return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
      };

    case 8:
      return function () {
        return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
      };

    case 9:
      return function () {
        return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
      };
  }

  return;
}

exports.flow = flow;
/**
 * @since 2.0.0
 */

function tuple() {
  var t = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    t[_i] = arguments[_i];
  }

  return t;
}

exports.tuple = tuple;
/**
 * @since 2.0.0
 */

function increment(n) {
  return n + 1;
}

exports.increment = increment;
/**
 * @since 2.0.0
 */

function decrement(n) {
  return n - 1;
}

exports.decrement = decrement;
/**
 * @since 2.0.0
 */

function absurd(_) {
  throw new Error('Called `absurd` function which should be uncallable');
}

exports.absurd = absurd;
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/lib/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */

function tupled(f) {
  return function (a) {
    return f.apply(void 0, a);
  };
}

exports.tupled = tupled;
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */

function untupled(f) {
  return function () {
    var a = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      a[_i] = arguments[_i];
    }

    return f(a);
  };
}

exports.untupled = untupled;

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEither = exports.separate = exports.compact = exports.reduceRight = exports.reduce = exports.partitionMap = exports.partition = exports.map = exports.foldMap = exports.flatten = exports.filterMap = exports.filter = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.alt = exports.option = exports.getMonoid = exports.getLastMonoid = exports.getFirstMonoid = exports.getApplyMonoid = exports.getApplySemigroup = exports.getOrd = exports.getEq = exports.getShow = exports.mapNullable = exports.getRefinement = exports.getRight = exports.getLeft = exports.tryCatch = exports.fromPredicate = exports.exists = exports.elem = exports.getOrElseW = exports.getOrElse = exports.toUndefined = exports.toNullable = exports.fromNullable = exports.fold = exports.isNone = exports.isSome = exports.some = exports.none = exports.URI = void 0;

var pipeable_1 = __webpack_require__(560);
/**
 * @since 2.0.0
 */


exports.URI = 'Option';
/**
 * @since 2.0.0
 */

exports.none = {
  _tag: 'None'
};
/**
 * @since 2.0.0
 */

function some(a) {
  return {
    _tag: 'Some',
    value: a
  };
}

exports.some = some;
/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise
 *
 * @example
 * import { some, none, isSome } from 'fp-ts/lib/Option'
 *
 * assert.strictEqual(isSome(some(1)), true)
 * assert.strictEqual(isSome(none), false)
 *
 * @since 2.0.0
 */

function isSome(fa) {
  return fa._tag === 'Some';
}

exports.isSome = isSome;
/**
 * Returns `true` if the option is `None`, `false` otherwise
 *
 * @example
 * import { some, none, isNone } from 'fp-ts/lib/Option'
 *
 * assert.strictEqual(isNone(some(1)), false)
 * assert.strictEqual(isNone(none), true)
 *
 * @since 2.0.0
 */

function isNone(fa) {
  return fa._tag === 'None';
}

exports.isNone = isNone;
/**
 * Takes a default value, a function, and an `Option` value, if the `Option` value is `None` the default value is
 * returned, otherwise the function is applied to the value inside the `Some` and the result is returned.
 *
 * @example
 * import { some, none, fold } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     fold(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a some containing 1'
 * )
 *
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     fold(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a none'
 * )
 *
 * @since 2.0.0
 */

function fold(onNone, onSome) {
  return function (ma) {
    return isNone(ma) ? onNone() : onSome(ma.value);
  };
}

exports.fold = fold;
/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`
 *
 * @example
 * import { none, some, fromNullable } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(fromNullable(undefined), none)
 * assert.deepStrictEqual(fromNullable(null), none)
 * assert.deepStrictEqual(fromNullable(1), some(1))
 *
 * @since 2.0.0
 */

function fromNullable(a) {
  return a == null ? exports.none : some(a);
}

exports.fromNullable = fromNullable;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `null`.
 *
 * @example
 * import { some, none, toNullable } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toNullable
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toNullable
 *   ),
 *   null
 * )
 *
 * @since 2.0.0
 */

function toNullable(ma) {
  return isNone(ma) ? null : ma.value;
}

exports.toNullable = toNullable;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.
 *
 * @example
 * import { some, none, toUndefined } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toUndefined
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toUndefined
 *   ),
 *   undefined
 * )
 *
 * @since 2.0.0
 */

function toUndefined(ma) {
  return isNone(ma) ? undefined : ma.value;
}

exports.toUndefined = toUndefined;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns the given default value
 *
 * @example
 * import { some, none, getOrElse } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @since 2.0.0
 */

function getOrElse(onNone) {
  return function (ma) {
    return isNone(ma) ? onNone() : ma.value;
  };
}

exports.getOrElse = getOrElse;
/**
 * @since 2.6.0
 */

exports.getOrElseW = getOrElse;
/**
 * Returns `true` if `ma` contains `a`
 *
 * @example
 * import { some, none, elem } from 'fp-ts/lib/Option'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.strictEqual(elem(eqNumber)(1, some(1)), true)
 * assert.strictEqual(elem(eqNumber)(2, some(1)), false)
 * assert.strictEqual(elem(eqNumber)(1, none), false)
 *
 * @since 2.0.0
 */

function elem(E) {
  return function (a, ma) {
    return isNone(ma) ? false : E.equals(a, ma.value);
  };
}

exports.elem = elem;
/**
 * Returns `true` if the predicate is satisfied by the wrapped value
 *
 * @example
 * import { some, none, exists } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 0)
 *   ),
 *   true
 * )
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 1)
 *   ),
 *   false
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     exists(n => n > 0)
 *   ),
 *   false
 * )
 *
 * @since 2.0.0
 */

function exists(predicate) {
  return function (ma) {
    return isNone(ma) ? false : predicate(ma.value);
  };
}

exports.exists = exists;

function fromPredicate(predicate) {
  return function (a) {
    return predicate(a) ? some(a) : exports.none;
  };
}

exports.fromPredicate = fromPredicate;
/**
 * Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in
 * `Some`
 *
 * @example
 * import { none, some, tryCatch } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(
 *   tryCatch(() => {
 *     throw new Error()
 *   }),
 *   none
 * )
 * assert.deepStrictEqual(tryCatch(() => 1), some(1))
 *
 * @since 2.0.0
 */

function tryCatch(f) {
  try {
    return some(f());
  } catch (e) {
    return exports.none;
  }
}

exports.tryCatch = tryCatch;
/**
 * Returns an `E` value if possible
 *
 * @since 2.0.0
 */

function getLeft(ma) {
  return ma._tag === 'Right' ? exports.none : some(ma.left);
}

exports.getLeft = getLeft;
/**
 * Returns an `A` value if possible
 *
 * @since 2.0.0
 */

function getRight(ma) {
  return ma._tag === 'Left' ? exports.none : some(ma.right);
}

exports.getRight = getRight;
/**
 * Returns a `Refinement` (i.e. a custom type guard) from a `Option` returning function.
 * This function ensures that a custom type guard definition is type-safe.
 *
 * ```ts
 * import { some, none, getRefinement } from 'fp-ts/lib/Option'
 *
 * type A = { type: 'A' }
 * type B = { type: 'B' }
 * type C = A | B
 *
 * const isA = (c: C): c is A => c.type === 'B' // <= typo but typescript doesn't complain
 * const isA = getRefinement<C, A>(c => (c.type === 'B' ? some(c) : none)) // static error: Type '"B"' is not assignable to type '"A"'
 * ```
 *
 * @since 2.0.0
 */

function getRefinement(getOption) {
  return function (a) {
    return isSome(getOption(a));
  };
}

exports.getRefinement = getRefinement;
/**
 * This is `chain` + `fromNullable`, useful when working with optional values
 *
 * @example
 * import { some, none, fromNullable, mapNullable } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * interface Employee {
 *   company?: {
 *     address?: {
 *       street?: {
 *         name?: string
 *       }
 *     }
 *   }
 * }
 *
 * const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee1.company),
 *     mapNullable(company => company.address),
 *     mapNullable(address => address.street),
 *     mapNullable(street => street.name)
 *   ),
 *   some('high street')
 * )
 *
 * const employee2: Employee = { company: { address: { street: {} } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee2.company),
 *     mapNullable(company => company.address),
 *     mapNullable(address => address.street),
 *     mapNullable(street => street.name)
 *   ),
 *   none
 * )
 *
 * @since 2.0.0
 */

function mapNullable(f) {
  return function (ma) {
    return isNone(ma) ? exports.none : fromNullable(f(ma.value));
  };
}

exports.mapNullable = mapNullable;
/**
 * @since 2.0.0
 */

function getShow(S) {
  return {
    show: function show(ma) {
      return isNone(ma) ? 'none' : "some(" + S.show(ma.value) + ")";
    }
  };
}

exports.getShow = getShow;
/**
 * @example
 * import { none, some, getEq } from 'fp-ts/lib/Option'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * const E = getEq(eqNumber)
 * assert.strictEqual(E.equals(none, none), true)
 * assert.strictEqual(E.equals(none, some(1)), false)
 * assert.strictEqual(E.equals(some(1), none), false)
 * assert.strictEqual(E.equals(some(1), some(2)), false)
 * assert.strictEqual(E.equals(some(1), some(1)), true)
 *
 * @since 2.0.0
 */

function getEq(E) {
  return {
    equals: function equals(x, y) {
      return x === y || (isNone(x) ? isNone(y) : isNone(y) ? false : E.equals(x.value, y.value));
    }
  };
}

exports.getEq = getEq;
/**
 * The `Ord` instance allows `Option` values to be compared with
 * `compare`, whenever there is an `Ord` instance for
 * the type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 *
 * @example
 * import { none, some, getOrd } from 'fp-ts/lib/Option'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * const O = getOrd(ordNumber)
 * assert.strictEqual(O.compare(none, none), 0)
 * assert.strictEqual(O.compare(none, some(1)), -1)
 * assert.strictEqual(O.compare(some(1), none), 1)
 * assert.strictEqual(O.compare(some(1), some(2)), -1)
 * assert.strictEqual(O.compare(some(1), some(1)), 0)
 *
 * @since 2.0.0
 */

function getOrd(O) {
  return {
    equals: getEq(O).equals,
    compare: function compare(x, y) {
      return x === y ? 0 : isSome(x) ? isSome(y) ? O.compare(x.value, y.value) : 1 : -1;
    }
  };
}

exports.getOrd = getOrd;
/**
 * `Apply` semigroup
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | none               |
 * | none    | some(a) | none               |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getApplySemigroup, some, none } from 'fp-ts/lib/Option'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getApplySemigroup(semigroupSum)
 * assert.deepStrictEqual(S.concat(none, none), none)
 * assert.deepStrictEqual(S.concat(some(1), none), none)
 * assert.deepStrictEqual(S.concat(none, some(1)), none)
 * assert.deepStrictEqual(S.concat(some(1), some(2)), some(3))
 *
 * @since 2.0.0
 */

function getApplySemigroup(S) {
  return {
    concat: function concat(x, y) {
      return isSome(x) && isSome(y) ? some(S.concat(x.value, y.value)) : exports.none;
    }
  };
}

exports.getApplySemigroup = getApplySemigroup;
/**
 * @since 2.0.0
 */

function getApplyMonoid(M) {
  return __assign(__assign({}, getApplySemigroup(M)), {
    empty: some(M.empty)
  });
}

exports.getApplyMonoid = getApplyMonoid;
/**
 * Monoid returning the left-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(a)      |
 *
 * @example
 * import { getFirstMonoid, some, none } from 'fp-ts/lib/Option'
 *
 * const M = getFirstMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(1))
 *
 * @since 2.0.0
 */

function getFirstMonoid() {
  return {
    concat: function concat(x, y) {
      return isNone(x) ? y : x;
    },
    empty: exports.none
  };
}

exports.getFirstMonoid = getFirstMonoid;
/**
 * Monoid returning the right-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(b)      |
 *
 * @example
 * import { getLastMonoid, some, none } from 'fp-ts/lib/Option'
 *
 * const M = getLastMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(2))
 *
 * @since 2.0.0
 */

function getLastMonoid() {
  return {
    concat: function concat(x, y) {
      return isNone(y) ? x : y;
    },
    empty: exports.none
  };
}

exports.getLastMonoid = getLastMonoid;
/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are
 * appended using the provided `Semigroup`
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | some(a)            |
 * | none    | some(a) | some(a)            |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getMonoid, some, none } from 'fp-ts/lib/Option'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const M = getMonoid(semigroupSum)
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(3))
 *
 * @since 2.0.0
 */

function getMonoid(S) {
  return {
    concat: function concat(x, y) {
      return isNone(x) ? y : isNone(y) ? x : some(S.concat(x.value, y.value));
    },
    empty: exports.none
  };
}

exports.getMonoid = getMonoid;
var defaultSeparate = {
  left: exports.none,
  right: exports.none
};

var identity = function identity(a) {
  return a;
};
/**
 * @since 2.0.0
 */


exports.option = {
  URI: exports.URI,
  map: function map(ma, f) {
    return isNone(ma) ? exports.none : some(f(ma.value));
  },
  of: some,
  ap: function ap(mab, ma) {
    return isNone(mab) ? exports.none : isNone(ma) ? exports.none : some(mab.value(ma.value));
  },
  chain: function chain(ma, f) {
    return isNone(ma) ? exports.none : f(ma.value);
  },
  reduce: function reduce(fa, b, f) {
    return isNone(fa) ? b : f(b, fa.value);
  },
  foldMap: function foldMap(M) {
    return function (fa, f) {
      return isNone(fa) ? M.empty : f(fa.value);
    };
  },
  reduceRight: function reduceRight(fa, b, f) {
    return isNone(fa) ? b : f(fa.value, b);
  },
  traverse: function traverse(F) {
    return function (ta, f) {
      return isNone(ta) ? F.of(exports.none) : F.map(f(ta.value), some);
    };
  },
  sequence: function sequence(F) {
    return function (ta) {
      return isNone(ta) ? F.of(exports.none) : F.map(ta.value, some);
    };
  },
  zero: function zero() {
    return exports.none;
  },
  alt: function alt(ma, f) {
    return isNone(ma) ? f() : ma;
  },
  extend: function extend(wa, f) {
    return isNone(wa) ? exports.none : some(f(wa));
  },
  compact: function compact(ma) {
    return exports.option.chain(ma, identity);
  },
  separate: function separate(ma) {
    var o = exports.option.map(ma, function (e) {
      return {
        left: getLeft(e),
        right: getRight(e)
      };
    });
    return isNone(o) ? defaultSeparate : o.value;
  },
  filter: function filter(fa, predicate) {
    return isNone(fa) ? exports.none : predicate(fa.value) ? fa : exports.none;
  },
  filterMap: function filterMap(ma, f) {
    return isNone(ma) ? exports.none : f(ma.value);
  },
  partition: function partition(fa, predicate) {
    return {
      left: exports.option.filter(fa, function (a) {
        return !predicate(a);
      }),
      right: exports.option.filter(fa, predicate)
    };
  },
  partitionMap: function partitionMap(fa, f) {
    return exports.option.separate(exports.option.map(fa, f));
  },
  wither: function wither(F) {
    return function (fa, f) {
      return isNone(fa) ? F.of(exports.none) : f(fa.value);
    };
  },
  wilt: function wilt(F) {
    return function (fa, f) {
      var o = exports.option.map(fa, function (a) {
        return F.map(f(a), function (e) {
          return {
            left: getLeft(e),
            right: getRight(e)
          };
        });
      });
      return isNone(o) ? F.of({
        left: exports.none,
        right: exports.none
      }) : o.value;
    };
  },
  throwError: function throwError() {
    return exports.none;
  }
};

var _a = pipeable_1.pipeable(exports.option),
    alt = _a.alt,
    ap = _a.ap,
    apFirst = _a.apFirst,
    apSecond = _a.apSecond,
    chain = _a.chain,
    chainFirst = _a.chainFirst,
    duplicate = _a.duplicate,
    extend = _a.extend,
    filter = _a.filter,
    filterMap = _a.filterMap,
    flatten = _a.flatten,
    foldMap = _a.foldMap,
    map = _a.map,
    partition = _a.partition,
    partitionMap = _a.partitionMap,
    reduce = _a.reduce,
    reduceRight = _a.reduceRight,
    compact = _a.compact,
    separate = _a.separate,
    fromEither = _a.fromEither;

exports.alt = alt;
exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.duplicate = duplicate;
exports.extend = extend;
exports.filter = filter;
exports.filterMap = filterMap;
exports.flatten = flatten;
exports.foldMap = foldMap;
exports.map = map;
exports.partition = partition;
exports.partitionMap = partitionMap;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.compact = compact;
exports.separate = separate;
exports.fromEither = fromEither;

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StringUtils_1 = __webpack_require__(559),
    NumericUtils_1 = __webpack_require__(563),
    ArrayUtils_1 = __webpack_require__(561),
    ObjectUtils_1 = __webpack_require__(562),
    ValidationManager = function () {
  function t() {
    this._validationStatus = [{
      tag: "",
      status: t.OK
    }], this._failedMessages = [];
  }

  return t.prototype.getStatus = function (t) {
    void 0 === t && (t = "");

    for (var i = 0, r = ArrayUtils_1.ArrayUtils.isArray(t) ? t : [t], s = 0, a = this._validationStatus; s < a.length; s++) {
      var e = a[s];
      ("" === t || r.indexOf(e.tag) >= 0) && e.status > i && (i = e.status);
    }

    return i;
  }, t.prototype.ok = function (i) {
    return void 0 === i && (i = ""), this.getStatus(i) === t.OK;
  }, t.prototype.notOk = function (i) {
    return void 0 === i && (i = ""), this.getStatus(i) !== t.OK;
  }, t.prototype.getFirstMessage = function (t) {
    void 0 === t && (t = "");

    for (var i = ArrayUtils_1.ArrayUtils.isArray(t) ? t : [t], r = 0, s = this._failedMessages; r < s.length; r++) {
      var a = s[r];
      if ("" === t || null === t || ArrayUtils_1.ArrayUtils.isArray(t) && 0 === t.length || i.indexOf(a.tag) >= 0) return a.message;
    }

    return "";
  }, t.prototype.getLastMessage = function (t) {
    void 0 === t && (t = "");

    for (var i = ArrayUtils_1.ArrayUtils.isArray(t) ? t : [t], r = this._failedMessages.length - 1; r >= 0; r--) {
      if ("" === t || null === t || ArrayUtils_1.ArrayUtils.isArray(t) && 0 === t.length || i.indexOf(this._failedMessages[r].tag) >= 0) return this._failedMessages[r].message;
    }

    return "";
  }, t.prototype.isTrue = function (t, i, r, s) {
    return void 0 === i && (i = "value is not true"), void 0 === r && (r = ""), void 0 === s && (s = !1), this._updateValidationStatus(!0 === t, i, r, s);
  }, t.prototype.isBoolean = function (t, i, r, s) {
    return void 0 === i && (i = "value is not a boolean"), void 0 === r && (r = ""), void 0 === s && (s = !1), this._updateValidationStatus("boolean" == typeof t, i, r, s);
  }, t.prototype.isNumeric = function (t, i, r, s) {
    return void 0 === i && (i = "value is not a number"), void 0 === r && (r = ""), void 0 === s && (s = !1), this._updateValidationStatus(NumericUtils_1.NumericUtils.isNumeric(t), i, r, s);
  }, t.prototype.isNumericBetween = function (t, i, r, s, a, e) {
    return void 0 === s && (s = "value is not between min and max"), void 0 === a && (a = ""), void 0 === e && (e = !1), this._updateValidationStatus(NumericUtils_1.NumericUtils.isNumeric(t) && t >= i && t <= r, s, a, e);
  }, t.prototype.isString = function (t, i, r, s) {
    return void 0 === i && (i = "value is not a string"), void 0 === r && (r = ""), void 0 === s && (s = !1), this._updateValidationStatus(StringUtils_1.StringUtils.isString(t), i, r, s);
  }, t.prototype.isUrl = function (t, i, r, s) {
    return void 0 === i && (i = "value is not an URL"), void 0 === r && (r = ""), void 0 === s && (s = !1), this._updateValidationStatus(StringUtils_1.StringUtils.isUrl(t), i, r, s);
  }, t.prototype.isArray = function (t, i, r, s) {
    return void 0 === i && (i = "value is not an array"), void 0 === r && (r = ""), void 0 === s && (s = !1), this._updateValidationStatus(ArrayUtils_1.ArrayUtils.isArray(t), i, r, s);
  }, t.prototype.isObject = function (t, i, r, s) {
    return void 0 === i && (i = "value is not an object"), void 0 === r && (r = ""), void 0 === s && (s = !1), this._updateValidationStatus(ObjectUtils_1.ObjectUtils.isObject(t), i, r, s);
  }, t.prototype.isFilledIn = function (t, i, r, s, a) {
    return void 0 === i && (i = []), void 0 === r && (r = "value is required"), void 0 === s && (s = ""), void 0 === a && (a = !1), this._updateValidationStatus(!StringUtils_1.StringUtils.isEmpty(t, i), r, s, a);
  }, t.prototype.isDate = function () {
    return !1;
  }, t.prototype.isMail = function () {
    return !1;
  }, t.prototype.isEqualTo = function (t, i, r, s, a) {
    void 0 === r && (r = "values are not equal"), void 0 === s && (s = ""), void 0 === a && (a = !1);
    var e = !1;
    return ArrayUtils_1.ArrayUtils.isArray(t) && ArrayUtils_1.ArrayUtils.isArray(i) ? e = ArrayUtils_1.ArrayUtils.isEqualTo(t, i) : ObjectUtils_1.ObjectUtils.isObject(t) && ObjectUtils_1.ObjectUtils.isObject(i) ? e = ObjectUtils_1.ObjectUtils.isEqualTo(t, i) : t === i && (e = !0), this._updateValidationStatus(e, r, s, a);
  }, t.prototype.isMinimumWords = function (t) {
    return "" === t;
  }, t.prototype.isNIF = function (t) {
    return "" === t;
  }, t.prototype.isMinimumLength = function (t) {
    return "" === t;
  }, t.prototype.isMaximumLength = function (t) {
    return "" === t;
  }, t.prototype.isPostalCode = function (t) {
    return "" === t;
  }, t.prototype.isPhone = function (t) {
    return "" === t;
  }, t.prototype.isHtmlFormValid = function (t) {
    return "" === t;
  }, t.prototype.reset = function () {
    this._validationStatus = [{
      tag: "",
      status: t.OK
    }], this._failedMessages = [];
  }, t.prototype._updateValidationStatus = function (i, r, s, a) {
    if (void 0 === s && (s = ""), !i) {
      for (var e = ArrayUtils_1.ArrayUtils.isArray(s) ? s : [s], o = 0, n = e; o < n.length; o++) {
        for (var u = n[o], l = !1, d = 0, p = this._validationStatus; d < p.length; d++) {
          if (p[d].tag === u) {
            l = !0;
            break;
          }
        }

        l || this._validationStatus.push({
          tag: String(u),
          status: t.OK
        });
      }

      for (var v = 0, y = e; v < y.length; v++) {
        u = y[v];

        for (var c = 0; c < this._validationStatus.length; c++) {
          if (this._validationStatus[c].tag === u) {
            this._failedMessages.push({
              tag: u,
              message: r
            }), this._validationStatus[c].status = a && this._validationStatus[c].status != t.ERROR ? t.WARNING : t.ERROR;
            break;
          }
        }
      }
    }

    return i;
  }, t.OK = 0, t.WARNING = 1, t.ERROR = 2, t;
}();

exports.ValidationManager = ValidationManager;

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StringUtils_1 = __webpack_require__(559),
    ObjectUtils_1 = __webpack_require__(562),
    ArrayUtils_1 = __webpack_require__(561),
    NumericUtils_1 = __webpack_require__(563),
    HashMapObject = function () {
  function t(t) {
    if (void 0 === t && (t = null), this._keys = [], this._data = {}, this._length = 0, null != t) if (ObjectUtils_1.ObjectUtils.isObject(t)) for (var e in t) {
      this.set(String(e), t[e]);
    } else {
      if (!ArrayUtils_1.ArrayUtils.isArray(t)) throw new Error("HashMapObject: invalid data");

      for (var s = t.length, i = 0; i < s; i++) {
        this.set(String(i), t[i]);
      }
    }
  }

  return t.prototype.set = function (t, e) {
    if (StringUtils_1.StringUtils.isString(t) && "" !== t.replace(/ |\n|\r|\t/gi, "")) return this._data.hasOwnProperty(t) || (this._keys.push(t), this._length++), this._data[t] = e;
    throw new Error("HashMapObject: key must be a non empty string");
  }, t.prototype.length = function () {
    return this._length;
  }, t.prototype.get = function (t) {
    if (this._data.hasOwnProperty(t)) return this._data[t];
    throw new Error("HashMapObject->get: key does not exist or is invalid");
  }, t.prototype.getAt = function (t) {
    if ("number" == typeof t && NumericUtils_1.NumericUtils.isInteger(t) && t >= 0 && t < this._length) return this._data[this._keys[t]];
    throw new Error("HashMapObject->getAt: index does not exist or is invalid");
  }, t.prototype.getKeys = function () {
    return this._keys;
  }, t.prototype.getValues = function () {
    for (var t = [], e = 0; e < this._keys.length; e++) {
      t.push(this.get(this._keys[e]));
    }

    return t;
  }, t.prototype.isKey = function (t) {
    return StringUtils_1.StringUtils.isString(t) && this._data.hasOwnProperty(t);
  }, t.prototype.remove = function (t) {
    if (this._data.hasOwnProperty(t)) {
      var e = this._data[t];
      return delete this._data[t], delete this._keys[this._keys.indexOf(t)], this._length--, e;
    }

    throw this._validateKeyFormat(t), new Error("HashMapObject->rename: key does not exist " + t);
  }, t.prototype.rename = function (t, e) {
    if (this._validateKeyFormat(t), this._validateKeyFormat(e), this.isKey(e)) throw new Error("HashMapObject->rename: newKey " + e + " already exists");

    if (this.isKey(t)) {
      for (var s = {}, i = 0; i < this._keys.length; i++) {
        this._keys[i] == t ? s[e] = this._data[t] : s[this._keys[i]] = this._data[this._keys[i]];
      }

      return this._data = s, this._keys[this._keys.indexOf(t)] = e, !0;
    }

    throw new Error("HashMapObject->rename: key does not exist " + t);
  }, t.prototype.swap = function (t, e) {
    if (this._validateKeyFormat(t), this._validateKeyFormat(e), !this.isKey(t)) throw new Error("HashMapObject->swap: key1 does not exist " + t);
    if (!this.isKey(e)) throw new Error("HashMapObject->swap: key2 does not exist " + e);

    for (var s = {}, i = this.get(t), r = this.get(e), a = 0; a < this._keys.length; a++) {
      switch (this._keys[a]) {
        case t:
          s[e] = r;
          break;

        case e:
          s[t] = i;
          break;

        default:
          s[this._keys[a]] = this._data[this._keys[a]];
      }
    }

    this._data = s;

    var n = this._keys.indexOf(t),
        h = this._keys.indexOf(e);

    return this._keys[n] = e, this._keys[h] = t, !0;
  }, t.prototype.sortByKey = function (e, s) {
    switch (void 0 === e && (e = t.SORT_METHOD_STRING), void 0 === s && (s = t.SORT_ORDER_ASCENDING), e + s) {
      case t.SORT_METHOD_STRING + t.SORT_ORDER_ASCENDING:
        this._keys.sort();

        break;

      case t.SORT_METHOD_STRING + t.SORT_ORDER_DESCENDING:
        this._keys.sort(), this._keys.reverse();
        break;

      case t.SORT_METHOD_NUMERIC + t.SORT_ORDER_ASCENDING:
        this._keys.sort(function (t, e) {
          return t - e;
        });

        break;

      case t.SORT_METHOD_NUMERIC + t.SORT_ORDER_DESCENDING:
        this._keys.sort(function (t, e) {
          return e - t;
        });

        break;

      default:
        throw new Error("HashMapObject->sortByKey: Unknown sort method or order");
    }

    return !0;
  }, t.prototype.shift = function () {
    if (this._length <= 0) throw new Error("HashMapObject->shift: No elements");
    this._length--;
    var t = this._data[this._keys[0]];
    return delete this._data[this._keys[0]], this._keys.shift(), t;
  }, t.prototype.pop = function () {
    if (this._length <= 0) throw new Error("HashMapObject->pop: No elements");
    this._length--;
    var t = this._data[this._keys[this._length]];
    return delete this._data[this._keys[this._length]], this._keys.pop(), t;
  }, t.prototype.reverse = function () {
    return this._keys.reverse(), !0;
  }, t.prototype._validateKeyFormat = function (t) {
    if (!StringUtils_1.StringUtils.isString(t) || "" == t.replace(/ |\n|\r|\t/gi, "")) throw new Error("HashMapObject: key must be a non empty string");
  }, t.SORT_METHOD_STRING = "SORT_METHOD_STRING", t.SORT_METHOD_NUMERIC = "SORT_METHOD_NUMERIC", t.SORT_ORDER_ASCENDING = "SORT_ORDER_ASCENDING", t.SORT_ORDER_DESCENDING = "SORT_ORDER_DESCENDING", t;
}();

exports.HashMapObject = HashMapObject;

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var HTTPManagerBaseRequest = function () {
  function t(e, s, a) {
    void 0 === s && (s = "STRING"), void 0 === a && (a = 0), this.resultFormat = t.STRING, this.ignoreGlobalPostParams = !1, this.successCallback = function () {}, this.errorCallback = function () {}, this.finallyCallback = function () {}, this.url = e, this.resultFormat = s, this.timeout = a;
  }

  return t.STRING = "STRING", t.JSON = "JSON", t;
}();

exports.HTTPManagerBaseRequest = HTTPManagerBaseRequest;

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promap = exports.map = exports.flatten = exports.compose = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.chainW = exports.reader = exports.of = exports.getMonoid = exports.getSemigroup = exports.local = exports.asks = exports.ask = exports.URI = void 0;

var E = __webpack_require__(598);

var function_1 = __webpack_require__(564);

var Identity_1 = __webpack_require__(599);

var ReaderT_1 = __webpack_require__(600);

var pipeable_1 = __webpack_require__(560);

var T = ReaderT_1.getReaderM(Identity_1.identity);
/**
 * @since 2.0.0
 */

exports.URI = 'Reader';
/**
 * Reads the current context
 *
 * @since 2.0.0
 */

exports.ask = T.ask;
/**
 * Projects a value from the global context in a Reader
 *
 * @since 2.0.0
 */

exports.asks = T.asks;
/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @since 2.0.0
 */

function local(f) {
  return function (ma) {
    return T.local(ma, f);
  };
}

exports.local = local;
/**
 * @since 2.0.0
 */

function getSemigroup(S) {
  return {
    concat: function concat(x, y) {
      return function (e) {
        return S.concat(x(e), y(e));
      };
    }
  };
}

exports.getSemigroup = getSemigroup;
/**
 * @since 2.0.0
 */

function getMonoid(M) {
  return {
    concat: getSemigroup(M).concat,
    empty: function empty() {
      return M.empty;
    }
  };
}

exports.getMonoid = getMonoid;
/**
 * @since 2.0.0
 */

exports.of = T.of;
/**
 * @since 2.0.0
 */

exports.reader = {
  URI: exports.URI,
  map: function map(ma, f) {
    return function (e) {
      return f(ma(e));
    };
  },
  of: exports.of,
  ap: T.ap,
  chain: T.chain,
  promap: function promap(mbc, f, g) {
    return function (a) {
      return g(mbc(f(a)));
    };
  },
  compose: function compose(ab, la) {
    return function (l) {
      return ab(la(l));
    };
  },
  id: function id() {
    return function_1.identity;
  },
  first: function first(pab) {
    return function (_a) {
      var a = _a[0],
          c = _a[1];
      return [pab(a), c];
    };
  },
  second: function second(pbc) {
    return function (_a) {
      var a = _a[0],
          b = _a[1];
      return [a, pbc(b)];
    };
  },
  left: function left(pab) {
    return E.fold(function (a) {
      return E.left(pab(a));
    }, E.right);
  },
  right: function right(pbc) {
    return E.fold(E.left, function (b) {
      return E.right(pbc(b));
    });
  }
};

var _a = pipeable_1.pipeable(exports.reader),
    ap = _a.ap,
    apFirst = _a.apFirst,
    apSecond = _a.apSecond,
    chain = _a.chain,
    chainFirst = _a.chainFirst,
    compose = _a.compose,
    flatten = _a.flatten,
    map = _a.map,
    promap = _a.promap;

exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.compose = compose;
exports.flatten = flatten;
exports.map = map;
exports.promap = promap;
/**
 * @since 2.6.0
 */

exports.chainW = chain;

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.mapWithIndex = exports.map = exports.foldMapWithIndex = exports.foldMap = exports.flatten = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.nonEmptyArray = exports.unzip = exports.zip = exports.zipWith = exports.fold = exports.concat = exports.of = exports.filterWithIndex = exports.filter = exports.copy = exports.modifyAt = exports.updateAt = exports.insertAt = exports.sort = exports.init = exports.last = exports.groupBy = exports.groupSort = exports.group = exports.getEq = exports.getSemigroup = exports.max = exports.min = exports.reverse = exports.tail = exports.head = exports.getShow = exports.fromArray = exports.snoc = exports.cons = exports.URI = void 0;

var pipeable_1 = __webpack_require__(560);

var RNEA = __webpack_require__(601);
/**
 * @since 2.0.0
 */


exports.URI = 'NonEmptyArray';
/* tslint:enable:readonly-keyword */

/**
 * Append an element to the front of an array, creating a new non empty array
 *
 * @example
 * import { cons } from 'fp-ts/lib/NonEmptyArray'
 *
 * assert.deepStrictEqual(cons(1, [2, 3, 4]), [1, 2, 3, 4])
 *
 * @since 2.0.0
 */

exports.cons = RNEA.cons;
/**
 * Append an element to the end of an array, creating a new non empty array
 *
 * @example
 * import { snoc } from 'fp-ts/lib/NonEmptyArray'
 *
 * assert.deepStrictEqual(snoc([1, 2, 3], 4), [1, 2, 3, 4])
 *
 * @since 2.0.0
 */

exports.snoc = RNEA.snoc;
/**
 * Builds a `NonEmptyArray` from an `Array` returning `none` if `as` is an empty array
 *
 * @since 2.0.0
 */

exports.fromArray = RNEA.fromArray;
/**
 * @since 2.0.0
 */

exports.getShow = RNEA.getShow;
/**
 * @since 2.0.0
 */

exports.head = RNEA.head;
/**
 * @since 2.0.0
 */

exports.tail = RNEA.tail;
/**
 * @since 2.0.0
 */

exports.reverse = RNEA.reverse;
/**
 * @since 2.0.0
 */

exports.min = RNEA.min;
/**
 * @since 2.0.0
 */

exports.max = RNEA.max;
/**
 * Builds a `Semigroup` instance for `NonEmptyArray`
 *
 * @since 2.0.0
 */

exports.getSemigroup = RNEA.getSemigroup;
/**
 * @example
 * import { getEq, cons } from 'fp-ts/lib/NonEmptyArray'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * const E = getEq(eqNumber)
 * assert.strictEqual(E.equals(cons(1, [2]), [1, 2]), true)
 * assert.strictEqual(E.equals(cons(1, [2]), [1, 3]), false)
 *
 * @since 2.0.0
 */

exports.getEq = RNEA.getEq;

function group(E) {
  return RNEA.group(E);
}

exports.group = group;
/**
 * Sort and then group the elements of an array into non empty arrays.
 *
 * @example
 * import { cons, groupSort } from 'fp-ts/lib/NonEmptyArray'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * assert.deepStrictEqual(groupSort(ordNumber)([1, 2, 1, 1]), [cons(1, [1, 1]), cons(2, [])])
 *
 * @since 2.0.0
 */

exports.groupSort = RNEA.groupSort;
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { cons, groupBy } from 'fp-ts/lib/NonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['foo', 'bar', 'foobar']), {
 *   '3': cons('foo', ['bar']),
 *   '6': cons('foobar', [])
 * })
 *
 * @since 2.0.0
 */

exports.groupBy = RNEA.groupBy;
/**
 * @since 2.0.0
 */

exports.last = RNEA.last;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/lib/NonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.2.0
 */

exports.init = RNEA.init;
/**
 * @since 2.0.0
 */

exports.sort = RNEA.sort;
/**
 * @since 2.0.0
 */

exports.insertAt = RNEA.insertAt;
/**
 * @since 2.0.0
 */

exports.updateAt = RNEA.updateAt;
/**
 * @since 2.0.0
 */

exports.modifyAt = RNEA.modifyAt;
/**
 * @since 2.0.0
 */

function copy(nea) {
  var l = nea.length;
  var as = Array(l);

  for (var i = 0; i < l; i++) {
    as[i] = nea[i];
  }

  return as;
}

exports.copy = copy;

function filter(predicate) {
  return RNEA.filter(predicate);
}

exports.filter = filter;
/**
 * @since 2.0.0
 */

exports.filterWithIndex = RNEA.filterWithIndex;
/**
 * @since 2.0.0
 */

exports.of = RNEA.of;

function concat(fx, fy) {
  return RNEA.concat(fx, fy);
}

exports.concat = concat;
/**
 * @since 2.5.0
 */

exports.fold = RNEA.fold;
/**
 * @since 2.5.1
 */

exports.zipWith = RNEA.zipWith;
/**
 * @since 2.5.1
 */

exports.zip = RNEA.zip;
/**
 * @since 2.5.1
 */

exports.unzip = RNEA.unzip;
/**
 * @since 2.0.0
 */

exports.nonEmptyArray = {
  URI: exports.URI,
  map: RNEA.readonlyNonEmptyArray.map,
  mapWithIndex: RNEA.readonlyNonEmptyArray.mapWithIndex,
  of: exports.of,
  ap: RNEA.readonlyNonEmptyArray.ap,
  chain: RNEA.readonlyNonEmptyArray.chain,
  extend: RNEA.readonlyNonEmptyArray.extend,
  extract: exports.head,
  reduce: RNEA.readonlyNonEmptyArray.reduce,
  foldMap: RNEA.readonlyNonEmptyArray.foldMap,
  reduceRight: RNEA.readonlyNonEmptyArray.reduceRight,
  traverse: RNEA.readonlyNonEmptyArray.traverse,
  sequence: RNEA.readonlyNonEmptyArray.sequence,
  reduceWithIndex: RNEA.readonlyNonEmptyArray.reduceWithIndex,
  foldMapWithIndex: RNEA.readonlyNonEmptyArray.foldMapWithIndex,
  reduceRightWithIndex: RNEA.readonlyNonEmptyArray.reduceRightWithIndex,
  traverseWithIndex: RNEA.readonlyNonEmptyArray.traverseWithIndex,
  alt: RNEA.readonlyNonEmptyArray.alt
};

var _a = pipeable_1.pipeable(exports.nonEmptyArray),
    ap = _a.ap,
    apFirst = _a.apFirst,
    apSecond = _a.apSecond,
    chain = _a.chain,
    chainFirst = _a.chainFirst,
    duplicate = _a.duplicate,
    extend = _a.extend,
    flatten = _a.flatten,
    map = _a.map,
    mapWithIndex = _a.mapWithIndex,
    reduce = _a.reduce,
    reduceRight = _a.reduceRight,
    reduceRightWithIndex = _a.reduceRightWithIndex,
    reduceWithIndex = _a.reduceWithIndex;

exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.duplicate = duplicate;
exports.extend = extend;
exports.flatten = flatten;
exports.map = map;
exports.mapWithIndex = mapWithIndex;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reduceRightWithIndex = reduceRightWithIndex;
exports.reduceWithIndex = reduceWithIndex;
var foldMapWithIndex = RNEA.foldMapWithIndex;
exports.foldMapWithIndex = foldMapWithIndex;
var foldMap = RNEA.foldMap;
exports.foldMap = foldMap;

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separate = exports.compact = exports.reduceRight = exports.reduce = exports.partitionMap = exports.partition = exports.foldMap = exports.filterMap = exports.filter = exports.record = exports.elem = exports.some = exports.every = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.empty = exports.lookup = exports.getMonoid = exports.getEq = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.hasOwnProperty = exports.insertAt = exports.toUnfoldable = exports.toArray = exports.collect = exports.keys = exports.isEmpty = exports.size = exports.getShow = exports.URI = void 0;

var pipeable_1 = __webpack_require__(560);

var RR = __webpack_require__(603);
/**
 * @since 2.0.0
 */


exports.URI = 'Record';
/**
 * @since 2.0.0
 */

exports.getShow = RR.getShow;
/**
 * Calculate the number of key/value pairs in a record
 *
 * @since 2.0.0
 */

exports.size = RR.size;
/**
 * Test whether a record is empty
 *
 * @since 2.0.0
 */

exports.isEmpty = RR.isEmpty;
/**
 * @since 2.0.0
 */

exports.keys = RR.keys;
/**
 * Map a record into an array
 *
 * @example
 * import {collect} from 'fp-ts/lib/Record'
 *
 * const x: { a: string, b: boolean } = { a: 'foo', b: false }
 * assert.deepStrictEqual(
 *   collect((key, val) => ({key: key, value: val}))(x),
 *   [{key: 'a', value: 'foo'}, {key: 'b', value: false}]
 * )
 *
 * @since 2.0.0
 */

exports.collect = RR.collect;
/**
 * @since 2.0.0
 */

exports.toArray = RR.toReadonlyArray;

function toUnfoldable(U) {
  return RR.toUnfoldable(U);
}

exports.toUnfoldable = toUnfoldable;

function insertAt(k, a) {
  return RR.insertAt(k, a);
}

exports.insertAt = insertAt;
/**
 * @since 2.0.0
 */

exports.hasOwnProperty = RR.hasOwnProperty;

function deleteAt(k) {
  return RR.deleteAt(k);
}

exports.deleteAt = deleteAt;
/**
 * @since 2.0.0
 */

exports.updateAt = RR.updateAt;
/**
 * @since 2.0.0
 */

exports.modifyAt = RR.modifyAt;

function pop(k) {
  return RR.pop(k);
}

exports.pop = pop;
/**
 * Test whether one record contains all of the keys and values contained in another record
 *
 * @since 2.0.0
 */

exports.isSubrecord = RR.isSubrecord;

function getEq(E) {
  return RR.getEq(E);
}

exports.getEq = getEq;

function getMonoid(S) {
  return RR.getMonoid(S);
}

exports.getMonoid = getMonoid;
/**
 * Lookup the value for a key in a record
 *
 * @since 2.0.0
 */

exports.lookup = RR.lookup;
/**
 * @since 2.0.0
 */

exports.empty = {};

function mapWithIndex(f) {
  return RR.mapWithIndex(f);
}

exports.mapWithIndex = mapWithIndex;

function map(f) {
  return RR.map(f);
}

exports.map = map;

function reduceWithIndex(b, f) {
  return RR.reduceWithIndex(b, f);
}

exports.reduceWithIndex = reduceWithIndex;

function foldMapWithIndex(M) {
  return RR.foldMapWithIndex(M);
}

exports.foldMapWithIndex = foldMapWithIndex;

function reduceRightWithIndex(b, f) {
  return RR.reduceRightWithIndex(b, f);
}

exports.reduceRightWithIndex = reduceRightWithIndex;
/**
 * Create a record with one key/value pair
 *
 * @since 2.0.0
 */

exports.singleton = RR.singleton;

function traverseWithIndex(F) {
  return RR.traverseWithIndex(F);
}

exports.traverseWithIndex = traverseWithIndex;

function traverse(F) {
  return RR.traverse(F);
}

exports.traverse = traverse;

function sequence(F) {
  return RR.sequence(F);
}

exports.sequence = sequence;

function partitionMapWithIndex(f) {
  return RR.partitionMapWithIndex(f);
}

exports.partitionMapWithIndex = partitionMapWithIndex;

function partitionWithIndex(predicateWithIndex) {
  return RR.partitionWithIndex(predicateWithIndex);
}

exports.partitionWithIndex = partitionWithIndex;

function filterMapWithIndex(f) {
  return RR.filterMapWithIndex(f);
}

exports.filterMapWithIndex = filterMapWithIndex;

function filterWithIndex(predicateWithIndex) {
  return RR.filterWithIndex(predicateWithIndex);
}

exports.filterWithIndex = filterWithIndex;

function fromFoldable(M, F) {
  return RR.fromFoldable(M, F);
}

exports.fromFoldable = fromFoldable;

function fromFoldableMap(M, F) {
  return RR.fromFoldableMap(M, F);
}

exports.fromFoldableMap = fromFoldableMap;
/**
 * @since 2.0.0
 */

exports.every = RR.every;
/**
 * @since 2.0.0
 */

exports.some = RR.some;
/**
 * @since 2.0.0
 */

exports.elem = RR.elem;
/**
 * @since 2.0.0
 */

exports.record = {
  URI: exports.URI,
  map: RR.readonlyRecord.map,
  reduce: RR.readonlyRecord.reduce,
  foldMap: RR.readonlyRecord.foldMap,
  reduceRight: RR.readonlyRecord.reduceRight,
  traverse: RR.readonlyRecord.traverse,
  sequence: sequence,
  compact: RR.readonlyRecord.compact,
  separate: RR.readonlyRecord.separate,
  filter: RR.readonlyRecord.filter,
  filterMap: RR.readonlyRecord.filterMap,
  partition: RR.readonlyRecord.partition,
  partitionMap: RR.readonlyRecord.partitionMap,
  wither: RR.readonlyRecord.wither,
  wilt: RR.readonlyRecord.wilt,
  mapWithIndex: RR.readonlyRecord.mapWithIndex,
  reduceWithIndex: RR.readonlyRecord.reduceWithIndex,
  foldMapWithIndex: RR.readonlyRecord.foldMapWithIndex,
  reduceRightWithIndex: RR.readonlyRecord.reduceRightWithIndex,
  traverseWithIndex: RR.readonlyRecord.traverseWithIndex,
  partitionMapWithIndex: RR.readonlyRecord.partitionMapWithIndex,
  partitionWithIndex: RR.readonlyRecord.partitionWithIndex,
  filterMapWithIndex: RR.readonlyRecord.filterMapWithIndex,
  filterWithIndex: RR.readonlyRecord.filterWithIndex
};

var _a = pipeable_1.pipeable(exports.record),
    filter = _a.filter,
    filterMap = _a.filterMap,
    foldMap = _a.foldMap,
    partition = _a.partition,
    partitionMap = _a.partitionMap,
    reduce = _a.reduce,
    reduceRight = _a.reduceRight,
    compact = _a.compact,
    separate = _a.separate;

exports.filter = filter;
exports.filterMap = filterMap;
exports.foldMap = foldMap;
exports.partition = partition;
exports.partitionMap = partitionMap;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.compact = compact;
exports.separate = separate;

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _t = function t(r, i) {
    return (_t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, r) {
      t.__proto__ = r;
    } || function (t, r) {
      for (var i in r) {
        r.hasOwnProperty(i) && (t[i] = r[i]);
      }
    })(r, i);
  };

  return function (r, i) {
    function n() {
      this.constructor = r;
    }

    _t(r, i), r.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var HashMapObject_1 = __webpack_require__(569),
    StringUtils_1 = __webpack_require__(559),
    ArrayUtils_1 = __webpack_require__(561),
    ValidationManager_1 = __webpack_require__(568),
    EncodingUtils_1 = __webpack_require__(578),
    JavaPropertiesObject = function (t) {
  function r(r) {
    void 0 === r && (r = "");
    var i = t.call(this) || this;
    if (!StringUtils_1.StringUtils.isString(r)) throw new Error("value must be a string");
    if ("" === r) return i;
    if (r.length < 2 || "=" === r.substr(0, 1) || r.indexOf("=") < 0 && r.indexOf(":") < 0) throw new Error("invalid properties format");

    for (var n = "", e = "", s = !1, a = 0, o = StringUtils_1.StringUtils.getLines(r, [/\s+/g, / *#.*| *!.*/g]); a < o.length; a++) {
      var l = o[a];
      if (l = StringUtils_1.StringUtils.trimLeft(l), s) e += EncodingUtils_1.EncodingUtils.unicodeEscapedCharsToUtf8(l);else {
        var g = StringUtils_1.StringUtils.replace(l, ["\\=", "\\:"], "xx"),
            c = Math.min((g + "=").indexOf("="), (g + ":").indexOf(":"));
        "\\" === (n = l.substring(0, c).trim()).substr(n.length - 1, 1) && (n += " "), n = StringUtils_1.StringUtils.replace(n, ["\\\\", "\\ ", "\\#", "\\!", "\\=", "\\:"], ["\\", " ", "#", "!", "=", ":"]), e = StringUtils_1.StringUtils.trimLeft(l.substring(c + 1, l.length));
      }
      "\\" == (e = StringUtils_1.StringUtils.replace(e, ["\\\\", "\\ ", "\\r\\n", "\\n", "\\t"], ["\\u005C", " ", "\r\n", "\n", "\t"])).substr(e.length - 1) ? (e = e.substring(0, e.length - 1), s = !0) : (s = !1, e = EncodingUtils_1.EncodingUtils.unicodeEscapedCharsToUtf8(e)), i._data.hasOwnProperty(n) || i._keys.push(n), i._data[n] = e;
    }

    return i._length = i._keys.length, i;
  }

  return __extends(r, t), r.isJavaProperties = function (t) {
    try {
      return new r(t).length() >= 0;
    } catch (i) {
      try {
        return null != t && t instanceof r;
      } catch (t) {
        return !1;
      }
    }
  }, r.prototype.isEqualTo = function (t, i) {
    void 0 === i && (i = !1);
    var n = null;

    try {
      n = new r(t);
    } catch (i) {
      try {
        t instanceof r && (n = t);
      } catch (t) {}
    }

    if (null == n) throw new Error("properties does not contain valid java properties data");
    var e = this.getKeys(),
        s = n.getKeys();
    if (e.length != s.length || i && !ArrayUtils_1.ArrayUtils.isEqualTo(e, s)) return !1;

    for (var a = new ValidationManager_1.ValidationManager(), o = 0, l = e; o < l.length; o++) {
      var g = l[o];
      if (!i && !n.isKey(g)) return !1;
      if (!a.isEqualTo(this.get(g), n.get(g))) return !1;
    }

    return !0;
  }, r.prototype.toString = function () {
    for (var t = [], r = this.getKeys(), i = r.length, n = 0; n < i; n++) {
      var e = StringUtils_1.StringUtils.replace(r[n], ["\\", " ", "#", "!", "=", ":"], ["\\\\", "\\ ", "\\#", "\\!", "\\=", "\\:"]),
          s = StringUtils_1.StringUtils.replace(this.get(r[n]), ["\\", " ", "\r\n", "\n", "\t"], ["\\\\", "\\ ", "\\r\\n", "\\n", "\\t"]);
      t.push(e + "=" + EncodingUtils_1.EncodingUtils.utf8ToUnicodeEscapedChars(s));
    }

    return t.join("\r\n");
  }, r;
}(HashMapObject_1.HashMapObject);

exports.JavaPropertiesObject = JavaPropertiesObject;

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _e = function e(t, r) {
    return (_e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var r in t) {
        t.hasOwnProperty(r) && (e[r] = t[r]);
      }
    })(t, r);
  };

  return function (t, r) {
    function n() {
      this.constructor = t;
    }

    _e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var HTTPManagerBaseRequest_1 = __webpack_require__(570),
    HTTPManagerGetRequest = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    return t.parameters = {}, t;
  }

  return __extends(t, e), t;
}(HTTPManagerBaseRequest_1.HTTPManagerBaseRequest);

exports.HTTPManagerGetRequest = HTTPManagerGetRequest;

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StringUtils_1 = __webpack_require__(559),
    EncodingUtils = function () {
  function t() {}

  return t.unicodeEscapedCharsToUtf8 = function (t) {
    if (StringUtils_1.StringUtils.isString(t)) return t.replace(/\\u([\d\w]{4})/gi, function (t, i) {
      return String.fromCharCode(parseInt(i, 16));
    });
    throw new Error("Specified value must be a string");
  }, t.utf8ToUnicodeEscapedChars = function (t) {
    if (!StringUtils_1.StringUtils.isString(t)) throw new Error("Specified value must be a string");
    return StringUtils_1.StringUtils.isEmpty(t) ? t : t.replace(/[^\0-~]/g, function (t) {
      return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
    });
  }, t;
}();

exports.EncodingUtils = EncodingUtils;

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StringUtils_1 = __webpack_require__(559),
    ArrayUtils_1 = __webpack_require__(561),
    NumericUtils_1 = __webpack_require__(563),
    HashMapObject_1 = __webpack_require__(569),
    TableObject = function () {
  function t(t, r) {
    if (void 0 === t && (t = 0), void 0 === r && (r = 0), this._columnsCount = 0, this._rowsCount = 0, !(NumericUtils_1.NumericUtils.isInteger(t) && t >= 0)) throw new Error("constructor rows must be a positive integer");
    if (this._rowsCount = t, NumericUtils_1.NumericUtils.isInteger(r) && r >= 0) this._columnsCount = Number(r);else {
      if (!ArrayUtils_1.ArrayUtils.isArray(r)) throw new Error("constructor columns must be an integer or an array of strings");
      this._columnsCount = r.length, this.setColumnNames(r);
    }
    if (this._columnsCount + this._rowsCount > 0 && (0 == this._columnsCount || 0 == this._rowsCount)) throw new Error("constructor columns cannot be empty if rows are positive and vice versa");
    this._columnNames = new HashMapObject_1.HashMapObject(), this._cells = new HashMapObject_1.HashMapObject();
  }

  return t.prototype.setColumnName = function (t, r) {
    var e = this._validateColumnIndex(t);

    if (!StringUtils_1.StringUtils.isString(r)) throw new Error("name must be a string");
    return this._columnNames.set(String(e), r), !0;
  }, t.prototype.setColumnNames = function (t) {
    if (this._columnsCount == t.length) {
      if (ArrayUtils_1.ArrayUtils.hasDuplicateElements(t)) throw new Error("array must not contain duplicate elements");
      var r = t.length;
      this._columnNames = new HashMapObject_1.HashMapObject();

      for (var e = 0; e < r; e++) {
        if (!StringUtils_1.StringUtils.isString(t[e])) throw new Error("List of names must be an array of strings");

        this._columnNames.set(String(e), t[e]);
      }

      return t;
    }

    throw new Error("List of names must match number of columns");
  }, t.prototype.getColumnNames = function () {
    for (var t = [], r = 0; r < this._columnsCount; r++) {
      var e = String(r);
      t.push(this._columnNames.isKey(e) ? this._columnNames.get(e) : "");
    }

    return t;
  }, t.prototype.getColumnName = function (t) {
    var r = String(this._validateColumnIndex(t));
    return this._columnNames.isKey(r) ? this._columnNames.get(r) : "";
  }, t.prototype.getColumnIndex = function (t) {
    if (!StringUtils_1.StringUtils.isString(t) || "" === t) throw new Error("value must be a non empty string");

    for (var r = 0, e = this._columnNames.getKeys(); r < e.length; r++) {
      var n = e[r];
      if (this._columnNames.get(n) === t) return Number(n);
    }

    throw new Error("provided column name does not exist");
  }, t.prototype.getColumn = function (t) {
    for (var r = [], e = this._validateColumnIndex(t), n = 0; n < this._rowsCount; n++) {
      r.push(this.getCell(n, e));
    }

    return r;
  }, t.prototype.addColumns = function (t, r, e) {
    if (void 0 === r && (r = []), void 0 === e && (e = -1), !ArrayUtils_1.ArrayUtils.isArray(r)) throw new Error("names must be an array");
    if (!NumericUtils_1.NumericUtils.isInteger(t) || t <= 0) throw new Error("number must be a positive integer");
    if (!NumericUtils_1.NumericUtils.isInteger(e) || e < -1 || e >= this._columnsCount) throw new Error("at must be a valid column index");
    if (e >= 0) for (var n = this._columnsCount - 1; n >= e; n--) {
      this._columnNames.isKey(String(n)) && this._columnNames.rename(String(n), String(n + t));

      for (var s = 0; s < this._rowsCount; s++) {
        var i = String(s) + "-" + String(n);
        this._cells.isKey(i) && this._cells.rename(i, String(s) + "-" + String(n + t));
      }
    }
    var o = r.length;

    if (o > 0) {
      if (o != t) throw new Error("names length must be the same as number");
      var u = e < 0 ? this._columnsCount : e;

      for (n = 0; n < o; n++) {
        this._columnNames.set(String(u + n), r[n]);
      }
    }

    return this._columnsCount += t, !0;
  }, t.prototype.setColumn = function (t, r) {
    var e = r.length;
    if (e <= 0) throw new Error("data must not be empty");
    if (this._rowsCount != e) throw new Error("data length and number of rows must match");

    for (var n = this._validateColumnIndex(t), s = 0; s < this._rowsCount; s++) {
      this.setCell(s, n, r[s]);
    }
  }, t.prototype.removeColumn = function (t) {
    var r = this._validateColumnIndex(t);

    this._columnNames.isKey(String(r)) && this._columnNames.remove(String(r));

    for (var e = 0; e < this._rowsCount; e++) {
      var n = String(e) + "-" + String(r);
      this._cells.isKey(n) && this._cells.remove(n);
    }

    for (e = r + 1; e < this._columnsCount; e++) {
      this._columnNames.isKey(String(e)) && this._columnNames.rename(String(e), String(e - 1));

      for (var s = 0; s < this._rowsCount; s++) {
        n = String(s) + "-" + String(e);
        this._cells.isKey(n) && this._cells.rename(n, String(s) + "-" + String(e - 1));
      }
    }

    this._columnsCount--, this._columnsCount <= 0 && (this._rowsCount = 0);
  }, t.prototype.getCell = function (t, r) {
    var e = this._validateRowIndex(t) + "-" + this._validateColumnIndex(r);

    return this._cells.isKey(e) ? this._cells.get(e) : null;
  }, t.prototype.setCell = function (t, r, e) {
    var n = this._validateRowIndex(t),
        s = this._validateColumnIndex(r);

    return this._cells.set(n + "-" + s, e);
  }, t.prototype.getRow = function (t) {
    for (var r = [], e = this._validateRowIndex(t), n = 0; n < this._columnsCount; n++) {
      r.push(this.getCell(e, n));
    }

    return r;
  }, t.prototype.addRows = function (t, r) {
    if (void 0 === r && (r = -1), !NumericUtils_1.NumericUtils.isInteger(t) || t <= 0) throw new Error("number must be a positive integer");
    if (!NumericUtils_1.NumericUtils.isInteger(r) || r < -1 || r >= this._rowsCount) throw new Error("at must be a valid row index");
    if (r >= 0) for (var e = this._rowsCount - 1; e >= r; e--) {
      for (var n = 0; n < this._columnsCount; n++) {
        var s = String(e) + "-" + String(n);
        this._cells.isKey(s) && this._cells.rename(s, e + t + "-" + String(n));
      }
    }
    return this._rowsCount += t, !0;
  }, t.prototype.setRow = function (t, r) {
    var e = r.length;
    if (e <= 0) throw new Error("data must not be empty");
    if (this._columnsCount != e) throw new Error("data length and number of columns must match");

    for (var n = this._validateRowIndex(t), s = 0; s < this._columnsCount; s++) {
      this.setCell(n, s, r[s]);
    }
  }, t.prototype.removeRow = function (t) {
    for (var r = this._validateRowIndex(t), e = 0; e < this._columnsCount; e++) {
      var n = String(r) + "-" + String(e);
      this._cells.isKey(n) && this._cells.remove(n);
    }

    for (e = r + 1; e < this._rowsCount; e++) {
      for (var s = 0; s < this._columnsCount; s++) {
        n = String(e) + "-" + String(s);
        this._cells.isKey(n) && this._cells.rename(n, String(e - 1) + "-" + String(s));
      }
    }

    this._rowsCount--, this._rowsCount <= 0 && (this._columnsCount = 0);
  }, t.prototype.countRows = function () {
    return this._rowsCount;
  }, t.prototype.countColumns = function () {
    return this._columnsCount;
  }, t.prototype.countCells = function () {
    return this._rowsCount * this._columnsCount;
  }, t.prototype._validateColumnIndex = function (t) {
    var r = NumericUtils_1.NumericUtils.isInteger(t) ? Number(t) : -1,
        e = this._columnNames.getValues(),
        n = this._columnNames.getKeys(),
        s = e.length;

    if (StringUtils_1.StringUtils.isString(t)) for (var i = 0; i < s; i++) {
      if (t === e[i]) {
        r = Number(n[i]);
        break;
      }
    }
    if (r < 0 || r >= this._columnsCount) throw new Error("Invalid column value");
    return r;
  }, t.prototype._validateRowIndex = function (t) {
    var r = NumericUtils_1.NumericUtils.isInteger(t) ? t : -1;
    if (r < 0 || r >= this._rowsCount) throw new Error("Invalid row value");
    return r;
  }, t;
}();

exports.TableObject = TableObject;

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separate = exports.compact = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.partitionMap = exports.partition = exports.mapWithIndex = exports.map = exports.foldMapWithIndex = exports.foldMap = exports.filterWithIndex = exports.filterMapWithIndex = exports.filterMap = exports.filter = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.alt = exports.readonlyArray = exports.of = exports.difference = exports.intersection = exports.union = exports.comprehension = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = exports.uniq = exports.elem = exports.rotate = exports.unzip = exports.zip = exports.zipWith = exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.unsafeDeleteAt = exports.updateAt = exports.unsafeUpdateAt = exports.insertAt = exports.unsafeInsertAt = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.snoc = exports.cons = exports.lookup = exports.isOutOfBound = exports.isNonEmpty = exports.isEmpty = exports.scanRight = exports.scanLeft = exports.foldRight = exports.foldLeft = exports.flatten = exports.replicate = exports.range = exports.makeBy = exports.empty = exports.getOrd = exports.getEq = exports.getMonoid = exports.getShow = exports.toArray = exports.fromArray = exports.URI = void 0;

var function_1 = __webpack_require__(564);

var Option_1 = __webpack_require__(566);

var Ord_1 = __webpack_require__(581);

var pipeable_1 = __webpack_require__(560);
/**
 * @since 2.5.0
 */


exports.URI = 'ReadonlyArray';
/**
 * @since 2.5.0
 */
// tslint:disable-next-line: readonly-array

function fromArray(as) {
  var l = as.length;

  if (l === 0) {
    return exports.empty;
  }

  var ras = Array(l);

  for (var i = 0; i < l; i++) {
    ras[i] = as[i];
  }

  return ras;
}

exports.fromArray = fromArray;
/**
 * @since 2.5.0
 */
// tslint:disable-next-line: readonly-array

function toArray(ras) {
  var l = ras.length;
  var as = Array(l);

  for (var i = 0; i < l; i++) {
    as[i] = ras[i];
  }

  return as;
}

exports.toArray = toArray;
/**
 * @since 2.5.0
 */

function getShow(S) {
  return {
    show: function show(as) {
      return "[" + as.map(S.show).join(', ') + "]";
    }
  };
}

exports.getShow = getShow;

var concat = function concat(x, y) {
  var lenx = x.length;

  if (lenx === 0) {
    return y;
  }

  var leny = y.length;

  if (leny === 0) {
    return x;
  }

  var r = Array(lenx + leny);

  for (var i = 0; i < lenx; i++) {
    r[i] = x[i];
  }

  for (var i = 0; i < leny; i++) {
    r[i + lenx] = y[i];
  }

  return r;
};
/**
 * Returns a `Monoid` for `ReadonlyArray<A>`
 *
 * @example
 * import { getMonoid } from 'fp-ts/lib/ReadonlyArray'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @since 2.5.0
 */


function getMonoid() {
  return {
    concat: concat,
    empty: exports.empty
  };
}

exports.getMonoid = getMonoid;
/**
 * Derives an `Eq` over the `ReadonlyArray` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import { eqString } from 'fp-ts/lib/Eq'
 * import { getEq } from 'fp-ts/lib/ReadonlyArray'
 *
 * const E = getEq(eqString)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @since 2.5.0
 */

function getEq(E) {
  return {
    equals: function equals(xs, ys) {
      return xs === ys || xs.length === ys.length && xs.every(function (x, i) {
        return E.equals(x, ys[i]);
      });
    }
  };
}

exports.getEq = getEq;
/**
 * Derives an `Ord` over the `ReadonlyArray` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/lib/ReadonlyArray'
 * import { ordString } from 'fp-ts/lib/Ord'
 *
 * const O = getOrd(ordString)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 *
 * @since 2.5.0
 */

function getOrd(O) {
  return Ord_1.fromCompare(function (a, b) {
    var aLen = a.length;
    var bLen = b.length;
    var len = Math.min(aLen, bLen);

    for (var i = 0; i < len; i++) {
      var ordering = O.compare(a[i], b[i]);

      if (ordering !== 0) {
        return ordering;
      }
    }

    return Ord_1.ordNumber.compare(aLen, bLen);
  });
}

exports.getOrd = getOrd;
/**
 * An empty array
 *
 * @since 2.5.0
 */

exports.empty = [];
/**
 * Return a list of length `n` with element `i` initialized with `f(i)`
 *
 * @example
 * import { makeBy } from 'fp-ts/lib/ReadonlyArray'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @since 2.5.0
 */

function makeBy(n, f) {
  // tslint:disable-next-line: readonly-array
  var r = [];

  for (var i = 0; i < n; i++) {
    r.push(f(i));
  }

  return r;
}

exports.makeBy = makeBy;
/**
 * Create an array containing a range of integers, including both endpoints
 *
 * @example
 * import { range } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @since 2.5.0
 */

function range(start, end) {
  return makeBy(end - start + 1, function (i) {
    return start + i;
  });
}

exports.range = range;
/**
 * Create an array containing a value repeated the specified number of times
 *
 * @example
 * import { replicate } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @since 2.5.0
 */

function replicate(n, a) {
  return makeBy(n, function () {
    return a;
  });
}

exports.replicate = replicate;
/**
 * Removes one level of nesting
 *
 * @example
 * import { flatten } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(flatten([[1], [2], [3]]), [1, 2, 3])
 *
 * @since 2.5.0
 */

function flatten(mma) {
  var rLen = 0;
  var len = mma.length;

  for (var i = 0; i < len; i++) {
    rLen += mma[i].length;
  }

  var r = Array(rLen);
  var start = 0;

  for (var i = 0; i < len; i++) {
    var arr = mma[i];
    var l = arr.length;

    for (var j = 0; j < l; j++) {
      r[j + start] = arr[j];
    }

    start += l;
  }

  return r;
}

exports.flatten = flatten;
/**
 * Break an array into its first element and remaining elements
 *
 * @example
 * import { foldLeft } from 'fp-ts/lib/ReadonlyArray'
 *
 * const len: <A>(as: ReadonlyArray<A>) => number = foldLeft(() => 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @since 2.5.0
 */

function foldLeft(onNil, onCons) {
  return function (as) {
    return isEmpty(as) ? onNil() : onCons(as[0], as.slice(1));
  };
}

exports.foldLeft = foldLeft;
/**
 * Break an array into its initial elements and the last element
 *
 * @since 2.5.0
 */

function foldRight(onNil, onCons) {
  return function (as) {
    return isEmpty(as) ? onNil() : onCons(as.slice(0, as.length - 1), as[as.length - 1]);
  };
}

exports.foldRight = foldRight;
/**
 * Same as `reduce` but it carries over the intermediate steps
 *
 * ```ts
 * import { scanLeft } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 * ```
 *
 * @since 2.5.0
 */

function scanLeft(b, f) {
  return function (as) {
    var l = as.length; // tslint:disable-next-line: readonly-array

    var r = new Array(l + 1);
    r[0] = b;

    for (var i = 0; i < l; i++) {
      r[i + 1] = f(r[i], as[i]);
    }

    return r;
  };
}

exports.scanLeft = scanLeft;
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @since 2.5.0
 */

function scanRight(b, f) {
  return function (as) {
    var l = as.length; // tslint:disable-next-line: readonly-array

    var r = new Array(l + 1);
    r[l] = b;

    for (var i = l - 1; i >= 0; i--) {
      r[i] = f(as[i], r[i + 1]);
    }

    return r;
  };
}

exports.scanRight = scanRight;
/**
 * Test whether an array is empty
 *
 * @example
 * import { isEmpty } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @since 2.5.0
 */

function isEmpty(as) {
  return as.length === 0;
}

exports.isEmpty = isEmpty;
/**
 * Test whether an array is non empty narrowing down the type to `NonEmptyReadonlyArray<A>`
 *
 * @since 2.5.0
 */

function isNonEmpty(as) {
  return as.length > 0;
}

exports.isNonEmpty = isNonEmpty;
/**
 * Test whether an array contains a particular index
 *
 * @since 2.5.0
 */

function isOutOfBound(i, as) {
  return i < 0 || i >= as.length;
}

exports.isOutOfBound = isOutOfBound;
/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @example
 * import { lookup } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(lookup(1, [1, 2, 3]), some(2))
 * assert.deepStrictEqual(lookup(3, [1, 2, 3]), none)
 *
 * @since 2.5.0
 */

function lookup(i, as) {
  return isOutOfBound(i, as) ? Option_1.none : Option_1.some(as[i]);
}

exports.lookup = lookup;
/**
 * Attaches an element to the front of an array, creating a new non empty array
 *
 * @example
 * import { cons } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(cons(0, [1, 2, 3]), [0, 1, 2, 3])
 *
 * @since 2.5.0
 */

function cons(head, tail) {
  var len = tail.length;
  var r = Array(len + 1);

  for (var i = 0; i < len; i++) {
    r[i + 1] = tail[i];
  }

  r[0] = head;
  return r;
}

exports.cons = cons;
/**
 * Append an element to the end of an array, creating a new non empty array
 *
 * @example
 * import { snoc } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(snoc([1, 2, 3], 4), [1, 2, 3, 4])
 *
 * @since 2.5.0
 */

function snoc(init, end) {
  var len = init.length;
  var r = Array(len + 1);

  for (var i = 0; i < len; i++) {
    r[i] = init[i];
  }

  r[len] = end;
  return r;
}

exports.snoc = snoc;
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @since 2.5.0
 */

function head(as) {
  return isEmpty(as) ? Option_1.none : Option_1.some(as[0]);
}

exports.head = head;
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @since 2.5.0
 */

function last(as) {
  return lookup(as.length - 1, as);
}

exports.last = last;
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @since 2.5.0
 */

function tail(as) {
  return isEmpty(as) ? Option_1.none : Option_1.some(as.slice(1));
}

exports.tail = tail;
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @since 2.5.0
 */

function init(as) {
  var len = as.length;
  return len === 0 ? Option_1.none : Option_1.some(as.slice(0, len - 1));
}

exports.init = init;
/**
 * Keep only a number of elements from the start of an array, creating a new array.
 * `n` must be a natural number
 *
 * @example
 * import { takeLeft } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(takeLeft(2)([1, 2, 3]), [1, 2])
 *
 * @since 2.5.0
 */

function takeLeft(n) {
  return function (as) {
    return as.slice(0, n);
  };
}

exports.takeLeft = takeLeft;
/**
 * Keep only a number of elements from the end of an array, creating a new array.
 * `n` must be a natural number
 *
 * @example
 * import { takeRight } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(takeRight(2)([1, 2, 3, 4, 5]), [4, 5])
 *
 * @since 2.5.0
 */

function takeRight(n) {
  return function (as) {
    return n === 0 ? exports.empty : as.slice(-n);
  };
}

exports.takeRight = takeRight;

function takeLeftWhile(predicate) {
  return function (as) {
    var i = spanIndexUncurry(as, predicate);
    var init = Array(i);

    for (var j = 0; j < i; j++) {
      init[j] = as[j];
    }

    return init;
  };
}

exports.takeLeftWhile = takeLeftWhile;

var spanIndexUncurry = function spanIndexUncurry(as, predicate) {
  var l = as.length;
  var i = 0;

  for (; i < l; i++) {
    if (!predicate(as[i])) {
      break;
    }
  }

  return i;
};

function spanLeft(predicate) {
  return function (as) {
    var i = spanIndexUncurry(as, predicate);
    var init = Array(i);

    for (var j = 0; j < i; j++) {
      init[j] = as[j];
    }

    var l = as.length;
    var rest = Array(l - i);

    for (var j = i; j < l; j++) {
      rest[j - i] = as[j];
    }

    return {
      init: init,
      rest: rest
    };
  };
}

exports.spanLeft = spanLeft;
/**
 * Drop a number of elements from the start of an array, creating a new array
 *
 * @example
 * import { dropLeft } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(dropLeft(2)([1, 2, 3]), [3])
 *
 * @since 2.5.0
 */

function dropLeft(n) {
  return function (as) {
    return as.slice(n, as.length);
  };
}

exports.dropLeft = dropLeft;
/**
 * Drop a number of elements from the end of an array, creating a new array
 *
 * @example
 * import { dropRight } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(dropRight(2)([1, 2, 3, 4, 5]), [1, 2, 3])
 *
 * @since 2.5.0
 */

function dropRight(n) {
  return function (as) {
    return as.slice(0, as.length - n);
  };
}

exports.dropRight = dropRight;
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @since 2.5.0
 */

function dropLeftWhile(predicate) {
  return function (as) {
    var i = spanIndexUncurry(as, predicate);
    var l = as.length;
    var rest = Array(l - i);

    for (var j = i; j < l; j++) {
      rest[j - i] = as[j];
    }

    return rest;
  };
}

exports.dropLeftWhile = dropLeftWhile;
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.5.0
 */

function findIndex(predicate) {
  return function (as) {
    var len = as.length;

    for (var i = 0; i < len; i++) {
      if (predicate(as[i])) {
        return Option_1.some(i);
      }
    }

    return Option_1.none;
  };
}

exports.findIndex = findIndex;

function findFirst(predicate) {
  return function (as) {
    var len = as.length;

    for (var i = 0; i < len; i++) {
      if (predicate(as[i])) {
        return Option_1.some(as[i]);
      }
    }

    return Option_1.none;
  };
}

exports.findFirst = findFirst;
/**
 * Find the first element returned by an option based selector function
 *
 * @example
 * import { findFirstMap } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface Person {
 *   name: string
 *   age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Mary'))
 *
 * @since 2.5.0
 */

function findFirstMap(f) {
  return function (as) {
    var len = as.length;

    for (var i = 0; i < len; i++) {
      var v = f(as[i]);

      if (Option_1.isSome(v)) {
        return v;
      }
    }

    return Option_1.none;
  };
}

exports.findFirstMap = findFirstMap;

function findLast(predicate) {
  return function (as) {
    var len = as.length;

    for (var i = len - 1; i >= 0; i--) {
      if (predicate(as[i])) {
        return Option_1.some(as[i]);
      }
    }

    return Option_1.none;
  };
}

exports.findLast = findLast;
/**
 * Find the last element returned by an option based selector function
 *
 * @example
 * import { findLastMap } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface Person {
 *   name: string
 *   age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Joey'))
 *
 * @since 2.5.0
 */

function findLastMap(f) {
  return function (as) {
    var len = as.length;

    for (var i = len - 1; i >= 0; i--) {
      var v = f(as[i]);

      if (Option_1.isSome(v)) {
        return v;
      }
    }

    return Option_1.none;
  };
}

exports.findLastMap = findLastMap;
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface X {
 *   a: number
 *   b: number
 * }
 * const xs: ReadonlyArray<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { a: number }) => x.a === 4)(xs), none)
 *
 *
 * @since 2.5.0
 */

function findLastIndex(predicate) {
  return function (as) {
    var len = as.length;

    for (var i = len - 1; i >= 0; i--) {
      if (predicate(as[i])) {
        return Option_1.some(i);
      }
    }

    return Option_1.none;
  };
}

exports.findLastIndex = findLastIndex;
/**
 * @since 2.5.0
 */

function unsafeInsertAt(i, a, as) {
  // tslint:disable-next-line: readonly-array
  var xs = __spreadArrays(as);

  xs.splice(i, 0, a);
  return xs;
}

exports.unsafeInsertAt = unsafeInsertAt;
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/lib/ReadonlyArray'
 * import { some } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.5.0
 */

function insertAt(i, a) {
  return function (as) {
    return i < 0 || i > as.length ? Option_1.none : Option_1.some(unsafeInsertAt(i, a, as));
  };
}

exports.insertAt = insertAt;
/**
 * @since 2.5.0
 */

function unsafeUpdateAt(i, a, as) {
  if (as[i] === a) {
    return as;
  } else {
    // tslint:disable-next-line: readonly-array
    var xs = __spreadArrays(as);

    xs[i] = a;
    return xs;
  }
}

exports.unsafeUpdateAt = unsafeUpdateAt;
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.5.0
 */

function updateAt(i, a) {
  return function (as) {
    return isOutOfBound(i, as) ? Option_1.none : Option_1.some(unsafeUpdateAt(i, a, as));
  };
}

exports.updateAt = updateAt;
/**
 * @since 2.5.0
 */

function unsafeDeleteAt(i, as) {
  // tslint:disable-next-line: readonly-array
  var xs = __spreadArrays(as);

  xs.splice(i, 1);
  return xs;
}

exports.unsafeDeleteAt = unsafeDeleteAt;
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.5.0
 */

function deleteAt(i) {
  return function (as) {
    return isOutOfBound(i, as) ? Option_1.none : Option_1.some(unsafeDeleteAt(i, as));
  };
}

exports.deleteAt = deleteAt;
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/lib/ReadonlyArray'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.5.0
 */

function modifyAt(i, f) {
  return function (as) {
    return isOutOfBound(i, as) ? Option_1.none : Option_1.some(unsafeUpdateAt(i, f(as[i]), as));
  };
}

exports.modifyAt = modifyAt;
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @since 2.5.0
 */

function reverse(as) {
  return __spreadArrays(as).reverse();
}

exports.reverse = reverse;
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/lib/ReadonlyArray'
 * import { right, left } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @since 2.5.0
 */

function rights(as) {
  // tslint:disable-next-line: readonly-array
  var r = [];
  var len = as.length;

  for (var i = 0; i < len; i++) {
    var a = as[i];

    if (a._tag === 'Right') {
      r.push(a.right);
    }
  }

  return r;
}

exports.rights = rights;
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/lib/ReadonlyArray'
 * import { left, right } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @since 2.5.0
 */

function lefts(as) {
  // tslint:disable-next-line: readonly-array
  var r = [];
  var len = as.length;

  for (var i = 0; i < len; i++) {
    var a = as[i];

    if (a._tag === 'Left') {
      r.push(a.left);
    }
  }

  return r;
}

exports.lefts = lefts;
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/lib/ReadonlyArray'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * assert.deepStrictEqual(sort(ordNumber)([3, 2, 1]), [1, 2, 3])
 *
 * @since 2.5.0
 */

function sort(O) {
  return function (as) {
    return __spreadArrays(as).sort(O.compare);
  };
}

exports.sort = sort;
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @since 2.5.0
 */

function zipWith(fa, fb, f) {
  // tslint:disable-next-line: readonly-array
  var fc = [];
  var len = Math.min(fa.length, fb.length);

  for (var i = 0; i < len; i++) {
    fc[i] = f(fa[i], fb[i]);
  }

  return fc;
}

exports.zipWith = zipWith;
/**
 * Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the
 * longer array are discarded
 *
 * @example
 * import { zip } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(zip([1, 2, 3], ['a', 'b', 'c', 'd']), [[1, 'a'], [2, 'b'], [3, 'c']])
 *
 * @since 2.5.0
 */

function zip(fa, fb) {
  return zipWith(fa, fb, function (a, b) {
    return [a, b];
  });
}

exports.zip = zip;
/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @since 2.5.0
 */

function unzip(as) {
  // tslint:disable-next-line: readonly-array
  var fa = []; // tslint:disable-next-line: readonly-array

  var fb = [];

  for (var i = 0; i < as.length; i++) {
    fa[i] = as[i][0];
    fb[i] = as[i][1];
  }

  return [fa, fb];
}

exports.unzip = unzip;
/**
 * Rotate an array to the right by `n` steps
 *
 * @example
 * import { rotate } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @since 2.5.0
 */

function rotate(n) {
  return function (as) {
    var len = as.length;

    if (n === 0 || len <= 1 || len === Math.abs(n)) {
      return as;
    } else if (n < 0) {
      return rotate(len + n)(as);
    } else {
      return as.slice(-n).concat(as.slice(0, len - n));
    }
  };
}

exports.rotate = rotate;
/**
 * Test if a value is a member of an array. Takes a `Eq<A>` as a single
 * argument which returns the function to use to search for a value of type `A` in
 * an array of type `ReadonlyArray<A>`.
 *
 * @example
 * import { elem } from 'fp-ts/lib/ReadonlyArray'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.strictEqual(elem(eqNumber)(1, [1, 2, 3]), true)
 * assert.strictEqual(elem(eqNumber)(4, [1, 2, 3]), false)
 *
 * @since 2.5.0
 */

function elem(E) {
  return function (a, as) {
    var predicate = function predicate(element) {
      return E.equals(element, a);
    };

    var i = 0;
    var len = as.length;

    for (; i < len; i++) {
      if (predicate(as[i])) {
        return true;
      }
    }

    return false;
  };
}

exports.elem = elem;
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/lib/ReadonlyArray'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(uniq(eqNumber)([1, 2, 1]), [1, 2])
 *
 * @since 2.5.0
 */

function uniq(E) {
  var elemS = elem(E);
  return function (as) {
    // tslint:disable-next-line: readonly-array
    var r = [];
    var len = as.length;
    var i = 0;

    for (; i < len; i++) {
      var a = as[i];

      if (!elemS(a, r)) {
        r.push(a);
      }
    }

    return len === r.length ? as : r;
  };
}

exports.uniq = uniq;
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/lib/ReadonlyArray'
 * import { ord, ordString, ordNumber } from 'fp-ts/lib/Ord'
 *
 * interface Person {
 *   name: string
 *   age: number
 * }
 * const byName = ord.contramap(ordString, (p: Person) => p.name)
 * const byAge = ord.contramap(ordNumber, (p: Person) => p.age)
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @since 2.5.0
 */

function sortBy(ords) {
  var M = Ord_1.getMonoid();
  return sort(ords.reduce(M.concat, M.empty));
}

exports.sortBy = sortBy;
/**
 * A useful recursion pattern for processing an array to produce a new array, often used for "chopping" up the input
 * array. Typically chop is called with some function that will consume an initial prefix of the array and produce a
 * value and the rest of the array.
 *
 * @example
 * import { Eq, eqNumber } from 'fp-ts/lib/Eq'
 * import { chop, spanLeft } from 'fp-ts/lib/ReadonlyArray'
 *
 * const group = <A>(S: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>) => {
 *   return chop(as => {
 *     const { init, rest } = spanLeft((a: A) => S.equals(a, as[0]))(as)
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(eqNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @since 2.5.0
 */

function chop(f) {
  return function (as) {
    // tslint:disable-next-line: readonly-array
    var result = [];
    var cs = as;

    while (isNonEmpty(cs)) {
      var _a = f(cs),
          b = _a[0],
          c = _a[1];

      result.push(b);
      cs = c;
    }

    return result;
  };
}

exports.chop = chop;
/**
 * Splits an array into two pieces, the first piece has `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @since 2.5.0
 */

function splitAt(n) {
  return function (as) {
    return [as.slice(0, n), as.slice(n)];
  };
}

exports.splitAt = splitAt;
/**
 * Splits an array into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the array. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `xs`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/lib/ReadonlyArray'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 *
 * @since 2.5.0
 */

function chunksOf(n) {
  var f = chop(splitAt(n));
  return function (as) {
    return as.length === 0 ? exports.empty : isOutOfBound(n - 1, as) ? [as] : f(as);
  };
}

exports.chunksOf = chunksOf;

function comprehension(input, f, g) {
  if (g === void 0) {
    g = function g() {
      return true;
    };
  }

  var go = function go(scope, input) {
    if (input.length === 0) {
      return g.apply(void 0, scope) ? [f.apply(void 0, scope)] : exports.empty;
    } else {
      return exports.readonlyArray.chain(input[0], function (x) {
        return go(snoc(scope, x), input.slice(1));
      });
    }
  };

  return go(exports.empty, input);
}

exports.comprehension = comprehension;
/**
 * Creates an array of unique values, in order, from all given arrays using a `Eq` for equality comparisons
 *
 * @example
 * import { union } from 'fp-ts/lib/ReadonlyArray'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(union(eqNumber)([1, 2], [2, 3]), [1, 2, 3])
 *
 * @since 2.5.0
 */

function union(E) {
  var elemE = elem(E);
  return function (xs, ys) {
    return concat(xs, ys.filter(function (a) {
      return !elemE(a, xs);
    }));
  };
}

exports.union = union;
/**
 * Creates an array of unique values that are included in all given arrays using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { intersection } from 'fp-ts/lib/ReadonlyArray'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(intersection(eqNumber)([1, 2], [2, 3]), [2])
 *
 * @since 2.5.0
 */

function intersection(E) {
  var elemE = elem(E);
  return function (xs, ys) {
    return xs.filter(function (a) {
      return elemE(a, ys);
    });
  };
}

exports.intersection = intersection;
/**
 * Creates an array of array values not included in the other given array using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { difference } from 'fp-ts/lib/ReadonlyArray'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(difference(eqNumber)([1, 2], [2, 3]), [1])
 *
 * @since 2.5.0
 */

function difference(E) {
  var elemE = elem(E);
  return function (xs, ys) {
    return xs.filter(function (a) {
      return !elemE(a, ys);
    });
  };
}

exports.difference = difference;
/**
 * @since 2.5.0
 */

exports.of = function (a) {
  return [a];
};
/**
 * @since 2.5.0
 */


exports.readonlyArray = {
  URI: exports.URI,
  map: function map(fa, f) {
    return fa.map(function (a) {
      return f(a);
    });
  },
  mapWithIndex: function mapWithIndex(fa, f) {
    return fa.map(function (a, i) {
      return f(i, a);
    });
  },
  compact: function compact(as) {
    return exports.readonlyArray.filterMap(as, function_1.identity);
  },
  separate: function separate(fa) {
    // tslint:disable-next-line: readonly-array
    var left = []; // tslint:disable-next-line: readonly-array

    var right = [];

    for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
      var e = fa_1[_i];

      if (e._tag === 'Left') {
        left.push(e.left);
      } else {
        right.push(e.right);
      }
    }

    return {
      left: left,
      right: right
    };
  },
  filter: function filter(as, predicate) {
    return as.filter(predicate);
  },
  filterMap: function filterMap(as, f) {
    return exports.readonlyArray.filterMapWithIndex(as, function (_, a) {
      return f(a);
    });
  },
  partition: function partition(fa, predicate) {
    return exports.readonlyArray.partitionWithIndex(fa, function (_, a) {
      return predicate(a);
    });
  },
  partitionMap: function partitionMap(fa, f) {
    return exports.readonlyArray.partitionMapWithIndex(fa, function (_, a) {
      return f(a);
    });
  },
  of: exports.of,
  ap: function ap(fab, fa) {
    return flatten(exports.readonlyArray.map(fab, function (f) {
      return exports.readonlyArray.map(fa, f);
    }));
  },
  chain: function chain(fa, f) {
    var resLen = 0;
    var l = fa.length;
    var temp = new Array(l);

    for (var i = 0; i < l; i++) {
      var e = fa[i];
      var arr = f(e);
      resLen += arr.length;
      temp[i] = arr;
    }

    var r = Array(resLen);
    var start = 0;

    for (var i = 0; i < l; i++) {
      var arr = temp[i];
      var l_1 = arr.length;

      for (var j = 0; j < l_1; j++) {
        r[j + start] = arr[j];
      }

      start += l_1;
    }

    return r;
  },
  reduce: function reduce(fa, b, f) {
    return exports.readonlyArray.reduceWithIndex(fa, b, function (_, b, a) {
      return f(b, a);
    });
  },
  foldMap: function foldMap(M) {
    var foldMapWithIndexM = exports.readonlyArray.foldMapWithIndex(M);
    return function (fa, f) {
      return foldMapWithIndexM(fa, function (_, a) {
        return f(a);
      });
    };
  },
  reduceRight: function reduceRight(fa, b, f) {
    return exports.readonlyArray.reduceRightWithIndex(fa, b, function (_, a, b) {
      return f(a, b);
    });
  },
  unfold: function unfold(b, f) {
    // tslint:disable-next-line: readonly-array
    var ret = [];
    var bb = b;

    while (true) {
      var mt = f(bb);

      if (Option_1.isSome(mt)) {
        var _a = mt.value,
            a = _a[0],
            b_1 = _a[1];
        ret.push(a);
        bb = b_1;
      } else {
        break;
      }
    }

    return ret;
  },
  traverse: function traverse(F) {
    var traverseWithIndexF = exports.readonlyArray.traverseWithIndex(F);
    return function (ta, f) {
      return traverseWithIndexF(ta, function (_, a) {
        return f(a);
      });
    };
  },
  sequence: function sequence(F) {
    return function (ta) {
      return exports.readonlyArray.reduce(ta, F.of(exports.readonlyArray.zero()), function (fas, fa) {
        return F.ap(F.map(fas, function (as) {
          return function (a) {
            return snoc(as, a);
          };
        }), fa);
      });
    };
  },
  zero: function zero() {
    return exports.empty;
  },
  alt: function alt(fx, f) {
    return concat(fx, f());
  },
  extend: function extend(fa, f) {
    return fa.map(function (_, i, as) {
      return f(as.slice(i));
    });
  },
  wither: function wither(F) {
    var traverseF = exports.readonlyArray.traverse(F);
    return function (wa, f) {
      return F.map(traverseF(wa, f), exports.readonlyArray.compact);
    };
  },
  wilt: function wilt(F) {
    var traverseF = exports.readonlyArray.traverse(F);
    return function (wa, f) {
      return F.map(traverseF(wa, f), exports.readonlyArray.separate);
    };
  },
  reduceWithIndex: function reduceWithIndex(fa, b, f) {
    var l = fa.length;
    var r = b;

    for (var i = 0; i < l; i++) {
      r = f(i, r, fa[i]);
    }

    return r;
  },
  foldMapWithIndex: function foldMapWithIndex(M) {
    return function (fa, f) {
      return fa.reduce(function (b, a, i) {
        return M.concat(b, f(i, a));
      }, M.empty);
    };
  },
  reduceRightWithIndex: function reduceRightWithIndex(fa, b, f) {
    return fa.reduceRight(function (b, a, i) {
      return f(i, a, b);
    }, b);
  },
  traverseWithIndex: function traverseWithIndex(F) {
    return function (ta, f) {
      return exports.readonlyArray.reduceWithIndex(ta, F.of(exports.readonlyArray.zero()), function (i, fbs, a) {
        return F.ap(F.map(fbs, function (bs) {
          return function (b) {
            return snoc(bs, b);
          };
        }), f(i, a));
      });
    };
  },
  partitionMapWithIndex: function partitionMapWithIndex(fa, f) {
    // tslint:disable-next-line: readonly-array
    var left = []; // tslint:disable-next-line: readonly-array

    var right = [];

    for (var i = 0; i < fa.length; i++) {
      var e = f(i, fa[i]);

      if (e._tag === 'Left') {
        left.push(e.left);
      } else {
        right.push(e.right);
      }
    }

    return {
      left: left,
      right: right
    };
  },
  partitionWithIndex: function partitionWithIndex(fa, predicateWithIndex) {
    // tslint:disable-next-line: readonly-array
    var left = []; // tslint:disable-next-line: readonly-array

    var right = [];

    for (var i = 0; i < fa.length; i++) {
      var a = fa[i];

      if (predicateWithIndex(i, a)) {
        right.push(a);
      } else {
        left.push(a);
      }
    }

    return {
      left: left,
      right: right
    };
  },
  filterMapWithIndex: function filterMapWithIndex(fa, f) {
    // tslint:disable-next-line: readonly-array
    var result = [];

    for (var i = 0; i < fa.length; i++) {
      var optionB = f(i, fa[i]);

      if (Option_1.isSome(optionB)) {
        result.push(optionB.value);
      }
    }

    return result;
  },
  filterWithIndex: function filterWithIndex(fa, predicateWithIndex) {
    return fa.filter(function (a, i) {
      return predicateWithIndex(i, a);
    });
  }
};

var _a = pipeable_1.pipeable(exports.readonlyArray),
    alt = _a.alt,
    ap = _a.ap,
    apFirst = _a.apFirst,
    apSecond = _a.apSecond,
    chain = _a.chain,
    chainFirst = _a.chainFirst,
    duplicate = _a.duplicate,
    extend = _a.extend,
    filter = _a.filter,
    filterMap = _a.filterMap,
    filterMapWithIndex = _a.filterMapWithIndex,
    filterWithIndex = _a.filterWithIndex,
    foldMap = _a.foldMap,
    foldMapWithIndex = _a.foldMapWithIndex,
    map = _a.map,
    mapWithIndex = _a.mapWithIndex,
    partition = _a.partition,
    partitionMap = _a.partitionMap,
    partitionMapWithIndex = _a.partitionMapWithIndex,
    partitionWithIndex = _a.partitionWithIndex,
    reduce = _a.reduce,
    reduceRight = _a.reduceRight,
    reduceRightWithIndex = _a.reduceRightWithIndex,
    reduceWithIndex = _a.reduceWithIndex,
    compact = _a.compact,
    separate = _a.separate;

exports.alt = alt;
exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.duplicate = duplicate;
exports.extend = extend;
exports.filter = filter;
exports.filterMap = filterMap;
exports.filterMapWithIndex = filterMapWithIndex;
exports.filterWithIndex = filterWithIndex;
exports.foldMap = foldMap;
exports.foldMapWithIndex = foldMapWithIndex;
exports.map = map;
exports.mapWithIndex = mapWithIndex;
exports.partition = partition;
exports.partitionMap = partitionMap;
exports.partitionMapWithIndex = partitionMapWithIndex;
exports.partitionWithIndex = partitionWithIndex;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reduceRightWithIndex = reduceRightWithIndex;
exports.reduceWithIndex = reduceWithIndex;
exports.compact = compact;
exports.separate = separate;

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ordDate = exports.contramap = exports.ord = exports.getDualOrd = exports.getTupleOrd = exports.getMonoid = exports.getSemigroup = exports.fromCompare = exports.between = exports.clamp = exports.max = exports.min = exports.geq = exports.leq = exports.gt = exports.lt = exports.ordBoolean = exports.ordNumber = exports.ordString = exports.URI = void 0;
/**
 * The `Ord` type class represents types which support comparisons with a _total order_.
 *
 * Instances should satisfy the laws of total orderings:
 *
 * 1. Reflexivity: `S.compare(a, a) <= 0`
 * 2. Antisymmetry: if `S.compare(a, b) <= 0` and `S.compare(b, a) <= 0` then `a <-> b`
 * 3. Transitivity: if `S.compare(a, b) <= 0` and `S.compare(b, c) <= 0` then `S.compare(a, c) <= 0`
 *
 * @since 2.0.0
 */

var Ordering_1 = __webpack_require__(597);

var pipeable_1 = __webpack_require__(560);
/**
 * @since 2.0.0
 */


exports.URI = 'Ord'; // default compare for primitive types

var compare = function compare(x, y) {
  return x < y ? -1 : x > y ? 1 : 0;
};

function strictEqual(a, b) {
  return a === b;
}
/**
 * @since 2.0.0
 */


exports.ordString = {
  equals: strictEqual,
  compare: compare
};
/**
 * @since 2.0.0
 */

exports.ordNumber = {
  equals: strictEqual,
  compare: compare
};
/**
 * @since 2.0.0
 */

exports.ordBoolean = {
  equals: strictEqual,
  compare: compare
};
/**
 * Test whether one value is _strictly less than_ another
 *
 * @since 2.0.0
 */

function lt(O) {
  return function (x, y) {
    return O.compare(x, y) === -1;
  };
}

exports.lt = lt;
/**
 * Test whether one value is _strictly greater than_ another
 *
 * @since 2.0.0
 */

function gt(O) {
  return function (x, y) {
    return O.compare(x, y) === 1;
  };
}

exports.gt = gt;
/**
 * Test whether one value is _non-strictly less than_ another
 *
 * @since 2.0.0
 */

function leq(O) {
  return function (x, y) {
    return O.compare(x, y) !== 1;
  };
}

exports.leq = leq;
/**
 * Test whether one value is _non-strictly greater than_ another
 *
 * @since 2.0.0
 */

function geq(O) {
  return function (x, y) {
    return O.compare(x, y) !== -1;
  };
}

exports.geq = geq;
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */

function min(O) {
  return function (x, y) {
    return O.compare(x, y) === 1 ? y : x;
  };
}

exports.min = min;
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */

function max(O) {
  return function (x, y) {
    return O.compare(x, y) === -1 ? y : x;
  };
}

exports.max = max;
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */

function clamp(O) {
  var minO = min(O);
  var maxO = max(O);
  return function (low, hi) {
    return function (x) {
      return maxO(minO(x, hi), low);
    };
  };
}

exports.clamp = clamp;
/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 *
 * @since 2.0.0
 */

function between(O) {
  var lessThanO = lt(O);
  var greaterThanO = gt(O);
  return function (low, hi) {
    return function (x) {
      return lessThanO(x, low) || greaterThanO(x, hi) ? false : true;
    };
  };
}

exports.between = between;
/**
 * @since 2.0.0
 */

function fromCompare(compare) {
  var optimizedCompare = function optimizedCompare(x, y) {
    return x === y ? 0 : compare(x, y);
  };

  return {
    equals: function equals(x, y) {
      return optimizedCompare(x, y) === 0;
    },
    compare: optimizedCompare
  };
}

exports.fromCompare = fromCompare;
var S = {
  concat: function concat(x, y) {
    return fromCompare(function (a, b) {
      return Ordering_1.monoidOrdering.concat(x.compare(a, b), y.compare(a, b));
    });
  }
};
/**
 * Use `getMonoid` instead
 *
 * @since 2.0.0
 * @deprecated
 */

function getSemigroup() {
  return S;
}

exports.getSemigroup = getSemigroup;
var M = {
  // tslint:disable-next-line: deprecation
  concat: getSemigroup().concat,
  empty: fromCompare(function () {
    return 0;
  })
};
/**
 * Returns a `Monoid` such that:
 *
 * - its `concat(ord1, ord2)` operation will order first by `ord1`, and then by `ord2`
 * - its `empty` value is an `Ord` that always considers compared elements equal
 *
 * @example
 * import { sort } from 'fp-ts/lib/Array'
 * import { contramap, getDualOrd, getMonoid, ordBoolean, ordNumber, ordString } from 'fp-ts/lib/Ord'
 * import { pipe } from 'fp-ts/lib/pipeable'
 * import { fold } from 'fp-ts/lib/Monoid'
 *
 * interface User {
 *   id: number
 *   name: string
 *   age: number
 *   rememberMe: boolean
 * }
 *
 * const byName = pipe(
 *   ordString,
 *   contramap((p: User) => p.name)
 * )
 *
 * const byAge = pipe(
 *   ordNumber,
 *   contramap((p: User) => p.age)
 * )
 *
 * const byRememberMe = pipe(
 *   ordBoolean,
 *   contramap((p: User) => p.rememberMe)
 * )
 *
 * const M = getMonoid<User>()
 *
 * const users: Array<User> = [
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true }
 * ]
 *
 * // sort by name, then by age, then by `rememberMe`
 * const O1 = fold(M)([byName, byAge, byRememberMe])
 * assert.deepStrictEqual(sort(O1)(users), [
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * // now `rememberMe = true` first, then by name, then by age
 * const O2 = fold(M)([getDualOrd(byRememberMe), byName, byAge])
 * assert.deepStrictEqual(sort(O2)(users), [
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * @since 2.4.0
 */

function getMonoid() {
  return M;
}

exports.getMonoid = getMonoid;
/**
 * Given a tuple of `Ord`s returns an `Ord` for the tuple
 *
 * @example
 * import { getTupleOrd, ordString, ordNumber, ordBoolean } from 'fp-ts/lib/Ord'
 *
 * const O = getTupleOrd(ordString, ordNumber, ordBoolean)
 * assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)
 *
 * @since 2.0.0
 */

function getTupleOrd() {
  var ords = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    ords[_i] = arguments[_i];
  }

  var len = ords.length;
  return fromCompare(function (x, y) {
    var i = 0;

    for (; i < len - 1; i++) {
      var r = ords[i].compare(x[i], y[i]);

      if (r !== 0) {
        return r;
      }
    }

    return ords[i].compare(x[i], y[i]);
  });
}

exports.getTupleOrd = getTupleOrd;
/**
 * @since 2.0.0
 */

function getDualOrd(O) {
  return fromCompare(function (x, y) {
    return O.compare(y, x);
  });
}

exports.getDualOrd = getDualOrd;
/**
 * @since 2.0.0
 */

exports.ord = {
  URI: exports.URI,
  contramap: function contramap(fa, f) {
    return fromCompare(function (x, y) {
      return fa.compare(f(x), f(y));
    });
  }
};
var contramap = pipeable_1.pipeable(exports.ord).contramap;
exports.contramap = contramap;
/**
 * @since 2.0.0
 */

exports.ordDate = exports.ord.contramap(exports.ordNumber, function (date) {
  return date.valueOf();
});

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tailRec = void 0;
/**
 * @since 2.0.0
 */

function tailRec(a, f) {
  var v = f(a);

  while (v._tag === 'Left') {
    v = f(v.left);
  }

  return v.right;
}

exports.tailRec = tailRec;

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var BrowserManager_1 = __webpack_require__(585);

exports.BrowserManager = BrowserManager_1.BrowserManager;

var HTTPManager_1 = __webpack_require__(586);

exports.HTTPManager = HTTPManager_1.HTTPManager;

var HTTPManagerBaseRequest_1 = __webpack_require__(570);

exports.HTTPManagerBaseRequest = HTTPManagerBaseRequest_1.HTTPManagerBaseRequest;

var HTTPManagerGetRequest_1 = __webpack_require__(577);

exports.HTTPManagerGetRequest = HTTPManagerGetRequest_1.HTTPManagerGetRequest;

var HTTPManagerPostRequest_1 = __webpack_require__(587);

exports.HTTPManagerPostRequest = HTTPManagerPostRequest_1.HTTPManagerPostRequest;

var LocalizationManager_1 = __webpack_require__(588);

exports.LocalizationManager = LocalizationManager_1.LocalizationManager;

var ModelHistoryManager_1 = __webpack_require__(589);

exports.ModelHistoryManager = ModelHistoryManager_1.ModelHistoryManager;

var SerializationManager_1 = __webpack_require__(590);

exports.SerializationManager = SerializationManager_1.SerializationManager;

var ValidationManager_1 = __webpack_require__(568);

exports.ValidationManager = ValidationManager_1.ValidationManager;

var BaseStrictClass_1 = __webpack_require__(591);

exports.BaseStrictClass = BaseStrictClass_1.BaseStrictClass;

var CSVObject_1 = __webpack_require__(592);

exports.CSVObject = CSVObject_1.CSVObject;

var HashMapObject_1 = __webpack_require__(569);

exports.HashMapObject = HashMapObject_1.HashMapObject;

var JavaPropertiesObject_1 = __webpack_require__(575);

exports.JavaPropertiesObject = JavaPropertiesObject_1.JavaPropertiesObject;

var TableObject_1 = __webpack_require__(579);

exports.TableObject = TableObject_1.TableObject;

var ArrayUtils_1 = __webpack_require__(561);

exports.ArrayUtils = ArrayUtils_1.ArrayUtils;

var ConversionUtils_1 = __webpack_require__(593);

exports.ConversionUtils = ConversionUtils_1.ConversionUtils;

var EncodingUtils_1 = __webpack_require__(578);

exports.EncodingUtils = EncodingUtils_1.EncodingUtils;

var NumericUtils_1 = __webpack_require__(563);

exports.NumericUtils = NumericUtils_1.NumericUtils;

var ObjectUtils_1 = __webpack_require__(562);

exports.ObjectUtils = ObjectUtils_1.ObjectUtils;

var StringUtils_1 = __webpack_require__(559);

exports.StringUtils = StringUtils_1.StringUtils;

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StringUtils_1 = __webpack_require__(559),
    NumericUtils_1 = __webpack_require__(563),
    ArrayUtils_1 = __webpack_require__(561),
    BrowserManager = function () {
  function t() {}

  return t.prototype.getCurrentUrl = function () {
    return window.location.href;
  }, t.prototype.isDocumentLoaded = function () {
    return "complete" === document.readyState;
  }, t.prototype.isCookie = function (t) {
    return void 0 !== this.getCookie(t);
  }, t.prototype.setCookie = function (t, e, n, o, i, r) {
    if (void 0 === n && (n = ""), void 0 === o && (o = "/"), void 0 === i && (i = ""), void 0 === r && (r = !1), !StringUtils_1.StringUtils.isString(t) || StringUtils_1.StringUtils.isEmpty(t)) throw new Error("key must be defined");
    if (void 0 !== e && null !== e || (e = ""), !StringUtils_1.StringUtils.isString(e)) throw new Error("value must be a string");

    if (NumericUtils_1.NumericUtils.isNumeric(n)) {
      var a = n;
      (n = new Date()).setDate(n.getDate() + a);
    }

    var l = encodeURIComponent(t) + "=" + encodeURIComponent(e);
    return l += n ? "; expires=" + n.toUTCString() : "", l += o ? "; path=" + o : "", l += i ? "; domain=" + i : "", l += r ? "; secure" : "", document.cookie = l, !0;
  }, t.prototype.getCookie = function (t) {
    if (!StringUtils_1.StringUtils.isString(t) || StringUtils_1.StringUtils.isEmpty(t)) throw new Error("key must be defined");

    for (var e = document.cookie.split("; "), n = /\+/g, o = 0, i = e.length; o < i; o++) {
      var r = e[o].split("="),
          a = r.shift() || "";
      if (decodeURIComponent(a.replace(n, " ")) === t) return decodeURIComponent(r.join("=").replace(n, " "));
    }
  }, t.prototype.deleteCookie = function (t, e) {
    if (void 0 === e && (e = "/"), !StringUtils_1.StringUtils.isString(t) || StringUtils_1.StringUtils.isEmpty(t)) throw new Error("key must be defined");
    return void 0 !== this.getCookie(t) && (this.setCookie(t, "", -1, e), !0);
  }, t.prototype.reload = function () {
    location.reload();
  }, t.prototype.getPreferredLanguage = function () {
    var t = "";

    if (ArrayUtils_1.ArrayUtils.isArray(window.navigator.languages)) {
      for (var e = 0; e < window.navigator.languages.length; e++) {
        if (window.navigator.languages[e].length >= 2) {
          t = window.navigator.languages[e];
          break;
        }
      }
    } else t = (t = window.navigator.userLanguage || window.navigator.language).split(",")[0];

    return t.trim().substr(0, 2).toLowerCase();
  }, t.prototype.goToUrl = function (t, e, n) {
    if (void 0 === e && (e = !1), void 0 === n && (n = null), null == n) e ? window.open(t, "_blank") : window.location.href = t;else {
      for (var o = '<form action="' + t + '" method="POST" ' + (e ? 'target="_blank"' : "") + ' style="display:none;">', i = Object.getOwnPropertyNames(n), r = 0; r < i.length; r++) {
        o += '<input type="hidden" name="' + i[r] + '" value="' + n[i[r]] + '">';
      }

      o += "</form>";
      var a = document.createElement("form");
      a.innerHTML = o, document.getElementsByTagName("BODY")[0].appendChild(a), a.submit();
    }
  }, t.prototype.disableBackButton = function () {
    history.pushState(null, null, document.URL), window.addEventListener("popstate", this._onPopStatePreventBackButton);
  }, t.prototype._onPopStatePreventBackButton = function () {
    history.pushState(null, null, document.URL);
  }, t.prototype.enableBackButton = function () {
    window.removeEventListener("popstate", this._onPopStatePreventBackButton);
  }, t.prototype.disableScroll = function () {}, t.prototype.enableScroll = function () {}, t.prototype.getScrollPosition = function () {
    return [window.pageXOffset, window.pageYOffset];
  }, t.prototype.getWindowWidth = function () {
    return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth || -1;
  }, t.prototype.getWindowHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight || -1;
  }, t.prototype.getDocumentWidth = function () {
    return Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
  }, t.prototype.getDocumentHeight = function () {
    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  }, t.prototype.scrollTo = function (t, e, n) {
    void 0 === e && (e = 600), void 0 === n && (n = null);

    var o = function o(t) {
      return --t * t * t + 1;
    },
        i = window.pageXOffset,
        r = window.pageYOffset,
        a = "now" in window.performance ? performance.now() : new Date().getTime(),
        l = this.getDocumentWidth(),
        u = this.getDocumentHeight(),
        s = this.getWindowWidth(),
        d = this.getWindowHeight(),
        c = ArrayUtils_1.ArrayUtils.isArray(t) ? t[0] : t.offsetLeft,
        g = ArrayUtils_1.ArrayUtils.isArray(t) ? t[1] : t.offsetTop,
        m = i,
        p = r;

    if (l > s && (m = Math.round(l - c < s ? l - s : c)), u > d && (p = Math.round(u - g < d ? u - d : g)), "requestAnimationFrame" in window == !1) return window.scroll(m, p), void (n && n());
    !function t() {
      var l = "now" in window.performance ? performance.now() : new Date().getTime(),
          u = Math.min(1, (l - a) / e),
          s = Math.ceil(o(u) * (m - i) + i),
          d = Math.ceil(o(u) * (p - r) + r);
      window.scroll(s, d), Math.ceil(window.pageXOffset) !== m || Math.ceil(window.pageYOffset) !== p ? requestAnimationFrame(t) : null !== n && n();
    }();
  }, t;
}();

exports.BrowserManager = BrowserManager;

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StringUtils_1 = __webpack_require__(559),
    ObjectUtils_1 = __webpack_require__(562),
    ArrayUtils_1 = __webpack_require__(561),
    HashMapObject_1 = __webpack_require__(569),
    HTTPManagerGetRequest_1 = __webpack_require__(577),
    HTTPManagerBaseRequest_1 = __webpack_require__(570),
    HTTPManager = function () {
  function t(t) {
    if (void 0 === t && (t = !0), this.baseUrl = "", this.asynchronous = !0, this.timeout = 0, this.isOnlyHttps = !0, this.internetCheckLocations = ["https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", "https://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.8.3.js", "https://code.jquery.com/jquery-3.2.1.slim.min.js"], this._queues = [], this._globalPostParams = {}, "boolean" != typeof t) throw new Error("asynchronous is not boolean");
    this.asynchronous = t;
  }

  return t.prototype.setGlobalPostParam = function (t, e) {
    if (StringUtils_1.StringUtils.isEmpty(t) || StringUtils_1.StringUtils.isEmpty(e)) throw new Error("parameterName and value must be non empty strings");
    this._globalPostParams[t] = e;
  }, t.prototype.isGlobalPostParam = function (t) {
    if (StringUtils_1.StringUtils.isEmpty(t)) throw new Error("parameterName must be a non empty string");
    return Object.keys(this._globalPostParams).indexOf(t) >= 0;
  }, t.prototype.getGlobalPostParam = function (t) {
    if (!this.isGlobalPostParam(t)) throw new Error("parameterName does not exist: " + t);
    return this._globalPostParams[t];
  }, t.prototype.deleteGlobalPostParam = function (t) {
    "" !== this.getGlobalPostParam(t) && delete this._globalPostParams[t];
  }, t.prototype.createQueue = function (t) {
    if (StringUtils_1.StringUtils.isEmpty(t)) throw new Error("name must be a non empty string");

    for (var e = 0, r = this._queues; e < r.length; e++) {
      if (r[e].name === t) throw new Error("queue " + t + " already exists");
    }

    this._queues.push({
      name: t,
      isRunning: !1,
      pendingRequests: []
    });
  }, t.prototype.countQueues = function () {
    return this._queues.length;
  }, t.prototype.isQueueRunning = function (t) {
    if (StringUtils_1.StringUtils.isEmpty(t)) throw new Error("name must be a non empty string");

    for (var e = 0, r = this._queues; e < r.length; e++) {
      var n = r[e];
      if (n.name === t) return n.isRunning;
    }

    throw new Error("queue " + t + " does not exist");
  }, t.prototype.deleteQueue = function (t) {
    if (StringUtils_1.StringUtils.isEmpty(t)) throw new Error("name must be a non empty string");

    for (var e = 0; e < this._queues.length; e++) {
      if (this._queues[e].name === t) {
        if (this._queues[e].isRunning) throw new Error("queue " + t + " is currently running");
        return void this._queues.splice(e, 1);
      }
    }

    throw new Error("queue " + t + " does not exist");
  }, t.prototype.generateUrlQueryString = function (t) {
    var e = "",
        r = [],
        n = [];

    if (ObjectUtils_1.ObjectUtils.isObject(t) && ObjectUtils_1.ObjectUtils.getKeys(t).length > 0) {
      if (t instanceof HashMapObject_1.HashMapObject) r = t.getKeys(), n = t.getValues();else {
        r = Object.getOwnPropertyNames(t);

        for (var s = 0; s < r.length; s++) {
          n.push(t[r[s]]);
        }
      }

      for (s = 0; s < r.length; s++) {
        e += "&" + encodeURIComponent(r[s]) + "=" + encodeURIComponent(StringUtils_1.StringUtils.isString(n[s]) ? n[s] : JSON.stringify(n[s]));
      }

      return e.substring(1, e.length);
    }

    throw new Error("keyValuePairs must be a HashMapObject or a non empty Object");
  }, t.prototype.isInternetAvailable = function (t, e) {
    var r = this;
    if ("function" != typeof t || "function" != typeof e) throw new Error("params must be functions");
    if (this.internetCheckLocations.length <= 0) throw new Error("no check locations specified");

    var n = function n(s) {
      if (s.length <= 0) return e();
      var i = s.shift();
      if (!StringUtils_1.StringUtils.isUrl(i)) throw new Error("invalid check url : " + i);
      r.urlExists(String(i + "?r=" + StringUtils_1.StringUtils.generateRandom(15, 15)), t, function () {
        return n(s);
      });
    };

    !1 === navigator.onLine ? e() : n(this.internetCheckLocations.slice(0));
  }, t.prototype.urlExists = function (t, e, r) {
    if (!StringUtils_1.StringUtils.isString(t)) throw new Error("url must be a string");
    if ("function" != typeof e || "function" != typeof r) throw new Error("params must be functions");

    var n = this._composeUrl(this.baseUrl, t);

    if (StringUtils_1.StringUtils.isUrl(n)) {
      var s = new HTTPManagerGetRequest_1.HTTPManagerGetRequest(n);
      s.successCallback = function () {
        return e();
      }, s.errorCallback = function () {
        return r();
      }, this.execute(s);
    } else r();
  }, t.prototype.getUrlHeaders = function (e, r, n) {
    var s = this,
        i = this._composeUrl(this.baseUrl, e);

    if (!StringUtils_1.StringUtils.isString(i)) throw new Error("url must be a string");
    if ("function" != typeof r || "function" != typeof n) throw new Error("params must be functions");
    if (!StringUtils_1.StringUtils.isUrl(i)) throw new Error("invalid url " + i);
    var o = new XMLHttpRequest();
    this.timeout > 0 && (o.timeout = this.timeout), o.open("GET", i, this.asynchronous), o.onload = function () {
      return r(o.getAllResponseHeaders().split("\n"));
    }, o.onerror = function () {
      return n(o.statusText, o.status);
    }, o.ontimeout = function () {
      return n(s.timeout + t.ERROR_TIMEOUT, 408);
    }, this._executeXmlHttprequestSend(o, i);
  }, t.prototype.execute = function (e, r, n) {
    var s = this;
    void 0 === r && (r = null), void 0 === n && (n = null);

    var i = this._generateValidRequestsList(e);

    if (null !== r && !(r instanceof Function) || null !== n && !(n instanceof Function)) throw new Error("finishedCallback and progressCallback must be functions");

    for (var o = 0, a = !1, u = [], l = function l(t, e, _l, g, p) {
      var c = t.request,
          h = s._composeUrl(s.baseUrl, c.url),
          f = e;

      if (c.resultFormat === HTTPManagerBaseRequest_1.HTTPManagerBaseRequest.JSON) try {
        f = JSON.parse(e);
      } catch (t) {
        _l || (_l = !0, g = "Could not parse request result as a json string");
      }
      o++, u[t.index] = {
        url: h,
        response: f,
        isError: _l,
        errorMsg: g,
        code: p
      }, _l ? (a = !0, c.errorCallback(g, p, e)) : c.successCallback(f), c.finallyCallback(), null !== n && n(h, i.length), o >= i.length && null !== r && r(u, a);
    }, g = function g(e) {
      var r,
          n = {
        index: e,
        request: i[e]
      };
      if (!StringUtils_1.StringUtils.isString(i[e].url) || StringUtils_1.StringUtils.isEmpty(i[e].url)) throw new Error("url " + e + " must be a non empty string");

      try {
        r = new XMLHttpRequest();
      } catch (t) {
        throw new Error("Could not initialize XMLHttpRequest. If running node, it is not natively available. We recommend npm xhr2 library that emulates XMLHttpRequest on node apps (global.XMLHttpRequest = require('xhr2'))");
      }

      (i[e].timeout > 0 || p.timeout > 0) && (r.timeout = i[e].timeout > 0 ? i[e].timeout : p.timeout);

      var o = p._composeUrl(p.baseUrl, i[e].url),
          a = i[e] instanceof HTTPManagerGetRequest_1.HTTPManagerGetRequest ? "GET" : "POST";

      if (r.open(a, o, p.asynchronous), r.onload = function () {
        r.status >= 200 && r.status < 400 ? l(n, r.responseText, !1, "", r.status) : l(n, r.responseText, !0, r.statusText, r.status);
      }, r.onerror = function () {
        l(n, r.responseText, !0, r.statusText, r.status);
      }, r.ontimeout = function () {
        l(n, r.responseText, !0, s.timeout + t.ERROR_TIMEOUT, 408);
      }, "GET" === a && p._executeXmlHttprequestSend(r, o), "POST" === a || Object.keys(p._globalPostParams).length > 0) try {
        var u = "POST" === a ? i[e].parameters : {};
        if (!1 === i[e].ignoreGlobalPostParams) for (var g = 0, c = Object.keys(p._globalPostParams); g < c.length; g++) {
          var h = c[g];
          u instanceof HashMapObject_1.HashMapObject ? u.set(h, p._globalPostParams[h]) : u[h] = p._globalPostParams[h];
        }
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send(p.generateUrlQueryString(u));
      } catch (t) {
        p._executeXmlHttprequestSend(r, o);
      }
    }, p = this, c = 0; c < i.length; c++) {
      g(c);
    }
  }, t.prototype._executeXmlHttprequestSend = function (t, e) {
    try {
      t.send();
    } catch (t) {
      throw new Error("HTTPManager could not execute request to " + e + "\n" + t.toString());
    }
  }, t.prototype._generateValidRequestsList = function (t) {
    var e = [];

    if (ArrayUtils_1.ArrayUtils.isArray(t)) {
      if (t.length <= 0) throw new Error("No requests to execute");

      for (var r = 0, n = t; r < n.length; r++) {
        var s = n[r];
        StringUtils_1.StringUtils.isString(s) ? e.push(new HTTPManagerGetRequest_1.HTTPManagerGetRequest(s)) : e.push(s);
      }
    } else if (StringUtils_1.StringUtils.isString(t) && !StringUtils_1.StringUtils.isEmpty(t)) e = [new HTTPManagerGetRequest_1.HTTPManagerGetRequest(t)];else {
      if (!(t instanceof HTTPManagerBaseRequest_1.HTTPManagerBaseRequest)) throw new Error("Invalid requests value");
      e = [t];
    }

    return e;
  }, t.prototype.queue = function (t, e, r) {
    void 0 === r && (r = null);

    var n = this._generateValidRequestsList(t);

    if (null !== r && !(r instanceof Function)) throw new Error("finishedCallback and progressCallback must be functions");

    for (var s = 0, i = this._queues; s < i.length; s++) {
      var o = i[s];

      if (o.name === e) {
        for (var a = 0; a < n.length; a++) {
          o.pendingRequests.unshift(n[a]);
        }

        if (null !== r) {
          var u = new HTTPManagerGetRequest_1.HTTPManagerGetRequest("FINISHED_REQUEST_CALLBACK");
          u.finallyCallback = r, o.pendingRequests.unshift(u);
        }

        return void (this.isQueueRunning(e) || this._startQueue(e));
      }
    }

    throw new Error("queue " + e + " does not exist. Create it with createQueue()");
  }, t.prototype._startQueue = function (t) {
    for (var e = this, r = function r(t) {
      if (t.pendingRequests.length <= 0) t.isRunning = !1;else {
        if ("FINISHED_REQUEST_CALLBACK" === t.pendingRequests[t.pendingRequests.length - 1].url) {
          var n = t.pendingRequests.pop();
          t.pendingRequests.length <= 0 && (t.isRunning = !1), n.finallyCallback();
        }

        t.pendingRequests.length > 0 && (t.isRunning = !0, e.execute(t.pendingRequests.pop(), function () {
          return r(t);
        }));
      }
    }, n = 0, s = this._queues; n < s.length; n++) {
      var i = s[n];
      if (i.name === t) return void r(i);
    }
  }, t.prototype.loadResourcesFromList = function (t, e, r, n, s) {
    var i = this;
    if (void 0 === s && (s = null), !StringUtils_1.StringUtils.isString(t) || StringUtils_1.StringUtils.isEmpty(t)) throw new Error("urlToListOfResources must be a non empty string");
    if (!StringUtils_1.StringUtils.isString(e) || StringUtils_1.StringUtils.isEmpty(e)) throw new Error("baseUrl must be a non empty string");
    this.execute(t, function (o, a) {
      if (o[0].isError) return n(t, o[0].errorMsg, o[0].code);

      for (var u = [], l = StringUtils_1.StringUtils.getLines(o[0].response), g = 0, p = l; g < p.length; g++) {
        var c = p[g];
        u.push(StringUtils_1.StringUtils.formatPath(i._composeUrl(e, c), "/"));
      }

      i.execute(u, function (t, e) {
        for (var s = [], i = 0, o = t; i < o.length; i++) {
          var a = o[i];
          if (a.isError) return n(a.url, a.errorMsg, a.code);
          s.push(a.response);
        }

        r(l, s);
      }, s);
    });
  }, t.prototype._composeUrl = function (t, e) {
    var r = "";
    if (r = StringUtils_1.StringUtils.isEmpty(t) || "http:" === e.substr(0, 5) || "https:" === e.substr(0, 6) ? e : StringUtils_1.StringUtils.replace(StringUtils_1.StringUtils.formatPath(t + "/" + e, "/"), ["http:/", "https:/"], ["http://", "https://"], 1), this.isOnlyHttps && "http:" === r.substr(0, 5).toLowerCase()) throw new Error("Non secure http requests are forbidden. Set isOnlyHttps=false to allow " + r);
    return r;
  }, t.ERROR_TIMEOUT = " ms Timeout reached", t;
}();

exports.HTTPManager = HTTPManager;

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _e = function e(t, r) {
    return (_e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var r in t) {
        t.hasOwnProperty(r) && (e[r] = t[r]);
      }
    })(t, r);
  };

  return function (t, r) {
    function n() {
      this.constructor = t;
    }

    _e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var HTTPManagerBaseRequest_1 = __webpack_require__(570),
    HTTPManagerPostRequest = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    return t.parameters = {}, t;
  }

  return __extends(t, e), t;
}(HTTPManagerBaseRequest_1.HTTPManagerBaseRequest);

exports.HTTPManagerPostRequest = HTTPManagerPostRequest;

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StringUtils_1 = __webpack_require__(559),
    ArrayUtils_1 = __webpack_require__(561),
    JavaPropertiesObject_1 = __webpack_require__(575),
    LocalizationManager = function () {
  function t() {
    this.missingKeyFormat = "$exception", this.wildCardsFormat = "{N}", this.isBundleMandatory = !1, this._initialized = !1, this._locales = [], this._languages = [], this._activeBundle = "", this._activeLocation = "", this._definedLocations = [], this._loadedTranslations = {}, this._filesManager = null, this._httpManager = null;
  }

  return t.prototype.isInitialized = function () {
    return this._initialized;
  }, t.prototype.isLocaleLoaded = function (t) {
    return this._locales.indexOf(t) >= 0;
  }, t.prototype.isLanguageLoaded = function (t) {
    if (2 !== t.length) throw new Error("language must be a valid 2 digit value");
    return this._languages.indexOf(t) >= 0;
  }, t.prototype.initialize = function (t, i, e, r, a) {
    var n = this;
    if (void 0 === r && (r = null), void 0 === a && (a = null), t ? this._httpManager = t : this._filesManager = t, this._locales = [], this._languages = [], this._activeBundle = "", this._activeLocation = "", this._definedLocations = e, this._loadedTranslations = {}, !ArrayUtils_1.ArrayUtils.isArray(e) || e.length <= 0) throw new Error("Locations must be an array of objects");

    for (var o = 0, l = e; o < l.length; o++) {
      var s = l[o];
      if (!s.label || StringUtils_1.StringUtils.isEmpty(s.label) || !s.path || StringUtils_1.StringUtils.isEmpty(s.path) || !s.bundles || !ArrayUtils_1.ArrayUtils.isArray(s.bundles)) throw new Error("Invalid locations specified");
    }

    this._loadData(i, e.map(function (t) {
      return {
        label: t.label,
        bundles: t.bundles
      };
    }), function (t) {
      n._initialized = !0, null !== r && r(t);
    }, a);
  }, t.prototype.loadLocales = function (t, i, e) {
    if (void 0 === i && (i = null), void 0 === e && (e = null), !this._initialized) throw new Error("LocalizationManager not initialized. Call initialize() before loading more locales");

    this._loadData(t, this._definedLocations.map(function (t) {
      return {
        label: t.label,
        bundles: t.bundles
      };
    }), i, e);
  }, t.prototype.loadBundles = function (t, i, e, r) {
    if (void 0 === i && (i = ""), void 0 === e && (e = null), void 0 === r && (r = null), !ArrayUtils_1.ArrayUtils.isArray(t) || 0 === t.length) throw new Error("no bundles specified to load on " + i + " location");
    if (!this._initialized) throw new Error("LocalizationManager not initialized. Call initialize() before loading more bundles to a location");
    "" === i && (i = this._activeLocation), this._loadData(this._locales, [{
      label: i,
      bundles: t
    }], e, r);
  }, t.prototype._loadData = function (t, i, e, r) {
    if (void 0 === e && (e = null), void 0 === r && (r = null), !ArrayUtils_1.ArrayUtils.isArray(t) || t.length <= 0) throw new Error("no locales defined");

    for (var a = [], n = [], o = 0, l = i; o < l.length; o++) {
      for (var s = l[o], d = 0, h = s.bundles; d < h.length; d++) {
        for (var u = h[d], c = 0, g = t; c < g.length; c++) {
          for (var _ = g[c], f = !1, p = 0, y = this._definedLocations; p < y.length; p++) {
            var v = y[p];

            if (v.label === s.label) {
              f = !0, n.push({
                locale: _,
                bundle: u,
                location: s.label
              }), a.push(StringUtils_1.StringUtils.replace(v.path, ["$locale", "$bundle"], [_, u]));
              break;
            }
          }

          if (!f) throw new Error("Undefined location: " + s.label);
        }
      }
    }

    this._locales = this._locales.concat(t), this._locales = ArrayUtils_1.ArrayUtils.removeDuplicateElements(this._locales), this._languages = this._locales.map(function (t) {
      return t.substr(0, 2);
    }), "" === this._activeLocation && (this._activeLocation = i[i.length - 1].label), null !== this._filesManager || this._loadDataFromUrls(a, n, e, r);
  }, t.prototype._loadDataFromUrls = function (t, i, e, r) {
    var a = this;
    void 0 === e && (e = null), void 0 === r && (r = null);

    var n = function n(t) {
      void 0 === t && (t = []), i.length > 0 && (a._activeBundle = i[i.length - 1].bundle), null !== e && e(t);
    };

    t.length <= 0 ? n() : this._httpManager.execute(t, function (e, r) {
      for (var o = [], l = 0; l < e.length; l++) {
        if (e[l].isError) o.push({
          path: e[l].url,
          errorMsg: e[l].errorMsg,
          errorCode: e[l].code
        });else {
          var s = i[l].locale,
              d = i[l].bundle,
              h = i[l].location,
              u = StringUtils_1.StringUtils.getPathExtension(t[l]);
          a._loadedTranslations.hasOwnProperty(h) || (a._loadedTranslations[h] = {}), a._loadedTranslations[h].hasOwnProperty(s) || (a._loadedTranslations[h][s] = {}), a._loadedTranslations[h][s][d] = "json" === u ? a.parseJson(e[l].response) : a.parseProperties(e[l].response);
        }
      }

      n(o);
    }, function (t, i) {
      null !== r && r(t, i);
    });
  }, t.prototype.locales = function () {
    return this._locales;
  }, t.prototype.languages = function () {
    return this._languages;
  }, t.prototype.activeBundle = function () {
    return this._activeBundle;
  }, t.prototype.primaryLocale = function () {
    if (!this._initialized) throw new Error("LocalizationManager not initialized");
    return this._locales[0];
  }, t.prototype.primaryLanguage = function () {
    if (!this._initialized) throw new Error("LocalizationManager not initialized");
    return this._languages[0];
  }, t.prototype.setActiveBundle = function (t) {
    for (var i = 0, e = Object.keys(this._loadedTranslations); i < e.length; i++) {
      for (var r = e[i], a = 0, n = Object.keys(this._loadedTranslations[r]); a < n.length; a++) {
        var o = n[a];
        if (Object.keys(this._loadedTranslations[r][o]).indexOf(t) >= 0) return this._activeBundle = t, void (this._activeLocation = r);
      }
    }

    throw new Error("Bundle <" + t + "> not loaded");
  }, t.prototype.setPrimaryLocale = function (t) {
    if (!StringUtils_1.StringUtils.isString(t)) throw new Error("Invalid locale value");
    if (!this.isLocaleLoaded(t)) throw new Error(t + " not loaded");

    for (var i = [t], e = 0, r = this._locales; e < r.length; e++) {
      var a = r[e];
      a !== t && i.push(a);
    }

    this._locales = i, this._languages = this._locales.map(function (t) {
      return t.substr(0, 2);
    });
  }, t.prototype.setPrimaryLocales = function (t) {
    if (!ArrayUtils_1.ArrayUtils.isArray(t) || ArrayUtils_1.ArrayUtils.hasDuplicateElements(t) || t.length <= 0) throw new Error("locales must be non empty string array with no duplicate elements");

    for (var i = t.length - 1; i >= 0; i--) {
      this.setPrimaryLocale(t[i]);
    }
  }, t.prototype.setPrimaryLanguage = function (t) {
    for (var i = 0, e = this._locales; i < e.length; i++) {
      var r = e[i];
      if (r.substr(0, 2) === t) return this.setPrimaryLocale(r);
    }

    throw new Error(t + " not loaded");
  }, t.prototype.setPrimaryLanguages = function (t) {
    if (!ArrayUtils_1.ArrayUtils.isArray(t) || ArrayUtils_1.ArrayUtils.hasDuplicateElements(t) || t.length <= 0) throw new Error("languages must be non empty string array with no duplicate elements");

    for (var i = t.length - 1; i >= 0; i--) {
      this.setPrimaryLanguage(t[i]);
    }
  }, t.prototype.setLocalesOrder = function (t) {
    if (!ArrayUtils_1.ArrayUtils.isArray(t)) throw new Error("locales must be an array");
    if (t.length !== this._locales.length) throw new Error("locales must contain all the currently loaded locales");

    for (var i = 0, e = t; i < e.length; i++) {
      var r = e[i];
      if (!this.isLocaleLoaded(r)) throw new Error(r + " not loaded");
    }

    this._locales = t, this._languages = this._locales.map(function (t) {
      return t.substr(0, 2);
    });
  }, t.prototype.get = function (t, i, e, r) {
    if (void 0 === i && (i = ""), void 0 === e && (e = ""), void 0 === r && (r = []), !this._initialized) throw new Error("LocalizationManager not initialized. Call initialize() before requesting translated texts");

    if ("" === e && ("" !== i && i !== this._activeBundle && this.setActiveBundle(i), e = this._activeLocation), "" === i) {
      if (this.isBundleMandatory) throw new Error("bundle is mandatory for key " + t);
      i = this._activeBundle;
    }

    if (-1 === Object.keys(this._loadedTranslations).indexOf(e)) throw new Error("Location <" + e + "> not loaded");

    for (var a = 0, n = this._locales; a < n.length; a++) {
      var o = n[a];

      if (Object.keys(this._loadedTranslations[e]).indexOf(o) >= 0) {
        if (-1 === Object.keys(this._loadedTranslations[e][o]).indexOf(i)) throw new Error("Bundle <" + i + "> not loaded");

        if (Object.keys(this._loadedTranslations[e][o][i]).indexOf(t) >= 0) {
          this._activeBundle = i, this._activeLocation = e;

          for (var l = this._loadedTranslations[e][o][i][t], s = StringUtils_1.StringUtils.isString(r) ? [String(r)] : r, d = 0; d < s.length; d++) {
            l = StringUtils_1.StringUtils.replace(l, StringUtils_1.StringUtils.replace(this.wildCardsFormat, "N", String(d)), s[d]);
          }

          return l;
        }
      }
    }

    if (this.missingKeyFormat.indexOf("$exception") >= 0) throw new Error("key <" + t + "> not found on " + i + " - " + e);
    return this.missingKeyFormat.replace("$key", t);
  }, t.prototype.getStartCase = function (t, i, e, r) {
    return void 0 === i && (i = ""), void 0 === e && (e = ""), void 0 === r && (r = []), StringUtils_1.StringUtils.formatCase(this.get(t, i, e, r), StringUtils_1.StringUtils.FORMAT_START_CASE);
  }, t.prototype.getAllUpperCase = function (t, i, e, r) {
    return void 0 === i && (i = ""), void 0 === e && (e = ""), void 0 === r && (r = []), StringUtils_1.StringUtils.formatCase(this.get(t, i, e, r), StringUtils_1.StringUtils.FORMAT_ALL_UPPER_CASE);
  }, t.prototype.getAllLowerCase = function (t, i, e, r) {
    return void 0 === i && (i = ""), void 0 === e && (e = ""), void 0 === r && (r = []), StringUtils_1.StringUtils.formatCase(this.get(t, i, e, r), StringUtils_1.StringUtils.FORMAT_ALL_LOWER_CASE);
  }, t.prototype.getFirstUpperRestLower = function (t, i, e, r) {
    return void 0 === i && (i = ""), void 0 === e && (e = ""), void 0 === r && (r = []), StringUtils_1.StringUtils.formatCase(this.get(t, i, e, r), StringUtils_1.StringUtils.FORMAT_FIRST_UPPER_REST_LOWER);
  }, t.prototype.parseJson = function (t) {
    return JSON.parse(t);
  }, t.prototype.parseProperties = function (t) {
    for (var i = {}, e = new JavaPropertiesObject_1.JavaPropertiesObject(t), r = 0, a = e.getKeys(); r < a.length; r++) {
      var n = a[r];
      i[n] = e.get(n);
    }

    return i;
  }, t;
}();

exports.LocalizationManager = LocalizationManager;

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var ObjectUtils_1 = __webpack_require__(562),
    ArrayUtils_1 = __webpack_require__(561),
    StringUtils_1 = __webpack_require__(559),
    ModelHistoryManager = function () {
  function t(t) {
    this.maxSnapshots = -1, this._snapshots = [], this._currentState = t, this._initialState = ObjectUtils_1.ObjectUtils.clone(this._currentState);
  }

  return t.prototype.setInitialState = function () {
    this._initialState = ObjectUtils_1.ObjectUtils.clone(this._currentState), this._snapshots = [];
  }, Object.defineProperty(t.prototype, "get", {
    get: function get() {
      return this._currentState;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t.prototype, "tags", {
    get: function get() {
      return this._snapshots.map(function (t) {
        return t.tag;
      });
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t.prototype, "snapshots", {
    get: function get() {
      return this._snapshots.map(function (t) {
        return t.state;
      });
    },
    enumerable: !0,
    configurable: !0
  }), t.prototype.getSnapshotsByTag = function (t) {
    var s = "tags must be a non empty string array. To get the full list of snapshots, use the <snapshots> property";
    if (!ArrayUtils_1.ArrayUtils.isArray(t)) throw new Error(s);
    if (t.length <= 0) throw new Error(s);

    for (var e = [], i = 0; i < this._snapshots.length; i++) {
      t.indexOf(this._snapshots[i].tag) >= 0 && e.push(this._snapshots[i].state);
    }

    return e;
  }, t.prototype.saveSnapshot = function (t) {
    if (void 0 === t && (t = ""), !StringUtils_1.StringUtils.isString(t)) throw new Error("tag must be a string");
    if (this._snapshots.length > 0 && this._snapshots[this._snapshots.length - 1].tag === t && ObjectUtils_1.ObjectUtils.isEqualTo(this._currentState, this._snapshots[this._snapshots.length - 1].state)) return !1;
    if (this._snapshots.length <= 0 && ObjectUtils_1.ObjectUtils.isEqualTo(this._currentState, this._initialState)) return !1;

    if (this.maxSnapshots > 0 && this._snapshots.length >= this.maxSnapshots) {
      var s = this._snapshots.shift();

      this._initialState = s.state;
    }

    return this._snapshots.push({
      state: ObjectUtils_1.ObjectUtils.clone(this._currentState),
      tag: t
    }), !0;
  }, Object.defineProperty(t.prototype, "isUndoPossible", {
    get: function get() {
      return this._snapshots.length > 0 || !ObjectUtils_1.ObjectUtils.isEqualTo(this._currentState, this._initialState);
    },
    enumerable: !0,
    configurable: !0
  }), t.prototype.undo = function (t) {
    if (void 0 === t && (t = []), 0 === this._snapshots.length && !ObjectUtils_1.ObjectUtils.isEqualTo(this._currentState, this._initialState)) return this._currentState = ObjectUtils_1.ObjectUtils.clone(this._initialState), !0;

    if (this._snapshots.length > 0) {
      var s = this._snapshots[this._snapshots.length - 1];
      return ObjectUtils_1.ObjectUtils.isEqualTo(this._currentState, s.state) || t.length > 0 && t.indexOf(s.tag) < 0 ? (this._snapshots.pop(), this.undo(t)) : (this._currentState = ObjectUtils_1.ObjectUtils.clone(s.state), !0);
    }

    return !1;
  }, t.prototype.undoAll = function () {
    return !!this.isUndoPossible && (this._currentState = ObjectUtils_1.ObjectUtils.clone(this._initialState), this._snapshots = [], !0);
  }, t.prototype.redo = function () {}, t;
}();

exports.ModelHistoryManager = ModelHistoryManager;

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var JavaPropertiesObject_1 = __webpack_require__(575),
    ArrayUtils_1 = __webpack_require__(561),
    ObjectUtils_1 = __webpack_require__(562),
    SerializationManager = function () {
  function t() {
    this.strictMode = !0;
  }

  return t.prototype.classToJson = function (t) {
    return JSON.stringify(t);
  }, t.prototype.classToObject = function () {}, t.prototype.javaPropertiesObjectToString = function (t) {
    return t.toString();
  }, t.prototype.jsonToClass = function (t, e) {
    return this.objectToClass(JSON.parse(t), e);
  }, t.prototype.objectToClass = function (t, e) {
    var r = ObjectUtils_1.ObjectUtils.getKeys(t),
        o = e.constructor.name,
        i = ObjectUtils_1.ObjectUtils.getKeys(e);
    if (this.strictMode && r.length !== i.length) throw new Error("(strict mode): [" + r.join(",") + "] keys do not match " + o + " props: [" + i.join(",") + "]");

    for (var s = 0, n = r; s < n.length; s++) {
      var a = n[s];

      if (e.hasOwnProperty(a)) {
        var c = t[a];

        if (null !== c) {
          if (null !== e[a] && void 0 !== e[a]) {
            var l = "<" + o + "." + a + "> was " + _typeof(c) + " but expected to be ";

            if (ArrayUtils_1.ArrayUtils.isArray(e[a])) {
              if (!ArrayUtils_1.ArrayUtils.isArray(c)) throw new Error(l + "array");

              if (e[a].length > 0) {
                if (1 !== e[a].length) throw new Error("To define a typed list, <" + o + "." + a + "> must contain only 1 default typed element");
                var f = e[a][0],
                    p = ObjectUtils_1.ObjectUtils.isObject(f) && "Object" !== f.constructor.name;
                e[a] = [];

                for (var j = 0, u = c; j < u.length; j++) {
                  var b = u[j];
                  if (p) b = this.objectToClass(b, ObjectUtils_1.ObjectUtils.clone(f));else if (_typeof(b) != _typeof(f)) throw new Error("<" + o + "." + a + "> is defined as array of " + _typeof(f) + " but received " + _typeof(b));
                  e[a].push(b);
                }

                continue;
              }
            }

            if (ObjectUtils_1.ObjectUtils.isObject(e[a])) {
              if (!ObjectUtils_1.ObjectUtils.isObject(c)) throw new Error(l + e[a].constructor.name);
              "Object" !== e[a].constructor.name && (c = this.objectToClass(c, e[a]));
            }

            if (_typeof(e[a]) != _typeof(c)) throw new Error(l + _typeof(e[a]));
          }

          e[a] = c;
        }
      } else if (this.strictMode) throw new Error("(strict mode): <" + a + "> not found in " + o);
    }

    return e;
  }, t.prototype.stringToJavaPropertiesObject = function (t) {
    return new JavaPropertiesObject_1.JavaPropertiesObject(t);
  }, t;
}();

exports.SerializationManager = SerializationManager;

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var BaseStrictClass = function () {
  return function () {};
}();

exports.BaseStrictClass = BaseStrictClass;

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _t = function t(r, e) {
    return (_t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, r) {
      t.__proto__ = r;
    } || function (t, r) {
      for (var e in r) {
        r.hasOwnProperty(e) && (t[e] = r[e]);
      }
    })(r, e);
  };

  return function (r, e) {
    function n() {
      this.constructor = r;
    }

    _t(r, e), r.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var TableObject_1 = __webpack_require__(579),
    StringUtils_1 = __webpack_require__(559),
    ArrayUtils_1 = __webpack_require__(561),
    CSVObject = function (t) {
  function r(r, e, n, i) {
    void 0 === r && (r = ""), void 0 === e && (e = !1), void 0 === n && (n = ","), void 0 === i && (i = '"');
    var s = t.call(this) || this;
    if (s._hasHeaders = !1, !StringUtils_1.StringUtils.isString(r)) throw new Error("constructor expects a string value");
    if (StringUtils_1.StringUtils.isEmpty(r)) return s;

    for (var o = 0, l = 0, u = !1, a = "", c = r.length, h = 0; h < c; h++) {
      var f = r.charAt(h);
      f !== n || u ? f !== i ? "\r" !== f && "\n" !== f ? a += f : (u ? a += f : l > 0 && (s._insertField(o, l, a), o++, a = "", l = 0), "\r" === f && "\n" === r.substr(h + 1, 1) && (u && (a += "\n"), h++)) : u && r.substr(h + 1, 1) === i ? (a += f, h++) : (u = !u) ? a = "" : h = s._findNextDelimiterIndex(r, h, n, c) - 1 : (s._insertField(o, l, a), a = "", l++);
    }

    return ("" != a || l >= s._columnsCount) && s._insertField(o, l, a), e && s._defineHeaders(), s;
  }

  return __extends(r, t), r.prototype.getCell = function (r, e) {
    var n = t.prototype.getCell.call(this, r, e);
    return null === n ? "" : n;
  }, r.prototype.setCell = function (r, e, n) {
    if (!StringUtils_1.StringUtils.isString(n)) throw new Error("value must be a string");
    return t.prototype.setCell.call(this, r, e, n);
  }, r.isCSV = function (t) {
    try {
      return new r(t).countCells() >= 0;
    } catch (e) {
      try {
        return null !== t && t instanceof r;
      } catch (t) {
        return !1;
      }
    }
  }, r.prototype.isEqualTo = function (t) {
    var e = null;

    try {
      e = new r(t, this._hasHeaders);
    } catch (n) {
      try {
        t instanceof r && (e = t);
      } catch (t) {}
    }

    if (null == e) throw new Error("csv does not contain valid csv data");
    var n = this.countRows(),
        i = this.countColumns();
    if (0 === this.countCells() && 0 === e.countCells()) return !0;
    if (this._hasHeaders && !ArrayUtils_1.ArrayUtils.isEqualTo(this.getColumnNames(), e.getColumnNames())) return !1;
    if (n !== e.countRows() || i !== e.countColumns()) return !1;

    for (var s = 0; s < n; s++) {
      for (var o = 0; o < i; o++) {
        var l = this.getCell(s, o);
        null === l && (l = "");
        var u = e.getCell(s, o);
        if (null === u && (u = ""), l !== u) return !1;
      }
    }

    return !0;
  }, r.prototype.toString = function (t, r) {
    void 0 === t && (t = ","), void 0 === r && (r = '"');
    var e = "";

    if (this._hasHeaders) {
      for (var n = [], i = 0, s = this.getColumnNames(); i < s.length; i++) {
        var o = s[i];
        n.push(this._escapeField(o, t, r));
      }

      e += n.join(t) + "\r\n";
    }

    for (var l = this.countRows(), u = this.countColumns(), a = 0; a < l; a++) {
      n = [];

      for (var c = 0; c < u; c++) {
        var h = "";

        try {
          h = this._escapeField(this._cells.get(a + "-" + c), t, r);
        } catch (t) {}

        n.push(h);
      }

      e += n.join(t) + "\r\n";
    }

    return l > 0 ? e.substring(0, e.length - 2) : e;
  }, r.prototype._insertField = function (t, r, e) {
    t >= this._rowsCount && this._rowsCount++, r >= this._columnsCount && this._columnsCount++, this._cells.set(t + "-" + r, e);
  }, r.prototype._escapeField = function (t, r, e) {
    return (t.indexOf("\r") >= 0 || t.indexOf("\n") >= 0 || t.indexOf(e) >= 0 || t.indexOf(r) >= 0) && (t = e + (t = StringUtils_1.StringUtils.replace(t, [e], [e + e])) + e), t;
  }, r.prototype._findNextDelimiterIndex = function (t, r, e, n) {
    for (var i = r + 1; i < n; i++) {
      var s = t.charAt(i);
      if (s === e || "\r" === s || "\n" === s) return i;
    }

    return n;
  }, r.prototype._defineHeaders = function () {
    var t = this.getRow(0);

    if (ArrayUtils_1.ArrayUtils.hasDuplicateElements(t)) {
      for (var r = 0, e = [], n = ArrayUtils_1.ArrayUtils.getDuplicateElements(t), i = 0, s = t; i < s.length; i++) {
        var o = s[i];
        if (null === o || "" === o) o = "(" + ++r + ")";else for (var l = 0, u = n; l < u.length; l++) {
          if (o === u[l]) {
            o = o + "(" + ++r + ")";
            break;
          }
        }
        e.push(o);
      }

      this.setColumnNames(e);
    } else this.setColumnNames(t);

    this.removeRow(0), this._hasHeaders = !0;
  }, r;
}(TableObject_1.TableObject);

exports.CSVObject = CSVObject;

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StringUtils_1 = __webpack_require__(559),
    ConversionUtils = function () {
  function r() {}

  return r.stringToBase64 = function (r) {
    if (null === r || void 0 === r) return "";
    if (!StringUtils_1.StringUtils.isString(r)) throw new Error("ConversionUtils.stringToBase64: value is not a string");
    var t,
        n,
        i,
        e,
        o,
        a,
        s,
        C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        h = "";

    r = function (r) {
      var t = "";
      r = r.replace(/\r\n/g, "\n");

      for (var n = 0; n < r.length; n++) {
        var i = r.charCodeAt(n);
        i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128));
      }

      return t;
    }(r);

    for (var f = 0; f < r.length;) {
      e = (t = r.charCodeAt(f++)) >> 2, o = (3 & t) << 4 | (n = r.charCodeAt(f++)) >> 4, a = (15 & n) << 2 | (i = r.charCodeAt(f++)) >> 6, s = 63 & i, isNaN(n) ? a = s = 64 : isNaN(i) && (s = 64), h = h + C.charAt(e) + C.charAt(o) + C.charAt(a) + C.charAt(s);
    }

    return h;
  }, r.base64ToString = function (r) {
    if (null === r || void 0 === r) return "";
    if (!StringUtils_1.StringUtils.isString(r)) throw new Error("ConversionUtils.stringToBase64: value is not a string");
    var t,
        n,
        i,
        e,
        o,
        a,
        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        C = "",
        h = 0;

    for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < r.length;) {
      t = s.indexOf(r.charAt(h++)) << 2 | (e = s.indexOf(r.charAt(h++))) >> 4, n = (15 & e) << 4 | (o = s.indexOf(r.charAt(h++))) >> 2, i = (3 & o) << 6 | (a = s.indexOf(r.charAt(h++))), C += String.fromCharCode(t), 64 != o && (C += String.fromCharCode(n)), 64 != a && (C += String.fromCharCode(i));
    }

    return function (r) {
      for (var t = "", n = 0, i = 0, e = 0; n < r.length;) {
        if ((i = r.charCodeAt(n)) < 128) t += String.fromCharCode(i), n++;else if (i > 191 && i < 224) e = r.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & e), n += 2;else {
          e = r.charCodeAt(n + 1);
          var o = r.charCodeAt(n + 2);
          t += String.fromCharCode((15 & i) << 12 | (63 & e) << 6 | 63 & o), n += 3;
        }
      }

      return t;
    }(C);
  }, r;
}();

exports.ConversionUtils = ConversionUtils;

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separate = exports.compact = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.partitionMap = exports.partition = exports.mapWithIndex = exports.map = exports.foldMapWithIndex = exports.foldMap = exports.filterWithIndex = exports.filterMapWithIndex = exports.filterMap = exports.filter = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.alt = exports.array = exports.of = exports.difference = exports.intersection = exports.union = exports.comprehension = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = exports.uniq = exports.elem = exports.rotate = exports.unzip = exports.zip = exports.zipWith = exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.unsafeDeleteAt = exports.updateAt = exports.unsafeUpdateAt = exports.insertAt = exports.unsafeInsertAt = exports.copy = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.snoc = exports.cons = exports.lookup = exports.isOutOfBound = exports.isNonEmpty = exports.isEmpty = exports.scanRight = exports.scanLeft = exports.foldRight = exports.foldLeft = exports.flatten = exports.replicate = exports.range = exports.makeBy = exports.empty = exports.getOrd = exports.getEq = exports.getMonoid = exports.getShow = exports.URI = void 0;

var pipeable_1 = __webpack_require__(560);

var RA = __webpack_require__(580);
/**
 * @since 2.0.0
 */


exports.URI = 'Array';
/**
 * @since 2.0.0
 */

exports.getShow = RA.getShow;
/**
 * Returns a `Monoid` for `Array<A>`
 *
 * @example
 * import { getMonoid } from 'fp-ts/lib/Array'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 *
 * @since 2.0.0
 */

exports.getMonoid = RA.getMonoid;
/**
 * Derives an `Eq` over the `Array` of a given element type from the `Eq` of that type. The derived `Eq` defines two
 * arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
 * different lengths, the result is non equality.
 *
 * @example
 * import { eqString } from 'fp-ts/lib/Eq'
 * import { getEq } from 'fp-ts/lib/Array'
 *
 * const E = getEq(eqString)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 *
 * @since 2.0.0
 */

exports.getEq = RA.getEq;
/**
 * Derives an `Ord` over the `Array` of a given element type from the `Ord` of that type. The ordering between two such
 * arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
 * case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
 * the same length, the result is equality.
 *
 * @example
 * import { getOrd } from 'fp-ts/lib/Array'
 * import { ordString } from 'fp-ts/lib/Ord'
 *
 * const O = getOrd(ordString)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 *
 *
 * @since 2.0.0
 */

exports.getOrd = RA.getOrd;
/**
 * An empty array
 *
 * @since 2.0.0
 */

exports.empty = [];
/**
 * Return a list of length `n` with element `i` initialized with `f(i)`
 *
 * @example
 * import { makeBy } from 'fp-ts/lib/Array'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 *
 * @since 2.0.0
 */

exports.makeBy = RA.makeBy;
/**
 * Create an array containing a range of integers, including both endpoints
 *
 * @example
 * import { range } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 *
 * @since 2.0.0
 */

exports.range = RA.range;
/**
 * Create an array containing a value repeated the specified number of times
 *
 * @example
 * import { replicate } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 *
 * @since 2.0.0
 */

exports.replicate = RA.replicate;
/**
 * Removes one level of nesting
 *
 * @example
 * import { flatten } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(flatten([[1], [2], [3]]), [1, 2, 3])
 *
 * @since 2.0.0
 */

exports.flatten = RA.flatten;
/**
 * Break an array into its first element and remaining elements
 *
 * @example
 * import { foldLeft } from 'fp-ts/lib/Array'
 *
 * const len: <A>(as: Array<A>) => number = foldLeft(() => 0, (_, tail) => 1 + len(tail))
 * assert.strictEqual(len([1, 2, 3]), 3)
 *
 * @since 2.0.0
 */

exports.foldLeft = RA.foldLeft;
/**
 * Break an array into its initial elements and the last element
 *
 * @since 2.0.0
 */

exports.foldRight = RA.foldRight;
/**
 * Same as `reduce` but it carries over the intermediate steps
 *
 * ```ts
 * import { scanLeft } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 * ```
 *
 * @since 2.0.0
 */

exports.scanLeft = RA.scanLeft;
/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @example
 * import { scanRight } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 *
 * @since 2.0.0
 */

exports.scanRight = RA.scanRight;
/**
 * Test whether an array is empty
 *
 * @example
 * import { isEmpty } from 'fp-ts/lib/Array'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @since 2.0.0
 */

exports.isEmpty = RA.isEmpty;
/**
 * Test whether an array is non empty narrowing down the type to `NonEmptyArray<A>`
 *
 * @since 2.0.0
 */

exports.isNonEmpty = RA.isNonEmpty;
/**
 * Test whether an array contains a particular index
 *
 * @since 2.0.0
 */

exports.isOutOfBound = RA.isOutOfBound;
/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @example
 * import { lookup } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(lookup(1, [1, 2, 3]), some(2))
 * assert.deepStrictEqual(lookup(3, [1, 2, 3]), none)
 *
 * @since 2.0.0
 */

exports.lookup = RA.lookup;
/**
 * Attaches an element to the front of an array, creating a new non empty array
 *
 * @example
 * import { cons } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(cons(0, [1, 2, 3]), [0, 1, 2, 3])
 *
 * @since 2.0.0
 */

exports.cons = RA.cons;
/**
 * Append an element to the end of an array, creating a new non empty array
 *
 * @example
 * import { snoc } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(snoc([1, 2, 3], 4), [1, 2, 3, 4])
 *
 * @since 2.0.0
 */

exports.snoc = RA.snoc;
/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @example
 * import { head } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 *
 * @since 2.0.0
 */

exports.head = RA.head;
/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @example
 * import { last } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 *
 * @since 2.0.0
 */

exports.last = RA.last;
/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { tail } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 *
 * @since 2.0.0
 */

exports.tail = RA.tail;
/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @example
 * import { init } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 *
 * @since 2.0.0
 */

exports.init = RA.init;
/**
 * Keep only a number of elements from the start of an array, creating a new array.
 * `n` must be a natural number
 *
 * @example
 * import { takeLeft } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(takeLeft(2)([1, 2, 3]), [1, 2])
 *
 * @since 2.0.0
 */

exports.takeLeft = RA.takeLeft;
/**
 * Keep only a number of elements from the end of an array, creating a new array.
 * `n` must be a natural number
 *
 * @example
 * import { takeRight } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(takeRight(2)([1, 2, 3, 4, 5]), [4, 5])
 *
 * @since 2.0.0
 */

exports.takeRight = RA.takeRight;

function takeLeftWhile(predicate) {
  return RA.takeLeftWhile(predicate);
}

exports.takeLeftWhile = takeLeftWhile;

function spanLeft(predicate) {
  return RA.spanLeft(predicate);
}

exports.spanLeft = spanLeft;
/* tslint:enable:readonly-keyword */

/**
 * Drop a number of elements from the start of an array, creating a new array
 *
 * @example
 * import { dropLeft } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(dropLeft(2)([1, 2, 3]), [3])
 *
 * @since 2.0.0
 */

exports.dropLeft = RA.dropLeft;
/**
 * Drop a number of elements from the end of an array, creating a new array
 *
 * @example
 * import { dropRight } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(dropRight(2)([1, 2, 3, 4, 5]), [1, 2, 3])
 *
 * @since 2.0.0
 */

exports.dropRight = RA.dropRight;
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @example
 * import { dropLeftWhile } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 *
 * @since 2.0.0
 */

exports.dropLeftWhile = RA.dropLeftWhile;
/**
 * Find the first index for which a predicate holds
 *
 * @example
 * import { findIndex } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 *
 * @since 2.0.0
 */

exports.findIndex = RA.findIndex;

function findFirst(predicate) {
  return RA.findFirst(predicate);
}

exports.findFirst = findFirst;
/**
 * Find the first element returned by an option based selector function
 *
 * @example
 * import { findFirstMap } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface Person {
 *   name: string
 *   age?: number
 * }
 *
 * const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Mary'))
 *
 * @since 2.0.0
 */

exports.findFirstMap = RA.findFirstMap;

function findLast(predicate) {
  return RA.findLast(predicate);
}

exports.findLast = findLast;
/**
 * Find the last element returned by an option based selector function
 *
 * @example
 * import { findLastMap } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface Person {
 *   name: string
 *   age?: number
 * }
 *
 * const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons), some('Joey'))
 *
 * @since 2.0.0
 */

exports.findLastMap = RA.findLastMap;
/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @example
 * import { findLastIndex } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * interface X {
 *   a: number
 *   b: number
 * }
 * const xs: Array<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
 * assert.deepStrictEqual(findLastIndex((x: { a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { a: number }) => x.a === 4)(xs), none)
 *
 *
 * @since 2.0.0
 */

exports.findLastIndex = RA.findLastIndex;
/**
 * @since 2.0.0
 */

exports.copy = RA.toArray;
/**
 * @since 2.0.0
 */

exports.unsafeInsertAt = RA.unsafeInsertAt;
/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { insertAt } from 'fp-ts/lib/Array'
 * import { some } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 *
 * @since 2.0.0
 */

exports.insertAt = RA.insertAt;
/**
 * @since 2.0.0
 */

exports.unsafeUpdateAt = RA.unsafeUpdateAt;
/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { updateAt } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 *
 * @since 2.0.0
 */

exports.updateAt = RA.updateAt;
/**
 * @since 2.0.0
 */

exports.unsafeDeleteAt = RA.unsafeDeleteAt;
/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @example
 * import { deleteAt } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 *
 * @since 2.0.0
 */

exports.deleteAt = RA.deleteAt;
/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @example
 * import { modifyAt } from 'fp-ts/lib/Array'
 * import { some, none } from 'fp-ts/lib/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 *
 * @since 2.0.0
 */

exports.modifyAt = RA.modifyAt;
/**
 * Reverse an array, creating a new array
 *
 * @example
 * import { reverse } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 *
 * @since 2.0.0
 */

exports.reverse = RA.reverse;
/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @example
 * import { rights } from 'fp-ts/lib/Array'
 * import { right, left } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 *
 * @since 2.0.0
 */

exports.rights = RA.rights;
/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @example
 * import { lefts } from 'fp-ts/lib/Array'
 * import { left, right } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 *
 * @since 2.0.0
 */

exports.lefts = RA.lefts;
/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @example
 * import { sort } from 'fp-ts/lib/Array'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * assert.deepStrictEqual(sort(ordNumber)([3, 2, 1]), [1, 2, 3])
 *
 * @since 2.0.0
 */

exports.sort = RA.sort;
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @example
 * import { zipWith } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
 *
 * @since 2.0.0
 */

exports.zipWith = RA.zipWith;
/**
 * Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the
 * longer array are discarded
 *
 * @example
 * import { zip } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(zip([1, 2, 3], ['a', 'b', 'c', 'd']), [[1, 'a'], [2, 'b'], [3, 'c']])
 *
 * @since 2.0.0
 */

exports.zip = RA.zip;
/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @example
 * import { unzip } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
 *
 * @since 2.0.0
 */

exports.unzip = RA.unzip;
/**
 * Rotate an array to the right by `n` steps
 *
 * @example
 * import { rotate } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 *
 * @since 2.0.0
 */

exports.rotate = RA.rotate;
/**
 * Test if a value is a member of an array. Takes a `Eq<A>` as a single
 * argument which returns the function to use to search for a value of type `A` in
 * an array of type `Array<A>`.
 *
 * @example
 * import { elem } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.strictEqual(elem(eqNumber)(1, [1, 2, 3]), true)
 * assert.strictEqual(elem(eqNumber)(4, [1, 2, 3]), false)
 *
 * @since 2.0.0
 */

exports.elem = RA.elem;
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @example
 * import { uniq } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(uniq(eqNumber)([1, 2, 1]), [1, 2])
 *
 * @since 2.0.0
 */

exports.uniq = RA.uniq;
/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @example
 * import { sortBy } from 'fp-ts/lib/Array'
 * import { ord, ordString, ordNumber } from 'fp-ts/lib/Ord'
 *
 * interface Person {
 *   name: string
 *   age: number
 * }
 * const byName = ord.contramap(ordString, (p: Person) => p.name)
 * const byAge = ord.contramap(ordNumber, (p: Person) => p.age)
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 }
 * ])
 *
 * @since 2.0.0
 */

exports.sortBy = RA.sortBy;
/**
 * A useful recursion pattern for processing an array to produce a new array, often used for "chopping" up the input
 * array. Typically chop is called with some function that will consume an initial prefix of the array and produce a
 * value and the rest of the array.
 *
 * @example
 * import { Eq, eqNumber } from 'fp-ts/lib/Eq'
 * import { chop, spanLeft } from 'fp-ts/lib/Array'
 *
 * const group = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
 *   return chop(as => {
 *     const { init, rest } = spanLeft((a: A) => S.equals(a, as[0]))(as)
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(eqNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 *
 * @since 2.0.0
 */

exports.chop = RA.chop;
/**
 * Splits an array into two pieces, the first piece has `n` elements.
 *
 * @example
 * import { splitAt } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
 *
 * @since 2.0.0
 */

exports.splitAt = RA.splitAt;
/**
 * Splits an array into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the array. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `xs`.
 *
 * @example
 * import { chunksOf } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 *
 *
 * @since 2.0.0
 */

exports.chunksOf = RA.chunksOf;

function comprehension(input, f, g) {
  if (g === void 0) {
    g = function g() {
      return true;
    };
  }

  return RA.comprehension(input, f, g);
}

exports.comprehension = comprehension;
/**
 * Creates an array of unique values, in order, from all given arrays using a `Eq` for equality comparisons
 *
 * @example
 * import { union } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(union(eqNumber)([1, 2], [2, 3]), [1, 2, 3])
 *
 * @since 2.0.0
 */

exports.union = RA.union;
/**
 * Creates an array of unique values that are included in all given arrays using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { intersection } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(intersection(eqNumber)([1, 2], [2, 3]), [2])
 *
 * @since 2.0.0
 */

exports.intersection = RA.intersection;
/**
 * Creates an array of array values not included in the other given array using a `Eq` for equality
 * comparisons. The order and references of result values are determined by the first array.
 *
 * @example
 * import { difference } from 'fp-ts/lib/Array'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.deepStrictEqual(difference(eqNumber)([1, 2], [2, 3]), [1])
 *
 * @since 2.0.0
 */

exports.difference = RA.difference;
/**
 * @since 2.0.0
 */

exports.of = RA.of;
/**
 * @since 2.0.0
 */

exports.array = {
  URI: exports.URI,
  map: RA.readonlyArray.map,
  mapWithIndex: RA.readonlyArray.mapWithIndex,
  compact: RA.readonlyArray.compact,
  separate: RA.readonlyArray.separate,
  filter: RA.readonlyArray.filter,
  filterMap: RA.readonlyArray.filterMap,
  partition: RA.readonlyArray.partition,
  partitionMap: RA.readonlyArray.partitionMap,
  of: exports.of,
  ap: RA.readonlyArray.ap,
  chain: RA.readonlyArray.chain,
  reduce: RA.readonlyArray.reduce,
  foldMap: RA.readonlyArray.foldMap,
  reduceRight: RA.readonlyArray.reduceRight,
  unfold: RA.readonlyArray.unfold,
  traverse: RA.readonlyArray.traverse,
  sequence: RA.readonlyArray.sequence,
  zero: RA.readonlyArray.zero,
  alt: RA.readonlyArray.alt,
  extend: RA.readonlyArray.extend,
  wither: RA.readonlyArray.wither,
  wilt: RA.readonlyArray.wilt,
  reduceWithIndex: RA.readonlyArray.reduceWithIndex,
  foldMapWithIndex: RA.readonlyArray.foldMapWithIndex,
  reduceRightWithIndex: RA.readonlyArray.reduceRightWithIndex,
  traverseWithIndex: RA.readonlyArray.traverseWithIndex,
  partitionMapWithIndex: RA.readonlyArray.partitionMapWithIndex,
  partitionWithIndex: RA.readonlyArray.partitionWithIndex,
  filterMapWithIndex: RA.readonlyArray.filterMapWithIndex,
  filterWithIndex: RA.readonlyArray.filterWithIndex
};

var _a = pipeable_1.pipeable(exports.array),
    alt = _a.alt,
    ap = _a.ap,
    apFirst = _a.apFirst,
    apSecond = _a.apSecond,
    chain = _a.chain,
    chainFirst = _a.chainFirst,
    duplicate = _a.duplicate,
    extend = _a.extend,
    filter = _a.filter,
    filterMap = _a.filterMap,
    filterMapWithIndex = _a.filterMapWithIndex,
    filterWithIndex = _a.filterWithIndex,
    foldMap = _a.foldMap,
    foldMapWithIndex = _a.foldMapWithIndex,
    map = _a.map,
    mapWithIndex = _a.mapWithIndex,
    partition = _a.partition,
    partitionMap = _a.partitionMap,
    partitionMapWithIndex = _a.partitionMapWithIndex,
    partitionWithIndex = _a.partitionWithIndex,
    reduce = _a.reduce,
    reduceRight = _a.reduceRight,
    reduceRightWithIndex = _a.reduceRightWithIndex,
    reduceWithIndex = _a.reduceWithIndex,
    compact = _a.compact,
    separate = _a.separate;

exports.alt = alt;
exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.duplicate = duplicate;
exports.extend = extend;
exports.filter = filter;
exports.filterMap = filterMap;
exports.filterMapWithIndex = filterMapWithIndex;
exports.filterWithIndex = filterWithIndex;
exports.foldMap = foldMap;
exports.foldMapWithIndex = foldMapWithIndex;
exports.map = map;
exports.mapWithIndex = mapWithIndex;
exports.partition = partition;
exports.partitionMap = partitionMap;
exports.partitionMapWithIndex = partitionMapWithIndex;
exports.partitionWithIndex = partitionWithIndex;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reduceRightWithIndex = reduceRightWithIndex;
exports.reduceWithIndex = reduceWithIndex;
exports.compact = compact;
exports.separate = separate;

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invert = exports.monoidOrdering = exports.semigroupOrdering = exports.eqOrdering = exports.sign = void 0;
/**
 * @since 2.0.0
 */

function sign(n) {
  return n <= -1 ? -1 : n >= 1 ? 1 : 0;
}

exports.sign = sign;
/**
 * @since 2.0.0
 */

exports.eqOrdering = {
  equals: function equals(x, y) {
    return x === y;
  }
};
/**
 * Use `monoidOrdering` instead
 * @since 2.0.0
 * @deprecated
 */

exports.semigroupOrdering = {
  concat: function concat(x, y) {
    return x !== 0 ? x : y;
  }
};
/**
 * @since 2.4.0
 */

exports.monoidOrdering = {
  // tslint:disable-next-line: deprecation
  concat: exports.semigroupOrdering.concat,
  empty: 0
};
/**
 * @since 2.0.0
 */

function invert(O) {
  switch (O) {
    case -1:
      return 1;

    case 1:
      return -1;

    default:
      return 0;
  }
}

exports.invert = invert;

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Represents a value of one of two possible types (a disjoint union).
 *
 * An instance of `Either` is either an instance of `Left` or `Right`.
 *
 * A common use of `Either` is as an alternative to `Option` for dealing with possible missing values. In this usage,
 * `None` is replaced with a `Left` which can contain useful information. `Right` takes the place of `Some`. Convention
 * dictates that `Left` is used for failure and `Right` is used for success.
 *
 * For example, you could use `Either<string, number>` to detect whether a received input is a `string` or a `number`.
 *
 * ```ts
 * import { Either, left, right } from 'fp-ts/lib/Either'
 *
 * function parse(input: string): Either<Error, number> {
 *   const n = parseInt(input, 10)
 *   return isNaN(n) ? left(new Error('not a number')) : right(n)
 * }
 * ```
 *
 * `Either` is right-biased, which means that `Right` is assumed to be the default case to operate on. If it is `Left`,
 * operations like `map`, `chain`, ... return the `Left` value unchanged:
 *
 * ```ts
 * import { map, left, right } from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * pipe(right(12), map(double)) // right(24)
 * pipe(left(23), map(double))  // left(23)
 * ```
 *
 * @since 2.0.0
 */

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterOrElse = exports.fromPredicate = exports.fromOption = exports.reduceRight = exports.reduce = exports.mapLeft = exports.map = exports.foldMap = exports.flatten = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.bimap = exports.apSecond = exports.apFirst = exports.ap = exports.alt = exports.chainW = exports.either = exports.getValidationMonoid = exports.getValidationSemigroup = exports.getValidation = exports.getWitherable = exports.stringifyJSON = exports.parseJSON = exports.exists = exports.elem = exports.getOrElseW = exports.getOrElse = exports.orElse = exports.swap = exports.isRight = exports.isLeft = exports.getApplyMonoid = exports.getApplySemigroup = exports.getSemigroup = exports.getEq = exports.getShow = exports.fold = exports.tryCatch = exports.toError = exports.fromNullable = exports.right = exports.left = exports.URI = void 0;

var ChainRec_1 = __webpack_require__(582);

var pipeable_1 = __webpack_require__(560);
/**
 * @since 2.0.0
 */


exports.URI = 'Either';
/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure
 *
 * @since 2.0.0
 */

function left(e) {
  return {
    _tag: 'Left',
    left: e
  };
}

exports.left = left;
/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure
 *
 * @since 2.0.0
 */

function right(a) {
  return {
    _tag: 'Right',
    right: a
  };
}

exports.right = right;
/**
 * Takes a default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`
 *
 * @example
 * import { fromNullable, left, right } from 'fp-ts/lib/Either'
 *
 * const parse = fromNullable('nully')
 *
 * assert.deepStrictEqual(parse(1), right(1))
 * assert.deepStrictEqual(parse(null), left('nully'))
 *
 * @since 2.0.0
 */

function fromNullable(e) {
  return function (a) {
    return a == null ? left(e) : right(a);
  };
}

exports.fromNullable = fromNullable;
/**
 * Default value for the `onError` argument of `tryCatch`
 *
 * @since 2.0.0
 */

function toError(e) {
  return e instanceof Error ? e : new Error(String(e));
}

exports.toError = toError;
/**
 * Constructs a new `Either` from a function that might throw
 *
 * @example
 * import { Either, left, right, tryCatch } from 'fp-ts/lib/Either'
 *
 * const unsafeHead = <A>(as: Array<A>): A => {
 *   if (as.length > 0) {
 *     return as[0]
 *   } else {
 *     throw new Error('empty array')
 *   }
 * }
 *
 * const head = <A>(as: Array<A>): Either<Error, A> => {
 *   return tryCatch(() => unsafeHead(as), e => (e instanceof Error ? e : new Error('unknown error')))
 * }
 *
 * assert.deepStrictEqual(head([]), left(new Error('empty array')))
 * assert.deepStrictEqual(head([1, 2, 3]), right(1))
 *
 * @since 2.0.0
 */

function tryCatch(f, onError) {
  try {
    return right(f());
  } catch (e) {
    return left(onError(e));
  }
}

exports.tryCatch = tryCatch;
/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @example
 * import { fold, left, right } from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * function onLeft(errors: Array<string>): string {
 *   return `Errors: ${errors.join(', ')}`
 * }
 *
 * function onRight(value: number): string {
 *   return `Ok: ${value}`
 * }
 *
 * assert.strictEqual(
 *   pipe(
 *     right(1),
 *     fold(onLeft, onRight)
 *   ),
 *   'Ok: 1'
 * )
 * assert.strictEqual(
 *   pipe(
 *     left(['error 1', 'error 2']),
 *     fold(onLeft, onRight)
 *   ),
 *   'Errors: error 1, error 2'
 * )
 *
 * @since 2.0.0
 */

function fold(onLeft, onRight) {
  return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
  };
}

exports.fold = fold;
/**
 * @since 2.0.0
 */

function getShow(SE, SA) {
  return {
    show: function show(ma) {
      return isLeft(ma) ? "left(" + SE.show(ma.left) + ")" : "right(" + SA.show(ma.right) + ")";
    }
  };
}

exports.getShow = getShow;
/**
 * @since 2.0.0
 */

function getEq(EL, EA) {
  return {
    equals: function equals(x, y) {
      return x === y || (isLeft(x) ? isLeft(y) && EL.equals(x.left, y.left) : isRight(y) && EA.equals(x.right, y.right));
    }
  };
}

exports.getEq = getEq;
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * appended using the provided `Semigroup`
 *
 * @example
 * import { getSemigroup, left, right } from 'fp-ts/lib/Either'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getSemigroup<string, number>(semigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), right(2))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), right(1))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 *
 * @since 2.0.0
 */

function getSemigroup(S) {
  return {
    concat: function concat(x, y) {
      return isLeft(y) ? x : isLeft(x) ? y : right(S.concat(x.right, y.right));
    }
  };
}

exports.getSemigroup = getSemigroup;
/**
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are appended using the provided `Semigroup`
 *
 * @example
 * import { getApplySemigroup, left, right } from 'fp-ts/lib/Either'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getApplySemigroup<string, number>(semigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), left('a'))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), left('b'))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 *
 * @since 2.0.0
 */

function getApplySemigroup(S) {
  return {
    concat: function concat(x, y) {
      return isLeft(x) ? x : isLeft(y) ? y : right(S.concat(x.right, y.right));
    }
  };
}

exports.getApplySemigroup = getApplySemigroup;
/**
 * @since 2.0.0
 */

function getApplyMonoid(M) {
  return __assign(__assign({}, getApplySemigroup(M)), {
    empty: right(M.empty)
  });
}

exports.getApplyMonoid = getApplyMonoid;
/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise
 *
 * @since 2.0.0
 */

function isLeft(ma) {
  switch (ma._tag) {
    case 'Left':
      return true;

    case 'Right':
      return false;
  }
}

exports.isLeft = isLeft;
/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise
 *
 * @since 2.0.0
 */

function isRight(ma) {
  return isLeft(ma) ? false : true;
}

exports.isRight = isRight;
/**
 * @since 2.0.0
 */

function swap(ma) {
  return isLeft(ma) ? right(ma.left) : left(ma.right);
}

exports.swap = swap;
/**
 * @since 2.0.0
 */

function orElse(onLeft) {
  return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : ma;
  };
}

exports.orElse = orElse;
/**
 * @since 2.0.0
 */

function getOrElse(onLeft) {
  return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : ma.right;
  };
}

exports.getOrElse = getOrElse;
/**
 * @since 2.6.0
 */

exports.getOrElseW = getOrElse;
/**
 * @since 2.0.0
 */

function elem(E) {
  return function (a, ma) {
    return isLeft(ma) ? false : E.equals(a, ma.right);
  };
}

exports.elem = elem;
/**
 * Returns `false` if `Left` or returns the result of the application of the given predicate to the `Right` value.
 *
 * @example
 * import { exists, left, right } from 'fp-ts/lib/Either'
 *
 * const gt2 = exists((n: number) => n > 2)
 *
 * assert.strictEqual(gt2(left('a')), false)
 * assert.strictEqual(gt2(right(1)), false)
 * assert.strictEqual(gt2(right(3)), true)
 *
 * @since 2.0.0
 */

function exists(predicate) {
  return function (ma) {
    return isLeft(ma) ? false : predicate(ma.right);
  };
}

exports.exists = exists;
/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 *
 * @example
 * import { parseJSON, toError, right, left } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(parseJSON('{"a":1}', toError), right({ a: 1 }))
 * assert.deepStrictEqual(parseJSON('{"a":}', toError), left(new SyntaxError('Unexpected token } in JSON at position 5')))
 *
 * @since 2.0.0
 */

function parseJSON(s, onError) {
  return tryCatch(function () {
    return JSON.parse(s);
  }, onError);
}

exports.parseJSON = parseJSON;
/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @example
 * import * as E from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.deepStrictEqual(E.stringifyJSON({ a: 1 }, E.toError), E.right('{"a":1}'))
 * const circular: any = { ref: null }
 * circular.ref = circular
 * assert.deepStrictEqual(
 *   pipe(
 *     E.stringifyJSON(circular, E.toError),
 *     E.mapLeft(e => e.message.includes('Converting circular structure to JSON'))
 *   ),
 *   E.left(true)
 * )
 *
 * @since 2.0.0
 */

function stringifyJSON(u, onError) {
  return tryCatch(function () {
    return JSON.stringify(u);
  }, onError);
}

exports.stringifyJSON = stringifyJSON;
/**
 * Builds `Witherable` instance for `Either` given `Monoid` for the left side
 *
 * @since 2.0.0
 */

function getWitherable(M) {
  var empty = left(M.empty);

  var compact = function compact(ma) {
    return isLeft(ma) ? ma : ma.right._tag === 'None' ? left(M.empty) : right(ma.right.value);
  };

  var separate = function separate(ma) {
    return isLeft(ma) ? {
      left: ma,
      right: ma
    } : isLeft(ma.right) ? {
      left: right(ma.right.left),
      right: empty
    } : {
      left: empty,
      right: right(ma.right.right)
    };
  };

  var partitionMap = function partitionMap(ma, f) {
    if (isLeft(ma)) {
      return {
        left: ma,
        right: ma
      };
    }

    var e = f(ma.right);
    return isLeft(e) ? {
      left: right(e.left),
      right: empty
    } : {
      left: empty,
      right: right(e.right)
    };
  };

  var partition = function partition(ma, p) {
    return isLeft(ma) ? {
      left: ma,
      right: ma
    } : p(ma.right) ? {
      left: empty,
      right: right(ma.right)
    } : {
      left: right(ma.right),
      right: empty
    };
  };

  var filterMap = function filterMap(ma, f) {
    if (isLeft(ma)) {
      return ma;
    }

    var ob = f(ma.right);
    return ob._tag === 'None' ? left(M.empty) : right(ob.value);
  };

  var filter = function filter(ma, predicate) {
    return isLeft(ma) ? ma : predicate(ma.right) ? ma : left(M.empty);
  };

  var wither = function wither(F) {
    var traverseF = exports.either.traverse(F);
    return function (ma, f) {
      return F.map(traverseF(ma, f), compact);
    };
  };

  var wilt = function wilt(F) {
    var traverseF = exports.either.traverse(F);
    return function (ma, f) {
      return F.map(traverseF(ma, f), separate);
    };
  };

  return {
    URI: exports.URI,
    _E: undefined,
    map: exports.either.map,
    compact: compact,
    separate: separate,
    filter: filter,
    filterMap: filterMap,
    partition: partition,
    partitionMap: partitionMap,
    traverse: exports.either.traverse,
    sequence: exports.either.sequence,
    reduce: exports.either.reduce,
    foldMap: exports.either.foldMap,
    reduceRight: exports.either.reduceRight,
    wither: wither,
    wilt: wilt
  };
}

exports.getWitherable = getWitherable;
/**
 * @since 2.0.0
 */

function getValidation(S) {
  return __assign(__assign({}, exports.either), {
    _E: undefined,
    ap: function ap(mab, ma) {
      return isLeft(mab) ? isLeft(ma) ? left(S.concat(mab.left, ma.left)) : mab : isLeft(ma) ? ma : right(mab.right(ma.right));
    },
    alt: function alt(fx, f) {
      if (isRight(fx)) {
        return fx;
      }

      var fy = f();
      return isLeft(fy) ? left(S.concat(fx.left, fy.left)) : fy;
    }
  });
}

exports.getValidation = getValidation;
/**
 * @since 2.0.0
 */

function getValidationSemigroup(SE, SA) {
  return {
    concat: function concat(fx, fy) {
      return isLeft(fx) ? isLeft(fy) ? left(SE.concat(fx.left, fy.left)) : fx : isLeft(fy) ? fy : right(SA.concat(fx.right, fy.right));
    }
  };
}

exports.getValidationSemigroup = getValidationSemigroup;
/**
 * @since 2.0.0
 */

function getValidationMonoid(SE, SA) {
  return {
    concat: getValidationSemigroup(SE, SA).concat,
    empty: right(SA.empty)
  };
}

exports.getValidationMonoid = getValidationMonoid;
/**
 * @since 2.0.0
 */

exports.either = {
  URI: exports.URI,
  map: function map(ma, f) {
    return isLeft(ma) ? ma : right(f(ma.right));
  },
  of: right,
  ap: function ap(mab, ma) {
    return isLeft(mab) ? mab : isLeft(ma) ? ma : right(mab.right(ma.right));
  },
  chain: function chain(ma, f) {
    return isLeft(ma) ? ma : f(ma.right);
  },
  reduce: function reduce(fa, b, f) {
    return isLeft(fa) ? b : f(b, fa.right);
  },
  foldMap: function foldMap(M) {
    return function (fa, f) {
      return isLeft(fa) ? M.empty : f(fa.right);
    };
  },
  reduceRight: function reduceRight(fa, b, f) {
    return isLeft(fa) ? b : f(fa.right, b);
  },
  traverse: function traverse(F) {
    return function (ma, f) {
      return isLeft(ma) ? F.of(left(ma.left)) : F.map(f(ma.right), right);
    };
  },
  sequence: function sequence(F) {
    return function (ma) {
      return isLeft(ma) ? F.of(left(ma.left)) : F.map(ma.right, right);
    };
  },
  bimap: function bimap(fea, f, g) {
    return isLeft(fea) ? left(f(fea.left)) : right(g(fea.right));
  },
  mapLeft: function mapLeft(fea, f) {
    return isLeft(fea) ? left(f(fea.left)) : fea;
  },
  alt: function alt(fx, fy) {
    return isLeft(fx) ? fy() : fx;
  },
  extend: function extend(wa, f) {
    return isLeft(wa) ? wa : right(f(wa));
  },
  chainRec: function chainRec(a, f) {
    return ChainRec_1.tailRec(f(a), function (e) {
      return isLeft(e) ? right(left(e.left)) : isLeft(e.right) ? left(f(e.right.left)) : right(right(e.right.right));
    });
  },
  throwError: left
};

var _a = pipeable_1.pipeable(exports.either),
    alt = _a.alt,
    ap = _a.ap,
    apFirst = _a.apFirst,
    apSecond = _a.apSecond,
    bimap = _a.bimap,
    chain = _a.chain,
    chainFirst = _a.chainFirst,
    duplicate = _a.duplicate,
    extend = _a.extend,
    flatten = _a.flatten,
    foldMap = _a.foldMap,
    map = _a.map,
    mapLeft = _a.mapLeft,
    reduce = _a.reduce,
    reduceRight = _a.reduceRight,
    fromOption = _a.fromOption,
    fromPredicate = _a.fromPredicate,
    filterOrElse = _a.filterOrElse;

exports.alt = alt;
exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.bimap = bimap;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.duplicate = duplicate;
exports.extend = extend;
exports.flatten = flatten;
exports.foldMap = foldMap;
exports.map = map;
exports.mapLeft = mapLeft;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.fromOption = fromOption;
exports.fromPredicate = fromPredicate;
exports.filterOrElse = filterOrElse;
/**
 * @since 2.6.0
 */

exports.chainW = chain;

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduceRight = exports.reduce = exports.map = exports.foldMap = exports.flatten = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.alt = exports.identity = exports.getEq = exports.getShow = exports.URI = void 0;

var ChainRec_1 = __webpack_require__(582);

var function_1 = __webpack_require__(564);

var pipeable_1 = __webpack_require__(560);
/**
 * @since 2.0.0
 */


exports.URI = 'Identity';
/**
 * @since 2.0.0
 */

exports.getShow = function_1.identity;
/**
 * @since 2.0.0
 */

exports.getEq = function_1.identity;
/**
 * @since 2.0.0
 */

exports.identity = {
  URI: exports.URI,
  map: function map(ma, f) {
    return f(ma);
  },
  of: function_1.identity,
  ap: function ap(mab, ma) {
    return mab(ma);
  },
  chain: function chain(ma, f) {
    return f(ma);
  },
  reduce: function reduce(fa, b, f) {
    return f(b, fa);
  },
  foldMap: function foldMap(_) {
    return function (fa, f) {
      return f(fa);
    };
  },
  reduceRight: function reduceRight(fa, b, f) {
    return f(fa, b);
  },
  traverse: function traverse(F) {
    return function (ta, f) {
      return F.map(f(ta), function_1.identity);
    };
  },
  sequence: function sequence(F) {
    return function (ta) {
      return F.map(ta, function_1.identity);
    };
  },
  alt: function_1.identity,
  extract: function_1.identity,
  extend: function extend(wa, f) {
    return f(wa);
  },
  chainRec: ChainRec_1.tailRec
};

var _a = pipeable_1.pipeable(exports.identity),
    alt = _a.alt,
    ap = _a.ap,
    apFirst = _a.apFirst,
    apSecond = _a.apSecond,
    chain = _a.chain,
    chainFirst = _a.chainFirst,
    duplicate = _a.duplicate,
    extend = _a.extend,
    flatten = _a.flatten,
    foldMap = _a.foldMap,
    map = _a.map,
    reduce = _a.reduce,
    reduceRight = _a.reduceRight;

exports.alt = alt;
exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.duplicate = duplicate;
exports.extend = extend;
exports.flatten = flatten;
exports.foldMap = foldMap;
exports.map = map;
exports.reduce = reduce;
exports.reduceRight = reduceRight;

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReaderM = void 0;

function getReaderM(M) {
  return {
    map: function map(ma, f) {
      return function (r) {
        return M.map(ma(r), f);
      };
    },
    of: function of(a) {
      return function () {
        return M.of(a);
      };
    },
    ap: function ap(mab, ma) {
      return function (r) {
        return M.ap(mab(r), ma(r));
      };
    },
    chain: function chain(ma, f) {
      return function (r) {
        return M.chain(ma(r), function (a) {
          return f(a)(r);
        });
      };
    },
    ask: function ask() {
      return M.of;
    },
    asks: function asks(f) {
      return function (r) {
        return M.map(M.of(r), f);
      };
    },
    local: function local(ma, f) {
      return function (q) {
        return ma(f(q));
      };
    },
    fromReader: function fromReader(ma) {
      return function (r) {
        return M.of(ma(r));
      };
    },
    fromM: function fromM(ma) {
      return function () {
        return ma;
      };
    }
  };
}

exports.getReaderM = getReaderM;

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.mapWithIndex = exports.map = exports.foldMapWithIndex = exports.foldMap = exports.flatten = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.readonlyNonEmptyArray = exports.unzip = exports.zip = exports.zipWith = exports.fold = exports.concat = exports.of = exports.filterWithIndex = exports.filter = exports.modifyAt = exports.updateAt = exports.insertAt = exports.sort = exports.init = exports.last = exports.groupBy = exports.groupSort = exports.group = exports.getEq = exports.getSemigroup = exports.max = exports.min = exports.reverse = exports.tail = exports.head = exports.getShow = exports.fromArray = exports.fromReadonlyArray = exports.snoc = exports.cons = exports.URI = void 0;

var Option_1 = __webpack_require__(566);

var pipeable_1 = __webpack_require__(560);

var RA = __webpack_require__(580);

var Semigroup_1 = __webpack_require__(602);
/**
 * @since 2.5.0
 */


exports.URI = 'ReadonlyNonEmptyArray';
/**
 * Append an element to the front of an array, creating a new non empty array
 *
 * @example
 * import { cons } from 'fp-ts/lib/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(cons(1, [2, 3, 4]), [1, 2, 3, 4])
 *
 * @since 2.5.0
 */

exports.cons = RA.cons;
/**
 * Append an element to the end of an array, creating a new non empty array
 *
 * @example
 * import { snoc } from 'fp-ts/lib/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(snoc([1, 2, 3], 4), [1, 2, 3, 4])
 *
 * @since 2.5.0
 */

exports.snoc = RA.snoc;
/**
 * Builds a `ReadonlyNonEmptyArray` from an array returning `none` if `as` is an empty array
 *
 * @since 2.5.0
 */

function fromReadonlyArray(as) {
  return RA.isNonEmpty(as) ? Option_1.some(as) : Option_1.none;
}

exports.fromReadonlyArray = fromReadonlyArray;
/**
 * @since 2.5.0
 */
// tslint:disable-next-line: readonly-array

function fromArray(as) {
  return fromReadonlyArray(RA.fromArray(as));
}

exports.fromArray = fromArray;
/**
 * @since 2.5.0
 */

exports.getShow = RA.getShow;
/**
 * @since 2.5.0
 */

function head(nea) {
  return nea[0];
}

exports.head = head;
/**
 * @since 2.5.0
 */

function tail(nea) {
  return nea.slice(1);
}

exports.tail = tail;
/**
 * @since 2.5.0
 */

exports.reverse = RA.reverse;
/**
 * @since 2.5.0
 */

function min(ord) {
  var S = Semigroup_1.getMeetSemigroup(ord);
  return function (nea) {
    return nea.reduce(S.concat);
  };
}

exports.min = min;
/**
 * @since 2.5.0
 */

function max(ord) {
  var S = Semigroup_1.getJoinSemigroup(ord);
  return function (nea) {
    return nea.reduce(S.concat);
  };
}

exports.max = max;
/**
 * Builds a `Semigroup` instance for `ReadonlyNonEmptyArray`
 *
 * @since 2.5.0
 */

function getSemigroup() {
  return {
    concat: concat
  };
}

exports.getSemigroup = getSemigroup;
/**
 * @example
 * import { getEq, cons } from 'fp-ts/lib/ReadonlyNonEmptyArray'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * const E = getEq(eqNumber)
 * assert.strictEqual(E.equals(cons(1, [2]), [1, 2]), true)
 * assert.strictEqual(E.equals(cons(1, [2]), [1, 3]), false)
 *
 * @since 2.5.0
 */

exports.getEq = RA.getEq;

function group(E) {
  return function (as) {
    var len = as.length;

    if (len === 0) {
      return RA.empty;
    } // tslint:disable-next-line: readonly-array


    var r = [];
    var head = as[0];
    var nea = [head];

    for (var i = 1; i < len; i++) {
      var x = as[i];

      if (E.equals(x, head)) {
        nea.push(x);
      } else {
        r.push(nea);
        head = x;
        nea = [head];
      }
    }

    r.push(nea);
    return r;
  };
}

exports.group = group;
/**
 * Sort and then group the elements of an array into non empty arrays.
 *
 * @example
 * import { cons, groupSort } from 'fp-ts/lib/ReadonlyNonEmptyArray'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * assert.deepStrictEqual(groupSort(ordNumber)([1, 2, 1, 1]), [cons(1, [1, 1]), cons(2, [])])
 *
 * @since 2.5.0
 */

function groupSort(O) {
  var sortO = RA.sort(O);
  var groupO = group(O);
  return function (as) {
    return groupO(sortO(as));
  };
}

exports.groupSort = groupSort;
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { cons, groupBy } from 'fp-ts/lib/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['foo', 'bar', 'foobar']), {
 *   '3': cons('foo', ['bar']),
 *   '6': cons('foobar', [])
 * })
 *
 * @since 2.5.0
 */

function groupBy(f) {
  return function (as) {
    var r = {};

    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
      var a = as_1[_i];
      var k = f(a);

      if (r.hasOwnProperty(k)) {
        r[k].push(a);
      } else {
        r[k] = [a];
      }
    }

    return r;
  };
}

exports.groupBy = groupBy;
/**
 * @since 2.5.0
 */

function last(nea) {
  return nea[nea.length - 1];
}

exports.last = last;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/lib/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.5.0
 */

function init(nea) {
  return nea.slice(0, -1);
}

exports.init = init;
/**
 * @since 2.5.0
 */

function sort(O) {
  return RA.sort(O);
}

exports.sort = sort;
/**
 * @since 2.5.0
 */

function insertAt(i, a) {
  return RA.insertAt(i, a);
}

exports.insertAt = insertAt;
/**
 * @since 2.5.0
 */

function updateAt(i, a) {
  return RA.updateAt(i, a);
}

exports.updateAt = updateAt;
/**
 * @since 2.5.0
 */

function modifyAt(i, f) {
  return RA.modifyAt(i, f);
}

exports.modifyAt = modifyAt;

function filter(predicate) {
  return filterWithIndex(function (_, a) {
    return predicate(a);
  });
}

exports.filter = filter;
/**
 * @since 2.5.0
 */

function filterWithIndex(predicate) {
  return function (nea) {
    return fromReadonlyArray(nea.filter(function (a, i) {
      return predicate(i, a);
    }));
  };
}

exports.filterWithIndex = filterWithIndex;
/**
 * @since 2.5.0
 */

exports.of = RA.of;

function concat(fx, fy) {
  return fx.concat(fy);
}

exports.concat = concat;
/**
 * @since 2.5.0
 */

function fold(S) {
  return function (fa) {
    return fa.reduce(S.concat);
  };
}

exports.fold = fold;
/**
 * @since 2.5.1
 */

exports.zipWith = RA.zipWith;
/**
 * @since 2.5.1
 */

exports.zip = RA.zip;
/**
 * @since 2.5.1
 */

exports.unzip = RA.unzip;
/**
 * @since 2.5.0
 */

exports.readonlyNonEmptyArray = {
  URI: exports.URI,
  map: RA.readonlyArray.map,
  mapWithIndex: RA.readonlyArray.mapWithIndex,
  of: exports.of,
  ap: RA.readonlyArray.ap,
  chain: RA.readonlyArray.chain,
  extend: RA.readonlyArray.extend,
  extract: head,
  reduce: RA.readonlyArray.reduce,
  foldMap: RA.readonlyArray.foldMap,
  reduceRight: RA.readonlyArray.reduceRight,
  traverse: RA.readonlyArray.traverse,
  sequence: RA.readonlyArray.sequence,
  reduceWithIndex: RA.readonlyArray.reduceWithIndex,
  foldMapWithIndex: RA.readonlyArray.foldMapWithIndex,
  reduceRightWithIndex: RA.readonlyArray.reduceRightWithIndex,
  traverseWithIndex: RA.readonlyArray.traverseWithIndex,
  alt: function alt(fx, fy) {
    return concat(fx, fy());
  }
};

var _a = pipeable_1.pipeable(exports.readonlyNonEmptyArray),
    ap = _a.ap,
    apFirst = _a.apFirst,
    apSecond = _a.apSecond,
    chain = _a.chain,
    chainFirst = _a.chainFirst,
    duplicate = _a.duplicate,
    extend = _a.extend,
    flatten = _a.flatten,
    map = _a.map,
    mapWithIndex = _a.mapWithIndex,
    reduce = _a.reduce,
    reduceRight = _a.reduceRight,
    reduceRightWithIndex = _a.reduceRightWithIndex,
    reduceWithIndex = _a.reduceWithIndex;

exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.duplicate = duplicate;
exports.extend = extend;
exports.flatten = flatten;
exports.map = map;
exports.mapWithIndex = mapWithIndex;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reduceRightWithIndex = reduceRightWithIndex;
exports.reduceWithIndex = reduceWithIndex;

var foldMapWithIndex = function foldMapWithIndex(S) {
  return function (f) {
    return function (fa) {
      return fa.slice(1).reduce(function (s, a, i) {
        return S.concat(s, f(i + 1, a));
      }, f(0, fa[0]));
    };
  };
};

exports.foldMapWithIndex = foldMapWithIndex;

var foldMap = function foldMap(S) {
  return function (f) {
    return function (fa) {
      return fa.slice(1).reduce(function (s, a) {
        return S.concat(s, f(a));
      }, f(fa[0]));
    };
  };
};

exports.foldMap = foldMap;

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntercalateSemigroup = exports.semigroupVoid = exports.semigroupString = exports.semigroupProduct = exports.semigroupSum = exports.semigroupAny = exports.semigroupAll = exports.getObjectSemigroup = exports.getJoinSemigroup = exports.getMeetSemigroup = exports.getStructSemigroup = exports.getFunctionSemigroup = exports.getDualSemigroup = exports.getTupleSemigroup = exports.getLastSemigroup = exports.getFirstSemigroup = exports.fold = void 0;
/**
 * @since 2.0.0
 */

var function_1 = __webpack_require__(564);

var Ord_1 = __webpack_require__(581);
/**
 * @since 2.0.0
 */


function fold(S) {
  return function (a, as) {
    return as.reduce(S.concat, a);
  };
}

exports.fold = fold;
/**
 * @since 2.0.0
 */

function getFirstSemigroup() {
  return {
    concat: function_1.identity
  };
}

exports.getFirstSemigroup = getFirstSemigroup;
/**
 * @since 2.0.0
 */

function getLastSemigroup() {
  return {
    concat: function concat(_, y) {
      return y;
    }
  };
}

exports.getLastSemigroup = getLastSemigroup;
/**
 * Given a tuple of semigroups returns a semigroup for the tuple
 *
 * @example
 * import { getTupleSemigroup, semigroupString, semigroupSum, semigroupAll } from 'fp-ts/lib/Semigroup'
 *
 * const S1 = getTupleSemigroup(semigroupString, semigroupSum)
 * assert.deepStrictEqual(S1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const S2 = getTupleSemigroup(semigroupString, semigroupSum, semigroupAll)
 * assert.deepStrictEqual(S2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @since 2.0.0
 */

function getTupleSemigroup() {
  var semigroups = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    semigroups[_i] = arguments[_i];
  }

  return {
    concat: function concat(x, y) {
      return semigroups.map(function (s, i) {
        return s.concat(x[i], y[i]);
      });
    }
  };
}

exports.getTupleSemigroup = getTupleSemigroup;
/**
 * The dual of a `Semigroup`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { getDualSemigroup, semigroupString } from 'fp-ts/lib/Semigroup'
 *
 * assert.deepStrictEqual(getDualSemigroup(semigroupString).concat('a', 'b'), 'ba')
 *
 * @since 2.0.0
 */

function getDualSemigroup(S) {
  return {
    concat: function concat(x, y) {
      return S.concat(y, x);
    }
  };
}

exports.getDualSemigroup = getDualSemigroup;
/**
 * @since 2.0.0
 */

function getFunctionSemigroup(S) {
  return function () {
    return {
      concat: function concat(f, g) {
        return function (a) {
          return S.concat(f(a), g(a));
        };
      }
    };
  };
}

exports.getFunctionSemigroup = getFunctionSemigroup;
/**
 * @since 2.0.0
 */

function getStructSemigroup(semigroups) {
  return {
    concat: function concat(x, y) {
      var r = {};

      for (var _i = 0, _a = Object.keys(semigroups); _i < _a.length; _i++) {
        var key = _a[_i];
        r[key] = semigroups[key].concat(x[key], y[key]);
      }

      return r;
    }
  };
}

exports.getStructSemigroup = getStructSemigroup;
/**
 * @since 2.0.0
 */

function getMeetSemigroup(O) {
  return {
    concat: Ord_1.min(O)
  };
}

exports.getMeetSemigroup = getMeetSemigroup;
/**
 * @since 2.0.0
 */

function getJoinSemigroup(O) {
  return {
    concat: Ord_1.max(O)
  };
}

exports.getJoinSemigroup = getJoinSemigroup;
/**
 * Returns a `Semigroup` instance for objects preserving their type
 *
 * @example
 * import { getObjectSemigroup } from 'fp-ts/lib/Semigroup'
 *
 * interface Person {
 *   name: string
 *   age: number
 * }
 *
 * const S = getObjectSemigroup<Person>()
 * assert.deepStrictEqual(S.concat({ name: 'name', age: 23 }, { name: 'name', age: 24 }), { name: 'name', age: 24 })
 *
 * @since 2.0.0
 */

function getObjectSemigroup() {
  return {
    concat: function concat(x, y) {
      return Object.assign({}, x, y);
    }
  };
}

exports.getObjectSemigroup = getObjectSemigroup;
/**
 * Boolean semigroup under conjunction
 * @since 2.0.0
 */

exports.semigroupAll = {
  concat: function concat(x, y) {
    return x && y;
  }
};
/**
 * Boolean semigroup under disjunction
 * @since 2.0.0
 */

exports.semigroupAny = {
  concat: function concat(x, y) {
    return x || y;
  }
};
/**
 * Number `Semigroup` under addition
 * @since 2.0.0
 */

exports.semigroupSum = {
  concat: function concat(x, y) {
    return x + y;
  }
};
/**
 * Number `Semigroup` under multiplication
 * @since 2.0.0
 */

exports.semigroupProduct = {
  concat: function concat(x, y) {
    return x * y;
  }
};
/**
 * @since 2.0.0
 */

exports.semigroupString = {
  concat: function concat(x, y) {
    return x + y;
  }
};
/**
 * @since 2.0.0
 */

exports.semigroupVoid = {
  concat: function concat() {
    return undefined;
  }
};
/**
 * You can glue items between and stay associative
 *
 * @example
 * import { getIntercalateSemigroup, semigroupString } from 'fp-ts/lib/Semigroup'
 *
 * const S = getIntercalateSemigroup(' ')(semigroupString)
 *
 * assert.strictEqual(S.concat('a', 'b'), 'a b')
 * assert.strictEqual(S.concat(S.concat('a', 'b'), 'c'), S.concat('a', S.concat('b', 'c')))
 *
 * @since 2.5.0
 */

function getIntercalateSemigroup(a) {
  return function (S) {
    return {
      concat: function concat(x, y) {
        return S.concat(x, S.concat(a, y));
      }
    };
  };
}

exports.getIntercalateSemigroup = getIntercalateSemigroup;

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separate = exports.compact = exports.reduceRight = exports.reduce = exports.partitionMap = exports.partition = exports.foldMap = exports.filterMap = exports.filter = exports.readonlyRecord = exports.elem = exports.some = exports.every = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.empty = exports.lookup = exports.getMonoid = exports.getEq = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.hasOwnProperty = exports.insertAt = exports.toUnfoldable = exports.toReadonlyArray = exports.collect = exports.keys = exports.isEmpty = exports.size = exports.getShow = exports.toRecord = exports.fromRecord = exports.URI = void 0;

var Eq_1 = __webpack_require__(604);

var function_1 = __webpack_require__(564);

var Option_1 = __webpack_require__(566);

var pipeable_1 = __webpack_require__(560);
/**
 * @since 2.5.0
 */


exports.URI = 'ReadonlyRecord';
/**
 * @since 2.5.0
 */

function fromRecord(r) {
  return Object.assign({}, r);
}

exports.fromRecord = fromRecord;
/**
 * @since 2.5.0
 */

function toRecord(r) {
  return Object.assign({}, r);
}

exports.toRecord = toRecord;
/**
 * @since 2.5.0
 */

function getShow(S) {
  return {
    show: function show(r) {
      var elements = collect(function (k, a) {
        return JSON.stringify(k) + ": " + S.show(a);
      })(r).join(', ');
      return elements === '' ? '{}' : "{ " + elements + " }";
    }
  };
}

exports.getShow = getShow;
/**
 * Calculate the number of key/value pairs in a record
 *
 * @since 2.5.0
 */

function size(r) {
  return Object.keys(r).length;
}

exports.size = size;
/**
 * Test whether a record is empty
 *
 * @since 2.5.0
 */

function isEmpty(r) {
  return Object.keys(r).length === 0;
}

exports.isEmpty = isEmpty;
/**
 * @since 2.5.0
 */

function keys(r) {
  return Object.keys(r).sort();
}

exports.keys = keys;
/**
 * Map a record into an array
 *
 * @example
 * import {collect} from 'fp-ts/lib/ReadonlyRecord'
 *
 * const x: { a: string, b: boolean } = { a: 'foo', b: false }
 * assert.deepStrictEqual(
 *   collect((key, val) => ({key: key, value: val}))(x),
 *   [{key: 'a', value: 'foo'}, {key: 'b', value: false}]
 * )
 *
 * @since 2.5.0
 */

function collect(f) {
  return function (r) {
    // tslint:disable-next-line: readonly-array
    var out = [];

    for (var _i = 0, _a = keys(r); _i < _a.length; _i++) {
      var key = _a[_i];
      out.push(f(key, r[key]));
    }

    return out;
  };
}

exports.collect = collect;
/**
 * @since 2.5.0
 */

exports.toReadonlyArray = collect(function (k, a) {
  return [k, a];
});

function toUnfoldable(U) {
  return function (r) {
    var arr = exports.toReadonlyArray(r);
    var len = arr.length;
    return U.unfold(0, function (b) {
      return b < len ? Option_1.some([arr[b], b + 1]) : Option_1.none;
    });
  };
}

exports.toUnfoldable = toUnfoldable;

function insertAt(k, a) {
  return function (r) {
    if (r[k] === a) {
      return r;
    }

    var out = Object.assign({}, r);
    out[k] = a;
    return out;
  };
}

exports.insertAt = insertAt;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @since 2.5.0
 */

function hasOwnProperty(k, r) {
  return _hasOwnProperty.call(r, k);
}

exports.hasOwnProperty = hasOwnProperty;

function deleteAt(k) {
  return function (r) {
    if (!_hasOwnProperty.call(r, k)) {
      return r;
    }

    var out = Object.assign({}, r);
    delete out[k];
    return out;
  };
}

exports.deleteAt = deleteAt;
/**
 * @since 2.5.0
 */

function updateAt(k, a) {
  return function (r) {
    if (!hasOwnProperty(k, r)) {
      return Option_1.none;
    }

    if (r[k] === a) {
      return Option_1.some(r);
    }

    var out = Object.assign({}, r);
    out[k] = a;
    return Option_1.some(out);
  };
}

exports.updateAt = updateAt;
/**
 * @since 2.5.0
 */

function modifyAt(k, f) {
  return function (r) {
    if (!hasOwnProperty(k, r)) {
      return Option_1.none;
    }

    var out = Object.assign({}, r);
    out[k] = f(r[k]);
    return Option_1.some(out);
  };
}

exports.modifyAt = modifyAt;

function pop(k) {
  var deleteAtk = deleteAt(k);
  return function (r) {
    var oa = lookup(k, r);
    return Option_1.isNone(oa) ? Option_1.none : Option_1.some([oa.value, deleteAtk(r)]);
  };
}

exports.pop = pop;
/**
 * Test whether one record contains all of the keys and values contained in another record
 *
 * @since 2.5.0
 */

function isSubrecord(E) {
  return function (x, y) {
    for (var k in x) {
      if (!_hasOwnProperty.call(y, k) || !E.equals(x[k], y[k])) {
        return false;
      }
    }

    return true;
  };
}

exports.isSubrecord = isSubrecord;

function getEq(E) {
  var isSubrecordE = isSubrecord(E);
  return Eq_1.fromEquals(function (x, y) {
    return isSubrecordE(x, y) && isSubrecordE(y, x);
  });
}

exports.getEq = getEq;

function getMonoid(S) {
  return {
    concat: function concat(x, y) {
      if (x === exports.empty) {
        return y;
      }

      if (y === exports.empty) {
        return x;
      }

      var keys = Object.keys(y);
      var len = keys.length;

      if (len === 0) {
        return x;
      }

      var r = __assign({}, x);

      for (var i = 0; i < len; i++) {
        var k = keys[i];
        r[k] = _hasOwnProperty.call(x, k) ? S.concat(x[k], y[k]) : y[k];
      }

      return r;
    },
    empty: exports.empty
  };
}

exports.getMonoid = getMonoid;
/**
 * Lookup the value for a key in a record
 *
 * @since 2.5.0
 */

function lookup(k, r) {
  return _hasOwnProperty.call(r, k) ? Option_1.some(r[k]) : Option_1.none;
}

exports.lookup = lookup;
/**
 * @since 2.5.0
 */

exports.empty = {};

function mapWithIndex(f) {
  return function (fa) {
    return exports.readonlyRecord.mapWithIndex(fa, f);
  };
}

exports.mapWithIndex = mapWithIndex;

function map(f) {
  return mapWithIndex(function (_, a) {
    return f(a);
  });
}

exports.map = map;

function reduceWithIndex(b, f) {
  return function (fa) {
    return exports.readonlyRecord.reduceWithIndex(fa, b, f);
  };
}

exports.reduceWithIndex = reduceWithIndex;

function foldMapWithIndex(M) {
  var foldMapWithIndexM = exports.readonlyRecord.foldMapWithIndex(M);
  return function (f) {
    return function (fa) {
      return foldMapWithIndexM(fa, f);
    };
  };
}

exports.foldMapWithIndex = foldMapWithIndex;

function reduceRightWithIndex(b, f) {
  return function (fa) {
    return exports.readonlyRecord.reduceRightWithIndex(fa, b, f);
  };
}

exports.reduceRightWithIndex = reduceRightWithIndex;
/**
 * Create a record with one key/value pair
 *
 * @since 2.5.0
 */

function singleton(k, a) {
  var _a;

  return _a = {}, _a[k] = a, _a;
}

exports.singleton = singleton;

function traverseWithIndex(F) {
  var traverseWithIndexF = exports.readonlyRecord.traverseWithIndex(F);
  return function (f) {
    return function (ta) {
      return traverseWithIndexF(ta, f);
    };
  };
}

exports.traverseWithIndex = traverseWithIndex;

function traverse(F) {
  var traverseWithIndexF = traverseWithIndex(F);
  return function (f) {
    return traverseWithIndexF(function (_, a) {
      return f(a);
    });
  };
}

exports.traverse = traverse;

function sequence(F) {
  return traverseWithIndex(F)(function (_, a) {
    return a;
  });
}

exports.sequence = sequence;

function partitionMapWithIndex(f) {
  return function (fa) {
    return exports.readonlyRecord.partitionMapWithIndex(fa, f);
  };
}

exports.partitionMapWithIndex = partitionMapWithIndex;

function partitionWithIndex(predicateWithIndex) {
  return function (fa) {
    return exports.readonlyRecord.partitionWithIndex(fa, predicateWithIndex);
  };
}

exports.partitionWithIndex = partitionWithIndex;

function filterMapWithIndex(f) {
  return function (fa) {
    return exports.readonlyRecord.filterMapWithIndex(fa, f);
  };
}

exports.filterMapWithIndex = filterMapWithIndex;

function filterWithIndex(predicateWithIndex) {
  return function (fa) {
    return exports.readonlyRecord.filterWithIndex(fa, predicateWithIndex);
  };
}

exports.filterWithIndex = filterWithIndex;

function fromFoldable(M, F) {
  var fromFoldableMapM = fromFoldableMap(M, F);
  return function (fka) {
    return fromFoldableMapM(fka, function_1.identity);
  };
}

exports.fromFoldable = fromFoldable;

function fromFoldableMap(M, F) {
  return function (ta, f) {
    return F.reduce(ta, {}, function (r, a) {
      var _a = f(a),
          k = _a[0],
          b = _a[1];

      r[k] = _hasOwnProperty.call(r, k) ? M.concat(r[k], b) : b;
      return r;
    });
  };
}

exports.fromFoldableMap = fromFoldableMap;
/**
 * @since 2.5.0
 */

function every(predicate) {
  return function (r) {
    for (var k in r) {
      if (!predicate(r[k])) {
        return false;
      }
    }

    return true;
  };
}

exports.every = every;
/**
 * @since 2.5.0
 */

function some(predicate) {
  return function (r) {
    for (var k in r) {
      if (predicate(r[k])) {
        return true;
      }
    }

    return false;
  };
}

exports.some = some;
/**
 * @since 2.5.0
 */

function elem(E) {
  return function (a, fa) {
    for (var k in fa) {
      if (E.equals(fa[k], a)) {
        return true;
      }
    }

    return false;
  };
}

exports.elem = elem;
/**
 * @since 2.5.0
 */

exports.readonlyRecord = {
  URI: exports.URI,
  map: function map(fa, f) {
    return exports.readonlyRecord.mapWithIndex(fa, function (_, a) {
      return f(a);
    });
  },
  reduce: function reduce(fa, b, f) {
    return exports.readonlyRecord.reduceWithIndex(fa, b, function (_, b, a) {
      return f(b, a);
    });
  },
  foldMap: function foldMap(M) {
    var foldMapWithIndexM = exports.readonlyRecord.foldMapWithIndex(M);
    return function (fa, f) {
      return foldMapWithIndexM(fa, function (_, a) {
        return f(a);
      });
    };
  },
  reduceRight: function reduceRight(fa, b, f) {
    return exports.readonlyRecord.reduceRightWithIndex(fa, b, function (_, a, b) {
      return f(a, b);
    });
  },
  traverse: function traverse(F) {
    var traverseWithIndexF = exports.readonlyRecord.traverseWithIndex(F);
    return function (ta, f) {
      return traverseWithIndexF(ta, function (_, a) {
        return f(a);
      });
    };
  },
  sequence: sequence,
  compact: function compact(fa) {
    var r = {};
    var keys = Object.keys(fa);

    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
      var key = keys_1[_i];
      var optionA = fa[key];

      if (Option_1.isSome(optionA)) {
        r[key] = optionA.value;
      }
    }

    return r;
  },
  separate: function separate(fa) {
    var left = {};
    var right = {};
    var keys = Object.keys(fa);

    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
      var key = keys_2[_i];
      var e = fa[key];

      switch (e._tag) {
        case 'Left':
          left[key] = e.left;
          break;

        case 'Right':
          right[key] = e.right;
          break;
      }
    }

    return {
      left: left,
      right: right
    };
  },
  filter: function filter(fa, predicate) {
    return exports.readonlyRecord.filterWithIndex(fa, function (_, a) {
      return predicate(a);
    });
  },
  filterMap: function filterMap(fa, f) {
    return exports.readonlyRecord.filterMapWithIndex(fa, function (_, a) {
      return f(a);
    });
  },
  partition: function partition(fa, predicate) {
    return exports.readonlyRecord.partitionWithIndex(fa, function (_, a) {
      return predicate(a);
    });
  },
  partitionMap: function partitionMap(fa, f) {
    return exports.readonlyRecord.partitionMapWithIndex(fa, function (_, a) {
      return f(a);
    });
  },
  wither: function wither(F) {
    var traverseF = exports.readonlyRecord.traverse(F);
    return function (wa, f) {
      return F.map(traverseF(wa, f), exports.readonlyRecord.compact);
    };
  },
  wilt: function wilt(F) {
    var traverseF = exports.readonlyRecord.traverse(F);
    return function (wa, f) {
      return F.map(traverseF(wa, f), exports.readonlyRecord.separate);
    };
  },
  mapWithIndex: function mapWithIndex(fa, f) {
    var out = {};
    var keys = Object.keys(fa);

    for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
      var key = keys_3[_i];
      out[key] = f(key, fa[key]);
    }

    return out;
  },
  reduceWithIndex: function reduceWithIndex(fa, b, f) {
    var out = b;
    var keys = Object.keys(fa).sort();
    var len = keys.length;

    for (var i = 0; i < len; i++) {
      var k = keys[i];
      out = f(k, out, fa[k]);
    }

    return out;
  },
  foldMapWithIndex: function foldMapWithIndex(M) {
    return function (fa, f) {
      var out = M.empty;
      var keys = Object.keys(fa).sort();
      var len = keys.length;

      for (var i = 0; i < len; i++) {
        var k = keys[i];
        out = M.concat(out, f(k, fa[k]));
      }

      return out;
    };
  },
  reduceRightWithIndex: function reduceRightWithIndex(fa, b, f) {
    var out = b;
    var keys = Object.keys(fa).sort();
    var len = keys.length;

    for (var i = len - 1; i >= 0; i--) {
      var k = keys[i];
      out = f(k, fa[k], out);
    }

    return out;
  },
  traverseWithIndex: function traverseWithIndex(F) {
    return function (ta, f) {
      var keys = Object.keys(ta);

      if (keys.length === 0) {
        return F.of(exports.empty);
      }

      var fr = F.of({});

      var _loop_1 = function _loop_1(key) {
        fr = F.ap(F.map(fr, function (r) {
          return function (b) {
            r[key] = b;
            return r;
          };
        }), f(key, ta[key]));
      };

      for (var _i = 0, keys_4 = keys; _i < keys_4.length; _i++) {
        var key = keys_4[_i];

        _loop_1(key);
      }

      return fr;
    };
  },
  partitionMapWithIndex: function partitionMapWithIndex(fa, f) {
    var left = {};
    var right = {};
    var keys = Object.keys(fa);

    for (var _i = 0, keys_5 = keys; _i < keys_5.length; _i++) {
      var key = keys_5[_i];
      var e = f(key, fa[key]);

      switch (e._tag) {
        case 'Left':
          left[key] = e.left;
          break;

        case 'Right':
          right[key] = e.right;
          break;
      }
    }

    return {
      left: left,
      right: right
    };
  },
  partitionWithIndex: function partitionWithIndex(fa, predicateWithIndex) {
    var left = {};
    var right = {};
    var keys = Object.keys(fa);

    for (var _i = 0, keys_6 = keys; _i < keys_6.length; _i++) {
      var key = keys_6[_i];
      var a = fa[key];

      if (predicateWithIndex(key, a)) {
        right[key] = a;
      } else {
        left[key] = a;
      }
    }

    return {
      left: left,
      right: right
    };
  },
  filterMapWithIndex: function filterMapWithIndex(fa, f) {
    var r = {};
    var keys = Object.keys(fa);

    for (var _i = 0, keys_7 = keys; _i < keys_7.length; _i++) {
      var key = keys_7[_i];
      var optionB = f(key, fa[key]);

      if (Option_1.isSome(optionB)) {
        r[key] = optionB.value;
      }
    }

    return r;
  },
  filterWithIndex: function filterWithIndex(fa, predicateWithIndex) {
    var out = {};
    var changed = false;

    for (var key in fa) {
      if (_hasOwnProperty.call(fa, key)) {
        var a = fa[key];

        if (predicateWithIndex(key, a)) {
          out[key] = a;
        } else {
          changed = true;
        }
      }
    }

    return changed ? out : fa;
  }
};

var _a = pipeable_1.pipeable(exports.readonlyRecord),
    filter = _a.filter,
    filterMap = _a.filterMap,
    foldMap = _a.foldMap,
    partition = _a.partition,
    partitionMap = _a.partitionMap,
    reduce = _a.reduce,
    reduceRight = _a.reduceRight,
    compact = _a.compact,
    separate = _a.separate;

exports.filter = filter;
exports.filterMap = filterMap;
exports.foldMap = foldMap;
exports.partition = partition;
exports.partitionMap = partitionMap;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.compact = compact;
exports.separate = separate;

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonoid = exports.eqDate = exports.contramap = exports.eq = exports.getTupleEq = exports.getStructEq = exports.eqBoolean = exports.eqNumber = exports.eqString = exports.strictEqual = exports.eqStrict = exports.fromEquals = exports.URI = void 0;

var pipeable_1 = __webpack_require__(560);
/**
 * @since 2.0.0
 */


exports.URI = 'Eq';
/**
 * @since 2.0.0
 */

function fromEquals(_equals) {
  return {
    equals: function equals(x, y) {
      return x === y || _equals(x, y);
    }
  };
}

exports.fromEquals = fromEquals;
/**
 * @since 2.5.0
 */

exports.eqStrict = {
  // tslint:disable-next-line: deprecation
  equals: strictEqual
};
/**
 * Use `eqStrict` instead
 *
 * @since 2.0.0
 * @deprecated
 */

function strictEqual(a, b) {
  return a === b;
}

exports.strictEqual = strictEqual;
/**
 * @since 2.0.0
 */

exports.eqString = exports.eqStrict;
/**
 * @since 2.0.0
 */

exports.eqNumber = exports.eqStrict;
/**
 * @since 2.0.0
 */

exports.eqBoolean = exports.eqStrict;
/**
 * @since 2.0.0
 */

function getStructEq(eqs) {
  return fromEquals(function (x, y) {
    for (var k in eqs) {
      if (!eqs[k].equals(x[k], y[k])) {
        return false;
      }
    }

    return true;
  });
}

exports.getStructEq = getStructEq;
/**
 * Given a tuple of `Eq`s returns a `Eq` for the tuple
 *
 * @example
 * import { getTupleEq, eqString, eqNumber, eqBoolean } from 'fp-ts/lib/Eq'
 *
 * const E = getTupleEq(eqString, eqNumber, eqBoolean)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, true]), true)
 * assert.strictEqual(E.equals(['a', 1, true], ['b', 1, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 2, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, false]), false)
 *
 * @since 2.0.0
 */

function getTupleEq() {
  var eqs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    eqs[_i] = arguments[_i];
  }

  return fromEquals(function (x, y) {
    return eqs.every(function (E, i) {
      return E.equals(x[i], y[i]);
    });
  });
}

exports.getTupleEq = getTupleEq;
/**
 * @since 2.0.0
 */

exports.eq = {
  URI: exports.URI,
  contramap: function contramap(fa, f) {
    return fromEquals(function (x, y) {
      return fa.equals(f(x), f(y));
    });
  }
};
var contramap = pipeable_1.pipeable(exports.eq).contramap;
exports.contramap = contramap;
/**
 * @since 2.0.0
 */

exports.eqDate = exports.eq.contramap(exports.eqNumber, function (date) {
  return date.valueOf();
});
var empty = {
  equals: function equals() {
    return true;
  }
};
/**
 * @since 2.6.0
 */

function getMonoid() {
  return {
    concat: function concat(x, y) {
      return fromEquals(function (a, b) {
        return x.equals(a, b) && y.equals(a, b);
      });
    },
    empty: empty
  };
}

exports.getMonoid = getMonoid;

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ dropLast; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ flatten; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ groupBy; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ head; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ repeat; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ sortBy; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ tail; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ values; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ zip; });

// UNUSED EXPORTS: F, T, add, adjust, all, allPass, always, and, any, anyPass, append, applySpec, assoc, assocPath, both, chain, clamp, clone, complement, compose, concat, cond, converge, curry, curryN, dec, defaultTo, difference, dissoc, divide, drop, either, endsWith, equals, filter, find, findIndex, findLast, findLastIndex, flip, forEach, fromPairs, groupWith, has, identical, identity, ifElse, inc, includes, indexBy, indexOf, init, intersection, intersperse, is, isEmpty, isNil, join, keys, last, lastIndexOf, length, lens, lensIndex, lensPath, lensProp, map, match, mathMod, max, maxBy, maxByFn, mean, median, merge, min, minBy, minByFn, modulo, multiply, negate, none, not, nth, omit, over, partial, path, pathOr, paths, pick, pickAll, pipe, pluck, prepend, product, prop, propEq, propIs, propOr, range, reduce, reject, replace, reverse, set, slice, sort, split, splitEvery, startsWith, subtract, sum, symmetricDifference, take, takeLast, tap, test, times, toLower, toPairs, toString, toUpper, transpose, trim, type, uniq, uniqWith, update, view, when, without, xor, zipObj

// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(59);

// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/rambda/dist/rambda.esm.js





function F() {
  return false;
}

function T() {
  return true;
}

function add(a, b) {
  if (arguments.length === 1) return function (_b) {
    return add(a, _b);
  };
  return Number(a) + Number(b);
}

function curry(fn) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function () {
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    return function (rest) {
      return rest.length >= fn.length ? fn.apply(void 0, _toConsumableArray(rest)) : curry(fn, rest);
    }([].concat(_toConsumableArray(args), _args));
  };
}

function adjustFn(index, replaceFn, list) {
  var actualIndex = index < 0 ? list.length + index : index;
  if (index >= list.length || actualIndex < 0) return list;
  var clone = list.slice();
  clone[actualIndex] = replaceFn(clone[actualIndex]);
  return clone;
}

var adjust = curry(adjustFn);

function rambda_esm_all(predicate, list) {
  if (arguments.length === 1) return function (_list) {
    return rambda_esm_all(predicate, _list);
  };

  for (var i = 0; i < list.length; i++) {
    if (!predicate(list[i], i)) return false;
  }

  return true;
}

function allPass(predicates) {
  return function (input) {
    var counter = 0;

    while (counter < predicates.length) {
      if (!predicates[counter](input)) {
        return false;
      }

      counter++;
    }

    return true;
  };
}

function always(x) {
  return function () {
    return x;
  };
}

function and(a, b) {
  if (arguments.length === 1) return function (_b) {
    return and(a, _b);
  };
  return a && b;
}

function any(predicate, list) {
  if (arguments.length === 1) return function (_list) {
    return any(predicate, _list);
  };
  var counter = 0;

  while (counter < list.length) {
    if (predicate(list[counter], counter)) {
      return true;
    }

    counter++;
  }

  return false;
}

function anyPass(predicates) {
  return function (input) {
    var counter = 0;

    while (counter < predicates.length) {
      if (predicates[counter](input)) {
        return true;
      }

      counter++;
    }

    return false;
  };
}

function append(x, listOrString) {
  if (arguments.length === 1) return function (_listOrString) {
    return append(x, _listOrString);
  };
  if (typeof listOrString === 'string') return "".concat(listOrString).concat(x);
  var clone = listOrString.slice();
  clone.push(x);
  return clone;
}

function __findHighestArity(spec) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  for (var key in spec) {
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue;

    if (Object(esm_typeof["a" /* default */])(spec[key]) === 'object') {
      max = Math.max(max, __findHighestArity(spec[key]));
    }

    if (typeof spec[key] === 'function') {
      max = Math.max(max, spec[key].length);
    }
  }

  return max;
}

function __filterUndefined() {
  var defined = [];
  var i = 0;
  var l = arguments.length;

  while (i < l) {
    if (typeof arguments[i] === 'undefined') break;
    defined[i] = arguments[i];
    i++;
  }

  return defined;
}

function __applySpecWithArity(spec, arity, cache) {
  var remaining = arity - cache.length;
  if (remaining === 1) return function (x) {
    return __applySpecWithArity(spec, arity, __filterUndefined.apply(void 0, _toConsumableArray(cache).concat([x])));
  };
  if (remaining === 2) return function (x, y) {
    return __applySpecWithArity(spec, arity, __filterUndefined.apply(void 0, _toConsumableArray(cache).concat([x, y])));
  };
  if (remaining === 3) return function (x, y, z) {
    return __applySpecWithArity(spec, arity, __filterUndefined.apply(void 0, _toConsumableArray(cache).concat([x, y, z])));
  };
  if (remaining === 4) return function (x, y, z, a) {
    return __applySpecWithArity(spec, arity, __filterUndefined.apply(void 0, _toConsumableArray(cache).concat([x, y, z, a])));
  };
  if (remaining > 4) return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return __applySpecWithArity(spec, arity, __filterUndefined.apply(void 0, _toConsumableArray(cache).concat(args)));
  };

  if (Array.isArray(spec)) {
    var _ret = [];
    var i = 0;
    var l = spec.length;

    for (; i < l; i++) {
      if (Object(esm_typeof["a" /* default */])(spec[i]) === 'object' || Array.isArray(spec[i])) {
        _ret[i] = __applySpecWithArity(spec[i], arity, cache);
      }

      if (typeof spec[i] === 'function') {
        _ret[i] = spec[i].apply(spec, _toConsumableArray(cache));
      }
    }

    return _ret;
  }

  var ret = {};

  for (var key in spec) {
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue;

    if (Object(esm_typeof["a" /* default */])(spec[key]) === 'object') {
      ret[key] = __applySpecWithArity(spec[key], arity, cache);
      continue;
    }

    if (typeof spec[key] === 'function') {
      ret[key] = spec[key].apply(spec, _toConsumableArray(cache));
    }
  }

  return ret;
}

function applySpec(spec) {
  var arity = __findHighestArity(spec);

  if (arity === 0) {
    return function () {
      return {};
    };
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  var toReturn = __applySpecWithArity(spec, arity, args);

  return toReturn;
}

function assocFn(prop, newValue, obj) {
  return Object.assign({}, obj, _defineProperty({}, prop, newValue));
}

var assoc = curry(assocFn);

function _isInteger(n) {
  return n << 0 === n;
}

var _isInteger$1 = Number.isInteger || _isInteger;

function assocPathFn(list, newValue, input) {
  var pathArrValue = typeof list === 'string' ? list.split('.') : list;

  if (pathArrValue.length === 0) {
    return newValue;
  }

  var index = pathArrValue[0];

  if (pathArrValue.length > 1) {
    var condition = Object(esm_typeof["a" /* default */])(input) !== 'object' || input === null || !input.hasOwnProperty(index);
    var nextinput = condition ? _isInteger(parseInt(pathArrValue[1], 10)) ? [] : {} : input[index];
    newValue = assocPathFn(Array.prototype.slice.call(pathArrValue, 1), newValue, nextinput);
  }

  if (_isInteger(parseInt(index, 10)) && Array.isArray(input)) {
    var arr = input.slice();
    arr[index] = newValue;
    return arr;
  }

  return assoc(index, newValue, input);
}

var assocPath = curry(assocPathFn);

function both(f, g) {
  if (arguments.length === 1) return function (_g) {
    return both(f, _g);
  };
  return function () {
    return f.apply(void 0, arguments) && g.apply(void 0, arguments);
  };
}

function chain(fn, list) {
  var _ref;

  if (arguments.length === 1) {
    return function (_list) {
      return chain(fn, _list);
    };
  }

  return (_ref = []).concat.apply(_ref, _toConsumableArray(list.map(fn)));
}

function clone(input) {
  var out = Array.isArray(input) ? Array(input.length) : {};
  if (input && input.getTime) return new Date(input.getTime());

  for (var key in input) {
    var v = input[key];
    out[key] = Object(esm_typeof["a" /* default */])(v) === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
  }

  return out;
}

function complement(fn) {
  return function () {
    return !fn.apply(void 0, arguments);
  };
}

function compose() {
  for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  if (fns.length === 0) {
    throw new Error('compose requires at least one argument');
  }

  return function () {
    var list = fns.slice();

    if (list.length > 0) {
      var fn = list.pop();
      var result = fn.apply(void 0, arguments);

      while (list.length > 0) {
        result = list.pop()(result);
      }

      return result;
    }
  };
}

function concat(x, y) {
  if (arguments.length === 1) return function (_y) {
    return concat(x, _y);
  };
  return typeof x === 'string' ? "".concat(x).concat(y) : [].concat(_toConsumableArray(x), _toConsumableArray(y));
}

function _curryN(n, cache, fn) {
  return function () {
    var ci = 0;
    var ai = 0;
    var cl = cache.length;
    var al = arguments.length;
    var args = new Array(cl + al);

    while (ci < cl) {
      args[ci] = cache[ci];
      ci++;
    }

    while (ai < al) {
      args[cl + ai] = arguments[ai];
      ai++;
    }

    var remaining = n - args.length;
    return args.length >= n ? fn.apply(this, args) : _arity(remaining, _curryN(n, args, fn));
  };
}

function _arity(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (_1) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (_1, _2) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (_1, _2, _3) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (_1, _2, _3, _4) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (_1, _2, _3, _4, _5) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (_1, _2, _3, _4, _5, _6) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (_1, _2, _3, _4, _5, _6, _7) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (_1, _2, _3, _4, _5, _6, _7, _8) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (_1, _2, _3, _4, _5, _6, _7, _8, _9) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

function curryN(n, fn) {
  if (arguments.length === 1) return function (_fn) {
    return curryN(n, _fn);
  };
  return _arity(n, _curryN(n, [], fn));
}

function mapObject(fn, obj) {
  var willReturn = {};

  for (var _prop in obj) {
    willReturn[_prop] = fn(obj[_prop], _prop, obj);
  }

  return willReturn;
}

function map(fn, list) {
  if (arguments.length === 1) return function (_list) {
    return map(fn, _list);
  };

  if (list === undefined) {
    return [];
  }

  if (!Array.isArray(list)) {
    return mapObject(fn, list);
  }

  var index = -1;
  var len = list.length;
  var willReturn = Array(len);

  while (++index < len) {
    willReturn[index] = fn(list[index], index);
  }

  return willReturn;
}

function rambda_esm_max(x, y) {
  if (arguments.length === 1) return function (_y) {
    return rambda_esm_max(x, _y);
  };
  return y > x ? y : x;
}

function reduceFn(reducer, acc, list) {
  var clone = list.slice();
  return clone.reduce(reducer, acc);
}

var reduce = curry(reduceFn);

function converge(fn, transformers) {
  if (arguments.length === 1) return function (_transformers) {
    return converge(fn, _transformers);
  };
  var highestArity = reduce(function (a, b) {
    return rambda_esm_max(a, b.length);
  }, 0, transformers);
  return curryN(highestArity, function () {
    var _arguments = arguments,
        _this = this;

    return fn.apply(this, map(function (g) {
      return g.apply(_this, _arguments);
    }, transformers));
  });
}

function cond(conditions) {
  return function (input) {
    var done = false;
    var toReturn;
    conditions.forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          predicate = _ref3[0],
          resultClosure = _ref3[1];

      if (!done && predicate(input)) {
        done = true;
        toReturn = resultClosure(input);
      }
    });
    return toReturn;
  };
}

function clampFn(min, max, input) {
  if (input >= min && input <= max) return input;
  if (input > max) return max;
  if (input < min) return min;
}

var clamp = curry(clampFn);

var dec = function dec(x) {
  return x - 1;
};

function flagIs(inputArguments) {
  return inputArguments === undefined || inputArguments === null || Number.isNaN(inputArguments) === true;
}

function defaultTo(defaultArgument) {
  for (var _len5 = arguments.length, inputArguments = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    inputArguments[_key5 - 1] = arguments[_key5];
  }

  if (arguments.length === 1) {
    return function (_inputArguments) {
      return defaultTo(defaultArgument, _inputArguments);
    };
  } else if (arguments.length === 2) {
    return flagIs(inputArguments[0]) ? defaultArgument : inputArguments[0];
  }

  var limit = inputArguments.length - 1;
  var len = limit + 1;
  var ready = false;
  var holder;

  while (!ready) {
    var instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (flagIs(instance)) {
      len -= 1;
    } else {
      holder = instance;
      ready = true;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function type(input) {
  var typeOf = Object(esm_typeof["a" /* default */])(input);

  if (input === null) {
    return 'Null';
  } else if (input === undefined) {
    return 'Undefined';
  } else if (typeOf === 'boolean') {
    return 'Boolean';
  } else if (typeOf === 'number') {
    return Number.isNaN(input) ? 'NaN' : 'Number';
  } else if (typeOf === 'string') {
    return 'String';
  } else if (Array.isArray(input)) {
    return 'Array';
  } else if (input instanceof RegExp) {
    return 'RegExp';
  }

  var asStr = input && input.toString ? input.toString() : '';
  if (['true', 'false'].includes(asStr)) return 'Boolean';
  if (!Number.isNaN(Number(asStr))) return 'Number';
  if (asStr.startsWith('async')) return 'Async';
  if (asStr === '[object Promise]') return 'Promise';
  if (typeOf === 'function') return 'Function';
  if (input instanceof String) return 'String';
  return 'Object';
}

function parseError(maybeError) {
  var typeofError = maybeError.__proto__.toString();

  if (!['Error', 'TypeError'].includes(typeofError)) return [];
  return [typeofError, maybeError.message];
}

function parseDate(maybeDate) {
  if (!maybeDate.toDateString) return [false];
  return [true, maybeDate.getTime()];
}

function parseRegex(maybeRegex) {
  if (maybeRegex.constructor !== RegExp) return [false];
  return [true, maybeRegex.toString()];
}

function equals(a, b) {
  if (arguments.length === 1) return function (_b) {
    return equals(a, _b);
  };
  var aType = type(a);
  if (aType !== type(b)) return false;
  if (['NaN', 'Undefined', 'Null'].includes(aType)) return true;
  if (['Boolean', 'Number', 'String'].includes(aType)) return a.toString() === b.toString();

  if (aType === 'Array') {
    var aClone = Array.from(a);
    var bClone = Array.from(b);

    if (aClone.toString() !== bClone.toString()) {
      return false;
    }

    var loopArrayFlag = true;
    aClone.forEach(function (aCloneInstance, aCloneIndex) {
      if (loopArrayFlag) {
        if (aCloneInstance !== bClone[aCloneIndex] && !equals(aCloneInstance, bClone[aCloneIndex])) {
          loopArrayFlag = false;
        }
      }
    });
    return loopArrayFlag;
  }

  var aRegex = parseRegex(a);
  var bRegex = parseRegex(b);

  if (aRegex[0]) {
    return bRegex[0] ? aRegex[1] === bRegex[1] : false;
  } else if (bRegex[0]) return false;

  var aDate = parseDate(a);
  var bDate = parseDate(b);

  if (aDate[0]) {
    return bDate[0] ? aDate[1] === bDate[1] : false;
  } else if (bDate[0]) return false;

  var aError = parseError(a);
  var bError = parseError(b);

  if (aError[0]) {
    return bError[0] ? aError[0] === bError[0] && aError[1] === bError[1] : false;
  }

  if (aType === 'Object') {
    var aKeys = Object.keys(a);

    if (aKeys.length !== Object.keys(b).length) {
      return false;
    }

    var loopObjectFlag = true;
    aKeys.forEach(function (aKeyInstance) {
      if (loopObjectFlag) {
        var aValue = a[aKeyInstance];
        var bValue = b[aKeyInstance];

        if (aValue !== bValue && !equals(aValue, bValue)) {
          loopObjectFlag = false;
        }
      }
    });
    return loopObjectFlag;
  }

  return false;
}

function includes(valueToFind, input) {
  if (arguments.length === 1) return function (_input) {
    return includes(valueToFind, _input);
  };

  if (typeof input === 'string') {
    return input.includes(valueToFind);
  }

  if (!Array.isArray(input)) return false;
  var index = -1;

  while (++index < input.length) {
    if (equals(input[index], valueToFind)) {
      return true;
    }
  }

  return false;
}

function uniq(list) {
  var index = -1;
  var willReturn = [];

  while (++index < list.length) {
    var value = list[index];

    if (!includes(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function difference(a, b) {
  if (arguments.length === 1) return function (_b) {
    return difference(a, _b);
  };
  return uniq(a).filter(function (aInstance) {
    return !includes(aInstance, b);
  });
}

function dissoc(prop, obj) {
  if (arguments.length === 1) return function (_obj) {
    return dissoc(prop, _obj);
  };
  if (obj === null || obj === undefined) return {};
  var willReturn = {};

  for (var p in obj) {
    willReturn[p] = obj[p];
  }

  delete willReturn[prop];
  return willReturn;
}

function divide(a, b) {
  if (arguments.length === 1) return function (_b) {
    return divide(a, _b);
  };
  return a / b;
}

function drop(howManyToDrop, listOrString) {
  if (arguments.length === 1) return function (_list) {
    return drop(howManyToDrop, _list);
  };
  return listOrString.slice(howManyToDrop > 0 ? howManyToDrop : 0);
}

function dropLast(howManyToDrop, listOrString) {
  if (arguments.length === 1) {
    return function (_listOrString) {
      return dropLast(howManyToDrop, _listOrString);
    };
  }

  return howManyToDrop > 0 ? listOrString.slice(0, -howManyToDrop) : listOrString.slice();
}

function either(firstPredicate, secondPredicate) {
  if (arguments.length === 1) {
    return function (_secondPredicate) {
      return either(firstPredicate, _secondPredicate);
    };
  }

  return function () {
    return Boolean(firstPredicate.apply(void 0, arguments) || secondPredicate.apply(void 0, arguments));
  };
}

function endsWith(target, str) {
  if (arguments.length === 1) return function (_str) {
    return endsWith(target, _str);
  };
  return str.endsWith(target);
}

function filterObject(fn, obj) {
  var willReturn = {};

  for (var _prop2 in obj) {
    if (fn(obj[_prop2], _prop2, obj)) {
      willReturn[_prop2] = obj[_prop2];
    }
  }

  return willReturn;
}

function filter(predicate, list) {
  if (arguments.length === 1) return function (_list) {
    return filter(predicate, _list);
  };
  if (!list) return [];

  if (!Array.isArray(list)) {
    return filterObject(predicate, list);
  }

  var index = -1;
  var resIndex = 0;
  var len = list.length;
  var willReturn = [];

  while (++index < len) {
    var value = list[index];

    if (predicate(value, index)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

function find(predicate, list) {
  if (arguments.length === 1) return function (_list) {
    return find(predicate, _list);
  };
  return list.find(predicate);
}

function findIndex(predicate, list) {
  if (arguments.length === 1) return function (_list) {
    return findIndex(predicate, _list);
  };
  var len = list.length;
  var index = -1;

  while (++index < len) {
    if (predicate(list[index], index)) {
      return index;
    }
  }

  return -1;
}

function findLastIndex(fn, list) {
  if (arguments.length === 1) return function (_list) {
    return findLastIndex(fn, _list);
  };
  var index = list.length;

  while (--index >= 0) {
    if (fn(list[index], index)) {
      return index;
    }
  }

  return -1;
}

function findLast(predicate, list) {
  if (arguments.length === 1) return function (_list) {
    return findLast(predicate, _list);
  };
  var index = list.length;

  while (--index >= 0) {
    if (predicate(list[index], index)) {
      return list[index];
    }
  }

  return undefined;
}

function flatten(list, input) {
  var willReturn = input === undefined ? [] : input;

  for (var i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      flatten(list[i], willReturn);
    } else {
      willReturn.push(list[i]);
    }
  }

  return willReturn;
}

function flipExport(fn) {
  return function () {
    for (var _len6 = arguments.length, input = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      input[_key6] = arguments[_key6];
    }

    if (input.length === 1) {
      return function (holder) {
        return fn(holder, input[0]);
      };
    } else if (input.length === 2) {
      return fn(input[1], input[0]);
    }

    return undefined;
  };
}

function flip(fn) {
  return flipExport(fn);
}

function forEach(predicate, list) {
  if (arguments.length === 1) return function (_list) {
    return forEach(predicate, _list);
  };
  map(predicate, list);
  return list;
}

function fromPairs(listOfPairs) {
  var toReturn = {};
  listOfPairs.forEach(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        prop = _ref5[0],
        value = _ref5[1];

    return toReturn[prop] = value;
  });
  return toReturn;
}

function groupBy(groupFn, list) {
  if (arguments.length === 1) return function (_list) {
    return groupBy(groupFn, _list);
  };
  var result = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var key = groupFn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}

function groupWith(compareFn, list) {
  if (!Array.isArray(list)) throw new TypeError('list.reduce is not a function');
  var clone = list.slice();
  var toReturn = [];
  var holder = [];
  clone.reduce(function (prev, current, i) {
    if (i === 0) return current;
    var okCompare = compareFn(prev, current);
    var holderIsEmpty = holder.length === 0;
    var lastCall = i === list.length - 1;

    if (okCompare) {
      if (holderIsEmpty) holder.push(prev);
      holder.push(current);
      if (lastCall) toReturn.push(holder);
      return current;
    }

    if (holderIsEmpty) {
      toReturn.push([prev]);
      if (lastCall) toReturn.push([current]);
      return current;
    }

    toReturn.push(holder);
    if (lastCall) toReturn.push([current]);
    holder = [];
    return current;
  }, undefined);
  return toReturn;
}

function has(prop, obj) {
  if (arguments.length === 1) return function (_obj) {
    return has(prop, _obj);
  };
  if (!obj) return false;
  return obj[prop] !== undefined;
}

function head(listOrString) {
  if (typeof listOrString === 'string') return listOrString[0] || '';
  return listOrString[0];
}

function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }

  return a !== a && b !== b;
}

var _objectIs$1 = Object.is || _objectIs;

function identical(a, b) {
  if (arguments.length === 1) return function (_b) {
    return identical(a, _b);
  };
  return _objectIs$1(a, b);
}

function identity(input) {
  return input;
}

function ifElseFn(condition, onTrue, onFalse) {
  return function () {
    var conditionResult = typeof condition === 'boolean' ? condition : condition.apply(void 0, arguments);

    if (conditionResult === true) {
      return onTrue.apply(void 0, arguments);
    }

    return onFalse.apply(void 0, arguments);
  };
}

var ifElse = curry(ifElseFn);

var inc = function inc(x) {
  return x + 1;
};

function path(list, obj) {
  if (arguments.length === 1) return function (_obj) {
    return path(list, _obj);
  };

  if (obj === null || obj === undefined) {
    return undefined;
  }

  var willReturn = obj;
  var counter = 0;
  var pathArrValue = typeof list === 'string' ? list.split('.') : list;

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined;
    }

    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn;
}

function indexByPath(pathInput, list) {
  var toReturn = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    toReturn[path(pathInput, item)] = item;
  }

  return toReturn;
}

function indexBy(condition, list) {
  if (arguments.length === 1) {
    return function (_list) {
      return indexBy(condition, _list);
    };
  }

  if (typeof condition === 'string') {
    return indexByPath(condition, list);
  }

  var toReturn = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    toReturn[condition(item)] = item;
  }

  return toReturn;
}

function indexOf(valueToFind, list) {
  if (arguments.length === 1) {
    return function (_list) {
      return indexOf(valueToFind, _list);
    };
  }

  var index = -1;
  var length = list.length;

  while (++index < length) {
    if (list[index] === valueToFind) {
      return index;
    }
  }

  return -1;
}

function baseSlice(array, start, end) {
  var index = -1;
  var length = array.length;
  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

function init(listOrString) {
  if (typeof listOrString === 'string') return listOrString.slice(0, -1);
  return listOrString.length ? baseSlice(listOrString, 0, -1) : [];
}

function intersperse(separator, list) {
  if (arguments.length === 1) return function (_list) {
    return intersperse(separator, _list);
  };
  var index = -1;
  var len = list.length;
  var willReturn = [];

  while (++index < len) {
    if (index === len - 1) {
      willReturn.push(list[index]);
    } else {
      willReturn.push(list[index], separator);
    }
  }

  return willReturn;
}

function intersection(listA, listB) {
  if (arguments.length === 1) return function (_list) {
    return intersection(listA, _list);
  };
  return filter(function (value) {
    return includes(value, listB);
  }, listA);
}

function is(targetPrototype, x) {
  if (arguments.length === 1) return function (_x) {
    return is(targetPrototype, _x);
  };
  return x != null && x.constructor === targetPrototype || x instanceof targetPrototype;
}

function isEmpty(input) {
  var inputType = type(input);
  if (['Undefined', 'NaN', 'Number', 'Null'].includes(inputType)) return false;
  if (!input) return true;

  if (inputType === 'Object') {
    return Object.keys(input).length === 0;
  }

  if (inputType === 'Array') {
    return input.length === 0;
  }

  return false;
}

function isNil(x) {
  return x === undefined || x === null;
}

function join(glue, list) {
  if (arguments.length === 1) return function (_list) {
    return join(glue, _list);
  };
  return list.join(glue);
}

function keys(x) {
  return Object.keys(x);
}

function last(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString[listOrString.length - 1] || '';
  }

  return listOrString[listOrString.length - 1];
}

function lastIndexOf(target, list) {
  if (arguments.length === 1) return function (_list) {
    return lastIndexOf(target, _list);
  };
  var index = list.length;

  while (--index > 0) {
    if (equals(list[index], target)) {
      return index;
    }
  }

  return -1;
}

function rambda_esm_length(x) {
  if (!x || x.length === undefined) {
    return NaN;
  }

  return x.length;
}

function lens(getter, setter) {
  if (arguments.length === 1) return function (_setter) {
    return lens(getter, _setter);
  };
  return function (functor) {
    return function (target) {
      return functor(getter(target)).map(function (focus) {
        return setter(focus, target);
      });
    };
  };
}

function nth(index, list) {
  if (arguments.length === 1) return function (_list) {
    return nth(index, _list);
  };
  var idx = index < 0 ? list.length + index : index;
  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
}

function update(idx, val, list) {
  if (val === undefined) {
    return function (_val, _list) {
      return update(idx, _val, _list);
    };
  } else if (list === undefined) {
    return function (_list) {
      return update(idx, val, _list);
    };
  }

  var arrClone = list.slice();
  return arrClone.fill(val, idx, idx + 1);
}

function lensIndex(index) {
  return lens(nth(index), update(index));
}

function lensPath(key) {
  return lens(path(key), assocPath(key));
}

function rambda_esm_prop(propToFind, obj) {
  if (arguments.length === 1) return function (_obj) {
    return rambda_esm_prop(propToFind, _obj);
  };
  if (!obj) return undefined;
  return obj[propToFind];
}

function lensProp(key) {
  return lens(rambda_esm_prop(key), assoc(key));
}

function match(pattern, input) {
  if (arguments.length === 1) return function (_input) {
    return match(pattern, _input);
  };
  var willReturn = input.match(pattern);
  return willReturn === null ? [] : willReturn;
}

function mathMod(m, p) {
  if (arguments.length === 1) return function (_p) {
    return mathMod(m, _p);
  };
  if (!_isInteger$1(m) || !_isInteger$1(p) || p < 1) return NaN;
  return (m % p + p) % p;
}

function maxByFn(compareFn, x, y) {
  return compareFn(y) > compareFn(x) ? y : x;
}

var maxBy = curry(maxByFn);

function sum(list) {
  return list.reduce(function (prev, current) {
    return prev + current;
  }, 0);
}

function mean(list) {
  return sum(list) / list.length;
}

function median(list) {
  var len = list.length;
  if (len === 0) return NaN;
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort(function (a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }).slice(idx, idx + width));
}

function merge(target, newProps) {
  if (arguments.length === 1) return function (_newProps) {
    return merge(target, _newProps);
  };
  return Object.assign({}, target || {}, newProps || {});
}

function min(x, y) {
  if (arguments.length === 1) return function (_y) {
    return min(x, _y);
  };
  return y < x ? y : x;
}

function minByFn(compareFn, x, y) {
  return compareFn(y) < compareFn(x) ? y : x;
}

var minBy = curry(minByFn);

function modulo(x, y) {
  if (arguments.length === 1) return function (_y) {
    return modulo(x, _y);
  };
  return x % y;
}

function multiply(x, y) {
  if (arguments.length === 1) return function (_y) {
    return multiply(x, _y);
  };
  return x * y;
}

function negate(x) {
  return -x;
}

function none(predicate, list) {
  if (arguments.length === 1) return function (_list) {
    return none(predicate, _list);
  };
  return list.filter(predicate).length === 0;
}

function not(input) {
  return !input;
}

function omit(propsToOmit, obj) {
  if (arguments.length === 1) return function (_obj) {
    return omit(propsToOmit, _obj);
  };

  if (obj === null || obj === undefined) {
    return undefined;
  }

  var propsToOmitValue = typeof propsToOmit === 'string' ? propsToOmit.split(',') : propsToOmit;
  var willReturn = {};

  for (var key in obj) {
    if (!propsToOmitValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

var Identity = function Identity(x) {
  return {
    x: x,
    map: function map(fn) {
      return Identity(fn(x));
    }
  };
};

function over(lens, fn, object) {
  if (arguments.length === 1) return function (_fn, _object) {
    return over(lens, _fn, _object);
  };
  if (arguments.length === 2) return function (_object) {
    return over(lens, fn, _object);
  };
  return lens(function (x) {
    return Identity(fn(x));
  })(object).x;
}

function partial(fn) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  var len = fn.length;
  return function () {
    for (var _len8 = arguments.length, rest = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      rest[_key8] = arguments[_key8];
    }

    if (args.length + rest.length >= len) {
      return fn.apply(void 0, args.concat(rest));
    }

    return partial.apply(void 0, [fn].concat([].concat(args, rest)));
  };
}

function paths(pathsToSearch, obj) {
  return pathsToSearch.map(function (singlePath) {
    return path(singlePath, obj);
  });
}

function pathOrFn(defaultValue, list, obj) {
  return defaultTo(defaultValue, path(list, obj));
}

var pathOr = curry(pathOrFn);

function pick(propsToPick, obj) {
  if (arguments.length === 1) return function (_obj) {
    return pick(propsToPick, _obj);
  };

  if (obj === null || obj === undefined) {
    return undefined;
  }

  var keys = typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick;
  var willReturn = {};
  var counter = 0;

  while (counter < keys.length) {
    if (keys[counter] in obj) {
      willReturn[keys[counter]] = obj[keys[counter]];
    }

    counter++;
  }

  return willReturn;
}

function pickAll(propsToPick, obj) {
  if (arguments.length === 1) return function (_obj) {
    return pickAll(propsToPick, _obj);
  };

  if (obj === null || obj === undefined) {
    return undefined;
  }

  var keysValue = typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick;
  var willReturn = {};
  var counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    } else {
      willReturn[keysValue[counter]] = undefined;
    }

    counter++;
  }

  return willReturn;
}

function pipe() {
  for (var _len9 = arguments.length, fns = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    fns[_key9] = arguments[_key9];
  }

  if (fns.length === 0) throw new Error('pipe requires at least one argument');
  return compose.apply(void 0, _toConsumableArray(fns.reverse()));
}

function pluck(property, list) {
  if (arguments.length === 1) return function (_list) {
    return pluck(property, _list);
  };
  var willReturn = [];
  map(function (x) {
    if (x[property] !== undefined) {
      willReturn.push(x[property]);
    }
  }, list);
  return willReturn;
}

function prepend(x, listOrString) {
  if (arguments.length === 1) return function (_listOrString) {
    return prepend(x, _listOrString);
  };
  if (typeof listOrString === 'string') return "".concat(x).concat(listOrString);
  return [x].concat(listOrString);
}

var product = reduce(multiply, 1);

function propEqFn(propToFind, valueToMatch, obj) {
  if (!obj) return false;
  return obj[propToFind] === valueToMatch;
}

var propEq = curry(propEqFn);

function propIsFn(targetPrototype, property, obj) {
  return is(targetPrototype, obj[property]);
}

var propIs = curry(propIsFn);

function propOrFn(defaultValue, property, obj) {
  if (!obj) return defaultValue;
  return defaultTo(defaultValue, obj[property]);
}

var propOr = curry(propOrFn);

function range(start, end) {
  if (arguments.length === 1) return function (_end) {
    return range(start, _end);
  };

  if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))) {
    throw new TypeError('Both arguments to range must be numbers');
  }

  if (end < start) return [];
  var len = end - start;
  var willReturn = Array(len);

  for (var i = 0; i < len; i++) {
    willReturn[i] = start + i;
  }

  return willReturn;
}

function reject(predicate, list) {
  if (arguments.length === 1) return function (_list) {
    return reject(predicate, _list);
  };
  return filter(function (x, i) {
    return !predicate(x, i);
  }, list);
}

function repeat(x, timesToRepeat) {
  if (arguments.length === 1) {
    return function (_timesToRepeat) {
      return repeat(x, _timesToRepeat);
    };
  }

  return Array(timesToRepeat).fill(x);
}

function replace(pattern, replacer, str) {
  if (replacer === undefined) {
    return function (_replacer, _str) {
      return replace(pattern, _replacer, _str);
    };
  } else if (str === undefined) {
    return function (_str) {
      return replace(pattern, replacer, _str);
    };
  }

  return str.replace(pattern, replacer);
}

function reverse(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString.split('').reverse().join('');
  }

  var clone = listOrString.slice();
  return clone.reverse();
}

function set(lens, replacer, x) {
  if (arguments.length === 1) return function (_v, _x) {
    return set(lens, _v, _x);
  };
  if (arguments.length === 2) return function (_x) {
    return set(lens, replacer, _x);
  };
  return over(lens, always(replacer), x);
}

function sliceFn(from, to, list) {
  return list.slice(from, to);
}

var slice = curry(sliceFn);

function sort(sortFn, list) {
  if (arguments.length === 1) return function (_list) {
    return sort(sortFn, _list);
  };
  var clone = list.slice();
  return clone.sort(sortFn);
}

function sortBy(sortFn, list) {
  if (arguments.length === 1) return function (_list) {
    return sortBy(sortFn, _list);
  };
  var clone = list.slice();
  return clone.sort(function (a, b) {
    var aSortResult = sortFn(a);
    var bSortResult = sortFn(b);
    if (aSortResult === bSortResult) return 0;
    return aSortResult < bSortResult ? -1 : 1;
  });
}

function split(separator, str) {
  if (arguments.length === 1) return function (_str) {
    return split(separator, _str);
  };
  return str.split(separator);
}

function splitEvery(sliceLength, listOrString) {
  if (arguments.length === 1) {
    return function (_listOrString) {
      return splitEvery(sliceLength, _listOrString);
    };
  }

  if (sliceLength < 1) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }

  var willReturn = [];
  var counter = 0;

  while (counter < listOrString.length) {
    willReturn.push(listOrString.slice(counter, counter += sliceLength));
  }

  return willReturn;
}

function startsWith(target, str) {
  if (arguments.length === 1) return function (_str) {
    return startsWith(target, _str);
  };
  return str.startsWith(target);
}

function subtract(a, b) {
  if (arguments.length === 1) return function (_b) {
    return subtract(a, _b);
  };
  return a - b;
}

function symmetricDifference(x, y) {
  if (arguments.length === 1) {
    return function (_y) {
      return symmetricDifference(x, _y);
    };
  }

  return concat(filter(function (value) {
    return !includes(value, y);
  }, x), filter(function (value) {
    return !includes(value, x);
  }, y));
}

function tail(listOrString) {
  return drop(1, listOrString);
}

function take(howMany, listOrString) {
  if (arguments.length === 1) return function (_listOrString) {
    return take(howMany, _listOrString);
  };
  if (howMany < 0) return listOrString.slice();
  if (typeof listOrString === 'string') return listOrString.slice(0, howMany);
  return baseSlice(listOrString, 0, howMany);
}

function takeLast(howMany, listOrString) {
  if (arguments.length === 1) return function (_listOrString) {
    return takeLast(howMany, _listOrString);
  };
  var len = listOrString.length;
  if (howMany < 0) return listOrString.slice();
  var numValue = howMany > len ? len : howMany;
  if (typeof listOrString === 'string') return listOrString.slice(len - numValue);
  numValue = len - numValue;
  return baseSlice(listOrString, numValue, len);
}

function tap(fn, x) {
  if (arguments.length === 1) return function (_x) {
    return tap(fn, _x);
  };
  fn(x);
  return x;
}

function test(pattern, str) {
  if (arguments.length === 1) return function (_str) {
    return test(pattern, _str);
  };

  if (typeof pattern === 'string') {
    throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received \"".concat(pattern, "\""));
  }

  return str.search(pattern) !== -1;
}

function times(fn, howMany) {
  if (arguments.length === 1) return function (_howMany) {
    return times(fn, _howMany);
  };

  if (!Number.isInteger(howMany) || howMany < 0) {
    throw new RangeError('n must be an integer');
  }

  return map(fn, range(0, howMany));
}

function toLower(str) {
  return str.toLowerCase();
}

function toPairs(obj) {
  return Object.entries(obj);
}

function rambda_esm_toString(val) {
  return val.toString();
}

function toUpper(str) {
  return str.toUpperCase();
}

function transpose(array) {
  return array.reduce(function (acc, el) {
    el.forEach(function (nestedEl, i) {
      return Array.isArray(acc[i]) ? acc[i].push(nestedEl) : acc.push([nestedEl]);
    });
    return acc;
  }, []);
}

function trim(str) {
  return str.trim();
}

function uniqWith(fn, list) {
  if (arguments.length === 1) return function (_list) {
    return uniqWith(fn, _list);
  };
  var index = -1;
  var len = list.length;
  var willReturn = [];

  var _loop = function _loop() {
    var value = list[index];
    var flag = any(function (willReturnInstance) {
      return fn(value, willReturnInstance);
    }, willReturn);

    if (!flag) {
      willReturn.push(value);
    }
  };

  while (++index < len) {
    _loop();
  }

  return willReturn;
}

function values(obj) {
  if (type(obj) !== 'Object') return [];
  return Object.values(obj);
}

var Const = function Const(x) {
  return {
    x: x,
    map: function map(fn) {
      return Const(x);
    }
  };
};

function view(lens, target) {
  if (arguments.length === 1) return function (_target) {
    return view(lens, _target);
  };
  return lens(Const)(target).x;
}

function without(matchAgainst, source) {
  if (source === undefined) {
    return function (_source) {
      return without(matchAgainst, _source);
    };
  }

  return reduce(function (prev, current) {
    return includes(current, matchAgainst) ? prev : prev.concat(current);
  }, [], source);
}

function isFunction(fn) {
  return ['Async', 'Promise', 'Function'].includes(type(fn));
}

function when(rule, resultOrFunction) {
  if (arguments.length === 1) {
    return function (whenTrueHolder) {
      return when(rule, whenTrueHolder);
    };
  }

  return function (input) {
    if (!rule(input)) return input;
    return isFunction(resultOrFunction) ? resultOrFunction(input) : resultOrFunction;
  };
}

function xor(a, b) {
  if (arguments.length === 1) return function (_b) {
    return xor(a, _b);
  };
  return Boolean(a) && !b || Boolean(b) && !a;
}

function zip(left, right) {
  if (arguments.length === 1) return function (_right) {
    return zip(left, _right);
  };
  var result = [];
  var length = Math.min(left.length, right.length);

  for (var i = 0; i < length; i++) {
    result[i] = [left[i], right[i]];
  }

  return result;
}

function zipObj(keys, values) {
  if (arguments.length === 1) return function (yHolder) {
    return zipObj(keys, yHolder);
  };
  return take(values.length, keys).reduce(function (prev, xInstance, i) {
    prev[xInstance] = values[i];
    return prev;
  }, {});
}



/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(5);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/classnames/index.js
var classnames = __webpack_require__(19);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/uncontrollable/esm/index.js + 4 modules
var esm = __webpack_require__(116);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(21);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/SelectableContext.js
var SelectableContext = __webpack_require__(52);

// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/AccordionContext.js

/* harmony default export */ var AccordionContext = (react_default.a.createContext(null));
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/AccordionToggle.js





function useAccordionToggle(eventKey, onClick) {
  var contextEventKey = Object(react["useContext"])(AccordionContext);
  var onSelect = Object(react["useContext"])(SelectableContext["a" /* default */]);
  return function (e) {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    var eventKeyPassed = eventKey === contextEventKey ? null : eventKey;
    onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}
var AccordionToggle = react_default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      children = _ref.children,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["as", "children", "eventKey", "onClick"]);

  var accordionOnClick = useAccordionToggle(eventKey, onClick);

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    ref: ref,
    onClick: accordionOnClick
  }, props), children);
});
/* harmony default export */ var esm_AccordionToggle = (AccordionToggle);
// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/Collapse.js + 5 modules
var Collapse = __webpack_require__(229);

// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/AccordionCollapse.js





var AccordionCollapse = react_default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["children", "eventKey"]);

  var contextEventKey = Object(react["useContext"])(AccordionContext);
  return /*#__PURE__*/react_default.a.createElement(Collapse["a" /* default */], Object(esm_extends["a" /* default */])({
    ref: ref,
    in: contextEventKey === eventKey
  }, props), /*#__PURE__*/react_default.a.createElement("div", null, react_default.a.Children.only(children)));
});
AccordionCollapse.displayName = 'AccordionCollapse';
/* harmony default export */ var esm_AccordionCollapse = (AccordionCollapse);
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/Accordion.js










var Accordion = react_default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = Object(esm["a" /* useUncontrolled */])(props, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      activeKey = _useUncontrolled.activeKey,
      bsPrefix = _useUncontrolled.bsPrefix,
      children = _useUncontrolled.children,
      className = _useUncontrolled.className,
      onSelect = _useUncontrolled.onSelect,
      controlledProps = Object(objectWithoutPropertiesLoose["a" /* default */])(_useUncontrolled, ["as", "activeKey", "bsPrefix", "children", "className", "onSelect"]);

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'accordion');
  return /*#__PURE__*/react_default.a.createElement(AccordionContext.Provider, {
    value: activeKey
  }, /*#__PURE__*/react_default.a.createElement(SelectableContext["a" /* default */].Provider, {
    value: onSelect
  }, /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    ref: ref
  }, controlledProps, {
    className: classnames_default()(className, bsPrefix)
  }), children)));
});
Accordion.Toggle = esm_AccordionToggle;
Accordion.Collapse = esm_AccordionCollapse;
/* harmony default export */ var esm_Accordion = __webpack_exports__["a"] = (Accordion);

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(5);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/classnames/index.js
var classnames = __webpack_require__(19);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(21);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/createWithBsPrefix.js + 1 modules
var createWithBsPrefix = __webpack_require__(230);

// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/divWithClassName.js



/* harmony default export */ var divWithClassName = (function (className) {
  return react_default.a.forwardRef(function (p, ref) {
    return /*#__PURE__*/react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, p, {
      ref: ref,
      className: classnames_default()(p.className, className)
    }));
  });
});
// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/CardContext.js
var CardContext = __webpack_require__(228);

// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/CardImg.js





var defaultProps = {
  variant: null
};
var CardImg = react_default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "variant", "as"]);

  var prefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'card-img');
  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    ref: ref,
    className: classnames_default()(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
/* harmony default export */ var esm_CardImg = (CardImg);
// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/Card.js









var DivStyledAsH5 = divWithClassName('h5');
var DivStyledAsH6 = divWithClassName('h6');
var CardBody = Object(createWithBsPrefix["a" /* default */])('card-body');
var Card_defaultProps = {
  body: false
};
var Card = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);

  var prefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'card');
  var cardContext = Object(react["useMemo"])(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return /*#__PURE__*/react_default.a.createElement(CardContext["a" /* default */].Provider, {
    value: cardContext
  }, /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    ref: ref
  }, props, {
    className: classnames_default()(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ? /*#__PURE__*/react_default.a.createElement(CardBody, null, children) : children));
});
Card.displayName = 'Card';
Card.defaultProps = Card_defaultProps;
Card.Img = esm_CardImg;
Card.Title = Object(createWithBsPrefix["a" /* default */])('card-title', {
  Component: DivStyledAsH5
});
Card.Subtitle = Object(createWithBsPrefix["a" /* default */])('card-subtitle', {
  Component: DivStyledAsH6
});
Card.Body = CardBody;
Card.Link = Object(createWithBsPrefix["a" /* default */])('card-link', {
  Component: 'a'
});
Card.Text = Object(createWithBsPrefix["a" /* default */])('card-text', {
  Component: 'p'
});
Card.Header = Object(createWithBsPrefix["a" /* default */])('card-header');
Card.Footer = Object(createWithBsPrefix["a" /* default */])('card-footer');
Card.ImgOverlay = Object(createWithBsPrefix["a" /* default */])('card-img-overlay');
/* harmony default export */ var esm_Card = __webpack_exports__["a"] = (Card);

/***/ })

}]);