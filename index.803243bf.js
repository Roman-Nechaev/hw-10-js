!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return s.Date.now()};function m(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var f=u.test(t);return f||c.test(t)?a(t.slice(2),f?2:8):r.test(t)?NaN:+t}e=function(n,t,e){var o,i,r,u,c,a,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(t){var e=o,r=i;return o=i=void 0,f=t,u=n.apply(r,e)}function h(n){return f=n,c=setTimeout(T,t),l?y(n):u}function j(n){var e=n-a;return void 0===a||e>=t||e<0||s&&n-f>=r}function T(){var n=g();if(j(n))return w(n);c=setTimeout(T,function(n){var e=t-(n-a);return s?v(e,r-(n-f)):e}(n))}function w(n){return c=void 0,d&&o?y(n):(o=i=void 0,u)}function O(){var n=g(),e=j(n);if(o=arguments,i=this,a=n,e){if(void 0===c)return h(a);if(s)return c=setTimeout(T,t),y(a)}return void 0===c&&(c=setTimeout(T,t)),u}return t=b(t)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(b(e.maxWait)||0,t):r,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=i=c=void 0},O.flush=function(){return void 0===c?u:w(g())},O};var y=document.querySelector("input#search-box"),h=document.querySelector(".country-list"),j=document.querySelector(".country-info");function T(n){if(console.log(n.length),!(n.length>=2&&n.length<=10))return 1===n.length?function(n){n.map((function(n){var t=n.name,e=n.capital,o=n.population,i=n.flags,r=n.languages,u='\n    <img src="'.concat(i.svg,'"  alt="" width=60/>  <b>').concat(t.official,"\n    <p>Capital: ").concat(e,"</p>\n    <p>Population: ").concat(o,"</p>\n    <p>Languages: ").concat(r,"</p>\n    ");j.insertAdjacentHTML("beforeend",u)}))}(n):void 0;n.map((function(n){var t=n.name,e=n.flags,o='\n    <li><img src="'.concat(e.svg,'" alt=""width=30> <b>').concat(t.official,"</li>\n    ");h.insertAdjacentHTML("beforeend",o)}))}y.addEventListener("input",n(e)((function(n){var t=n.target.value.trim();(e=t,fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flags,languages")).then((function(n){return n.ok?n.json():Promise.reject(n.statusText)}))).then(T).catch((function(n){return console.log("ERROR",n)})),console.log(t),j.innerHTML="",h.innerHTML="";var e}),300))}();
//# sourceMappingURL=index.803243bf.js.map
