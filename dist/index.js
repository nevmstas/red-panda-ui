'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var css_248z = ".turning-button {\n  background-color: hotpink;\n  color: white;\n  padding: 10px 5px;\n  border-radius: 3px;\n  transition: all .2s;\n  border: none; }\n  .turning-button:hover {\n    cursor: pointer;\n    background-color: #ff3399;\n    transform: scale(1.1) rotate(5deg); }\n";
styleInject(css_248z);

var TurningButton = function (_a) {
    var label = _a.label;
    return React__default['default'].createElement("button", { className: "turning-button" }, label);
};

exports.TurningButton = TurningButton;
//# sourceMappingURL=index.js.map
