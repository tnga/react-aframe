'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Videosphere = exports.Video = exports.Triangle = exports.Torus = exports.TorusKnot = exports.Text = exports.Tetrahedron = exports.Sphere = exports.Sound = exports.Sky = exports.Ring = exports.Plane = exports.Octahedron = exports.ObjModel = exports.Link = exports.Light = exports.Image = exports.Icosahedron = exports.gltfModel = exports.Dodecahedron = exports.Cylinder = exports.Curvedimage = exports.Cursor = exports.Cone = exports.ColladaModel = exports.Camera = exports.Box = exports.Animation = undefined;

var _core = require('./core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Render primitve tag as <primitive-name>, eg: <a-scene>.
 * primitive tag extends from <a-entity> in A-Frame so we reuse <Entity/>.
 */

var Animation = exports.Animation = function (_Entity) {
  _inherits(Animation, _Entity);

  function Animation(props) {
    _classCallCheck(this, Animation);

    var _this = _possibleConstructorReturn(this, (Animation.__proto__ || Object.getPrototypeOf(Animation)).call(this, props));

    _this.primitiveName = 'a-animation';
    return _this;
  }

  return Animation;
}(_core.Entity);

var Box = exports.Box = function (_Entity2) {
  _inherits(Box, _Entity2);

  function Box(props) {
    _classCallCheck(this, Box);

    var _this2 = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, props));

    _this2.primitiveName = 'a-box';
    return _this2;
  }

  return Box;
}(_core.Entity);

var Camera = exports.Camera = function (_Entity3) {
  _inherits(Camera, _Entity3);

  function Camera(props) {
    _classCallCheck(this, Camera);

    var _this3 = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this, props));

    _this3.primitiveName = 'a-camera';
    return _this3;
  }

  return Camera;
}(_core.Entity);

var ColladaModel = exports.ColladaModel = function (_Entity4) {
  _inherits(ColladaModel, _Entity4);

  function ColladaModel(props) {
    _classCallCheck(this, ColladaModel);

    var _this4 = _possibleConstructorReturn(this, (ColladaModel.__proto__ || Object.getPrototypeOf(ColladaModel)).call(this, props));

    _this4.primitiveName = 'a-collada-model';
    return _this4;
  }

  return ColladaModel;
}(_core.Entity);

var Cone = exports.Cone = function (_Entity5) {
  _inherits(Cone, _Entity5);

  function Cone(props) {
    _classCallCheck(this, Cone);

    var _this5 = _possibleConstructorReturn(this, (Cone.__proto__ || Object.getPrototypeOf(Cone)).call(this, props));

    _this5.primitiveName = 'a-cone';
    return _this5;
  }

  return Cone;
}(_core.Entity);

var Cursor = exports.Cursor = function (_Entity6) {
  _inherits(Cursor, _Entity6);

  function Cursor(props) {
    _classCallCheck(this, Cursor);

    var _this6 = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, props));

    _this6.primitiveName = 'a-cursor';
    return _this6;
  }

  return Cursor;
}(_core.Entity);

var Curvedimage = exports.Curvedimage = function (_Entity7) {
  _inherits(Curvedimage, _Entity7);

  function Curvedimage(props) {
    _classCallCheck(this, Curvedimage);

    var _this7 = _possibleConstructorReturn(this, (Curvedimage.__proto__ || Object.getPrototypeOf(Curvedimage)).call(this, props));

    _this7.primitiveName = 'a-curvedimage';
    return _this7;
  }

  return Curvedimage;
}(_core.Entity);

var Cylinder = exports.Cylinder = function (_Entity8) {
  _inherits(Cylinder, _Entity8);

  function Cylinder(props) {
    _classCallCheck(this, Cylinder);

    var _this8 = _possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).call(this, props));

    _this8.primitiveName = 'a-cylinder';
    return _this8;
  }

  return Cylinder;
}(_core.Entity);

var Dodecahedron = exports.Dodecahedron = function (_Entity9) {
  _inherits(Dodecahedron, _Entity9);

  function Dodecahedron(props) {
    _classCallCheck(this, Dodecahedron);

    var _this9 = _possibleConstructorReturn(this, (Dodecahedron.__proto__ || Object.getPrototypeOf(Dodecahedron)).call(this, props));

    _this9.primitiveName = 'a-dodecahedron';
    return _this9;
  }

  return Dodecahedron;
}(_core.Entity);

var gltfModel = exports.gltfModel = function (_Entity10) {
  _inherits(gltfModel, _Entity10);

  function gltfModel(props) {
    _classCallCheck(this, gltfModel);

    var _this10 = _possibleConstructorReturn(this, (gltfModel.__proto__ || Object.getPrototypeOf(gltfModel)).call(this, props));

    _this10.primitiveName = 'a-gltf-model';
    return _this10;
  }

  return gltfModel;
}(_core.Entity);

var Icosahedron = exports.Icosahedron = function (_Entity11) {
  _inherits(Icosahedron, _Entity11);

  function Icosahedron(props) {
    _classCallCheck(this, Icosahedron);

    var _this11 = _possibleConstructorReturn(this, (Icosahedron.__proto__ || Object.getPrototypeOf(Icosahedron)).call(this, props));

    _this11.primitiveName = 'a-icosahedron';
    return _this11;
  }

  return Icosahedron;
}(_core.Entity);

var Image = exports.Image = function (_Entity12) {
  _inherits(Image, _Entity12);

  function Image(props) {
    _classCallCheck(this, Image);

    var _this12 = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

    _this12.primitiveName = 'a-image';
    return _this12;
  }

  return Image;
}(_core.Entity);

var Light = exports.Light = function (_Entity13) {
  _inherits(Light, _Entity13);

  function Light(props) {
    _classCallCheck(this, Light);

    var _this13 = _possibleConstructorReturn(this, (Light.__proto__ || Object.getPrototypeOf(Light)).call(this, props));

    _this13.primitiveName = 'a-light';
    return _this13;
  }

  return Light;
}(_core.Entity);

var Link = exports.Link = function (_Entity14) {
  _inherits(Link, _Entity14);

  function Link(props) {
    _classCallCheck(this, Link);

    var _this14 = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

    _this14.primitiveName = 'a-link';
    return _this14;
  }

  return Link;
}(_core.Entity);

var ObjModel = exports.ObjModel = function (_Entity15) {
  _inherits(ObjModel, _Entity15);

  function ObjModel(props) {
    _classCallCheck(this, ObjModel);

    var _this15 = _possibleConstructorReturn(this, (ObjModel.__proto__ || Object.getPrototypeOf(ObjModel)).call(this, props));

    _this15.primitiveName = 'a-obj-model';
    return _this15;
  }

  return ObjModel;
}(_core.Entity);

var Octahedron = exports.Octahedron = function (_Entity16) {
  _inherits(Octahedron, _Entity16);

  function Octahedron(props) {
    _classCallCheck(this, Octahedron);

    var _this16 = _possibleConstructorReturn(this, (Octahedron.__proto__ || Object.getPrototypeOf(Octahedron)).call(this, props));

    _this16.primitiveName = 'a-octahedron';
    return _this16;
  }

  return Octahedron;
}(_core.Entity);

var Plane = exports.Plane = function (_Entity17) {
  _inherits(Plane, _Entity17);

  function Plane(props) {
    _classCallCheck(this, Plane);

    var _this17 = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this, props));

    _this17.primitiveName = 'a-plane';
    return _this17;
  }

  return Plane;
}(_core.Entity);

var Ring = exports.Ring = function (_Entity18) {
  _inherits(Ring, _Entity18);

  function Ring(props) {
    _classCallCheck(this, Ring);

    var _this18 = _possibleConstructorReturn(this, (Ring.__proto__ || Object.getPrototypeOf(Ring)).call(this, props));

    _this18.primitiveName = 'a-ring';
    return _this18;
  }

  return Ring;
}(_core.Entity);

var Sky = exports.Sky = function (_Entity19) {
  _inherits(Sky, _Entity19);

  function Sky(props) {
    _classCallCheck(this, Sky);

    var _this19 = _possibleConstructorReturn(this, (Sky.__proto__ || Object.getPrototypeOf(Sky)).call(this, props));

    _this19.primitiveName = 'a-sky';
    return _this19;
  }

  return Sky;
}(_core.Entity);

var Sound = exports.Sound = function (_Entity20) {
  _inherits(Sound, _Entity20);

  function Sound(props) {
    _classCallCheck(this, Sound);

    var _this20 = _possibleConstructorReturn(this, (Sound.__proto__ || Object.getPrototypeOf(Sound)).call(this, props));

    _this20.primitiveName = 'a-sound';
    return _this20;
  }

  return Sound;
}(_core.Entity);

var Sphere = exports.Sphere = function (_Entity21) {
  _inherits(Sphere, _Entity21);

  function Sphere(props) {
    _classCallCheck(this, Sphere);

    var _this21 = _possibleConstructorReturn(this, (Sphere.__proto__ || Object.getPrototypeOf(Sphere)).call(this, props));

    _this21.primitiveName = 'a-sphere';
    return _this21;
  }

  return Sphere;
}(_core.Entity);

var Tetrahedron = exports.Tetrahedron = function (_Entity22) {
  _inherits(Tetrahedron, _Entity22);

  function Tetrahedron(props) {
    _classCallCheck(this, Tetrahedron);

    var _this22 = _possibleConstructorReturn(this, (Tetrahedron.__proto__ || Object.getPrototypeOf(Tetrahedron)).call(this, props));

    _this22.primitiveName = 'a-tetrahedron';
    return _this22;
  }

  return Tetrahedron;
}(_core.Entity);

var Text = exports.Text = function (_Entity23) {
  _inherits(Text, _Entity23);

  function Text(props) {
    _classCallCheck(this, Text);

    var _this23 = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

    _this23.primitiveName = 'a-text';
    return _this23;
  }

  return Text;
}(_core.Entity);

var TorusKnot = exports.TorusKnot = function (_Entity24) {
  _inherits(TorusKnot, _Entity24);

  function TorusKnot(props) {
    _classCallCheck(this, TorusKnot);

    var _this24 = _possibleConstructorReturn(this, (TorusKnot.__proto__ || Object.getPrototypeOf(TorusKnot)).call(this, props));

    _this24.primitiveName = 'a-torus-knot';
    return _this24;
  }

  return TorusKnot;
}(_core.Entity);

var Torus = exports.Torus = function (_Entity25) {
  _inherits(Torus, _Entity25);

  function Torus(props) {
    _classCallCheck(this, Torus);

    var _this25 = _possibleConstructorReturn(this, (Torus.__proto__ || Object.getPrototypeOf(Torus)).call(this, props));

    _this25.primitiveName = 'a-torus';
    return _this25;
  }

  return Torus;
}(_core.Entity);

var Triangle = exports.Triangle = function (_Entity26) {
  _inherits(Triangle, _Entity26);

  function Triangle(props) {
    _classCallCheck(this, Triangle);

    var _this26 = _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).call(this, props));

    _this26.primitiveName = 'a-triangle';
    return _this26;
  }

  return Triangle;
}(_core.Entity);

var Video = exports.Video = function (_Entity27) {
  _inherits(Video, _Entity27);

  function Video(props) {
    _classCallCheck(this, Video);

    var _this27 = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

    _this27.primitiveName = 'a-video';
    return _this27;
  }

  return Video;
}(_core.Entity);

var Videosphere = exports.Videosphere = function (_Entity28) {
  _inherits(Videosphere, _Entity28);

  function Videosphere(props) {
    _classCallCheck(this, Videosphere);

    var _this28 = _possibleConstructorReturn(this, (Videosphere.__proto__ || Object.getPrototypeOf(Videosphere)).call(this, props));

    _this28.primitiveName = 'a-videosphere';
    return _this28;
  }

  return Videosphere;
}(_core.Entity);