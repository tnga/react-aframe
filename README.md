<h1 align="center">react-aframe</h1>

<br/>

<h5 align="center">
  Build virtual and augmented reality experiences with <b><a href="https://facebook.github.io/react/">React</a></b> and <b><a href="https://aframe.io">A-Frame</a></b>.
</h5>

## Installation

Install with [npm](https://www.npmjs.com/package/react-aframe) or
[yarn](https://github.com/yarnpkg/yarn).

```
npm install --save aframe react-aframe react react-dom
yarn add aframe react-aframe react react-dom
```

## Example

...

## Introduction

`react-aframe` provides the best of both worlds between A-Frame and React, the
3D and VR-oriented entity-component architecture of A-Frame, and the view and
state management ergonomics of React, without penalties of attempting to use
React for a VR application.

![A-Frame](https://cloud.githubusercontent.com/assets/674727/24384472/e833ccee-1318-11e7-81a5-61e782f5b472.png)

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

Released on the same day as A-Frame, `react-aframe` is a very thin layer on top
of A-Frame to bridge with React. `react-aframe` passes React props to directly
A-Frame using refs and `.setAttribute()`, bypassing the DOM. This works since
A-Frame's `.setAttribute()`s are able to take non-string data such as objects,
arrays, or elements and synchronously modify underlying 3D scene graph.

```js
// react-aframe's <Entity/> React Component
<Entity geometry={{primitive: 'box', width: 5}} position="0 0 -5"/>

// renders
<a-entity>

// and then applies the data directly to the underlying 3D scene graph, bypassing the DOM.
<a-entity>.setAttribute('geometry', {primitive: 'box', width: 5});
<a-entity>.setAttribute('position', '0 0 -5');
```
