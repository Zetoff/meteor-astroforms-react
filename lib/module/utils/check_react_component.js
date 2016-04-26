import React from 'react';

function checkReactComponent(component) {
  if (!React.Component.isPrototypeOf(component)) {
    throw new TypeError("Component must be a React.Component");
  }
}

export default checkReactComponent;
