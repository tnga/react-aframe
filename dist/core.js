'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = exports.Entity = exports._options = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _nonEntityProps = ['children', 'events', 'primitive'];
var _nonStandardProp = ['className', 'id', 'mixin'];
var _checkNonEntityProp = function _checkNonEntityProp(propName) {
  return _nonEntityProps.indexOf(propName) === -1;
};
var _checkStandardProp = function _checkStandardProp(propName) {
  return _nonStandardProp.indexOf(propName) !== -1 || propName.indexOf('data-') === 0;
};

var _options = {
  // React needs this because React serializes.
  // Preact does not because Preact runs `.setAttribute` on its own.
  runSetAttributeOnUpdates: true
};
exports._options = _options;

/**
 * Render <a-entity>.
 * Tell React to use A-Frame's .setAttribute() on the DOM element
 * for all prop initializations and updates.
 */

var Entity = exports.Entity = function (_React$Component) {
  _inherits(Entity, _React$Component);

  function Entity() {
    _classCallCheck(this, Entity);

    /**
     * In response to initial `ref` callback.
     */
    var _this = _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this));

    _this.initEntity = function (el) {
      if (!el) {
        return;
      }

      var props = _this.props;
      // Store.
      _this.el = el;

      // Attach events.
      if (props.events) {
        Object.keys(props.events).forEach(function (eventName) {
          addEventListeners(el, eventName, props.events[eventName]);
        });
      }

      // Update entity.
      updateAttributes(el, null, props);

      // Allow ref.
      if (props._ref) {
        props._ref(el);
      }
    };
    return _this;
  }

  /**
   * Handle updates after the initial render.
   */


  _createClass(Entity, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var el = this.el;
      var props = this.props;

      // Update events.
      updateEventListeners(el, prevProps.events, props.events);

      // Update entity.
      if (_options.runSetAttributeOnUpdates) {
        updateAttributes(el, prevProps, props);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var el = this.el;
      var props = this.props;

      if (props.events) {
        // Remove events.
        Object.keys(props.events).forEach(function (eventName) {
          removeEventListeners(el, eventName, props.events[eventName]);
        });
      }
    }

    /**
     * Render A-Frame DOM with ref: https://facebook.github.io/react/docs/refs-and-the-dom.html
     */

  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var elementName = this.primitiveName || props.primitive || 'a-entity';

      // Let through props that are OK to render initially.
      var reactProps = {};
      Object.keys(props).forEach(function (propName) {
        if (_checkStandardProp(propName)) reactProps[propName] = props[propName];
      });

      return _react2.default.createElement(elementName, _extends({ ref: this.initEntity }, reactProps), props.children);
    }
  }]);

  return Entity;
}(_react2.default.Component);

/**
 * Render <a-scene>.
 * <a-scene> extends from <a-entity> in A-Frame so we reuse <Entity/>.
 */


var Scene = exports.Scene = function (_Entity) {
  _inherits(Scene, _Entity);

  function Scene(props) {
    _classCallCheck(this, Scene);

    var _this2 = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this, props));

    _this2.primitiveName = 'a-scene';
    return _this2;
  }

  return Scene;
}(Entity);

/**
 * Handle diffing of previous and current attributes.
 *
 * @param {Element} el
 * @param {Object|null} prevProps - Previous props map.
 * @param {Object} props - Current props map.
 */


function updateAttributes(el, prevProps, props) {
  if (!props || prevProps === props) {
    return;
  }

  // Set attributes.
  Object.keys(props).filter(_checkNonEntityProp).forEach(function (propName) {
    callSetAttribute(el, props[propName], propName);
  });

  // See if attributes were removed.
  if (prevProps) {
    Object.keys(prevProps).filter(_checkNonEntityProp).forEach(function (propName) {
      if (props[propName] === undefined) el.removeAttribute(propName);
    });
  }
}

/**
 * Call `.setAttribute()` on the `ref`,
 * passing prop data directly to A-Frame.
 *
 * @param {Element} el
 * @param {Object|null} props - props map.
 * @param {Object} propName
 */
function callSetAttribute(el, propValue, propName) {
  if (!propValue || !(propValue.constructor === Function)) {
    if (propName === 'className') propName = 'class';

    el.setAttribute(propName, propValue);
  }
}

/**
 * Handle diffing of previous and current event maps.
 *
 * @param {Element} el
 * @param {Object} prevEvents - Previous event map.
 * @param {Object} events - Current event map.
 */
function updateEventListeners(el, prevEvents, events) {
  if (!prevEvents || !events || prevEvents === events) {
    return;
  }

  Object.keys(events).forEach(function (eventName) {
    // Didn't change.
    if (prevEvents[eventName] === events[eventName]) return;

    // If changed, remove old previous event listeners.
    if (prevEvents[eventName]) removeEventListeners(el, eventName, prevEvents[eventName]);

    // Add new event listeners.
    addEventListeners(el, eventName, events[eventName]);
  });

  // See if event handlers were removed.
  Object.keys(prevEvents).forEach(function (eventName) {
    if (!events[eventName]) removeEventListeners(el, eventName, prevEvents[eventName]);
  });
}

/**
 * Register event handlers for an event name to ref.
 *
 * @param {Element} el - DOM element.
 * @param {string} eventName
 * @param {array|function} eventHandlers - Handler function or array of handler functions.
 */
function addEventListeners(el, eventName, handlers) {
  if (!handlers) return;

  // Convert to array.
  if (handlers.constructor === Function) handlers = [handlers];

  // Register.
  handlers.forEach(function (handler) {
    el.addEventListener(eventName, handler);
  });
}

/**
 * Unregister event handlers for an event name to ref.
 *
 * @param {Element} el - DOM element.
 * @param {string} eventName
 * @param {array|function} eventHandlers - Handler function or array of handler functions.
 */
function removeEventListeners(el, eventName, handlers) {
  if (!handlers) return;

  // Convert to array.
  if (handlers.constructor === Function) handlers = [handlers];

  // Unregister.
  handlers.forEach(function (handler) {
    el.removeEventListener(eventName, handler);
  });
}