function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var Animation;

(function (Animation) {
  Animation["base"] = "base";
  Animation["rotateInVer"] = "rotateInVer";
})(Animation || (Animation = {}));

var Animation$1 = Animation;

var _templateObject;
function base() {
  return styled.span(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["display:inline-block;"])));
}

var _templateObject$1;
function rotateInCenter(duration) {
  return styled.span(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n    display:inline-block;\n    @keyframes rotate-in-center{\n        0%{\n            -webkit-transform:rotate(-360deg);\n            transform:rotate(-360deg);\n            opacity:0;\n        }\n            100%{\n                -webkit-transform:rotate(0);\n                transform:rotate(0);\n                opacity:1\n            }\n        }\n    }\n    animation: rotate-in-center ", "s cubic-bezier(.25,.46,.45,.94) both;\n    "])), duration / 1000);
}

var StyledComponents = function StyledComponents() {};
StyledComponents.base = base;
StyledComponents.rotateInVer = rotateInCenter;

var Char = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Char, _Component);

  function Char(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.render = function () {
      var _this$state;

      return React__default.createElement(React.Fragment, null, (_this$state = _this.state) === null || _this$state === void 0 ? void 0 : _this$state.display);
    };

    _this.state = {
      display: null,
      visibility: 'hidden'
    };
    return _this;
  }

  var _proto = Char.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.unload) {
      this.unload();
      console.log('unload');
    } else {
      this.load();

      if (this.props.hide) {
        this.hide();
        console.log('hide');
      } else if (this.props.animate) {
        this.play();
        console.log('animate');
      }

      console.log('load');
    }
  };

  _proto.load = function load() {
    var Component = StyledComponents.base();
    this.setState({
      display: React__default.createElement(Component, null, this.props.children)
    });
  };

  _proto.unload = function unload() {
    this.setState({
      display: null
    });
  };

  _proto.hide = function hide() {
    var Component = StyledComponents.base();
    this.setState({
      display: React__default.createElement(Component, {
        style: {
          visibility: 'hidden'
        }
      }, this.props.children)
    });
  };

  _proto.play = function play() {
    var _this2 = this;

    var Component = StyledComponents[this.props.animation](this.props.duration);
    this.setState({
      display: React__default.createElement(Component, null, this.props.children)
    }, function () {
      _this2.onPlay();
    });
  };

  _proto.onPlay = function onPlay() {
    var _this$props$onPlay, _this$props;

    (_this$props$onPlay = (_this$props = this.props).onPlay) === null || _this$props$onPlay === void 0 ? void 0 : _this$props$onPlay.call(_this$props, this);
  };

  return Char;
}(React.Component);
Char.defaultProps = {
  duration: 0,
  hide: false,
  unload: false,
  animate: true,
  style: Animation$1.base
};

var Text = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Text, _Component);

  function Text() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Text.prototype;

  _proto.render = function render() {
    return React__default.createElement("div", null);
  };

  return Text;
}(React.Component);

exports.Animation = Animation$1;
exports.Char = Char;
exports.Text = Text;
//# sourceMappingURL=index.js.map
