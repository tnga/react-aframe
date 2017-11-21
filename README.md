<h1 align="center">react-aframe-ar</h1>

<br/>

<h4 align="center">
  Build virtual and augmented reality experiences with <b><a href="https://facebook.github.io/react/">React</a></b> and <b><a href="https://aframe.io">A-Frame</a></b>.
</h4>

<center> <img src="https://tnga.github.io/sharedbazar/img/react-aframe.png" /> </center>

## Get started

- Install with [npm](https://www.npmjs.com/package/react-aframe-ar) or
[yarn](https://github.com/yarnpkg/yarn).

```
npm install --save aframe react-aframe-ar react react-dom
yarn add aframe react-aframe-ar react react-dom
```

- Basic example

```js
import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';

class AppScene extends React.Component {
  render () {
    return (
      <Scene>
        <Box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow />
        <Sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow />
        <Cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
        <Plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow />
        <Sky color="#ECECEC" />
        <Text value="Hello world, react-aframe-ar!" align="center" position="0 2.3 -1.5" color="#7BC8A4" />
      </Scene>
    );
  }
}

ReactDOM.render(<AppScene/>, document.querySelector('#sceneContainer'));
```

- Checkout [react-aframe-starter](https://github.com/tnga/react-aframe-starter) for easily boilerplate!

## More informations

`react-aframe-ar` is a very thin layer on top of React to bridge with A-Frame. 
It passes React props to directly A-Frame using refs and `.setAttribute()`, bypassing the DOM. 
This works since A-Frame's `.setAttribute()`s are able to take non-string data such as objects,
arrays, or elements and synchronously modify underlying 3D scene graph.

```js
// react-aframe-ar's <Entity/> React Component
<Entity geometry={{primitive: 'box', width: 5}} position="0 0 -5"/>

// renders
<a-entity>

// and then applies the data directly to the underlying 3D scene graph, bypassing the DOM.
<a-entity>.setAttribute('geometry', {primitive: 'box', width: 5});
<a-entity>.setAttribute('position', '0 0 -5');
```

`react-aframe-ar` provides the best of both worlds between A-Frame and React, the
3D and VR-oriented entity-component architecture of A-Frame, and the view and
state management ergonomics of React, without penalties of attempting to use
React for a VR application.

[A-Frame](https://aframe.io) is a web framework for building virtual reality
experiences. Since A-Frame is built on top of the DOM, web libraries such as
React, Vue.js, Angular, Ember.js, d3.js are able to sit cleanly on top of
A-Frame.

A-Frame is an [entity-component-system (ECS) framework exposed through
HTML](https://aframe.io/docs/). ECS is a pattern used in game development that
favors composability over inheritance, which is more naturally suited to 3D
scenes where objects are built of complex appearance, behavior, and
functionality. In A-Frame, HTML attributes map to *components* which are
composable modules that are plugged into `<a-entity>`s to attach appearance,
behavior, and functionality.
