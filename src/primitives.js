import {Entity} from './core'

/**
 * Render primitve tag as <primitive-name>, eg: <a-scene>.
 * primitive tag extends from <a-entity> in A-Frame so we reuse <Entity/>.
 */

export class Animation extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-animation'
  }
}

export class Box extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-box'
  }
}

export class Camera extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-camera'
  }
}

export class ColladaModel extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-collada-model'
  }
}

export class Cone extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-cone'
  }
}

export class Cursor extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-cursor'
  }
}

export class Curvedimage extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-curvedimage'
  }
}

export class Cylinder extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-cylinder'
  }
}

export class Dodecahedron extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-dodecahedron'
  }
}

export class gltfModel extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-gltf-model'
  }
}

export class Icosahedron extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-icosahedron'
  }
}

export class Image extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-image'
  }
}

export class Light extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-light'
  }
}

export class Link extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-link'
  }
}

export class ObjModel extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-obj-model'
  }
}

export class Octahedron extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-octahedron'
  }
}

export class Plane extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-plane'
  }
}

export class Ring extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-ring'
  }
}

export class Sky extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-sky'
  }
}

export class Sound extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-sound'
  }
}

export class Sphere extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-sphere'
  }
}

export class Tetrahedron extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-tetrahedron'
  }
}

export class Text extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-text'
  }
}

export class TorusKnot extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-torus-knot'
  }
}

export class Torus extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-torus'
  }
}

export class Triangle extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-triangle'
  }
}

export class Video extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-video'
  }
}

export class Videosphere extends Entity {
  constructor (props) {
    super(props)
    this.primitiveName = 'a-videosphere'
  }
}
