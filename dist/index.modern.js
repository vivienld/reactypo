import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

var Animation;

(function (Animation) {
  Animation["base"] = "base";
  Animation["rotateInVer"] = "rotateInVer";
})(Animation || (Animation = {}));

var Animation$1 = Animation;

let _ = t => t,
    _t;
function base() {
  return styled.span(_t || (_t = _`display:inline-block;`));
}

let _$1 = t => t,
    _t$1;
function rotateInCenter(duration) {
  return styled.span(_t$1 || (_t$1 = _$1`
    display:inline-block;
    @keyframes rotate-in-center{
        0%{
            -webkit-transform:rotate(-360deg);
            transform:rotate(-360deg);
            opacity:0;
        }
            100%{
                -webkit-transform:rotate(0);
                transform:rotate(0);
                opacity:1
            }
        }
    }
    animation: rotate-in-center ${0}s cubic-bezier(.25,.46,.45,.94) both;
    `), duration / 1000);
}

class StyledComponents {}
StyledComponents.base = base;
StyledComponents.rotateInVer = rotateInCenter;

class Char extends Component {
  constructor(props) {
    super(props);

    this.render = () => {
      var _this$state;

      return React.createElement(Fragment, null, (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.display);
    };

    this.state = {
      display: null,
      visibility: 'hidden'
    };
  }

  componentDidMount() {
    if (this.props.unload) {
      this.unload();
      console.log('unload');
    } else {
      this.load();

      if (this.props.hide) {
        this.hide();
        console.log('hide');
      } else if (this.props.animate) {
        this.animate();
        console.log('animate');
      }

      console.log('load');
    }
  }

  load() {
    const Component = StyledComponents.base();
    this.setState({
      display: React.createElement(Component, null, this.props.children)
    });
  }

  unload() {
    this.setState({
      display: null
    });
  }

  hide() {
    const Component = StyledComponents.base();
    this.setState({
      display: React.createElement(Component, {
        style: {
          visibility: 'hidden'
        }
      }, this.props.children)
    });
  }

  animate() {
    const Component = StyledComponents[this.props.animation](this.props.duration);
    this.setState({
      display: React.createElement(Component, null, this.props.children)
    });
  }

}
Char.defaultProps = {
  duration: 0,
  hide: false,
  unload: false,
  animate: true,
  style: Animation$1.base
};

class Text extends Component {
  render() {
    return React.createElement("div", null);
  }

}

export { Animation$1 as Animation, Char, Text };
//# sourceMappingURL=index.modern.js.map
