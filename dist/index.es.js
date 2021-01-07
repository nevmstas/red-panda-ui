import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".turning-button {\n  background-color: hotpink;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 8px;\n  transition: all .2s;\n  border: none; }\n  .turning-button:hover:enabled {\n    cursor: pointer;\n    background-color: #ff3399;\n    transform: scale(1.1); }\n  .turning-button:disabled {\n    background-color: #d9d9d9;\n    color: #595959;\n    cursor: pointer; }\n  .turning-button.turning-button-left:hover:enabled {\n    transform: rotate(-5deg); }\n  .turning-button.turning-button-right:hover:enabled {\n    transform: rotate(5deg); }\n\n.small {\n  min-width: 60px;\n  height: 30px;\n  font-size: 12px; }\n\n.medium {\n  min-width: 80px;\n  height: 40px;\n  font-size: 14px; }\n\n.large {\n  min-width: 100px;\n  height: 45px;\n  font-size: 16px; }\n";
styleInject(css_248z);

var TurningButton = function (_a) {
    var label = _a.label, _b = _a.incline, incline = _b === void 0 ? 'right' : _b, size = _a.size, args = __rest(_a, ["label", "incline", "size"]);
    return (React.createElement("button", __assign({ className: "turning-button turning-button-" + incline + " " + size }, args), label));
};

export { TurningButton };
//# sourceMappingURL=index.es.js.map
